"use strict";
const siyuan = require("siyuan");
const { showMessage, Dialog, openTab, getFrontend } = siyuan;

// ========== 卡片定义 ==========
const CARD_ITEMS = [
    // 卡片风格组（CreativeCard）
    { key: 'newCreativeCard', label: '创意卡片', icon: '✨' },
    { key: 'studyNoteCreativeCard', label: '学习笔记', icon: '📚' },
    { key: 'importantReminderCreativeCard', label: '提醒', icon: '❗' },
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
    removeStyle: '移除样式',   // 新增  
      
    editCardTitle: '编辑卡片',
    cardType: '类型',
    cardIcon: '图标',
    cardTitle: '标题',
    cancel: '取消',
    confirm: '确定',
};

// ========== 时间线插件整合 ==========
const TIMELINE_TAB_TYPE = "timeline-tab";
const TIMELINE_STORAGE_NAME = "config.json";

// ---------- 工具函数 ----------
function parseLifelogDate(dateStr) {
    if (!dateStr) return null;
    const [datePart, timePart] = dateStr.split(' ');
    if (!datePart) return null;
    const [year, month, day] = datePart.split('/').map(Number);
    if (!year || !month || !day) return null;
    const [hour, minute, second] = timePart ? timePart.split(':').map(Number) : [0, 0, 0];
    return new Date(year, month - 1, day, hour || 0, minute || 0, second || 0);
}

