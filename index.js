"use strict";
const siyuan = require("siyuan");

module.exports = class CardStyleWorkshopPlugin extends siyuan.Plugin {
    styleDefaults = null;  // 动态生成
    attrsCache = new Map();

    onload() {
        this.loadStyleDefaults(); // 从 i18n 读取所有卡片配置
        this.state = { menu: null, observer: null };
        this.waitMenu();
        this.addTitleClickListener();
        this.startAttributeRestoreObserver();
    }

    // ---------- 从 i18n 动态加载卡片默认配置 ----------
loadStyleDefaults() {
    if (!this.i18n) return;
    const defaults = {};
    for (const [key, label] of Object.entries(this.i18n)) {
        if (key.endsWith('Card') && !key.endsWith('CardIcon')) {
            // 引述卡片没有图标，直接设为空字符串
            const icon = this.i18n[key + 'Icon'] || '';
            defaults[label] = {
                icon: icon,
                title: label
            };
        }
    }
    this.styleDefaults = defaults;
}
    // ---------- 批量设置属性（缓存 + DOM + 服务器）----------
    async setAttrs(id, attrs) {
        if (!this.attrsCache.has(id)) {
            this.attrsCache.set(id, {});
        }
        Object.assign(this.attrsCache.get(id), attrs);

        document.querySelectorAll(`[data-node-id="${id}"]`).forEach(el => {
            Object.entries(attrs).forEach(([key, val]) => {
                el.setAttribute(key, val);
            });
        });

        await siyuan.fetchPost("/api/attr/setBlockAttrs", { id, attrs });
    }

    // ---------- 属性恢复监听（完整，与之前相同）----------
    startAttributeRestoreObserver() {
        const editor = document.querySelector(".protyle-wysiwyg");
        if (!editor) {
            setTimeout(() => this.startAttributeRestoreObserver(), 500);
            return;
        }

        const restoreObserver = new MutationObserver(mutations => {
            mutations.forEach(mut => {
                if (mut.type === "childList") {
                    mut.addedNodes.forEach(node => {
                        if (node.nodeType === 1) {
                            if (node.hasAttribute?.("data-node-id")) {
                                this.restoreBlockAttributes(node);
                            }
                            node.querySelectorAll?.("[data-node-id]").forEach(el => this.restoreBlockAttributes(el));
                        }
                    });
                }
                if (mut.type === "attributes" && mut.target?.hasAttribute?.("custom-style")) {
                    const attr = mut.attributeName;
                    if (attr === "data-card-icon" || attr === "data-card-title" || attr === "custom-style") {
                        const id = mut.target.dataset.nodeId;
                        if (id && this.attrsCache.has(id)) {
                            const cached = this.attrsCache.get(id);
                            if (!mut.target.getAttribute(attr) && cached[attr]) {
                                mut.target.setAttribute(attr, cached[attr]);
                            }
                        }
                    }
                }
            });
        });

        restoreObserver.observe(editor, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ["data-card-icon", "data-card-title", "custom-style"]
        });

        this._restoreObserver = restoreObserver;

        this._interval = setInterval(() => {
            document.querySelectorAll("[custom-style]").forEach(el => {
                const id = el.dataset.nodeId;
                if (id && this.attrsCache.has(id)) {
                    this.restoreBlockAttributes(el);
                }
            });
        }, 3000);
    }

    restoreBlockAttributes(blockEl) {
        const id = blockEl.dataset.nodeId;
        if (!id || !this.attrsCache.has(id)) return;

        const attrs = this.attrsCache.get(id);
        if (attrs["custom-style"] && !blockEl.getAttribute("custom-style")) {
            blockEl.setAttribute("custom-style", attrs["custom-style"]);
        }
        if (attrs["data-card-icon"] && !blockEl.getAttribute("data-card-icon")) {
            blockEl.setAttribute("data-card-icon", attrs["data-card-icon"]);
        }
        if (attrs["data-card-title"] && !blockEl.getAttribute("data-card-title")) {
            blockEl.setAttribute("data-card-title", attrs["data-card-title"]);
        }
    }

    // ---------- 标题点击弹窗 ----------
    addTitleClickListener() {
        this._boundHandleTitleClick = this.handleTitleClick.bind(this);
        document.addEventListener('click', this._boundHandleTitleClick);
    }

