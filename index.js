"use strict";
const siyuan = require("siyuan");

// 完整的卡片项定义（用于右键菜单）
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

    // 语录卡片组（ExcerptCard）
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

    // 图片相关设置组（ImageCard）
    { key: 'nineGridImageCard', label: '九宫格排列', icon: '🖼️' },

    // Callout样式组（CalloutCard）
    { key: 'foldedExampleCalloutCard', label: 'Callout-折叠示例', icon: '📌' },
    { key: 'abstractCalloutCard',       label: 'Callout-抽象',     icon: '✨' },
    { key: 'infoCalloutCard',           label: 'Callout-信息',     icon: 'ℹ️' },
    { key: 'tipCalloutCard',            label: 'Callout-提示',     icon: '💡' },
    { key: 'successCalloutCard',        label: 'Callout-成功',     icon: '✅' },
    { key: 'warningCalloutCard',        label: 'Callout-警告',     icon: '⚠️' },
    { key: 'dangerCalloutCard',         label: 'Callout-危险',     icon: '🔥' },
    { key: 'noteCalloutCard',       label: 'Callout-笔记',   icon: '📝' },
    { key: 'quoteCalloutCard',      label: 'Callout-引用',   icon: '❝' },
    { key: 'importantCalloutCard',  label: 'Callout-重要',   icon: '⭐' },
    { key: 'questionCalloutCard',   label: 'Callout-问题',   icon: '❓' },
    { key: 'bugCalloutCard',        label: 'Callout-错误',   icon: '🐞' },
    { key: 'exampleCalloutCard',    label: 'Callout-示例',   icon: '📋' },
    { key: 'todoCalloutCard',       label: 'Callout-待办',   icon: '✅' },
    { key: 'ideaCalloutCard',       label: 'Callout-想法',   icon: '💡' },
];

const TEXT = {
    cardview: '轻饰笔记',
    whisperGroup: '时间轴粗',
    whisperThinGroup: '时间轴细',
    creativeGroup: '卡片风格',
    noticeGroup: '通知卡片',
    gradientTopGroup: '彩色顶部',
    excerptGroup: '引述卡片',
    calloutGroup: 'Callout样式',
    imageGroup: '图片相关设置',
    chatWhisperGroup: '轻言轻语',
    quoteGroup: '引述块样式',

    editCardTitle: '编辑卡片',
    cardType: '类型',
    cardIcon: '图标',
    cardTitle: '标题',
    cancel: '取消',
    confirm: '确定',

    // 专注时间轴文本
    topbarTitle: '时间信息',
    topbarPanelTitle: '时间信息',
    close: '关闭',
    loading: '加载中...',
    noData: '暂无时间记录',
    selectDate: '选择日期',
    today: '今天',
    chartTitle: '时段分布',
};