function formatDate(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// ---------- 颜色获取（从 CSS 变量）----------
const colorCache = new Map();

function getTypeColorFromCSS(type) {
    if (colorCache.has(type)) {
        return colorCache.get(type);
    }

    const temp = document.createElement('div');
    temp.setAttribute('data-type', 'NodeParagraph');
    temp.setAttribute('custom-lifelog-type', type);
    temp.style.display = 'none';
    document.body.appendChild(temp);

    const styles = getComputedStyle(temp);
    let color = styles.getPropertyValue('--en-lifelog-border-color').trim();

    document.body.removeChild(temp);

    if (!color) {
        let hash = 0;
        for (let i = 0; i < type.length; i++) {
            hash = type.charCodeAt(i) + ((hash << 5) - hash);
        }
        const hue = Math.abs(hash % 360);
        color = `hsl(${hue}, 70%, 60%)`;
    }

    colorCache.set(type, color);
    return color;
}

// ---------- 数据存储 ----------
class TimelineStore {
    constructor(plugin) {
        this.plugin = plugin;
        this.config = {
            avatar: null,
            customTitle: '',
            customSubtitle: ''
        };
    }

    async loadConfig() {
        try {
            const saved = await this.plugin.loadData(TIMELINE_STORAGE_NAME);
            if (saved) {
                this.config.avatar = saved.avatar || null;
                this.config.customTitle = saved.customTitle || '';
                this.config.customSubtitle = saved.customSubtitle || '';
            }
        } catch (e) {
            console.warn("加载配置失败", e);
        }
    }

    async saveConfig() {
        await this.plugin.saveData(TIMELINE_STORAGE_NAME, this.config);
    }

    getAvatar() {
        return this.config.avatar;
    }

    async setAvatar(path) {
        this.config.avatar = path;
        await this.saveConfig();
    }

    getCustomTitle() {
        return this.config.customTitle;
    }

    getCustomSubtitle() {
        return this.config.customSubtitle;
    }

    async setCustomTitle(title) {
        this.config.customTitle = title;
        await this.saveConfig();
    }

    async setCustomSubtitle(subtitle) {
        this.config.customSubtitle = subtitle;
        await this.saveConfig();
    }
}

// ---------- 时间线视图类 ----------
class TimelineView {
    constructor(plugin, container, records) {
        this.plugin = plugin;
        this.container = container;
        this.allRecords = records;
        this.filteredRecords = records;
        this.selectedDate = null;
        this.selectedType = null;
        this.dailyCounts = this.calculateDailyCounts(records);
        this.stats = this.calculateStats(records);

        this.calendarYear = new Date().getFullYear();
        this.calendarMonth = new Date().getMonth();

        // 监听记录更新事件
        this.recordUpdatedHandler = (data) => {
            if (data.id) {
                this.updateRecordContent(data.id, data.content);
            }
        };
        this.plugin.eventBus.on('timeline-record-updated', this.recordUpdatedHandler);

        this.render();
    }

    destroy() {
        if (this.recordUpdatedHandler) {
            this.plugin.eventBus.off('timeline-record-updated', this.recordUpdatedHandler);
        }
    }

    calculateStats(records) {
        const today = new Date();
        const todayStr = formatDate(today);
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();

        let total = records.length;
        let todayCount = 0;
        let monthCount = 0;
        const dateSet = new Set();
        const dateCountMap = new Map();

        records.forEach(r => {
            const date = parseLifelogDate(r.lifelog_created);
            if (!date) return;
            const dateStr = formatDate(date);
            dateSet.add(dateStr);
            dateCountMap.set(dateStr, (dateCountMap.get(dateStr) || 0) + 1);
            if (dateStr === todayStr) todayCount++;
            if (date.getFullYear() === currentYear && date.getMonth() === currentMonth) monthCount++;
        });

        let streak = 0;
        let check = new Date(today);
        while (true) {
            const ds = formatDate(check);
            if (dateSet.has(ds)) {
                streak++;
                check.setDate(check.getDate() - 1);
            } else break;
        }

        let maxDate = null;
        let maxCount = 0;
        for (const [d, c] of dateCountMap) {
            if (c > maxCount) {
                maxCount = c;
                maxDate = d;
            }
        }
        const mostActive = maxDate ? maxDate.slice(5) : '—';

        const usedTypes = new Set(records.map(r => r.lifelog_type).filter(Boolean));
        return {
            total,
            today: todayCount,
            month: monthCount,
            streak,
            mostActive,
            usedTypeCount: usedTypes.size
        };
    }

    calculateDailyCounts(records) {
        const map = new Map();
        records.forEach(r => {
            const date = parseLifelogDate(r.lifelog_created);
            if (date) {
                const ds = formatDate(date);
                map.set(ds, (map.get(ds) || 0) + 1);
            }
        });
        return map;
    }

setFilter(date, type) {
    if (date !== undefined) this.selectedDate = date;
    if (type !== undefined) this.selectedType = type;

    this.filteredRecords = this.allRecords.filter(r => {
        const dateObj = parseLifelogDate(r.lifelog_created);
        if (!dateObj) return false;
        const ds = formatDate(dateObj);
        if (this.selectedDate && ds !== this.selectedDate) return false;
        if (this.selectedType && r.lifelog_type !== this.selectedType) return false;
        return true;
    });

    this.renderMiddlePanel();
    this.renderTypesList();
    this.updateHighlight();
}

    clearFilter() {
        this.selectedDate = null;
        this.selectedType = null;
        this.filteredRecords = this.allRecords;
        this.renderMiddlePanel();
        this.updateHighlight();
    }

    render() {
        this.container.innerHTML = '';

        const left = document.createElement('div');
        left.className = 'timeline-left-panel';
        const middle = document.createElement('div');
        middle.className = 'timeline-middle-panel';
        const right = document.createElement('div');
        right.className = 'timeline-right-panel';

        this.container.appendChild(left);
        this.container.appendChild(middle);
        this.container.appendChild(right);

        this.leftPanel = left;
        this.middlePanel = middle;
        this.rightPanel = right;

        this.renderHeader();
        this.renderContributionGraph();
        this.renderStats();
        this.renderMiddlePanel();
        this.renderCalendarAndTypes();
    }

    renderHeader() {
        const header = document.createElement('div');
        header.className = 'timeline-header';

        const avatar = document.createElement('div');
        avatar.className = 'timeline-avatar';
        avatar.setAttribute('title', '点击上传头像');
        avatar.onclick = () => this.plugin.uploadAvatar(avatar);

        const avatarPath = this.plugin.store.getAvatar();
        if (avatarPath) {
            const img = document.createElement('img');
            img.src = avatarPath.startsWith('http') ? avatarPath : '/' + avatarPath;
            img.onerror = () => {
                avatar.innerHTML = `<svg><use xlink:href="#iconUser"></use></svg>`;
            };
            avatar.appendChild(img);
        } else {
            avatar.innerHTML = `<svg><use xlink:href="#iconUser"></use></svg>`;
        }

        const text = document.createElement('div');
        text.className = 'timeline-header-text';
        const title = this.plugin.store.getCustomTitle() || '时光笺';
        const subtitle = this.plugin.store.getCustomSubtitle() || '今日更新';
        text.innerHTML = `<div class="timeline-title"><span class="timeline-title-text">${title}</span></div><div class="timeline-subtitle"><span class="timeline-subtitle-text">${subtitle}</span></div>`;

        const actions = document.createElement('div');
        actions.className = 'timeline-actions';
        const refreshBtn = document.createElement('button');
        refreshBtn.className = 'b3-tooltips b3-tooltips__sw timeline-btn';
        refreshBtn.setAttribute('aria-label', '刷新');
        refreshBtn.innerHTML = `<svg><use xlink:href="#iconRefresh"></use></svg>`;
        refreshBtn.onclick = () => this.refresh();

        const moreBtn = document.createElement('button');
        moreBtn.className = 'b3-tooltips b3-tooltips__sw timeline-btn';
        moreBtn.setAttribute('aria-label', '更多');
        moreBtn.innerHTML = `<svg><use xlink:href="#iconMore"></use></svg>`;
        moreBtn.onclick = () => this.showSettingsDialog();

        actions.appendChild(refreshBtn);
        actions.appendChild(moreBtn);

        header.appendChild(avatar);
        header.appendChild(text);
        header.appendChild(actions);
        this.leftPanel.appendChild(header);
    }

    showSettingsDialog() {
        const dialog = new Dialog({
            title: '时光笺设置',
            content: `
                <div style="padding: 20px;">
                    <div class="b3-dialog__label">标题</div>
                    <input class="b3-text-field" id="titleInput" value="${this.plugin.store.getCustomTitle() || ''}" placeholder="默认：时光笺">
                    <div class="b3-dialog__label" style="margin-top: 12px;">副标题</div>
                    <input class="b3-text-field" id="subtitleInput" value="${this.plugin.store.getCustomSubtitle() || ''}" placeholder="默认：今日更新">
                    <div style="display: flex; justify-content: flex-end; gap: 8px; margin-top: 20px;">
                        <button class="b3-button" id="cancelSettingsBtn">取消</button>
                        <button class="b3-button b3-button--outline" id="saveSettingsBtn">保存</button>
                    </div>
                </div>
            `,
            width: '400px',
        });

        setTimeout(() => {
            const cancelBtn = dialog.element.querySelector('#cancelSettingsBtn');
            const saveBtn = dialog.element.querySelector('#saveSettingsBtn');

            if (cancelBtn) {
                cancelBtn.addEventListener('click', () => dialog.destroy());
            }

            if (saveBtn) {
                saveBtn.addEventListener('click', async () => {
                    const title = (dialog.element.querySelector('#titleInput')?.value || '').trim();
                    const subtitle = (dialog.element.querySelector('#subtitleInput')?.value || '').trim();
                    await this.plugin.store.setCustomTitle(title);
                    await this.plugin.store.setCustomSubtitle(subtitle);
                    const titleEl = this.leftPanel.querySelector('.timeline-title-text');
                    const subtitleEl = this.leftPanel.querySelector('.timeline-subtitle-text');
                    if (titleEl) titleEl.textContent = title || '时光笺';
                    if (subtitleEl) subtitleEl.textContent = subtitle || '今日更新';
                    dialog.destroy();
                    showMessage('设置已保存');
                });
            }
        }, 0);
    }

    renderStats() {
        const s = this.stats;
        const grid = document.createElement('div');
        grid.className = 'stats-grid';

        const items = [
            { label: '总记录', value: s.total },
            { label: '本月', value: s.month },
            { label: '今日', value: s.today },
            { label: '连续', value: s.streak + '天' },
            { label: '最活跃', value: s.mostActive },
            { label: '使用类型', value: s.usedTypeCount }
        ];

        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'stat-card';
            card.innerHTML = `
                <div class="stat-value">${item.value}</div>
                <div class="stat-label">${item.label}</div>
            `;
            grid.appendChild(card);
        });

        this.leftPanel.appendChild(grid);
    }