async handleTitleClick(e) {
    const cardBlock = e.target.closest('[custom-style]');
    if (!cardBlock) return;

    // 获取卡片对应的 i18n 键名
    const style = cardBlock.getAttribute('custom-style');
    const cardKey = this.getCardKeyByLabel(style);
    
    // 引述卡片禁止编辑
    if (cardKey && cardKey.endsWith('QuoteCard')) {
        return;
    }
    if (cardKey && cardKey.endsWith('WhisperCard') && cardKey !== 'diaryWhisperCard') {
        return;
    }
    if (!cardBlock.hasAttribute('data-card-title')) return;

    const rect = cardBlock.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    if (offsetY < 40 && offsetX < 200) {
        e.preventDefault();
        e.stopPropagation();
        await this.showEditDialog(cardBlock);
    }
}

// 辅助方法：通过卡片显示名称查找对应的 i18n 键
getCardKeyByLabel(label) {
    if (!this.i18n) return null;
    for (const [key, value] of Object.entries(this.i18n)) {
        if (value === label && key.endsWith('Card')) {
            return key;
        }
    }
    return null;
}

    async showEditDialog(blockEl) {
        const blockId = blockEl.dataset.nodeId;
        const currentStyle = blockEl.getAttribute('custom-style') || Object.keys(this.styleDefaults)[0] || '';
        const currentTitle = blockEl.getAttribute('data-card-title') || this.styleDefaults[currentStyle]?.title || '';
        const currentIcon = blockEl.getAttribute('data-card-icon') || this.styleDefaults[currentStyle]?.icon || '';

        const allCards = this.getAllCardItems();
        const optionsHtml = allCards.map(item => 
            `<option value="${item.label}" ${item.label === currentStyle ? 'selected' : ''}>${item.label}</option>`
        ).join('');

        const contentHtml = `
            <div class="b3-dialog__content" style="padding: 20px;">
                <div class="b3-dialog__item" style="margin-bottom: 16px;">
                    <label style="display:block; margin-bottom:6px; font-weight:500;">${this.getText('cardType', '类型')}</label>
                    <select id="card-type-select" class="b3-select" style="width:100%;">${optionsHtml}</select>
                </div>
                <div class="b3-dialog__item" style="margin-bottom: 16px;">
                    <label style="display:block; margin-bottom:6px; font-weight:500;">${this.getText('cardIcon', '图标')}</label>
                    <input id="card-icon-input" class="b3-text-field" type="text" value="${currentIcon}" placeholder="例如 ✨" style="width:100%;">
                </div>
                <div class="b3-dialog__item" style="margin-bottom: 16px;">
                    <label style="display:block; margin-bottom:6px; font-weight:500;">${this.getText('cardTitle', '标题')}</label>
                    <input id="card-title-input" class="b3-text-field" type="text" value="${currentTitle}" placeholder="卡片标题" style="width:100%;">
                </div>
            </div>
            <div class="b3-dialog__action">
                <button class="b3-button b3-button--cancel" id="cancel-btn">${this.getText('cancel', '取消')}</button>
                <button class="b3-button b3-button--outline" id="confirm-btn">${this.getText('confirm', '确定')}</button>
            </div>
        `;

        const dialog = new siyuan.Dialog({
            title: this.getText('editCardTitle', '编辑卡片'),
            content: contentHtml,
            width: "480px"
        });

        const dialogElement = dialog.element;
        const typeSelect = dialogElement.querySelector('#card-type-select');
        const iconInput = dialogElement.querySelector('#card-icon-input');
        const titleInput = dialogElement.querySelector('#card-title-input');

        typeSelect.addEventListener('change', () => {
            const selectedLabel = typeSelect.value;
            const defaults = this.styleDefaults[selectedLabel] || { icon: '', title: '' };
            iconInput.value = defaults.icon;
            titleInput.value = defaults.title;
        });

        dialogElement.querySelector('#confirm-btn').addEventListener('click', async () => {
            const newStyle = typeSelect.value;
            const newIcon = iconInput.value.trim();
            const newTitle = titleInput.value.trim();

            const attrs = {};
            if (newStyle !== currentStyle) attrs["custom-style"] = newStyle;
            if (newIcon !== currentIcon) attrs["data-card-icon"] = newIcon || this.styleDefaults[newStyle]?.icon || '';
            if (newTitle !== currentTitle) attrs["data-card-title"] = newTitle || this.styleDefaults[newStyle]?.title || '';

            await this.setAttrs(blockId, attrs);
            dialog.destroy();
        });

        dialogElement.querySelector('#cancel-btn').addEventListener('click', () => dialog.destroy());
    }

    // ---------- 菜单相关（完全动态）----------
    waitMenu() {
        this.state.menu = document.querySelector("#commonMenu");
        this.state.menu ? this.observeMenu() : setTimeout(() => this.waitMenu(), 100);
    }

    observeMenu() {
        this.state.observer = new MutationObserver(muts => {
            muts.forEach(m => {
                if (m.type === "attributes" && m.attributeName === "class") {
                    const oldClass = m.oldValue || "", newClass = m.target.className;
                    if (oldClass.includes("fn__none") && !newClass.includes("fn__none"))
                        this.insertMenuItem();
                }
            });
        });
        this.state.observer.observe(this.state.menu, {
            attributes: true,
            attributeFilter: ["class"],
            attributeOldValue: true
        });
    }

    getText(key, fallback) {
        return this.i18n?.[key] || fallback;
    }

    getSecondaryGroups() {
        return [
        {
            id: "cardStyle",
            labelKey: "creativeGroup",
            icon: "#iconSparkles",
            filter: (label, key) => key.endsWith('Card') && !key.includes('Split')
             && !key.includes('Quote') && !key.includes('ColorBarCard') && !key.includes('WhisperCard')
        },
        {
            id: "splitColor",
            labelKey: "splitColorGroup",   // i18n 键
            icon: "#iconLayout",           // 可换成 #iconSplit / #iconBoth 等
            // 筛选条件：卡片键名包含 SplitCard（属于双色分割组）
            filter: (label, key) => key.includes('SplitCard')
        },
        {
            id: "quoteBlock",
            labelKey: "quoteGroup",
            icon: "#iconQuote",      
            filter: (label, key) => key.endsWith('QuoteCard')
        },
        {
            id: "colorBar",
            labelKey: "colorBarGroup",      // i18n 键 "彩色横条"
            icon: "#iconLayout",           // 思源内置彩虹图标（或 #iconColor）
            filter: (label, key) => key.includes('ColorBarCard')
        },
        {
            id: "whisper",
            labelKey: "whisperGroup",      // i18n 键 "轻言轻语"
            icon: "#iconLayout",             // 思源内置笔记图标（或 #iconChat）
            filter: (label, key) => key.includes('WhisperCard')
        }
    
    ];
    }

    getAllCardItems() {
        const items = [];
        for (const key of Object.keys(this.i18n || {})) {
            if (key.endsWith('Card') && !key.endsWith('CardIcon')) {
                items.push({ key, label: this.i18n[key] });
            }
        }
        return items;
    }

    insertMenuItem() {
        if (document.querySelector("#North-CardView-Top")) return;
        const block = document.querySelector(".protyle-wysiwyg--select");
        if (!block?.dataset?.nodeId) return;
        const container = document.querySelector("#commonMenu .b3-menu__items");
        if (!container) return;
        const refItem = Array.from(container.children).find(i => i.getAttribute("data-id") === "updateAndCreatedAt");
        if (!refItem) return;

        const topBtn = this.createTopMenuButton(block.dataset.nodeId);
        container.insertBefore(topBtn, refItem);
        container.insertBefore(this.createSeparator(), refItem);
    }

    createTopMenuButton(blockId) {
        const btn = document.createElement("button");
        btn.id = "North-CardView-Top";
        btn.className = "b3-menu__item";
        btn.innerHTML = `<svg class="b3-menu__icon"><use xlink:href="#iconList"></use></svg>
                         <span class="b3-menu__label">${this.getText('cardview', '卡片视图')}</span>
                         <svg class="b3-menu__icon b3-menu__icon--small"><use xlink:href="#iconRight"></use></svg>`;
        btn.appendChild(this.createSecondaryMenuContainer(blockId));
        return btn;
    }

    createSecondaryMenuContainer(blockId) {
        const subMenu = document.createElement("div");
        subMenu.className = "b3-menu__submenu";
        const itemsContainer = document.createElement("div");
        itemsContainer.className = "b3-menu__items";

        this.getSecondaryGroups().forEach(group => {
            itemsContainer.appendChild(this.createSecondaryGroupButton(blockId, group));
        });

        subMenu.appendChild(itemsContainer);
        return subMenu;
    }

    createSecondaryGroupButton(blockId, group) {
        const btn = document.createElement("button");
        btn.className = "b3-menu__item";
        btn.innerHTML = `<svg class="b3-menu__icon"><use xlink:href="${group.icon}"></use></svg>
                         <span class="b3-menu__label">${this.getText(group.labelKey)}</span>
                         <svg class="b3-menu__icon b3-menu__icon--small"><use xlink:href="#iconRight"></use></svg>`;
        btn.appendChild(this.createTertiaryMenu(blockId, group.filter));
        return btn;
    }

    createTertiaryMenu(blockId, filterFunc) {
        const subMenu = document.createElement("div");
        subMenu.className = "b3-menu__submenu";
        const itemsContainer = document.createElement("div");
        itemsContainer.className = "b3-menu__items";

        this.getAllCardItems().forEach(item => {
            if (filterFunc(item.label, item.key)) {
                itemsContainer.appendChild(this.createCardItem(blockId, item.label , item.key));
            }
        });

        subMenu.appendChild(itemsContainer);
        return subMenu;
    }