module.exports = class CardStyleWorkshopPlugin extends siyuan.Plugin {
    styleDefaults = null;
    attrsCache = new Map();
    topBarItem = null;
    colorCache = new Map(); // 缓存类型对应的颜色

    onload() {
        this.loadStyleDefaults();
        this.state = { menu: null, observer: null, restoreObserver: null };
        this.waitForMenu();
        this.addTitleClickListener();
        this.startAttributeRestoreObserver();

        this.addTopBarButton();
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
                filter: (label, key) => key.startsWith('timeline') && key.includes('WhisperCard') && !key.includes('Thin')
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
                id: "calloutGroup",
                labelKey: "calloutGroup",
                icon: "#iconInfo",
                filter: (label, key) => key.endsWith('CalloutCard')
            },
            {
                id: "imageGroup",
                labelKey: "imageGroup",
                icon: "#iconImage",
                filter: (label, key) => key.endsWith('ImageCard')
            },
            {
                id: "excerptGroup",
                labelKey: "excerptGroup",
                icon: "#iconQuote",
                filter: (label, key) => key.endsWith('ExcerptCard')
            },
            {
                id: "chatWhisper",
                labelKey: "chatWhisperGroup",
                icon: "#iconSparkles",
                filter: (label, key) => key.endsWith('ChatWhisperCard')
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

            // 非引述、非轻语、非图片卡片自动设置默认图标和标题
            if (!key.endsWith('QuoteCard') && !key.includes('WhisperCard') && !key.endsWith('ImageCard')) {
                const defaults = this.styleDefaults[label];
                if (defaults) {
                    attrs["custom-deco-card-icon"] = defaults.icon || '';
                    attrs["custom-deco-card-title"] = defaults.title || '';
                }
            }

            // 随记卡片自动设置当前日期
            if (key === 'diaryChatWhisperCard') {
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

    // ========== SQL 查询方法 ==========

    async executeSQL(sql) {
        try {
            const response = await fetch('/api/query/sql', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ stmt: sql })
            });
            if (!response.ok) throw new Error(`API调用失败: ${response.status}`);
            const result = await response.json();
            return result.code === 0 ? (result.data || []) : [];
        } catch (error) {
            console.error('执行SQL失败:', error);
            return [];
        }
    }

    async fetchTimeRecords(dateStr) {
        const dbDate = dateStr.replace(/-/g, '/');
        const sql = `
            SELECT
                b.id,
                b.content,
                b.created,
                a1.value as lifelog_created,
                a2.value as lifelog_type
            FROM blocks b
            LEFT JOIN attributes a1 ON b.id = a1.block_id AND a1.name = 'custom-lifelog-created'
            LEFT JOIN attributes a2 ON b.id = a2.block_id AND a2.name = 'custom-lifelog-type'
            WHERE
                b.type = 'p'
                AND a1.value IS NOT NULL
                AND a2.value IS NOT NULL
                AND b.hpath NOT LIKE '%template%'
                AND a1.value LIKE '${dbDate}%'
            ORDER BY a1.value DESC
            LIMIT 500
        `;
        return this.executeSQL(sql);
    }

    async fetchMonthStats(year, month) {
        const monthStr = `${year}/${String(month).padStart(2,'0')}`;
        const sql = `
            SELECT
                substr(a1.value, 1, 10) as day,
                count(*) as count
            FROM blocks b
            LEFT JOIN attributes a1 ON b.id = a1.block_id AND a1.name = 'custom-lifelog-created'
            WHERE
                b.type = 'p'
                AND a1.value IS NOT NULL
                AND b.hpath NOT LIKE '%template%'
                AND a1.value LIKE '${monthStr}%'
            GROUP BY day
            ORDER BY day
        `;
        return this.executeSQL(sql);
    }

    // ========== 工具函数 ==========

    /**
     * 清洗内容：去除开头的 "HH:MM " 时间戳，再去除 "类型：" 前缀
     */
    cleanContent(content) {
        if (!content) return '';
        // 去除开头的时间戳，如 "12:34 " 或 "12:34:56 "
        let cleaned = content.replace(/^\s*\d{1,2}:\d{2}(:\d{2})?\s*/, '');
        // 去除开头的 "类型：" 前缀（中文冒号或英文冒号）
        cleaned = cleaned.replace(/^[^:：]+[：:]\s*/, '');
        return cleaned;
    }

    /**
     * 根据类型获取对应的 CSS 变量 --en-lifelog-border-color 的值
     */
    getColorForType(type) {
        if (this.colorCache.has(type)) {
            return this.colorCache.get(type);
        }

        // 创建临时元素模拟 [data-type="NodeParagraph"][custom-lifelog-type="xxx"]
        const temp = document.createElement('div');
        temp.setAttribute('data-type', 'NodeParagraph');
        temp.setAttribute('custom-lifelog-type', type);
        temp.style.position = 'absolute';
        temp.style.visibility = 'hidden';
        temp.style.pointerEvents = 'none';
        document.body.appendChild(temp);

        // 获取计算样式中的变量值
        const styles = getComputedStyle(temp);
        const color = styles.getPropertyValue('--en-lifelog-border-color').trim();

        // 移除临时元素
        document.body.removeChild(temp);

        // 如果变量有效则缓存，否则缓存默认颜色
        const finalColor = color && color !== '' ? color : '#94a3b8';
        this.colorCache.set(type, finalColor);
        return finalColor;
    }

    drawChart(canvas, records) {
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        canvas.width = width;
        canvas.height = height;

        // 统计每小时记录数
        const hourCounts = new Array(24).fill(0);
        records.forEach(r => {
            const timeStr = r.lifelog_created || '';
            const match = timeStr.match(/\d{2}:\d{2}/);
            if (match) {
                const hour = parseInt(match[0].split(':')[0]);
                if (!isNaN(hour) && hour >= 0 && hour < 24) {
                    hourCounts[hour]++;
                }
            }
        });

        const maxCount = Math.max(...hourCounts, 1);
        const barWidth = (width - 60) / 24; // 左右留边距
        const chartHeight = height - 40; // 底部留标签空间

        ctx.clearRect(0, 0, width, height);

        // 绘制背景网格
        ctx.strokeStyle = 'rgba(128,128,128,0.2)';
        ctx.lineWidth = 1;
        for (let i = 0; i <= 5; i++) {
            const y = 20 + (chartHeight / 5) * i;
            ctx.beginPath();
            ctx.moveTo(30, y);
            ctx.lineTo(width - 30, y);
            ctx.stroke();
        }

        // 绘制柱状图
        for (let h = 0; h < 24; h++) {
            const count = hourCounts[h];
            const barHeight = (count / maxCount) * (chartHeight - 20);
            const x = 30 + h * barWidth;
            const y = 20 + (chartHeight - 20 - barHeight);

            // 渐变色
            const gradient = ctx.createLinearGradient(x, y, x, y + barHeight);
            gradient.addColorStop(0, 'rgba(59,130,246,0.8)');
            gradient.addColorStop(1, 'rgba(37,99,235,0.6)');
            ctx.fillStyle = gradient;
            ctx.fillRect(x, y, barWidth - 2, barHeight);

            // 显示数值（如果柱子够高）
            if (barHeight > 15) {
                ctx.fillStyle = '#000000';
                ctx.font = '9px sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText(count, x + barWidth/2 - 1, y - 4);
            }
        }

        // 绘制横轴标签（部分小时）
        ctx.fillStyle = '#000000';
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'center';
        for (let h = 0; h < 24; h+=3) {
            const x = 30 + h * barWidth + barWidth/2;
            ctx.fillText(h, x, height - 8);
        }
    }

    // ========== 顶部栏按钮及面板 ==========

    addTopBarButton() {
        this.topBarItem = this.addTopBar({
            icon: `<svg><use xlink:href="#iconClock"></use></svg>`,
            title: this.getText('topbarTitle', '时间信息'),
            position: 'right',
            callback: () => {
                this.showTimeAxisPanel();
            }
        });
    }

    async showTimeAxisPanel() {
        const dialog = new siyuan.Dialog({
            title: this.getText('topbarPanelTitle', '时间信息'),
            content: `<div class="b3-dialog__content" style="padding:20px; text-align:center;">${this.getText('loading', '加载中...')}</div>`,
            width: "1000px",
        });

        const dialogContainer = dialog.element.querySelector('.b3-dialog__container');
        if (dialogContainer) {
            dialogContainer.classList.add('timeaxis-dialog');
        }

        const today = new Date();
        const todayStr = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
        let currentYear = today.getFullYear();
        let currentMonth = today.getMonth() + 1;
        let currentDate = todayStr;

        const [records, monthStats] = await Promise.all([
            this.fetchTimeRecords(currentDate),
            this.fetchMonthStats(currentYear, currentMonth)
        ]);

        const renderContent = (records, monthStats, selectedDate, year, month) => {
            const daysInMonth = new Date(year, month, 0).getDate();
            const firstDay = new Date(year, month-1, 1).getDay(); // 0 = Sunday
            const monthStatsMap = new Map(monthStats.map(s => [s.day.split('/').slice(1).join('/'), true]));

            let calendarHtml = '<table class="calendar-table">';
            calendarHtml += '<thead><tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr></thead><tbody><tr>';
            for (let i = 0; i < firstDay; i++) {
                calendarHtml += '<td></td>';
            }
            for (let d = 1; d <= daysInMonth; d++) {
                const cellDate = `${year}-${String(month).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
                const dayKey = `${String(month).padStart(2,'0')}/${String(d).padStart(2,'0')}`;
                const hasRecord = monthStatsMap.has(dayKey);
                const isToday = cellDate === todayStr;
                const isSelected = cellDate === selectedDate;
                calendarHtml += `<td class="calendar-cell ${isToday?'today':''} ${isSelected?'selected':''}" data-date="${cellDate}">
                    <span class="day-number">${d}</span>
                    ${hasRecord ? '<span class="dot"></span>' : ''}
                </td>`;
                if ((firstDay + d) % 7 === 0) {
                    calendarHtml += '</tr><tr>';
                }
            }
            const totalCells = firstDay + daysInMonth;
            const remaining = 7 - (totalCells % 7);
            if (remaining < 7) {
                for (let i = 0; i < remaining; i++) {
                    calendarHtml += '<td></td>';
                }
            }
            calendarHtml += '</tr></tbody></table>';

            // 右侧时间轴列表
            let listHtml = '';
            if (records.length === 0) {
                listHtml = `<div class="timeaxis-empty">${this.getText('noData', '暂无时间记录')}</div>`;
            } else {
                listHtml = '<div class="timeline-container">';
                records.forEach(record => {
                    const timeStr = record.lifelog_created || '';
                    let displayTime = '';
                    if (timeStr) {
                        const match = timeStr.match(/\d{2}:\d{2}/);
                        displayTime = match ? match[0] : timeStr;
                    }
                    const rawContent = record.content || '';
                    const cleanContent = this.cleanContent(rawContent);
                    const type = record.lifelog_type || '其他';
                    // 动态获取颜色
                    const tagColor = this.getColorForType(type);

                    listHtml += `
                        <div class="timeline-item">
                            <div class="timeline-time">${displayTime}</div>
                            <div class="timeline-axis">
                                <div class="timeline-dot"></div>
                            </div>
                            <div class="timeline-content">
                                <div class="timeline-text">${this.escapeHtml(cleanContent)}</div>
                                <span class="timeline-tag" style="background-color: ${tagColor};">${this.escapeHtml(type)}</span>
                            </div>
                        </div>
                    `;
                });
                listHtml += '</div>';
            }

            return `
                <div class="timeaxis-panel">
                    <div class="timeaxis-left">
                        <div class="calendar-header">
                            <button class="prev-month" data-year="${year}" data-month="${month}">‹</button>
                            <span class="month-year">${year}年${month}月</span>
                            <button class="next-month" data-year="${year}" data-month="${month}">›</button>
                        </div>
                        ${calendarHtml}
                        <div class="chart-container">
                            <div class="chart-title">${this.getText('chartTitle', '时段分布')}</div>
                            <canvas id="stats-chart" width="250" height="220" style="width:100%; height:220px;"></canvas>
                        </div>
                    </div>
                    <div class="timeaxis-right">
                        ${listHtml}
                    </div>
                </div>
                <div class="b3-dialog__action" style="justify-content: flex-end; padding: 8px 16px;">
                    <button class="b3-button b3-button--cancel" id="closePanelBtn">${this.getText('close', '关闭')}</button>
                </div>
            `;
        };

        const dialogElement = dialog.element;
        const contentDiv = dialogElement.querySelector('.b3-dialog__content');
        contentDiv.innerHTML = renderContent(records, monthStats, currentDate, currentYear, currentMonth);
        contentDiv.style.padding = '0';

        // 绘制图表
        const chartCanvas = dialogElement.querySelector('#stats-chart');
        if (chartCanvas) {
            this.drawChart(chartCanvas, records);
        }

        const bindEvents = () => {
            dialogElement.querySelectorAll('.calendar-cell[data-date]').forEach(cell => {
                cell.addEventListener('click', async (e) => {
                    const date = cell.dataset.date;
                    if (!date) return;
                    contentDiv.innerHTML = `<div style="padding:20px; text-align:center;">${this.getText('loading', '加载中...')}</div>`;
                    const newRecords = await this.fetchTimeRecords(date);
                    const newMonthStats = await this.fetchMonthStats(currentYear, currentMonth);
                    contentDiv.innerHTML = renderContent(newRecords, newMonthStats, date, currentYear, currentMonth);
                    contentDiv.style.padding = '0';
                    // 重新绘制图表
                    const newCanvas = dialogElement.querySelector('#stats-chart');
                    if (newCanvas) this.drawChart(newCanvas, newRecords);
                    bindEvents();
                });
            });

            const prevBtn = dialogElement.querySelector('.prev-month');
            if (prevBtn) {
                prevBtn.addEventListener('click', async (e) => {
                    e.stopPropagation();
                    let year = parseInt(prevBtn.dataset.year);
                    let month = parseInt(prevBtn.dataset.month);
                    if (month === 1) { year--; month = 12; } else { month--; }
                    currentYear = year; currentMonth = month;
                    contentDiv.innerHTML = `<div style="padding:20px; text-align:center;">${this.getText('loading', '加载中...')}</div>`;
                    const newMonthStats = await this.fetchMonthStats(year, month);
                    let newDate = currentDate;
                    if (!newDate.startsWith(`${year}-${String(month).padStart(2,'0')}`)) {
                        newDate = `${year}-${String(month).padStart(2,'0')}-01`;
                    }
                    const newRecords = await this.fetchTimeRecords(newDate);
                    contentDiv.innerHTML = renderContent(newRecords, newMonthStats, newDate, year, month);
                    contentDiv.style.padding = '0';
                    const newCanvas = dialogElement.querySelector('#stats-chart');
                    if (newCanvas) this.drawChart(newCanvas, newRecords);
                    bindEvents();
                });
            }

            const nextBtn = dialogElement.querySelector('.next-month');
            if (nextBtn) {
                nextBtn.addEventListener('click', async (e) => {
                    e.stopPropagation();
                    let year = parseInt(nextBtn.dataset.year);
                    let month = parseInt(nextBtn.dataset.month);
                    if (month === 12) { year++; month = 1; } else { month++; }
                    currentYear = year; currentMonth = month;
                    contentDiv.innerHTML = `<div style="padding:20px; text-align:center;">${this.getText('loading', '加载中...')}</div>`;
                    const newMonthStats = await this.fetchMonthStats(year, month);
                    let newDate = currentDate;
                    if (!newDate.startsWith(`${year}-${String(month).padStart(2,'0')}`)) {
                        newDate = `${year}-${String(month).padStart(2,'0')}-01`;
                    }
                    const newRecords = await this.fetchTimeRecords(newDate);
                    contentDiv.innerHTML = renderContent(newRecords, newMonthStats, newDate, year, month);
                    contentDiv.style.padding = '0';
                    const newCanvas = dialogElement.querySelector('#stats-chart');
                    if (newCanvas) this.drawChart(newCanvas, newRecords);
                    bindEvents();
                });
            }

            const closeBtn = dialogElement.querySelector('#closePanelBtn');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => dialog.destroy());
            }
        };

        bindEvents();
    }

    escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    // ========== 生命周期清理 ==========

    onunload() {
        this.state.observer?.disconnect();
        this._restoreObserver?.disconnect();
        if (this._interval) clearInterval(this._interval);
        if (this._boundHandleTitleClick) {
            document.removeEventListener('click', this._boundHandleTitleClick);
        }
        this.attrsCache.clear();
        this.colorCache.clear();

        if (this.topBarItem && this.topBarItem.remove) {
            this.topBarItem.remove();
        }
    }

    uninstall() { this.onunload(); }
};