renderContributionGraph() {
    const graph = document.createElement('div');
    graph.className = 'timeline-contribution';

    const today = new Date();
    const currentDay = today.getDay();
    let mondayOfThisWeek = new Date(today);
    const diff = currentDay === 0 ? 6 : currentDay - 1;
    mondayOfThisWeek.setDate(today.getDate() - diff);
    mondayOfThisWeek.setHours(0, 0, 0, 0);

    const startMonday = new Date(mondayOfThisWeek);
    startMonday.setDate(mondayOfThisWeek.getDate() - 11 * 7);

    const weekMondays = [];
    const dates = [];
    for (let col = 0; col < 12; col++) {
        const weekMonday = new Date(startMonday);
        weekMonday.setDate(startMonday.getDate() + col * 7);
        weekMondays.push(weekMonday);
        for (let row = 0; row < 7; row++) {
            const date = new Date(weekMonday);
            date.setDate(weekMonday.getDate() + row);
            const ds = formatDate(date);
            const cnt = this.dailyCounts.get(ds) || 0;
            dates.push({ date: ds, cnt, fullDate: date });
        }
    }

    const counts = dates.map(d => d.cnt);
    const maxCount = counts.length ? Math.max(...counts) : 0;

    const level = (cnt) => {
        if (cnt === 0) return 0;
        if (maxCount === 0) return 0;
        const r = cnt / maxCount;
        if (r <= 0.25) return 1;
        if (r <= 0.5) return 2;
        if (r <= 0.75) return 3;
        return 4;
    };

    const grid = document.createElement('div');
    grid.className = 'contribution-grid';

    for (let row = 0; row < 7; row++) {
        for (let col = 0; col < 12; col++) {
            const idx = col * 7 + row;
            const { date, cnt } = dates[idx];
            const lv = level(cnt);
            const cell = document.createElement('div');
            cell.className = `contribution-cell level-${lv}`;
            if (this.selectedDate === date) {
                cell.classList.add('selected');
            }
            cell.title = `${date}: ${cnt}条记录`;
            cell.dataset.date = date;
            cell.addEventListener('click', (e) => {
                e.stopPropagation();
                if (this.selectedDate === date) {
                    this.setFilter(null, undefined);
                } else {
                    this.setFilter(date, undefined);
                }
            });
            grid.appendChild(cell);
        }
    }
    graph.appendChild(grid);

    const monthNames = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
    const monthAxis = document.createElement('div');
    monthAxis.className = 'contribution-month-axis';

    for (let group = 0; group < 3; group++) {
        const firstColIndex = group * 4;
        const weekMonday = weekMondays[firstColIndex];
        const monthIndex = weekMonday.getMonth();
        const label = monthNames[monthIndex];
        
        const span = document.createElement('span');
        span.className = 'month-axis-label';
        span.textContent = label;
        monthAxis.appendChild(span);
    }

    graph.appendChild(monthAxis);
    this.leftPanel.appendChild(graph);
}

    // 修改后的 renderMiddlePanel：为每个记录项设置 data-id，并绑定右键菜单
    renderMiddlePanel() {
        this.middlePanel.innerHTML = '';

        const recs = this.filteredRecords;
        if (!recs.length) {
            this.middlePanel.innerHTML = '<div class="timeline-empty">暂无记录</div>';
            return;
        }

        const grouped = new Map();
        recs.forEach(r => {
            const d = parseLifelogDate(r.lifelog_created);
            if (!d) return;
            const ds = formatDate(d);
            if (!grouped.has(ds)) grouped.set(ds, []);
            grouped.get(ds).push(r);
        });

        const sorted = Array.from(grouped.keys()).sort().reverse();

        sorted.forEach(date => {
            const header = document.createElement('div');
            header.className = 'timeline-date-header';
            header.textContent = date;
            this.middlePanel.appendChild(header);

            grouped.get(date).forEach(rec => {
                const dateObj = parseLifelogDate(rec.lifelog_created);
                const time = dateObj ? `${String(dateObj.getHours()).padStart(2,'0')}:${String(dateObj.getMinutes()).padStart(2,'0')}` : '';
                const type = rec.lifelog_type || '未分类';
                const color = getTypeColorFromCSS(type);
                let content = rec.content || '';
                content = content.replace(/^\d{1,2}:\d{2}\s+[^：]+：/, '').trim();

                const item = document.createElement('div');
                item.className = 'timeline-item';
                item.dataset.id = rec.id;  // 设置 data-id 用于更新
                item.innerHTML = `
                    <div class="timeline-item-header">
                        <span class="timeline-time">${time}</span>
                        <span class="timeline-type" style="background-color:${color}">${type}</span>
                    </div>
                    <div class="timeline-content">${content}</div>
                `;

                // 添加右键菜单事件
                item.addEventListener('contextmenu', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.showContextMenu(e, rec);
                });

                this.middlePanel.appendChild(item);
            });
        });
    }

    // 更新单条记录的内容
    updateRecordContent(blockId, newContent) {
        const item = this.middlePanel.querySelector(`.timeline-item[data-id="${blockId}"]`);
        if (item) {
            const contentDiv = item.querySelector('.timeline-content');
            if (contentDiv) {
                let displayContent = newContent.replace(/^\d{1,2}:\d{2}\s+[^：]+：/, '').trim();
                contentDiv.textContent = displayContent;
            }
        }
    }

    // 显示自定义右键菜单
    showContextMenu(event, record) {
        // 移除已存在的菜单
        const existingMenu = document.querySelector('.timeline-context-menu');
        if (existingMenu) existingMenu.remove();

        const menu = document.createElement('div');
        menu.className = 'timeline-context-menu b3-menu';
        menu.style.position = 'fixed';
        menu.style.left = event.clientX + 'px';
        menu.style.top = event.clientY + 'px';
        menu.style.zIndex = '9999';
        menu.innerHTML = `
            <div class="b3-menu__items">
                <button class="b3-menu__item" data-action="edit">
                    <svg class="b3-menu__icon"><use xlink:href="#iconEdit"></use></svg>
                    <span class="b3-menu__label">编辑</span>
                </button>
                <button class="b3-menu__item" data-action="open">
                    <svg class="b3-menu__icon"><use xlink:href="#iconFile"></use></svg>
                    <span class="b3-menu__label">打开文档</span>
                </button>
            </div>
        `;

        document.body.appendChild(menu);

        // 绑定事件
        menu.querySelector('[data-action="edit"]').addEventListener('click', () => {
            this.plugin.showEditBlockDialog(record.id, record.content);
            menu.remove();
        });
        menu.querySelector('[data-action="open"]').addEventListener('click', () => {
            this.plugin.openBlockDocument(record.id);
            menu.remove();
        });

        // 点击其他地方关闭菜单
        const closeMenu = (e) => {
            if (!menu.contains(e.target)) {
                menu.remove();
                document.removeEventListener('click', closeMenu);
                document.removeEventListener('contextmenu', closeMenu);
            }
        };
        setTimeout(() => {
            document.addEventListener('click', closeMenu);
            document.addEventListener('contextmenu', closeMenu);
        }, 0);
    }

