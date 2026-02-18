"use strict";
const siyuan = require("siyuan");


const CARD_ITEMS = [
    // 卡片风格组（CreativeCard）
    { key: 'newCreativeCard', label: '创意卡片', icon: '✨' },
    { key: 'studyNoteCreativeCard', label: '学习笔记', icon: '📚' },
    { key: 'importantReminderCreativeCard', label: '重要提醒', icon: '❗' },
    { key: 'codeExampleCreativeCard', label: '代码示例', icon: '💻' },
    { key: 'readingQuoteCreativeCard', label: '读书摘录', icon: '📖' },
    { key: 'todoCreativeCard', label: '待办事项', icon: '✅' },
    { key: 'knowledgePointCreativeCard', label: '知识点', icon: '💡' },
    { key: 'inspirationCreativeCard', label: '灵感记录', icon: '💭' },
    { key: 'warmNoteCreativeCard', label: '温馨便签', icon: '📝' },
    { key: 'projectPlanCreativeCard', label: '项目规划', icon: '📋' },
    { key: 'moodDiaryCreativeCard', label: '心情日记', icon: '🌸' },
    { key: 'dataStatsCreativeCard', label: '数据统计', icon: '📊' },
    { key: 'meetingMinutesCreativeCard', label: '会议纪要', icon: '💼' },

    // 引述块组（QuoteCard）
    { key: 'grayQuoteCard', label: '灰调引述', icon: '' },
    { key: 'blueQuoteCard', label: '蓝调引述', icon: '' },
    { key: 'greenQuoteCard', label: '绿调引述', icon: '' },
    { key: 'orangeQuoteCard', label: '橙调引述', icon: '' },
    { key: 'purpleQuoteCard', label: '紫调引述', icon: '' },
    { key: 'redQuoteCard', label: '红调引述', icon: '' },
    { key: 'yellowQuoteCard', label: '黄调引述', icon: '' },

    // 轻言轻语组（WhisperCard）
    { key: 'timelineRedWhisperCard', label: '时间轴·红', icon: '⏳' },
    { key: 'timelineOrangeWhisperCard', label: '时间轴·橙', icon: '⏳' },
    { key: 'timelineYellowWhisperCard', label: '时间轴·黄', icon: '⏳' },
    { key: 'timelineGreenWhisperCard', label: '时间轴·绿', icon: '⏳' },
    { key: 'timelineCyanWhisperCard', label: '时间轴·青', icon: '⏳' },
    { key: 'timelineBlueWhisperCard', label: '时间轴·蓝', icon: '⏳' },
    { key: 'timelinePurpleWhisperCard', label: '时间轴·紫', icon: '⏳' },
    { key: 'timelinePinkWhisperCard', label: '时间轴·粉', icon: '⏳' },
    { key: 'timelineBlackWhisperCard', label: '时间轴·黑', icon: '⏳' },
    { key: 'timelineGrayWhisperCard', label: '时间轴·灰', icon: '⏳' },
    { key: 'timelineRedWhisperCard', label: '时间轴·红卡', icon: '📅' }, 

    // 通知卡片组（NoticeCard）
    { key: 'systemNoticeCard', label: '系统通知', icon: 'ℹ️' },
    { key: 'successNoticeCard', label: '成功通知', icon: '✅' },
    { key: 'warningNoticeCard', label: '警告通知', icon: '⚠️' },
    { key: 'errorNoticeCard', label: '错误通知', icon: '❌' },
    { key: 'infoNoticeCard', label: '信息通知', icon: 'ℹ️' },
    { key: 'questionNoticeCard', label: '疑问通知', icon: '❓' },
    { key: 'importantNoticeCard', label: '重要通知', icon: '⭐' },
    { key: 'reminderNoticeCard', label: '提醒通知', icon: '⏰' },
    { key: 'mailNoticeCard', label: '邮件通知', icon: '✉️' },

     // 彩色顶部组（GradientTopCard）
    { key: 'summaryGradientTopCard', label: '重点总结', icon: '🎯' },
    { key: 'newFeatureGradientTopCard', label: '新特性', icon: '🚀' },
    { key: 'growthGradientTopCard', label: '成长笔记', icon: '🌱' },
    { key: 'importantGradientTopCard', label: '重要提醒', icon: '❗' },
    { key: 'techGradientTopCard', label: '技术要点', icon: '⚙️' },
    { key: 'moodGradientTopCard', label: '今日心情', icon: '💭' },
    { key: 'adviceGradientTopCard', label: '专业建议', icon: '🏆' },
    { key: 'ideaGradientTopCard', label: '创意灵感', icon: '💡' },
    { key: 'universalGradientTopCard', label: '万能提示', icon: '✨' },


    // 语录卡片组（ExcerptCard）- 所有键名均以 ExcerptCard 结尾
    { key: 'quoteExcerptCard', label: '摘录卡片', icon: '❝' },
    { key: 'famousExcerptCard', label: '名言卡片', icon: '💬' },
    { key: 'warningExcerptCard', label: '警示卡片', icon: '⚠️' },
    { key: 'essayExcerptCard', label: '随笔卡片', icon: '📝' },
    { key: 'poeticExcerptCard', label: '诗意卡片', icon: '🌸' },
    { key: 'inspirationExcerptCard', label: '灵感卡片', icon: '💡' },
    { key: 'reflectionExcerptCard', label: '反思卡片', icon: '🤔' },
    { key: 'epiphanyExcerptCard', label: '顿悟卡片', icon: '⚡' },
    { key: 'treasureExcerptCard', label: '珍藏卡片', icon: '🔖' },

    // 轻语组（ChatWhisperCard）
    { key: 'receiveChatWhisperCard', label: '接收消息', icon: '' },
    { key: 'sendChatWhisperCard', label: '发送消息', icon: '' },
    { key: 'diaryChatWhisperCard', label: '碎碎念', icon: '💬' },

    // 细时间轴组（ThinWhisperCard）
    { key: 'timelineRedThinWhisperCard', label: '时间轴·红细', icon: '⏳' },
    { key: 'timelineOrangeThinWhisperCard', label: '时间轴·橙细', icon: '⏳' },
    { key: 'timelineYellowThinWhisperCard', label: '时间轴·黄细', icon: '⏳' },
    { key: 'timelineGreenThinWhisperCard', label: '时间轴·绿细', icon: '⏳' },
    { key: 'timelineCyanThinWhisperCard', label: '时间轴·青细', icon: '⏳' },
    { key: 'timelineBlueThinWhisperCard', label: '时间轴·蓝细', icon: '⏳' },
    { key: 'timelinePurpleThinWhisperCard', label: '时间轴·紫细', icon: '⏳' },
    { key: 'timelinePinkThinWhisperCard', label: '时间轴·粉细', icon: '⏳' },
    { key: 'timelineBlackThinWhisperCard', label: '时间轴·黑细', icon: '⏳' },
    { key: 'timelineGrayThinWhisperCard', label: '时间轴·灰细', icon: '⏳' },
];