createCardItem(blockId, label, key) {
    const item = document.createElement("button");
    item.className = "b3-menu__item";
    item.innerHTML = `<svg class="b3-menu__icon"><use xlink:href="#iconSparkles"></use></svg>
                      <span class="b3-menu__label">${label}</span>`;
    item.onclick = async (e) => {
        e.stopPropagation();
        
        const attrs = { "custom-style": label };
        
        // 只有非引述/非纯样式卡片才自动设置默认图标和标题
        if (!key.endsWith('QuoteCard') && !key.includes('WhisperCard')) {
            const defaults = this.styleDefaults[label];
            if (defaults) {
                attrs["data-card-icon"] = defaults.icon || '';
                attrs["data-card-title"] = defaults.title || '';
            }
        }
        
        // ===== 新增：为「随记」卡片自动设置默认日期 =====
        if (label === "随记") {
            // 格式化当天日期：YYYY-MM-DD
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const day = String(today.getDate()).padStart(2, '0');
            attrs["data-card-date"] = `${year}-${month}-${day}`;
        }
        // ============================================
        
        await this.setAttrs(blockId, attrs);
    };
    return item;
}

    createSeparator() {
        const sep = document.createElement("button");
        sep.className = "b3-menu__separator";
        sep.setAttribute("data-north-sep", "true");
        return sep;
    }

    onunload() {
        this.state.observer?.disconnect();
        this._restoreObserver?.disconnect();
        if (this._interval) clearInterval(this._interval);
        if (this._boundHandleTitleClick) {
            document.removeEventListener('click', this._boundHandleTitleClick);
        }
        this.attrsCache.clear();
    }

    uninstall() { this.onunload(); }
};