renderCalendarAndTypes() {
    this.rightPanel.innerHTML = '';

    const cal = document.createElement('div');
    cal.className = 'timeline-calendar';
    this.renderCalendar(cal);
    this.rightPanel.appendChild(cal);

    const types = document.createElement('div');
    types.className = 'timeline-types';
    const typeTitle = document.createElement('div');
    typeTitle.className = 'timeline-types-title';
    typeTitle.textContent = '记录类型';
    types.appendChild(typeTitle);

    const list = document.createElement('div');
    list.className = 'timeline-types-list';
    types.appendChild(list);

    this.rightPanel.appendChild(types);
    this.typesContainer = list;
    this.renderTypesList();
}

renderTypesList() {
    if (!this.typesContainer) return;
    const list = this.typesContainer;
    list.innerHTML = '';

    const typeCounts = new Map();
    this.filteredRecords.forEach(r => {
        if (r.lifelog_type) {
            typeCounts.set(r.lifelog_type, (typeCounts.get(r.lifelog_type) || 0) + 1);
        }
    });

    for (const [type, cnt] of typeCounts) {
        const color = getTypeColorFromCSS(type);
        const item = document.createElement('div');
        item.className = 'timeline-type-item';
        item.dataset.type = type;
        item.innerHTML = `
            <span class="type-dot" style="background-color:${color}"></span>
            <span class="type-name">${type}</span>
            <span class="type-count">${cnt}</span>
        `;
        item.addEventListener('click', () => {
            if (this.selectedType === type) {
                this.setFilter(undefined, null);
            } else {
                this.setFilter(undefined, type);
            }
        });
        list.appendChild(item);
    }

    if (typeCounts.size === 0) {
        const empty = document.createElement('div');
        empty.className = 'timeline-type-empty';
        empty.textContent = '无记录类型';
        list.appendChild(empty);
    }
}