const TEXT = {
    cardview: '轻饰笔记',

    whisperGroup: '时间轴粗', 
    whisperThinGroup: '时间轴细', 
    creativeGroup: '卡片风格',
    noticeGroup: '通知卡片',
    gradientTopGroup: '彩色顶部',
    excerptGroup: '引述卡片',  
    chatWhisperGroup: '轻言轻语',       
    quoteGroup: '引述块样式',        
      

    editCardTitle: '编辑卡片',
    cardType: '类型',
    cardIcon: '图标',
    cardTitle: '标题',
    cancel: '取消',
    confirm: '确定',
};

module.exports = class CardStyleWorkshopPlugin extends siyuan.Plugin {
    styleDefaults = null;
    attrsCache = new Map();

    onload() {
        this.loadStyleDefaults();
        this.state = { menu: null, observer: null, restoreObserver: null };
        this.waitForMenu();
        this.addTitleClickListener();
        this.startAttributeRestoreObserver();
    }

    loadStyleDefaults() {
        const defaults = {};
        for (const item of CARD_ITEMS) {
            defaults[item.label] = { icon: item.icon, title: item.label };
        }
        this.styleDefaults = defaults;
    }

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

        try {
            await siyuan.fetchPost("/api/attr/setBlockAttrs", { id, attrs });
        } catch (err) {
            console.warn(`[CardStyleWorkshop] 属性保存失败: ${id}`, err);
        }
    }

    startAttributeRestoreObserver() {
        if (this._restoreObserver) this._restoreObserver.disconnect();
        if (this._interval) clearInterval(this._interval);

        const editor = document.querySelector(".protyle-wysiwyg");
        if (!editor) {
            setTimeout(() => this.startAttributeRestoreObserver(), 500);
            return;
        }

        this._restoreObserver = new MutationObserver(mutations => {
            for (const mut of mutations) {
                if (mut.type === "childList") {
                    mut.addedNodes.forEach(node => {
                        if (node.nodeType !== 1) return;
                        if (node.hasAttribute?.("data-node-id")) {
                            this.restoreBlockAttributes(node);
                        }
                        node.querySelectorAll?.("[data-node-id]").forEach(el => this.restoreBlockAttributes(el));
                    });
                }
                if (mut.type === "attributes" && mut.attributeName?.startsWith("custom-deco-")) {
                    const el = mut.target;
                    const id = el.dataset.nodeId;
                    if (id && this.attrsCache.has(id)) {
                        const cached = this.attrsCache.get(id);
                        const attr = mut.attributeName;
                        if (!el.getAttribute(attr) && cached[attr]) {
                            el.setAttribute(attr, cached[attr]);
                        }
                    }
                }
            }
        });

        this._restoreObserver.observe(editor, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ["custom-deco-style", "custom-deco-card-icon", "custom-deco-card-title"]
        });

        this._interval = setInterval(() => {
            document.querySelectorAll("[custom-deco-style]").forEach(el => {
                const id = el.dataset.nodeId;
                if (id && this.attrsCache.has(id)) {
                    this.restoreBlockAttributes(el);
                }
            });
        }, 5000);
    }

    restoreBlockAttributes(blockEl) {
        const id = blockEl.dataset.nodeId;
        if (!id || !this.attrsCache.has(id)) return;
        const attrs = this.attrsCache.get(id);
        for (const attr of ["custom-deco-style", "custom-deco-card-icon", "custom-deco-card-title"]) {
            if (attrs[attr] && !blockEl.getAttribute(attr)) {
                blockEl.setAttribute(attr, attrs[attr]);
            }
        }
    }

    addTitleClickListener() {
        if (this._boundHandleTitleClick) {
            document.removeEventListener('click', this._boundHandleTitleClick);
        }
        this._boundHandleTitleClick = this.handleTitleClick.bind(this);
        document.addEventListener('click', this._boundHandleTitleClick);
    }

    async handleTitleClick(e) {
        const cardBlock = e.target.closest('[custom-deco-style]');
        if (!cardBlock) return;

        const style = cardBlock.getAttribute('custom-deco-style');
        const cardKey = this.getCardKeyByLabel(style);

        // 引述卡片、轻语卡片（除随记外）禁止编辑
        if (cardKey && cardKey.endsWith('QuoteCard')) return;
        if (cardKey && cardKey.includes('WhisperCard') && cardKey !== 'diaryChatWhisperCard') return;
        // 允许无标题的碎碎念卡片编辑
        if (!cardBlock.hasAttribute('custom-deco-card-title') && !cardKey.includes('WhisperCard')) return;

        const rect = cardBlock.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        if (offsetY < 44 && offsetX < 220) {
            e.preventDefault();
            e.stopPropagation();
            await this.showEditDialog(cardBlock);
        }
    }

    getCardKeyByLabel(label) {
        for (const item of CARD_ITEMS) {
            if (item.label === label) return item.key;
        }
        return null;
    }

    async showEditDialog(blockEl) {
        const blockId = blockEl.dataset.nodeId;
        const currentStyle = blockEl.getAttribute('custom-deco-style') || Object.keys(this.styleDefaults)[0] || '';
        const currentTitle = blockEl.getAttribute('custom-deco-card-title') || this.styleDefaults[currentStyle]?.title || '';
        const currentIcon = blockEl.getAttribute('custom-deco-card-icon') || this.styleDefaults[currentStyle]?.icon || '';

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
            if (newStyle !== currentStyle) attrs["custom-deco-style"] = newStyle;
            if (newIcon !== currentIcon) attrs["custom-deco-card-icon"] = newIcon || this.styleDefaults[newStyle]?.icon || '';
            if (newTitle !== currentTitle) attrs["custom-deco-card-title"] = newTitle || this.styleDefaults[newStyle]?.title || '';

            await this.setAttrs(blockId, attrs);
            dialog.destroy();
        });

        dialogElement.querySelector('#cancel-btn').addEventListener('click', () => dialog.destroy());
    }

    waitForMenu() {
        this.state.menu = document.querySelector("#commonMenu");
        if (this.state.menu) {
            this.observeMenu();
        } else {
            setTimeout(() => this.waitForMenu(), 100);
        }
    }

    observeMenu() {
        if (this.state.observer) this.state.observer.disconnect();
        this.state.observer = new MutationObserver(muts => {
            muts.forEach(m => {
                if (m.type === "attributes" && m.attributeName === "class") {
                    const oldClass = m.oldValue || "", newClass = m.target.className;
                    if (oldClass.includes("fn__none") && !newClass.includes("fn__none")) {
                        this.insertMenuItem();
                    }
                }
            });
        });
        this.state.observer.observe(this.state.menu, {
            attributes: true,
            attributeFilter: ["class"],
            attributeOldValue: true
        });
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


getSecondaryGroups() {
    return [
        {
            id: "whisper", 
            labelKey: "whisperGroup",
            icon: "#iconLayout",
            filter: (label, key) => key.includes('WhisperCard') && !key.includes('Thin')
        },
        {
            id: "whisperThin", 
            labelKey: "whisperThinGroup",
            icon: "#iconLayout",
            filter: (label, key) => key.includes('ThinWhisperCard')
        },
        {
            id: "cardStyle",
            labelKey: "creativeGroup",
            icon: "#iconSparkles",
            filter: (label, key) => key.endsWith('CreativeCard')
        },
        {
            id: "noticeGroup",
            labelKey: "noticeGroup",
            icon: "#iconInfo",
            filter: (label, key) => key.endsWith('NoticeCard')
        },
        {
            id: "gradientTop",
            labelKey: "gradientTopGroup",
            icon: "#iconSparkles",
            filter: (label, key) => key.endsWith('GradientTopCard')
        },
        {
            id: "chatWhisper",
            labelKey: "chatWhisperGroup",
            icon: "#iconSparkles",
            filter: (label, key) => key.endsWith('ChatWhisperCard')
        },
        {
            id: "excerptGroup",
            labelKey: "excerptGroup",
            icon: "#iconQuote",
            filter: (label, key) => key.endsWith('ExcerptCard')
        },
        {
            id: "quoteBlock",
            labelKey: "quoteGroup",
            icon: "#iconQuote",
            filter: (label, key) => key.endsWith('QuoteCard')
        }
    ];
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
                itemsContainer.appendChild(this.createCardItem(blockId, item.label, item.key));
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

        const attrs = { "custom-deco-style": label };

        // 非引述、非轻语卡片自动设置默认图标和标题
        if (!key.endsWith('QuoteCard') && !key.includes('WhisperCard')) {
            const defaults = this.styleDefaults[label];
            if (defaults) {
                attrs["custom-deco-card-icon"] = defaults.icon || '';
                attrs["custom-deco-card-title"] = defaults.title || '';
            }
        }

        // 随记卡片自动设置当前日期
        if (key === 'diaryChatWhisperCard' || key === 'diaryChatWhisperCard') {
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const day = String(today.getDate()).padStart(2, '0');
            attrs["custom-deco-card-date"] = `${year}-${month}-${day}`;
        }

        await this.setAttrs(blockId, attrs);
    };
    return item;
}

    createSeparator() {
        const sep = document.createElement("button");
        sep.className = "b3-menu__separator";
        sep.setAttribute("data-id", "deco-separator");
        return sep;
    }

    getAllCardItems() {
        return CARD_ITEMS.map(item => ({ key: item.key, label: item.label }));
    }

    getText(key, fallback) {
        return TEXT[key] || fallback;
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