renderCalendar(container) {
    const nav = document.createElement('div');
    nav.className = 'calendar-nav';
    const prev = document.createElement('button');
    prev.className = 'b3-button b3-button--outline calendar-nav-btn';
    prev.innerHTML = '‹';
    prev.onclick = () => {
        if (this.calendarMonth === 0) {
            this.calendarMonth = 11;
            this.calendarYear -= 1;
        } else {
            this.calendarMonth -= 1;
        }
        this.renderCalendar(container);
    };
    const next = document.createElement('button');
    next.className = 'b3-button b3-button--outline calendar-nav-btn';
    next.innerHTML = '›';
    next.onclick = () => {
        if (this.calendarMonth === 11) {
            this.calendarMonth = 0;
            this.calendarYear += 1;
        } else {
            this.calendarMonth += 1;
        }
        this.renderCalendar(container);
    };
    const title = document.createElement('span');
    title.className = 'calendar-nav-title';
    title.textContent = `${this.calendarYear}年${this.calendarMonth + 1}月`;

    nav.appendChild(prev);
    nav.appendChild(title);
    nav.appendChild(next);
    container.innerHTML = '';
    container.appendChild(nav);

    const weekdays = ['一', '二', '三', '四', '五', '六', '日'];
    const wd = document.createElement('div');
    wd.className = 'calendar-weekdays';
    weekdays.forEach(d => {
        const cell = document.createElement('div');
        cell.className = 'calendar-weekday';
        cell.textContent = d;
        wd.appendChild(cell);
    });
    container.appendChild(wd);

    const grid = document.createElement('div');
    grid.className = 'calendar-grid';

    const firstDayOfMonth = new Date(this.calendarYear, this.calendarMonth, 1);
    const lastDayOfMonth = new Date(this.calendarYear, this.calendarMonth + 1, 0);

    let startDow = firstDayOfMonth.getDay();
    if (startDow === 0) startDow = 7;

    const prevMonthDays = startDow - 1;
    const daysInMonth = lastDayOfMonth.getDate();
    const totalCells = 42;
    const nextMonthDays = totalCells - prevMonthDays - daysInMonth;

    let prevYear = this.calendarYear;
    let prevMonth = this.calendarMonth - 1;
    if (prevMonth < 0) {
        prevMonth = 11;
        prevYear -= 1;
    }
    const prevMonthLastDay = new Date(prevYear, prevMonth + 1, 0).getDate();

    let nextYear = this.calendarYear;
    let nextMonth = this.calendarMonth + 1;
    if (nextMonth > 11) {
        nextMonth = 0;
        nextYear += 1;
    }

    for (let i = 0; i < totalCells; i++) {
        let dateObj, dateStr, isCurrentMonth = false;

        if (i < prevMonthDays) {
            const day = prevMonthLastDay - (prevMonthDays - 1 - i);
            dateObj = new Date(prevYear, prevMonth, day);
        } else if (i < prevMonthDays + daysInMonth) {
            const day = i - prevMonthDays + 1;
            dateObj = new Date(this.calendarYear, this.calendarMonth, day);
            isCurrentMonth = true;
        } else {
            const day = i - (prevMonthDays + daysInMonth) + 1;
            dateObj = new Date(nextYear, nextMonth, day);
        }

        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const day = String(dateObj.getDate()).padStart(2, '0');
        dateStr = `${year}-${month}-${day}`;

        const hasRecord = this.dailyCounts.has(dateStr);

        const cell = document.createElement('div');
        cell.className = 'calendar-cell';
        if (!isCurrentMonth) {
            cell.classList.add('other-month');
        }
        if (hasRecord) {
            cell.classList.add('has-record');
        }
        cell.textContent = dateObj.getDate();
        cell.dataset.date = dateStr;
        cell.addEventListener('click', () => {
            if (this.selectedDate === dateStr) {
                this.setFilter(null, undefined);
            } else {
                this.setFilter(dateStr, undefined);
            }
        });

        grid.appendChild(cell);
    }

    container.appendChild(grid);
}

    updateHighlight() {
        this.rightPanel.querySelectorAll('.calendar-cell').forEach(c => c.classList.remove('selected'));
        this.rightPanel.querySelectorAll('.timeline-type-item').forEach(i => i.classList.remove('selected'));

        if (this.selectedDate) {
            this.rightPanel.querySelectorAll('.calendar-cell').forEach(c => {
                if (c.dataset.date === this.selectedDate) c.classList.add('selected');
            });
        }
        if (this.selectedType) {
            this.rightPanel.querySelectorAll('.timeline-type-item').forEach(i => {
                if (i.dataset.type === this.selectedType) i.classList.add('selected');
            });
        }

        this.leftPanel.innerHTML = '';
        this.renderHeader();
        this.renderContributionGraph();
        this.renderStats();
    }

    async refresh() {
        this.plugin.eventBus.emit('timeline-refresh');
    }
}

// ========== 主插件类 ==========
module.exports = class CardStyleWorkshopPlugin extends siyuan.Plugin {
    styleDefaults = null;
    attrsCache = new Map();

    async onload() {
        this.loadStyleDefaults();
        this.state = { menu: null, observer: null, restoreObserver: null };
        this.waitForMenu();
        this.addTitleClickListener();
        this.startAttributeRestoreObserver();

        // ===== 时间线插件初始化 =====
        const frontend = getFrontend?.() || '';
        this.isMobile = frontend === 'mobile' || frontend === 'browser-mobile';

        this.store = new TimelineStore(this);
        await this.store.loadConfig();

        // 添加图标（包括编辑和文件图标）
        this.addIcons(`<symbol id="iconUser" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
        </symbol>`);
        this.addIcons(`<symbol id="iconRefresh" viewBox="0 0 24 24">
            <path d="M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" fill="currentColor"/>
        </symbol>`);
        this.addIcons(`<symbol id="iconMore" viewBox="0 0 24 24">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="currentColor"/>
        </symbol>`);
        this.addIcons(`<symbol id="iconTimeline" viewBox="0 0 24 24">
            <path d="M4 6h16v2H4V6zm2-4h12v2H6V2zm0 16h12v2H6v-2zm-2-4h16v2H4v-2zm0-8h16v2H4V6z" fill="currentColor"/>
        </symbol>`);
        this.addIcons(`<symbol id="iconTrashcan" viewBox="0 0 24 24">
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill="currentColor"/>
        </symbol>`);
        // 新增编辑和文件图标
        this.addIcons(`<symbol id="iconEdit" viewBox="0 0 24 24">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="currentColor"/>
        </symbol>`);
        this.addIcons(`<symbol id="iconFile" viewBox="0 0 24 24">
            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" fill="currentColor"/>
        </symbol>`);

        // 注册时间线标签页
        const plugin = this;
        this.addTab({
            type: TIMELINE_TAB_TYPE,
            init() {
                this.plugin = plugin;
                this.element.classList.add('timeline-dialog-content');
                this.container = document.createElement('div');
                this.container.className = 'timeline-container';
                this.element.appendChild(this.container);

                this.loadDataAndRender = async () => {
                    this.container.innerHTML = '<div class="timeline-loading">加载数据...</div>';
                    const data = await this.plugin.queryAllRecords();
                    this.container.innerHTML = '';
                    this.view = new TimelineView(this.plugin, this.container, data);
                };

                this.loadDataAndRender();

                this.refreshHandler = () => this.loadDataAndRender();
                this.plugin.eventBus.on('timeline-refresh', this.refreshHandler);
            },
            beforeDestroy() {
                this.plugin.eventBus.off('timeline-refresh', this.refreshHandler);
                if (this.view) {
                    this.view.destroy();
                }
            }
        });
    }

    onLayoutReady() {
        this.addTopBar({
            icon: 'iconTimeline',
            title: '时光笺',
            position: 'right',
            callback: () => this.openTimelineTab()
        });
    }

    openTimelineTab() {
        openTab({
            app: this.app,
            custom: {
                icon: "iconTimeline",
                title: "时光笺",
                data: {},
                id: this.name + TIMELINE_TAB_TYPE
            }
        });
    }

    async queryAllRecords() {
        const sql = `
            SELECT 
                b.id,
                b.content,
                a1.value as lifelog_created,
                a2.value as lifelog_type
            FROM blocks b
            LEFT JOIN attributes a1 ON b.id = a1.block_id AND a1.name = 'custom-lifelog-created'
            LEFT JOIN attributes a2 ON b.id = a2.block_id AND a2.name = 'custom-lifelog-type'
            WHERE 
                b.type = 'p' 
                AND a1.value IS NOT NULL
                AND a2.value IS NOT NULL
            ORDER BY a1.value DESC
        `;
        const result = await this.callSiyuanAPI('/api/query/sql', { stmt: sql });
        if (result && result.code === 0) {
            return result.data;
        }
        return [];
    }

    async callSiyuanAPI(endpoint, data) {
        const token = window.siyuan?.config?.api?.token || '';
        const headers = { 'Content-Type': 'application/json' };
        if (token) headers['Authorization'] = `Token ${token}`;
        try {
            const res = await fetch(endpoint, { method: 'POST', headers, body: JSON.stringify(data) });
            if (!res.ok) throw new Error(`API失败: ${res.status}`);
            return await res.json();
        } catch (e) {
            console.error(e);
            return null;
        }
    }

    uploadAvatar(avatarElement) {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.style.display = 'none';

        fileInput.onchange = async () => {
            const file = fileInput.files[0];
            if (!file) return;

            const formData = new FormData();
            formData.append('assetsDirPath', '/assets/');
            formData.append('file[]', file);

            try {
                const response = await fetch('/api/asset/upload', {
                    method: 'POST',
                    body: formData
                });
                const result = await response.json();
                if (result.code === 0) {
                    const succMap = result.data.succMap;
                    const originalName = file.name;
                    const newPath = succMap[originalName];
                    if (newPath) {
                        await this.store.setAvatar(newPath);
                        if (avatarElement) {
                            avatarElement.innerHTML = '';
                            const img = document.createElement('img');
                            img.src = '/' + newPath;
                            img.onerror = () => {
                                avatarElement.innerHTML = `<svg><use xlink:href="#iconUser"></use></svg>`;
                            };
                            avatarElement.appendChild(img);
                        }
                        showMessage('头像上传成功');
                    }
                } else {
                    showMessage('上传失败：' + (result.msg || '未知错误'));
                }
            } catch (e) {
                console.error(e);
                showMessage('上传失败：' + e.message);
            } finally {
                document.body.removeChild(fileInput);
            }
        };

        document.body.appendChild(fileInput);
        fileInput.click();
    }

    // 加载默认样式
    loadStyleDefaults() {
        const defaults = {};
        for (const item of CARD_ITEMS) {
            defaults[item.label] = { icon: item.icon, title: item.label };
        }
        this.styleDefaults = defaults;
    }

    // 设置块属性（用于应用样式）
    async setAttrs(id, attrs) {
        if (!this.attrsCache.has(id)) {
            this.attrsCache.set(id, {});
        }
        Object.assign(this.attrsCache.get(id), attrs);

        document.querySelectorAll(`[data-node-id="${id}"]`).forEach(el => {
            Object.entries(attrs).forEach(([key, val]) => {
                if (val === '') {
                    el.removeAttribute(key);
                } else {
                    el.setAttribute(key, val);
                }
            });
        });

        try {
            await siyuan.fetchPost("/api/attr/setBlockAttrs", { id, attrs });
        } catch (err) {
            console.warn(`[CardStyleWorkshop] 属性保存失败: ${id}`, err);
        }
    }

    // ===== 新增：使用 resetBlockAttrs 彻底移除卡片样式 =====
    async removeCardStyles(blockId) {
        // 1. 获取当前块的所有属性
        const attrsResult = await this.callSiyuanAPI('/api/attr/getBlockAttrs', { id: blockId });
        if (!attrsResult || attrsResult.code !== 0) {
            showMessage('获取块属性失败');
            return false;
        }
        const currentAttrs = attrsResult.data || {};

        // 2. 过滤掉所有以 custom-deco- 开头的属性，保留其他属性
        const newAttrs = {};
        for (const [key, value] of Object.entries(currentAttrs)) {
            if (!key.startsWith('custom-deco-')) {
                newAttrs[key] = value;
            }
        }

        // 3. 调用 resetBlockAttrs 覆盖属性（这会删除所有未包含的属性）
        try {
            const resetResult = await this.callSiyuanAPI('/api/attr/resetBlockAttrs', {
                id: blockId,
                attrs: newAttrs
            });
            if (!resetResult || resetResult.code !== 0) {
                showMessage('重置块属性失败');
                return false;
            }
        } catch (e) {
            console.error(e);
            showMessage('重置块属性时出错');
            return false;
        }

        // 4. 更新本地缓存：删除所有 custom-deco- 键
        if (this.attrsCache.has(blockId)) {
            const cached = this.attrsCache.get(blockId);
            Object.keys(cached).forEach(key => {
                if (key.startsWith('custom-deco-')) {
                    delete cached[key];
                }
            });
        }

        // 5. 更新 DOM：移除所有 custom-deco- 属性
        document.querySelectorAll(`[data-node-id="${blockId}"]`).forEach(el => {
            Array.from(el.attributes).forEach(attr => {
                if (attr.name.startsWith('custom-deco-')) {
                    el.removeAttribute(attr.name);
                }
            });
        });

        showMessage('卡片样式已移除');
        return true;
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

        if (cardKey && cardKey.endsWith('QuoteCard')) return;
        if (cardKey && cardKey.includes('WhisperCard') && cardKey !== 'diaryChatWhisperCard') return;
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
            <div class="b3-dialog__action" style="display: flex; justify-content: space-between; padding: 7px 24px;">
                <button class="b3-button b3-button--outline" id="remove-style-btn">${this.getText('removeStyle', '移除样式')}</button>
                <div>
                    <button class="b3-button b3-button--cancel" id="cancel-btn">${this.getText('cancel', '取消')}</button>
                    <button class="b3-button b3-button--outline" id="confirm-btn">${this.getText('confirm', '确定')}</button>
                </div>
            </div>
        `;

        const dialog = new Dialog({
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

        // 使用新的 removeCardStyles 方法
        dialogElement.querySelector('#remove-style-btn').addEventListener('click', async () => {
            await this.removeCardStyles(blockId);
            dialog.destroy();
        });
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
        
        const subMenu = document.createElement("div");
        subMenu.className = "b3-menu__submenu";
        const itemsContainer = document.createElement("div");
        itemsContainer.className = "b3-menu__items";

        // 原有分组
        this.getSecondaryGroups().forEach(group => {
            itemsContainer.appendChild(this.createSecondaryGroupButton(blockId, group));
        });

        // 添加分隔符和“移除样式”按钮
        itemsContainer.appendChild(this.createSeparator());
        const removeItem = this.createRemoveStyleItem(blockId);
        itemsContainer.appendChild(removeItem);

        subMenu.appendChild(itemsContainer);
        btn.appendChild(subMenu);
        return btn;
    }

    // 创建移除样式菜单项（使用新的 removeCardStyles）
    createRemoveStyleItem(blockId) {
        const item = document.createElement("button");
        item.className = "b3-menu__item";
        item.innerHTML = `<svg class="b3-menu__icon"><use xlink:href="#iconTrashcan"></use></svg>
                          <span class="b3-menu__label">${this.getText('removeStyle', '移除样式')}</span>`;
        item.onclick = async (e) => {
            e.stopPropagation();
            await this.removeCardStyles(blockId);
        };
        return item;
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

        const currentBlock = document.querySelector(`[data-node-id="${blockId}"]`);
        const existingTitle = currentBlock?.getAttribute('custom-deco-card-title') || '';

        const attrs = { "custom-deco-style": label };

        if (!key.endsWith('QuoteCard') && !key.includes('WhisperCard') && !key.endsWith('ImageCard')) {
            const defaults = this.styleDefaults[label];
            if (defaults) {
                attrs["custom-deco-card-icon"] = defaults.icon || '';
                if (!existingTitle) {
                    attrs["custom-deco-card-title"] = defaults.title || '';
                }
            }
        }

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

    getText(key, fallback) {
        return TEXT[key] || fallback;
    }

    // ========== 时间线编辑和文档跳转功能 ==========

    /**
     * 获取块所在的文档信息
     */
    async getBlockInfo(blockId) {
        return await this.callSiyuanAPI('/api/block/getBlockInfo', { id: blockId });
    }

    /**
     * 打开块所在的文档
     */
    async openBlockDocument(blockId) {
        const info = await this.getBlockInfo(blockId);
        if (info && info.code === 0) {
            const rootID = info.data.rootID;
            openTab({
                app: this.app,
                doc: { id: rootID }
            });
        } else {
            showMessage('无法获取文档信息');
        }
    }

    /**
     * 更新块内容，并确保 custom-lifelog-created 属性不被修改
     */
    async editBlockContent(blockId, newContent) {
        // 1. 获取编辑前的 custom-lifelog-created 值
        const before = await this.callSiyuanAPI('/api/attr/getBlockAttrs', { id: blockId });
        if (!before || before.code !== 0) {
            showMessage('获取块属性失败，无法确保时间属性不被修改');
            return;
        }
        const originalAttrs = before.data || {};
        const originalCreated = originalAttrs['custom-lifelog-created'];

        // 2. 更新内容
        const result = await this.callSiyuanAPI('/api/block/updateBlock', {
            dataType: 'markdown',
            data: newContent,
            id: blockId
        });

        if (result && result.code === 0) {
            // 3. 如果原始存在该属性，强制恢复它（最多重试3次）
            if (originalCreated) {
                const maxRetries = 3;
                for (let i = 0; i < maxRetries; i++) {
                    // 等待一小段时间，避免与其他自动修改冲突
                    await new Promise(resolve => setTimeout(resolve, 200));

                    // 设置回原始值
                    await this.callSiyuanAPI('/api/attr/setBlockAttrs', {
                        id: blockId,
                        attrs: { 'custom-lifelog-created': originalCreated }
                    });

                    // 验证是否成功
                    const after = await this.callSiyuanAPI('/api/attr/getBlockAttrs', { id: blockId });
                    const newCreated = (after?.code === 0 && after.data) ? after.data['custom-lifelog-created'] : null;
                    if (newCreated === originalCreated) {
                        break; // 成功恢复
                    }
                    // 否则重试
                }
            }

            showMessage('更新成功');

            // 发送事件通知视图更新单条记录，而不是全局刷新
            this.eventBus.emit('timeline-record-updated', { id: blockId, content: newContent });
        } else {
            showMessage('更新失败');
        }
    }

    /**
     * 显示编辑对话框
     */
    showEditBlockDialog(blockId, currentContent) {
        const escapeHtml = (text) => {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        };

        const dialog = new Dialog({
            title: '编辑记录',
            content: `
                <div class="b3-dialog__content" style="padding: 20px;">
                    <textarea id="edit-content" class="b3-text-field" style="width:100%; min-height:150px;">${escapeHtml(currentContent)}</textarea>
                </div>
                <div class="b3-dialog__action" style="display:flex; justify-content:flex-end; padding:7px 24px;">
                    <button class="b3-button b3-button--cancel" id="cancelEdit">取消</button>
                    <button class="b3-button b3-button--outline" id="saveEdit">保存</button>
                </div>
            `,
            width: '500px'
        });

        const dialogElement = dialog.element;
        dialogElement.querySelector('#saveEdit').addEventListener('click', async () => {
            const newContent = dialogElement.querySelector('#edit-content').value;
            await this.editBlockContent(blockId, newContent);
            dialog.destroy();
        });
        dialogElement.querySelector('#cancelEdit').addEventListener('click', () => dialog.destroy());
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