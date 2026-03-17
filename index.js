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


    // 渐变色卡片组（GradientCard）
    { key: 'lifeFragmentGradientCard', label: '生活碎片', icon: '🎈' },
    { key: 'warmMomentGradientCard', label: '温暖时刻', icon: '🌇' },
    { key: 'goodThingGradientCard', label: '好物推荐', icon: '🎀' },
    { key: 'broadViewGradientCard', label: '广阔视野', icon: '🌊' },
    { key: 'techSummaryGradientCard', label: '技术总结', icon: '☁️' },
    { key: 'warmDailyGradientCard', label: '温暖日常', icon: '🌇' },
    { key: 'growthRecordGradientCard', label: '成长记录', icon: '🍃' },
    { key: 'inspirationGradientCard', label: '灵感创意', icon: '🔮' },

    // 终端风格组（TerminalCard）
    { key: 'systemLogTerminalCard',   label: '系统日志',   icon: '💻' },
    { key: 'debugInfoTerminalCard',   label: '调试信息',   icon: '🔍' },
    { key: 'warningMsgTerminalCard',  label: '警告信息',   icon: '⚠️' },
    { key: 'errorStackTerminalCard',  label: '错误堆栈',   icon: '🛑' },
    { key: 'successBuildTerminalCard',label: '构建成功',   icon: '🚀' },
    { key: 'securityAuthTerminalCard',label: '安全认证',   icon: '🔒' },
    { key: 'dbConnectionTerminalCard',label: '数据库连接', icon: '🛢️' },
    { key: 'networkStatusTerminalCard',label: '网络状态',  icon: '📡' },
    { key: 'heartBeatTerminalCard',   label: '心跳',       icon: '💓' },

    // 👇 手账卡片组 - key 统一以 JournalCard 结尾，方便 endsWith 过滤 👇
    { key: 'moodTodayJournalCard', label: '今日小幸运', icon: '🌸' },
    { key: 'memoNoteJournalCard', label: '备忘便签', icon: '📝' },
    { key: 'inspirationJournalCard', label: '灵感闪现', icon: '💡' },
    { key: 'gratitudeJournalCard', label: '感恩日记', icon: '🌱' },
    { key: 'littleThoughtsJournalCard', label: '微小心事', icon: '💭' },
    { key: 'goodnightJournalCard', label: '晚安寄语', icon: '🌙' },
    { key: 'tomorrowPlanJournalCard', label: '明日计划', icon: '📅' },
    { key: 'happyFragmentsJournalCard', label: '幸福碎片', icon: '🍓' },

    // 顶线样式组 - 多种颜色可选
    { key: 'topLineBlueCard', label: '优雅顶线·蓝', icon: '🔝' },
    { key: 'topLineRedCard', label: '优雅顶线·红', icon: '🔝' },
    { key: 'topLineGreenCard', label: '优雅顶线·绿', icon: '🔝' },
    { key: 'topLineOrangeCard', label: '优雅顶线·橙', icon: '🔝' },
    { key: 'topLinePurpleCard', label: '优雅顶线·紫', icon: '🔝' },
    { key: 'topLineCyanCard', label: '优雅顶线·青', icon: '🔝' },
    { key: 'topLinePinkCard', label: '优雅顶线·粉', icon: '🔝' },
    { key: 'topLineGrayCard', label: '优雅顶线·灰', icon: '🔝' },

    // 波点格子风组 - 8 款可爱波点样式
    { key: 'polkaPinkCard', label: '波点·粉嫩', icon: '🌸' },
    { key: 'polkaMintCard', label: '波点·薄荷', icon: '🍃' },
    { key: 'polkaSunshineCard', label: '波点·暖阳', icon: '☀️' },
    { key: 'polkaLavenderCard', label: '波点·薰衣草', icon: '💜' },
    { key: 'polkaSkyCard', label: '波点·晴空', icon: '🩵' },
    { key: 'polkaCoralCard', label: '波点·珊瑚橙', icon: '🧡' },
    { key: 'polkaMatchaCard', label: '波点·抹茶', icon: '🍵' },
    { key: 'polkaBerryCard', label: '波点·浆果', icon: '🫐' },
];


const TEXT = {
    cardview: '轻饰笔记',

    whisperGroup: '时间轴粗', 
    whisperThinGroup: '时间轴细', 
    creativeGroup: '卡片风格',
    gradientCardGroup: '渐变色卡片',
    terminalGroup: '终端风格',   // 新增
    journalCardGroup: '手账卡片',  // 新增
    topLineGroup: '顶线样式',  // 新增这一行
    polkaGroup: '波点格子风',  
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
            avatar: null,            // 自己头像
            oppositeAvatar: null,    // 对方头像（新增）
            cover: null,             // 封面图片路径
            customTitle: '',
            customSubtitle: '',
            displayMode: 'list',      // 默认列表样式
            timeMode: 'start',        // 记录时间模式 'start' 或 'end'
            showStyleSwitcher: false , // 是否显示左侧样式切换按钮
            wechatDirections: {} , // 新增：存储微信样式左右方向 { blockId: 'left' | 'right' }
            showBarChart: false,    // 是否显示柱状图（默认不显示）
            showPieChart: false,    // 是否显示饼图（默认不显示）
            showDiaryInMoments: false, // 新增：是否在朋友圈样式中展示碎碎念
        };
    }

    async loadConfig() {
        try {
            const saved = await this.plugin.loadData(TIMELINE_STORAGE_NAME);
            if (saved) {
                this.config.avatar = saved.avatar || null;
                this.config.oppositeAvatar = saved.oppositeAvatar || null; // 新增
                this.config.cover = saved.cover || null;
                this.config.customTitle = saved.customTitle || '';
                this.config.customSubtitle = saved.customSubtitle || '';
                this.config.displayMode = saved.displayMode || 'list';
                this.config.timeMode = saved.timeMode || 'start';
                this.config.showStyleSwitcher = saved.showStyleSwitcher || false;
                this.config.wechatDirections = saved.wechatDirections || {}; // 新增
                this.config.showBarChart = saved.showBarChart !== undefined ? saved.showBarChart : false;
                this.config.showPieChart = saved.showPieChart !== undefined ? saved.showPieChart : false;
                this.config.showDiaryInMoments = saved.showDiaryInMoments !== undefined ? saved.showDiaryInMoments : false; // 新增
            }
        } catch (e) {
            console.warn("加载配置失败", e);
        }
    }

    async saveConfig() {
        await this.plugin.saveData(TIMELINE_STORAGE_NAME, this.config);
    }

    // ========== 图表显示配置 ==========
    getShowBarChart() {
        return this.config.showBarChart;
    }
    getShowPieChart() {
        return this.config.showPieChart;
    }
    async setShowBarChart(show) {
        this.config.showBarChart = show;
        await this.saveConfig();
    }
    async setShowPieChart(show) {
        this.config.showPieChart = show;
        await this.saveConfig();
    }

    getAvatar() {
        return this.config.avatar;
    }

    async setAvatar(path) {
        this.config.avatar = path;
        await this.saveConfig();
    }

    // 新增：对方头像
    getOppositeAvatar() {
        return this.config.oppositeAvatar;
    }
    // 新增：获取微信消息方向
    getWechatDirection(blockId) {
        return this.config.wechatDirections[blockId] || null;
    }
    
    // 新增：设置微信消息方向
    async setWechatDirection(blockId, direction) {
        this.config.wechatDirections[blockId] = direction;
        await this.saveConfig();
    }
    async setOppositeAvatar(path) {
        this.config.oppositeAvatar = path;
        await this.saveConfig();
    }

    getCover() {
        return this.config.cover;
    }

    async setCover(path) {
        this.config.cover = path;
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

    getDisplayMode() {
        return this.config.displayMode;
    }

    async setDisplayMode(mode) {
        this.config.displayMode = mode;
        await this.saveConfig();
    }

    getTimeMode() {
        return this.config.timeMode;
    }

    async setTimeMode(mode) {
        this.config.timeMode = mode;
        await this.saveConfig();
    }

    getShowStyleSwitcher() {
        return this.config.showStyleSwitcher;
    }

    async setShowStyleSwitcher(show) {
        this.config.showStyleSwitcher = show;
        await this.saveConfig();
    }

    // ========== 新增：朋友圈展示碎碎念配置 ==========
    getShowDiaryInMoments() {
        return this.config.showDiaryInMoments;
    }

    async setShowDiaryInMoments(show) {
        this.config.showDiaryInMoments = show;
        await this.saveConfig();
    }
}

// ---------- 时间线视图类 ----------
class TimelineView {
    // 模式常量
    static MODE_LIST = 'list';
    static MODE_MOMENTS = 'moments';
    static MODE_TIMELINE = 'timeline';
    static MODE_TIMELINE_V2 = 'timeline_v2';
    static MODE_STATISTICS = 'statistics';
    static MODE_WECHAT = 'wechat';  // 新增微信样式

    constructor(plugin, container, yearRecords) {
        this.plugin = plugin;
        this.container = container;
        this.yearRecords = yearRecords;               // 本年数据，用于左侧面板
        this.allRecords = yearRecords;                 // 当前显示的数据（默认本年）
        this.allRecordsUnfiltered = null;               // 全部数据（统计视图时加载）
        this.filteredRecords = yearRecords;             // 当前筛选后的数据
        this.selectedDate = null;
        this.selectedType = null;
        this.chineseNumbers = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', 
                           '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十', 
                           '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十'];
        // 基于本年数据的统计和日计数（左侧面板用）
        this.yearDailyCounts = this.calculateDailyCounts(yearRecords);
        this.yearStats = this.calculateStats(yearRecords);
        this.destroy = this.destroy.bind(this); // 添加这一行
        
        // 基于当前显示数据的日计数（右侧日历用）
        this.dailyCounts = this.yearDailyCounts;

        this.calendarYear = new Date().getFullYear();
        this.calendarMonth = new Date().getMonth();

        // 显示模式
        this.displayMode = this.plugin.store.getDisplayMode() || TimelineView.MODE_LIST;
        // 时间模式
        this.timeMode = this.plugin.store.getTimeMode() || 'start';

        // 生成全局排序数组（按时间升序），用于跨天查找前一条记录
        this.globalSorted = this._buildGlobalSorted(yearRecords);

        // 统计视图专用状态
        this.startDate = null; // 格式 YYYY-MM-DD
        this.endDate = null;   // 格式 YYYY-MM-DD
        this.selectedStatTypes = new Set(); // 空 Set 表示全部类型

        // 碎碎念数据缓存
        this.diaryRecords = null;

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
    if (this.recordUpdatedHandler && this.plugin?.eventBus) {
        this.plugin.eventBus.off('timeline-record-updated', this.recordUpdatedHandler);
    }
    
    // 清理引用，避免内存泄漏
    this.plugin = null;
    this.container = null;
    this.allRecords = null;
    this.filteredRecords = null;
    this.recordUpdatedHandler = null;
}

    // 异步加载全部数据（用于统计视图）
    async loadAllRecords() {
        if (this.allRecordsUnfiltered) return;
        const all = await this.plugin.queryAllRecordsUnfiltered();
        this.allRecordsUnfiltered = all;
        this.allDailyCountsUnfiltered = this.calculateDailyCounts(all);
        this.globalSortedAll = this._buildGlobalSorted(all); // 新增
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

_computeStatsData(records) {
    const typeMap = new Map(); // type -> count
    let total = records.length;

    records.forEach(rec => {
        const dateObj = parseLifelogDate(rec.lifelog_created);
        if (!dateObj) return;
        const type = rec.lifelog_type || '未分类';
        typeMap.set(type, (typeMap.get(type) || 0) + 1);
    });

    const typeData = [];
    for (const [name, count] of typeMap.entries()) {
        typeData.push({
            name,
            count,
            color: getTypeColorFromCSS(name) // 使用已有的 getTypeColorFromCSS
        });
    }
    typeData.sort((a, b) => b.count - a.count); // 按数量降序

    return { typeData, total };
}
lightenColor(color, percent) {
    // 输入 #RRGGBB，返回变亮后的 rgb 字符串
    const hex = color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const lighten = (c) => Math.min(255, c + (255 - c) * (percent / 100));
    return `rgb(${lighten(r)}, ${lighten(g)}, ${lighten(b)})`;
}
_renderBarChart(typeData) {
    const container = document.getElementById('chart-content-bar');
    if (!container) return;
    container.innerHTML = '';

    if (!typeData.length) {
        container.innerHTML = '<div class="chart-empty"><p>暂无数据</p></div>';
        return;
    }

    const maxValue = Math.max(...typeData.map(d => d.count));
    const total = typeData.reduce((sum, d) => sum + d.count, 0);
    const displayTypes = typeData.slice(0, 8); // 最多显示8种

    const chartDiv = document.createElement('div');
    chartDiv.className = 'bar-chart-container';

    const barsDiv = document.createElement('div');
    barsDiv.className = 'bar-chart-bars';
    displayTypes.forEach(item => {
        const height = maxValue > 0 ? (item.count / maxValue * 100) : 0;
        const bar = document.createElement('div');
        bar.className = 'bar-chart-bar';
        bar.style.setProperty('--bar-color', item.color);
        bar.style.setProperty('--bar-color-light', this.lightenColor(item.color, 30));
        bar.style.height = height + '%';
        bar.dataset.type = item.name;
        bar.dataset.count = item.count;

        const valueSpan = document.createElement('div');
        valueSpan.className = 'bar-chart-value';
        valueSpan.textContent = item.count;
        bar.appendChild(valueSpan);
        barsDiv.appendChild(bar);
    });

    const labelsDiv = document.createElement('div');
    labelsDiv.className = 'bar-chart-labels';
    displayTypes.forEach(item => {
        const label = document.createElement('div');
        label.className = 'bar-chart-label';
        label.textContent = item.name;
        labelsDiv.appendChild(label);
    });

    chartDiv.appendChild(barsDiv);
    chartDiv.appendChild(labelsDiv);
    container.appendChild(chartDiv);

    // 更新卡片头信息
    const card = container.closest('.stats-chart-card');
    if (card) {
        const valEl = card.querySelector('.chart-value');
        if (valEl) valEl.textContent = total;
        const trendEl = card.querySelector('.chart-trend');
        if (trendEl) {
            trendEl.innerHTML = `<span>📊</span><span>${typeData.length}类</span>`;
            trendEl.className = 'chart-trend trend-neutral';
        }
    }

    // 图例
    const legend = document.getElementById('chart-legend-bar');
    if (legend) {
        legend.innerHTML = displayTypes.map(item => `
            <div class="legend-item" data-type="${item.name}">
                <div class="legend-color" style="background: ${item.color};"></div>
                <span>${item.name}: ${item.count}</span>
            </div>
        `).join('');
    }

    this._setupBarChartHover();
}
_renderPieChart(typeData, total) {
    const container = document.getElementById('chart-content-pie');
    if (!container) return;
    container.innerHTML = '';

    if (!typeData.length) {
        container.innerHTML = '<div class="chart-empty"><p>暂无数据</p></div>';
        return;
    }

    // 合并少量类型，最多显示5种 + “其他”
    let mainTypes = typeData.slice(0, 5);
    const otherCount = typeData.slice(5).reduce((sum, t) => sum + t.count, 0);
    if (otherCount > 0) {
        mainTypes.push({ name: '其他', count: otherCount, color: '#6C757D' });
    }

    const chartDiv = document.createElement('div');
    chartDiv.className = 'pie-chart-container';
    let startAngle = 0;
    const slices = mainTypes.map(item => {
        const angle = (item.count / total) * 360;
        const endAngle = startAngle + angle;
        const startRad = (startAngle - 90) * Math.PI / 180;
        const endRad = (endAngle - 90) * Math.PI / 180;
        const x1 = 50 + 40 * Math.cos(startRad);
        const y1 = 50 + 40 * Math.sin(startRad);
        const x2 = 50 + 40 * Math.cos(endRad);
        const y2 = 50 + 40 * Math.sin(endRad);
        const largeArc = angle > 180 ? 1 : 0;
        const path = `M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`;
        const sliceHtml = `<path d="${path}" fill="${item.color}" stroke="white" stroke-width="1.5" data-type="${item.name}" data-count="${item.count}" data-percent="${((item.count/total)*100).toFixed(1)}"/>`;
        startAngle = endAngle;
        return sliceHtml;
    }).join('');

    chartDiv.innerHTML = `
        <svg class="pie-chart-svg" viewBox="0 0 100 100">${slices}</svg>
        <div class="pie-chart-center">
            <div class="center-value">${total}</div>
            <div class="center-label">总记录</div>
        </div>
    `;
    container.appendChild(chartDiv);

    const card = container.closest('.stats-chart-card');
    if (card) {
        const valEl = card.querySelector('.chart-value');
        if (valEl) valEl.textContent = total;
        const trendEl = card.querySelector('.chart-trend');
        if (trendEl) {
            trendEl.innerHTML = `<span>📊</span><span>${typeData.length}类</span>`;
            trendEl.className = 'chart-trend trend-neutral';
        }
    }

    const legend = document.getElementById('chart-legend-pie');
    if (legend) {
        legend.innerHTML = mainTypes.map(item => `
            <div class="legend-item" data-type="${item.name}">
                <div class="legend-color" style="background: ${item.color};"></div>
                <span>${item.name}: ${item.count}</span>
            </div>
        `).join('');
    }

    this._setupPieChartHover();
}
_setupBarChartHover() {
    const bars = document.querySelectorAll('.bar-chart-bar');
    const tooltip = this._getTooltip();
    bars.forEach(bar => {
        bar.addEventListener('mouseenter', e => {
            const type = bar.dataset.type;
            const count = bar.dataset.count;
            const color = getTypeColorFromCSS(type);
            tooltip.innerHTML = `<div style="font-weight:700;color:${color}">${type}</div><div style="font-size:11px;">${count} 条记录</div>`;
            tooltip.style.opacity = '1';
        });
        bar.addEventListener('mousemove', e => {
            tooltip.style.left = e.clientX + 'px';
            tooltip.style.top = (e.clientY - 40) + 'px';
        });
        bar.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
        });
    });
}

_setupPieChartHover() {
    const slices = document.querySelectorAll('.pie-chart-svg path');
    const centerValue = document.querySelector('.center-value');
    const centerLabel = document.querySelector('.center-label');
    const tooltip = this._getTooltip();
    slices.forEach(slice => {
        slice.addEventListener('mouseenter', e => {
            const type = slice.dataset.type;
            const count = slice.dataset.count;
            const percent = slice.dataset.percent;
            const color = type === '其他' ? '#6C757D' : getTypeColorFromCSS(type);
            tooltip.innerHTML = `<div style="font-weight:700;color:${color}">${type}</div><div style="font-size:11px;">${count} 条记录 (${percent}%)</div>`;
            tooltip.style.opacity = '1';
            if (centerValue && centerLabel) {
                centerValue.textContent = count;
                centerValue.style.color = color;
                centerLabel.textContent = type;
            }
        });
        slice.addEventListener('mousemove', e => {
            tooltip.style.left = e.clientX + 'px';
            tooltip.style.top = (e.clientY - 40) + 'px';
        });
        slice.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
            if (centerValue && centerLabel) {
                centerValue.textContent = this._currentStatsData?.total || 0;
                centerValue.style.color = '';
                centerLabel.textContent = '总记录';
            }
        });
    });
}

_getTooltip() {
    let tooltip = document.querySelector('.chart-tooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.className = 'chart-tooltip';
        document.body.appendChild(tooltip);
    }
    return tooltip;
}

/**
 * 获取符合当前统计视图筛选条件（日期范围 + 类型选择）的记录
 */
_getStatsFilteredRecords() {
    let records = this.allRecords; // 统计视图使用的是全部数据（已加载到 this.allRecordsUnfiltered）
    const start = this.startDate ? new Date(this.startDate + 'T00:00:00') : null;
    const end = this.endDate ? new Date(this.endDate + 'T23:59:59') : null;
    const selectedTypes = this.selectedStatTypes; // Set

    return records.filter(r => {
        const dateObj = parseLifelogDate(r.lifelog_created);
        if (!dateObj) return false;
        if (start && dateObj < start) return false;
        if (end && dateObj > end) return false;
        if (selectedTypes.size > 0 && !selectedTypes.has(r.lifelog_type)) return false;
        return true;
    });
}
// ========== 微信样式专用右键菜单（控制左右显示，不写块属性） ==========
showWechatContextMenu(event, record, rowElement) {
    // 移除已存在的菜单
    const existingMenu = document.querySelector('.wechat-context-menu');
    if (existingMenu) existingMenu.remove();
    
    const currentDirection = record.direction || 'left';
    const isLeft = currentDirection === 'left';
    
    const menu = document.createElement('div');
    menu.className = 'wechat-context-menu b3-menu';
    menu.style.position = 'fixed';
    menu.style.left = event.clientX + 'px';
    menu.style.top = event.clientY + 'px';
    menu.style.zIndex = '9999';
// 【修改】使用更美观的气泡对话框图标
    menu.innerHTML = `
<div class="b3-menu__items">
    <div class="b3-menu__item" data-action="set-left" ${isLeft ? 'style="background-color:var(--b3-theme-primary-light);"' : ''}>
        <svg class="b3-menu__icon" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" fill="currentColor"/>
        </svg>
        <span class="b3-menu__label">显示在左侧 ${isLeft ? '✓' : ''}</span>
    </div>
    <div class="b3-menu__item" data-action="set-right" ${!isLeft ? 'style="background-color:var(--b3-theme-primary-light);"' : ''}>
        <svg class="b3-menu__icon" viewBox="0 0 24 24">
            <path d="M4 2h16c1.1 0 2 .9 2 2v18l-4-4H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm0 14h14l2 2V4H4v12z" fill="currentColor"/>
        </svg>
        <span class="b3-menu__label">显示在右侧 ${!isLeft ? '✓' : ''}</span>
    </div>
    <div class="b3-menu__separator"></div>
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
    
    // 设置左侧
    menu.querySelector('[data-action="set-left"]').addEventListener('click', async () => {
        // 保存到插件配置，不写块属性
        await this.plugin.store.setWechatDirection(record.id, 'left');
        record.direction = 'left';
        rowElement.classList.remove('right');
        rowElement.classList.add('left');
        // 更新头像样式
        this.updateWechatAvatar(rowElement, 'left');
        menu.remove();
        showMessage('已设置为左侧显示');
    });
    
    // 设置右侧
    menu.querySelector('[data-action="set-right"]').addEventListener('click', async () => {
        // 保存到插件配置，不写块属性
        await this.plugin.store.setWechatDirection(record.id, 'right');
        record.direction = 'right';
        rowElement.classList.remove('left');
        rowElement.classList.add('right');
        // 更新头像样式
        this.updateWechatAvatar(rowElement, 'right');
        menu.remove();
        showMessage('已设置为右侧显示');
    });
    
    // 编辑
    menu.querySelector('[data-action="edit"]').addEventListener('click', () => {
        this.plugin.showEditBlockDialog(record.id, record.content);
        menu.remove();
    });
    
    // 打开文档
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

// 辅助方法：更新微信消息行的头像
updateWechatAvatar(rowElement, direction) {
    const avatarDiv = rowElement.querySelector('.wechat-avatar');
    if (!avatarDiv) return;
    
    if (direction === 'left') {
        avatarDiv.classList.remove('wechat-avatar-self');
        avatarDiv.classList.add('wechat-avatar-opposite');
        const oppositeAvatarPath = this.plugin.store.getOppositeAvatar();
        if (oppositeAvatarPath) {
            avatarDiv.innerHTML = `<img src="${oppositeAvatarPath.startsWith('http') ? oppositeAvatarPath : '/' + oppositeAvatarPath}" onerror="this.parentElement.innerHTML='<svg><use xlink:href=\\'#iconUser\\'></use></svg>'">`;
        } else {
            avatarDiv.innerHTML = `<svg><use xlink:href="#iconUser"></use></svg>`;
        }
    } else {
        avatarDiv.classList.remove('wechat-avatar-opposite');
        avatarDiv.classList.add('wechat-avatar-self');
        const selfAvatarPath = this.plugin.store.getAvatar();
        if (selfAvatarPath) {
            avatarDiv.innerHTML = `<img src="${selfAvatarPath.startsWith('http') ? selfAvatarPath : '/' + selfAvatarPath}" onerror="this.parentElement.innerHTML='<svg><use xlink:href=\\'#iconUser\\'></use></svg>'">`;
        } else {
            avatarDiv.innerHTML = `<svg><use xlink:href="#iconUser"></use></svg>`;
        }
    }
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

        if (!this.plugin.isMobile) {
            // 桌面版：三栏布局
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
            this.renderStyleSwitcher(); // 新增：渲染样式切换按钮
            this.renderMiddlePanel();
            this.renderCalendarAndTypes();
        } else {
            // 移动版：简化布局，只显示中间面板
            const middle = document.createElement('div');
            middle.className = 'timeline-middle-panel timeline-middle-panel--mobile';
            this.container.appendChild(middle);
            this.middlePanel = middle;

            // 添加简易头部
            const header = document.createElement('div');
            header.className = 'timeline-mobile-header';
            const title = document.createElement('span');
            title.textContent = this.plugin.store.getCustomTitle() || '时光笺';
            const refreshBtn = document.createElement('button');
            refreshBtn.className = 'b3-button b3-button--text';
            refreshBtn.innerHTML = '<svg><use xlink:href="#iconRefresh"></use></svg>';
            refreshBtn.onclick = () => this.refresh();
            header.appendChild(title);
            header.appendChild(refreshBtn);
            this.middlePanel.appendChild(header);

            this.renderMiddlePanel();
        }
    }

    renderHeader() {
        const header = document.createElement('div');
        header.className = 'timeline-header';

        const avatar = document.createElement('div');
        avatar.className = 'timeline-avatar';
        avatar.setAttribute('title', '点击上传头像');
        avatar.onclick = () => this.plugin.uploadAvatar(avatar, 'self'); // 修改：指定上传自己头像

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

    // ========== 设置对话框 ==========
    showSettingsDialog() {
        const modeOrder = [
            TimelineView.MODE_LIST,
            TimelineView.MODE_MOMENTS,
            TimelineView.MODE_TIMELINE,
            TimelineView.MODE_TIMELINE_V2,
            TimelineView.MODE_WECHAT  // 新增微信样式
        ];
        const currentIndex = modeOrder.indexOf(this.displayMode);
        const nextMode = modeOrder[(currentIndex + 1) % modeOrder.length];
        const nextModeText = {
            [TimelineView.MODE_LIST]: '列表样式',
            [TimelineView.MODE_MOMENTS]: '朋友圈样式',
            [TimelineView.MODE_TIMELINE]: '时间日志样式',
            [TimelineView.MODE_TIMELINE_V2]: '时间轴样式',
            [TimelineView.MODE_WECHAT]: '聊天样式'   // 新增
        }[nextMode];

        const currentTimeMode = this.timeMode;
        const startChecked = currentTimeMode === 'start' ? 'checked' : '';
        const endChecked = currentTimeMode === 'end' ? 'checked' : '';

        const showSwitcherChecked = this.plugin.store.getShowStyleSwitcher() ? 'checked' : '';
        // 新增：碎碎念展示配置
        const showDiaryChecked = this.plugin.store.getShowDiaryInMoments() ? 'checked' : '';

        const dialog = new Dialog({
            title: '时光笺设置',
            content: `
                <div style="padding: 20px;">
                    <div class="b3-dialog__label">标题</div>
                    <input class="b3-text-field" id="titleInput" value="${this.plugin.store.getCustomTitle() || ''}" placeholder="默认：时光笺">
                    <div class="b3-dialog__label" style="margin-top: 12px;">副标题</div>
                    <input class="b3-text-field" id="subtitleInput" value="${this.plugin.store.getCustomSubtitle() || ''}" placeholder="默认：今日更新">
                    
                    <div class="b3-dialog__label" style="margin-top: 12px;">记录时间模式</div>
                    <div style="margin: 8px 0 16px 0; display: flex; flex-direction: column; gap: 8px;">
                        <label style="display: flex; align-items: center; gap: 6px; cursor: pointer; line-height: 1.4;">
                            <input type="radio" name="timeMode" value="start" ${startChecked} 
                                   style="flex-shrink: 0; width: 14px; height: 14px; margin: 0; vertical-align: middle;">
                            <span style="flex: 1;">开始模式（节点时间为开始时间）</span>
                        </label>
                        <label style="display: flex; align-items: center; gap: 6px; cursor: pointer; line-height: 1.4;">
                            <input type="radio" name="timeMode" value="end" ${endChecked} 
                                   style="flex-shrink: 0; width: 14px; height: 14px; margin: 0; vertical-align: middle;">
                            <span style="flex: 1;">结束模式（节点时间为结束时间）</span>
                        </label>
                    </div>

                    <!-- 新增：显示样式切换按钮的复选框 -->
                    <div style="margin-top: 16px; display: flex; align-items: center;">
                        <input type="checkbox" id="showStyleSwitcherCheckbox" ${showSwitcherChecked}>
                        <label for="showStyleSwitcherCheckbox" style="margin-left: 6px;">显示样式切换按钮（左侧面板显示）</label>
                    </div>

                    <!-- 新增：朋友圈展示碎碎念复选框 -->
                    <div style="margin-top: 16px; display: flex; align-items: center;">
                        <input type="checkbox" id="showDiaryInMomentsCheckbox" ${showDiaryChecked}>
                        <label for="showDiaryInMomentsCheckbox" style="margin-left: 6px;">在朋友圈样式中展示“碎碎念”卡片（勾选后替代普通记录）</label>
                    </div>

                    <!-- 图表显示控制 -->
                    <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--b3-border-color);">
                        <div class="b3-dialog__label">统计视图 - 图表显示</div>
                        <div style="margin: 8px 0; display: flex; flex-direction: column; gap: 8px;">
                            <label style="display: flex; align-items: center; gap: 6px; cursor: pointer;">
                                <input type="checkbox" id="showBarChartCheckbox" ${this.plugin.store.getShowBarChart() ? 'checked' : ''}
                                       style="flex-shrink: 0; width: 14px; height: 14px; margin: 0;">
                                <span style="flex: 1;">显示类型分布（柱状图）</span>
                            </label>
                            <label style="display: flex; align-items: center; gap: 6px; cursor: pointer;">
                                <input type="checkbox" id="showPieChartCheckbox" ${this.plugin.store.getShowPieChart() ? 'checked' : ''}
                                       style="flex-shrink: 0; width: 14px; height: 14px; margin: 0;">
                                <span style="flex: 1;">显示记录占比（饼图）</span>
                            </label>
                        </div>
                    </div>

                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
                        <div>
                            <button class="b3-button" id="toggleStyleBtn">切换到${nextModeText}</button>
                            <button class="b3-button" id="statisticsBtn" style="margin-left:8px;">统计视图</button>
                        </div>
                        <div>
                            <button class="b3-button b3-button--cancel" id="cancelSettingsBtn">取消</button>
                            <button class="b3-button b3-button--outline" id="saveSettingsBtn">保存</button>
                        </div>
                    </div>
                </div>
            `,
            width: '500px',
        });

        setTimeout(() => {
            const cancelBtn = dialog.element.querySelector('#cancelSettingsBtn');
            const saveBtn = dialog.element.querySelector('#saveSettingsBtn');
            const toggleBtn = dialog.element.querySelector('#toggleStyleBtn');
            const statisticsBtn = dialog.element.querySelector('#statisticsBtn');

            cancelBtn.addEventListener('click', () => dialog.destroy());

            saveBtn.addEventListener('click', async () => {
                const title = (dialog.element.querySelector('#titleInput')?.value || '').trim();
                const subtitle = (dialog.element.querySelector('#subtitleInput')?.value || '').trim();
                const timeMode = dialog.element.querySelector('input[name="timeMode"]:checked')?.value || 'start';
                const showSwitcher = dialog.element.querySelector('#showStyleSwitcherCheckbox').checked;
                const showDiary = dialog.element.querySelector('#showDiaryInMomentsCheckbox').checked; // 新增
                const showBarChart = dialog.element.querySelector('#showBarChartCheckbox').checked;
                const showPieChart = dialog.element.querySelector('#showPieChartCheckbox').checked;

                await this.plugin.store.setShowBarChart(showBarChart);
                await this.plugin.store.setShowPieChart(showPieChart);
                await this.plugin.store.setShowDiaryInMoments(showDiary); // 新增

                await this.plugin.store.setCustomTitle(title);
                await this.plugin.store.setCustomSubtitle(subtitle);
                await this.plugin.store.setTimeMode(timeMode);
                await this.plugin.store.setShowStyleSwitcher(showSwitcher);

                this.timeMode = timeMode;
                const titleEl = this.leftPanel.querySelector('.timeline-title-text');
                const subtitleEl = this.leftPanel.querySelector('.timeline-subtitle-text');
                if (titleEl) titleEl.textContent = title || '时光笺';
                if (subtitleEl) subtitleEl.textContent = subtitle || '今日更新';

                // 重新渲染样式切换按钮（根据新配置显示或隐藏）
                this.renderStyleSwitcher();

                this.renderMiddlePanel();
                dialog.destroy();
                showMessage('设置已保存');
            });

            toggleBtn.addEventListener('click', () => {
                this.setDisplayMode(nextMode);
                dialog.destroy();
                showMessage(`已切换到${nextModeText}`);
            });

            statisticsBtn.addEventListener('click', () => {
                this.setDisplayMode(TimelineView.MODE_STATISTICS);
                dialog.destroy();
                showMessage('已切换到统计视图');
            });
        }, 0);
    }

    renderStats() {
        const s = this.yearStats; // 始终使用本年统计
        const grid = document.createElement('div');
        grid.className = 'stats-grid';

        const items = [
            { label: '本年', value: s.total },      // 原“总记录”改为“本年”
            { label: '本月', value: s.month },
            { label: '今日', value: s.today },
            { label: '连续', value: s.streak },
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
                const cnt = this.yearDailyCounts.get(ds) || 0;   // 使用本年数据
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

    // ========== 渲染样式切换按钮 ==========
    renderStyleSwitcher() {
        // 如果已存在则移除
        const existing = this.leftPanel.querySelector('.timeline-style-switcher');
        if (existing) existing.remove();

        // 如果配置为不显示，直接返回
        if (!this.plugin.store.getShowStyleSwitcher()) return;

        const switcher = document.createElement('div');
        switcher.className = 'timeline-style-switcher';

        const modes = [
            { mode: TimelineView.MODE_LIST, icon: 'fa-list', label: '列表样式' },
            { mode: TimelineView.MODE_MOMENTS, icon: 'fa-images', label: '朋友圈样式' },
            { mode: TimelineView.MODE_TIMELINE, icon: 'fa-clock', label: '时间日志样式' },
            { mode: TimelineView.MODE_TIMELINE_V2, icon: 'fa-timeline', label: '时间轴样式' },
            { mode: TimelineView.MODE_WECHAT, icon: 'fa-bullhorn', label: '聊天样式' },  // 新增
            { mode: TimelineView.MODE_STATISTICS, icon: 'fa-chart-pie', label: '统计视图' }
        ];

        modes.forEach(item => {
            const btn = document.createElement('button');
            btn.className = `timeline-style-btn ${this.displayMode === item.mode ? 'active' : ''}`;
            btn.setAttribute('title', item.label);
            btn.innerHTML = `<i class="fas ${item.icon}"></i>`;
            btn.addEventListener('click', () => {
                this.setDisplayMode(item.mode);
            });
            switcher.appendChild(btn);
        });

        this.leftPanel.appendChild(switcher);
    }

    // ========== 辅助函数 ==========
    formatAbsoluteTime(date) {
        if (!date) return '';
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${year}年${month}月${day}日 ${hours}:${minutes}`;
    }

    // 新增：格式化时间为 YYYY-MM-DD HH:MM（用于碎碎念）
    formatAbsoluteTimeYYYYMMDD(date) {
        if (!date) return '';
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}`;
    }

    // 新增：格式化时间戳（created 字段）为 YYYY-MM-DD HH:MM
    formatTimestamp(timestamp) {
        const date = new Date(timestamp);
        return this.formatAbsoluteTimeYYYYMMDD(date);
    }

    formatDuration(minutes) {
        minutes = Math.round(minutes); 
        if (minutes < 60) {
            return minutes + '分';
        } else {
            const hours = Math.floor(minutes / 60);
            const mins = minutes % 60;
            if (mins === 0) {
                return hours + '时';
            } else {
                return hours + '时' + mins + '分';
            }
        }
    }

    /**
     * 获取给定记录在全局时间轴上的下一条记录（用于开始模式跨天）
     * @param {Object} record - 当前记录
     * @returns {Object|null} 下一条记录，如果没有则返回 null
     */
    _getNextRecord(record) {
        const index = this.globalSorted.findIndex(r => r.id === record.id);
        if (index !== -1 && index < this.globalSorted.length - 1) {
            return this.globalSorted[index + 1];
        }
        return null;
    }

    /**
     * 获取给定记录在全局时间轴上的前一条记录（用于结束模式跨天）
     * @param {Object} record - 当前记录
     * @returns {Object|null} 前一条记录，如果没有则返回 null
     */
    _getPreviousRecord(record) {
        const index = this.globalSorted.findIndex(r => r.id === record.id);
        if (index > 0) {
            return this.globalSorted[index - 1];
        }
        return null;
    }

    // ========== 获取最早记录日期 ==========
    getEarliestDate() {
        let earliest = null;
        for (const r of this.allRecords) {
            const d = parseLifelogDate(r.lifelog_created);
            if (d && (!earliest || d < earliest)) {
                earliest = d;
            }
        }
        return earliest ? formatDate(earliest) : formatDate(new Date());
    }

    // 新增：从指定记录集获取最早日期
    getEarliestDateFromRecords(records) {
        let earliest = null;
        for (const r of records) {
            const d = parseLifelogDate(r.lifelog_created);
            if (d && (!earliest || d < earliest)) {
                earliest = d;
            }
        }
        return earliest ? formatDate(earliest) : formatDate(new Date());
    }

    // ========== 获取本周的周一和周日 ==========
    getThisWeekRange() {
        const today = new Date();
        const dayOfWeek = today.getDay(); // 0=周日, 1=周一, ..., 6=周六
        const diffToMonday = (dayOfWeek === 0 ? 6 : dayOfWeek - 1);
        const monday = new Date(today);
        monday.setDate(today.getDate() - diffToMonday);
        monday.setHours(0, 0, 0, 0);
        const sunday = new Date(monday);
        sunday.setDate(monday.getDate() + 6);
        return {
            start: formatDate(monday),
            end: formatDate(sunday)
        };
    }

    // ========== 构建全局排序数组 ==========
    _buildGlobalSorted(records) {
        return records
            .map(r => ({ ...r, dateObj: parseLifelogDate(r.lifelog_created) }))
            .filter(r => r.dateObj)
            .sort((a, b) => a.dateObj - b.dateObj);
    }

    // ========== 统计数据处理 ==========
    // 获取当前日期范围内的所有类型（用于类型按钮）
    getTypesInDateRange() {
        let records = this.allRecords;
        if (this.startDate && this.endDate) {
            const start = new Date(this.startDate + 'T00:00:00');
            const end = new Date(this.endDate + 'T23:59:59');
            records = records.filter(r => {
                const d = parseLifelogDate(r.lifelog_created);
                return d && d >= start && d <= end;
            });
        }
        const types = new Set();
        records.forEach(r => {
            if (r.lifelog_type) types.add(r.lifelog_type);
        });
        return Array.from(types).sort();
    }

    // 计算指定筛选条件下的统计数据
    computeStatistics() {
        // 如果没有全局排序数据或记录数少于2，则返回空
        if (!this.globalSorted || this.globalSorted.length < 2) {
            return {
                total: 0,
                year: 0,
                month: 0,
                week: 0,
                today: 0,
                typeData: []
            };
        }

        // 获取筛选条件
        const start = this.startDate ? new Date(this.startDate + 'T00:00:00') : null;
        const end = this.endDate ? new Date(this.endDate + 'T23:59:59') : null;
        const selectedTypes = this.selectedStatTypes; // Set

        // 判断记录是否在筛选范围内
        const isRecordInRange = (record) => {
            const dateObj = record.dateObj;
            if (!dateObj) return false;
            if (start && dateObj < start) return false;
            if (end && dateObj > end) return false;
            if (selectedTypes.size > 0 && !selectedTypes.has(record.lifelog_type)) return false;
            return true;
        };

        const isStartMode = this.timeMode === 'start';

        let total = 0;
        let yearTotal = 0;
        let monthTotal = 0;
        let weekTotal = 0;
        let todayTotal = 0;
        const typeDurations = new Map(); // type -> 分钟

        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth();
        // 本周开始（周一）
        const monday = new Date(now);
        monday.setDate(now.getDate() - (now.getDay() === 0 ? 6 : now.getDay() - 1));
        monday.setHours(0, 0, 0, 0);
        const weekEnd = new Date(monday);
        weekEnd.setDate(monday.getDate() + 7);
        const todayStart = new Date(now);
        todayStart.setHours(0, 0, 0, 0);
        const todayEnd = new Date(now);
        todayEnd.setHours(23, 59, 59, 999);

        // 遍历全局排序的相邻记录对
        for (let i = 0; i < this.globalSorted.length - 1; i++) {
            const r1 = this.globalSorted[i];
            const r2 = this.globalSorted[i + 1];
            const diffMs = r2.dateObj - r1.dateObj;
            const diffMinutes = diffMs / 60000;
            if (diffMinutes <= 0) continue;

            // 确定该时间间隔应归属于哪条记录
            const targetRecord = isStartMode ? r1 : r2;
            // 检查目标记录是否在筛选范围内
            if (!isRecordInRange(targetRecord)) continue;

            total += diffMinutes;

            const type = targetRecord.lifelog_type || '未分类';
            typeDurations.set(type, (typeDurations.get(type) || 0) + diffMinutes);

            // 按时间范围统计（基于归属记录的时间）
            const date = targetRecord.dateObj;
            if (date.getFullYear() === currentYear) yearTotal += diffMinutes;
            if (date.getFullYear() === currentYear && date.getMonth() === currentMonth) monthTotal += diffMinutes;
            if (date >= monday && date < weekEnd) weekTotal += diffMinutes;
            if (date >= todayStart && date <= todayEnd) todayTotal += diffMinutes;
        }

        // 转换为数组
        const typeData = Array.from(typeDurations.entries()).map(([type, minutes]) => ({
            name: type,
            value: minutes,
            itemStyle: { color: getTypeColorFromCSS(type) }
        })).sort((a, b) => b.value - a.value);

        return {
            total,
            year: yearTotal,
            month: monthTotal,
            week: weekTotal,
            today: todayTotal,
            typeData
        };
    }

    // ========== 渲染统计视图（支持多选类型） ==========
renderStatisticsPanel() {
    this.middlePanel.innerHTML = '';

    // 如果是第一次进入且未设置日期范围，则默认设为本周
    if (!this.startDate || !this.endDate) {
        const range = this.getThisWeekRange();
        this.startDate = range.start;
        this.endDate = range.end;
    }

    // 获取当前日期范围内的所有类型
    const currentTypes = this.getTypesInDateRange();

    // 清理已选中的类型：移除不在 currentTypes 中的类型（防止残留）
    this.selectedStatTypes = new Set(
        Array.from(this.selectedStatTypes).filter(t => currentTypes.includes(t))
    );

    // 获取当前筛选条件下的统计数据（时长分布）
    const stats = this.computeStatistics();
    if (!stats) {
        this.middlePanel.innerHTML = '<div class="timeline-empty">没有足够的记录进行统计</div>';
        return;
    }

    // ---------- 根据当前筛选条件计算记录数、类型数、天数 ----------
    let filteredRecords = this.allRecords;
    if (this.startDate && this.endDate) {
        const start = new Date(this.startDate + 'T00:00:00');
        const end = new Date(this.endDate + 'T23:59:59');
        filteredRecords = filteredRecords.filter(r => {
            const d = parseLifelogDate(r.lifelog_created);
            return d && d >= start && d <= end;
        });
    }
    if (this.selectedStatTypes.size > 0) {
        filteredRecords = filteredRecords.filter(r => this.selectedStatTypes.has(r.lifelog_type));
    }
    
    const totalRecords = filteredRecords.length;                          // 总记录数
    const usedTypesCount = new Set(filteredRecords.map(r => r.lifelog_type).filter(Boolean)).size;  // 使用类型数
    const daysCount = new Set(filteredRecords.map(r => {
        const d = parseLifelogDate(r.lifelog_created);
        return d ? formatDate(d) : null;
    }).filter(Boolean)).size;                                              // 记录天数

    const container = document.createElement('div');
    container.className = 'north-statistics-panel';

    // ----- 头部：日期范围 + 重置按钮 -----
    const headerBar = document.createElement('div');
    headerBar.className = 'north-header-bar';

    const dateRangeDiv = document.createElement('div');
    dateRangeDiv.className = 'north-date-range';
    dateRangeDiv.innerHTML = `
        <i class="far fa-calendar-alt"></i>
        <input type="date" class="north-date-input" id="stat-start-date" value="${this.startDate || ''}">
        <span>-</span>
        <i class="far fa-calendar-alt"></i>
        <input type="date" class="north-date-input" id="stat-end-date" value="${this.endDate || ''}">
        <button class="b3-button" id="apply-date-filter" style="margin-left:8px;">应用</button>
    `;

    const resetBtn = document.createElement('button');
    resetBtn.className = 'north-reset-btn';
    resetBtn.innerHTML = '<i class="fas fa-undo"></i> 重置';

    headerBar.appendChild(dateRangeDiv);
    headerBar.appendChild(resetBtn);
    container.appendChild(headerBar);

    // ----- 类型筛选按钮（多选） -----
    const filterSection = document.createElement('div');
    filterSection.className = 'north-filter-section';

    const filterRow = document.createElement('div');
    filterRow.className = 'north-filter-row';

    const filterLabel = document.createElement('span');
    filterLabel.className = 'north-filter-label';
    filterLabel.textContent = '类型';
    filterRow.appendChild(filterLabel);

    const btnGroup = document.createElement('div');
    btnGroup.className = 'north-btn-group';

    const allBtn = document.createElement('button');
    allBtn.className = `north-filter-btn ${this.selectedStatTypes.size === 0 ? 'north-active' : ''}`;
    allBtn.textContent = '全部';
    allBtn.addEventListener('click', () => {
        this.selectedStatTypes.clear();
        this.renderStatisticsPanel();
    });
    btnGroup.appendChild(allBtn);

    currentTypes.forEach(type => {
        const btn = document.createElement('button');
        const isActive = this.selectedStatTypes.has(type);
        btn.className = `north-filter-btn ${isActive ? 'north-active' : ''}`;
        btn.textContent = type;
        btn.addEventListener('click', () => {
            if (this.selectedStatTypes.has(type)) {
                this.selectedStatTypes.delete(type);
            } else {
                this.selectedStatTypes.add(type);
            }
            this.renderStatisticsPanel();
        });
        btnGroup.appendChild(btn);
    });

    const clearBtn = document.createElement('button');
    clearBtn.className = 'north-filter-btn';
    clearBtn.textContent = '清除';
    clearBtn.addEventListener('click', () => {
        this.selectedStatTypes.clear();
        this.renderStatisticsPanel();
    });
    btnGroup.appendChild(clearBtn);

    filterRow.appendChild(btnGroup);
    filterSection.appendChild(filterRow);
    container.appendChild(filterSection);

    // ----- 时间统计卡片（原有时长统计） -----
    const timeStatsRow = document.createElement('div');
    timeStatsRow.className = 'north-time-stats';
    const cards = [
        { label: '总时长', value: this.formatDuration(stats.total) },
        { label: '本年', value: this.formatDuration(stats.year) },
        { label: '本月', value: this.formatDuration(stats.month) },
        { label: '本周', value: this.formatDuration(stats.week) },
        { label: '今日', value: this.formatDuration(stats.today) }
    ];
    cards.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'north-time-stat-item';
        cardDiv.innerHTML = `
            <div class="north-time-stat-label">${card.label}</div>
            <div class="north-time-stat-value">${card.value}</div>
        `;
        timeStatsRow.appendChild(cardDiv);
    });
    container.appendChild(timeStatsRow);

    // ----- 新增统计卡片：总记录、使用类型、记录天数 -----
    const additionalStatsRow = document.createElement('div');
    additionalStatsRow.className = 'north-time-stats';  // 复用样式，与上方保持一致
    additionalStatsRow.style.marginTop = '15px';        // 与上方稍作间隔

    const extraItems = [
        { label: '总记录', value: totalRecords },
        { label: '使用类型', value: usedTypesCount },
        { label: '记录天数', value: daysCount }
    ];
    extraItems.forEach(item => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'north-time-stat-item';
        cardDiv.innerHTML = `
            <div class="north-time-stat-label">${item.label}</div>
            <div class="north-time-stat-value">${item.value}</div>
        `;
        additionalStatsRow.appendChild(cardDiv);
    });
    container.appendChild(additionalStatsRow);

    // ----- 类型分布图例（原饼图位置，现只保留图例） -----
    const chartBox = document.createElement('div');
    chartBox.className = 'north-chart-box';

    const chartTitle = document.createElement('div');
    chartTitle.className = 'north-chart-title';
    chartTitle.textContent = '类型分布';
    chartBox.appendChild(chartTitle);

    // 图例列表（保留）
    const legendList = document.createElement('div');
    legendList.className = 'north-legend-list';

    stats.typeData.forEach(item => {
        const legendItem = document.createElement('div');
        legendItem.className = 'north-legend-item';
        const dot = document.createElement('div');
        dot.className = 'north-legend-dot';
        dot.style.backgroundColor = item.itemStyle.color;
        legendItem.appendChild(dot);
        const nameSpan = document.createElement('span');
        nameSpan.textContent = item.name;
        legendItem.appendChild(nameSpan);
        const durationSpan = document.createElement('span');
        durationSpan.style.marginLeft = 'auto';
        durationSpan.style.color = 'var(--b3-theme-on-surface-light)';
        durationSpan.textContent = this.formatDuration(item.value);
        legendItem.appendChild(durationSpan);
        legendList.appendChild(legendItem);
    });

    chartBox.appendChild(legendList);
    container.appendChild(chartBox);

    this.middlePanel.appendChild(container);

    // 绑定日期范围事件
    const applyBtn = container.querySelector('#apply-date-filter');
    const resetStatBtn = container.querySelector('.north-reset-btn');
    const startInput = container.querySelector('#stat-start-date');
    const endInput = container.querySelector('#stat-end-date');

    if (applyBtn) {
        applyBtn.addEventListener('click', () => {
            const start = startInput.value;
            const end = endInput.value;
            if (start && end) {
                this.startDate = start;
                this.endDate = end;
                this.renderStatisticsPanel();
            } else {
                showMessage('请选择开始和结束日期');
            }
        });
    }

    if (resetStatBtn) {
        resetStatBtn.addEventListener('click', async () => {
            if (!this.allRecordsUnfiltered) {
                await this.loadAllRecords();
                this.allRecords = this.allRecordsUnfiltered;
                this.dailyCounts = this.allDailyCountsUnfiltered;
            }
            const earliest = this.getEarliestDateFromRecords(this.allRecordsUnfiltered);
            const today = formatDate(new Date());
            this.startDate = earliest;
            this.endDate = today;
            this.selectedStatTypes.clear();
            this.renderStatisticsPanel();
        });
    }

// ========== 添加图表网格（类型分布柱状图 + 记录占比饼图） ==========
// ========== 添加图表网格（根据配置动态显示） ==========
    const showBar = this.plugin.store.getShowBarChart();
    const showPie = this.plugin.store.getShowPieChart();
    
    // 如果都不显示，直接跳过图表区域渲染
    if (!showBar && !showPie) {
        // 不添加 chartsGrid，保持原有布局
    } else {
        const chartsGrid = document.createElement('div');
        chartsGrid.className = 'north-stats-charts-grid';
        
        // 动态设置列数：只显示一个时占满整行
        if ((showBar && !showPie) || (!showBar && showPie)) {
            chartsGrid.classList.add('single-chart-mode');
        }
        
        container.appendChild(chartsGrid);
    
        // 定义两个图表卡片（按需渲染）
        const chartDefs = [];
        if (showBar) {
            chartDefs.push({ 
                id: 'bar', 
                title: '类型分布', 
                icon: '🏷️', 
                desc: '各类型记录数量', 
                color: '#4C6EF5' 
            });
        }
        if (showPie) {
            chartDefs.push({ 
                id: 'pie', 
                title: '记录占比', 
                icon: '📊', 
                desc: '各类记录占比分析', 
                color: '#FAB005' 
            });
        }
    
        chartDefs.forEach(def => {
            const card = document.createElement('div');
            card.className = 'stats-chart-card';
            card.id = `stats-chart-${def.id}`;
            card.innerHTML = `
            <div class="chart-header">
                <div class="chart-title">
                    <div class="chart-icon" style="background: linear-gradient(135deg, ${def.color}, ${this.lightenColor(def.color, 20)});">${def.icon}</div>
                    <div class="chart-text">
                        <h4>${def.title}</h4>
                        <p>${def.desc}</p>
                    </div>
                </div>
                <div class="chart-meta">
                    <div class="chart-value" id="chart-val-${def.id}">0</div>
                    <div class="chart-trend" id="chart-trend-${def.id}">↗️0%</div>
                </div>
            </div>
            <div class="chart-content" id="chart-content-${def.id}"></div>
            <div class="chart-legend" id="chart-legend-${def.id}"></div>
            `;
            chartsGrid.appendChild(card);
        });
    
        // 计算统计数据
        const statsRecords = this._getStatsFilteredRecords();
        const statsData = this._computeStatsData(statsRecords);
        this._currentStatsData = statsData;
    
        // 按需渲染图表
        if (showBar) {
            this._renderBarChart(statsData.typeData);
        }
        if (showPie) {
            this._renderPieChart(statsData.typeData, statsData.total);
        }
    }
}

    // 加载 ECharts 并渲染饼图
    loadEChartsAndRenderPie(container, data) {
        if (window.echarts) {
            this.renderPieChart(container, data);
            return;
        }

        // 动态加载 ECharts
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js';
        script.onload = () => {
            this.renderPieChart(container, data);
        };
        script.onerror = () => {
            console.error('ECharts 加载失败，使用 Canvas 备用绘制');
            // 降级方案：使用 Canvas 绘制简单饼图
            this.drawPieChartFallback(container, data);
        };
        document.head.appendChild(script);
    }

    renderPieChart(container, data) {
        if (!data || data.length === 0) {
            container.innerHTML = '<div style="text-align:center; padding:50px; color:var(--b3-theme-on-surface-light);">暂无数据</div>';
            return;
        }
        
        // 读取当前主题的标签颜色
        const labelColor = getComputedStyle(document.documentElement)
            .getPropertyValue('--b3-theme-on-surface').trim() || '#333333';
        
        const chart = echarts.init(container);
        const option = {
            tooltip: {
                trigger: 'item',
                formatter: '{b}: {c}分钟 ({d}%)'
            },
            legend: {
                show: false
            },
            series: [
                {
                    name: '类型分布',
                    type: 'pie',
                    radius: ['35%', '55%'],
                    center: ['50%', '50%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 7,
                        borderColor: '#fff',  // 白色边框，使块与块分开
                        borderWidth: 0
                    },
                    label: {
                        show: true,
                        position: 'outside',
                        formatter: '{b}\n{d}%',
                        fontSize: 12,
                        color: labelColor
                    },
                    labelLine: {
                        show: true,
                        length: 25,
                        length2: 20,
                        smooth: true
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: labelColor
                        },
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                            borderColor: '#fff',
                            borderWidth: 1
                        }
                    },
                    data: data
                }
            ]
        };
        chart.setOption(option);
        chart.resize();
    }

    drawPieChartFallback(container, data) {
        if (!data || data.length === 0) {
            container.innerHTML = '<div style="text-align:center; padding:50px; color:var(--b3-theme-on-surface-light);">暂无数据</div>';
            return;
        }
        // 获取主题文字颜色
        const textColor = getComputedStyle(document.documentElement).getPropertyValue('--b3-theme-on-surface').trim() || '#333';

        const canvas = document.createElement('canvas');
        canvas.width = container.clientWidth || 600;
        canvas.height = 400;
        container.innerHTML = '';
        container.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(width, height) * 0.3;

        let startAngle = -Math.PI / 2;
        const total = data.reduce((sum, d) => sum + d.value, 0);

        data.forEach(item => {
            const angle = (item.value / total) * 2 * Math.PI;
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, startAngle, startAngle + angle);
            ctx.closePath();
            ctx.fillStyle = item.itemStyle.color;
            ctx.fill();
            startAngle += angle;
        });

        // 绘制标签（简单绘制百分比）
        ctx.font = '12px sans-serif';
        ctx.fillStyle = textColor;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('备用视图', centerX, centerY + radius + 20);
    }

    // 根据显示模式分发
    renderMiddlePanel() {
        if (this.displayMode === TimelineView.MODE_LIST) {
            this.renderListPanel();
        } else if (this.displayMode === TimelineView.MODE_MOMENTS) {
            this.renderMomentsPanel();
        } else if (this.displayMode === TimelineView.MODE_TIMELINE) {
            this.renderTimelinePanel();
        } else if (this.displayMode === TimelineView.MODE_TIMELINE_V2) {
            this.renderTimelineV2Panel();
        } else if (this.displayMode === TimelineView.MODE_STATISTICS) {
            this.renderStatisticsPanel();
        } else if (this.displayMode === TimelineView.MODE_WECHAT) {   // 新增微信样式
            this.renderWechatPanel();
        }
    }

    // 列表样式（已移除“开始于/结束于”前缀）
    renderListPanel() {
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
                content = content.replace(/^\d{1,2}:\d{2}(:\d{2})?\s+[^：]+：/, '').trim();

                const item = document.createElement('div');
                item.className = 'timeline-item';
                item.dataset.id = rec.id;
                item.innerHTML = `
                    <div class="timeline-item-header">
                        <span class="timeline-time">${time}</span>
                        <span class="timeline-type" style="background-color:${color}">${type}</span>
                    </div>
                    <div class="timeline-content">${content}</div>
                `;

                item.addEventListener('contextmenu', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.showContextMenu(e, rec);
                });

                this.middlePanel.appendChild(item);
            });
        });
    }

    // 朋友圈样式（已移除前缀）—— 重构为根据配置决定渲染哪种
    async renderMomentsPanel() {
        const showDiary = this.plugin.store.getShowDiaryInMoments();
        if (showDiary) {
            // 懒加载碎碎念数据
            if (!this.diaryRecords) {
                this.middlePanel.innerHTML = '<div class="timeline-loading">加载碎碎念...</div>';
                this.diaryRecords = await this.plugin.queryDiaryRecords();
                // 重新调用自身以渲染
                this.renderMomentsPanel();
                return;
            }
            // 使用碎碎念数据渲染
            this._renderDiaryMoments();
        } else {
            // 原有普通记录渲染逻辑
            this._renderNormalMoments();
        }
    }

    // 原有朋友圈渲染逻辑（普通记录）
    _renderNormalMoments() {
        this.middlePanel.innerHTML = '';

        const coverDiv = document.createElement('div');
        coverDiv.className = 'north-moments-cover';  
        coverDiv.setAttribute('title', '点击上传封面');

        const coverPath = this.plugin.store.getCover();
        if (coverPath) {
            coverDiv.style.backgroundImage = `url('${coverPath.startsWith('http') ? coverPath : '/' + coverPath}')`;
            coverDiv.style.backgroundSize = 'cover';
            coverDiv.style.backgroundPosition = 'center';
        } else {
            coverDiv.style.backgroundColor = '#e9ecef';
        }

        coverDiv.addEventListener('click', () => this.plugin.uploadCover(coverDiv));

        const userInfo = document.createElement('div');
        userInfo.className = 'north-cover-user-info';

        const avatarSmall = document.createElement('div');
        avatarSmall.className = 'north-cover-avatar';
        const avatarPath = this.plugin.store.getAvatar();
        if (avatarPath) {
            const img = document.createElement('img');
            img.src = avatarPath.startsWith('http') ? avatarPath : '/' + avatarPath;
            img.onerror = () => {
                avatarSmall.innerHTML = `<svg><use xlink:href="#iconUser"></use></svg>`;
            };
            avatarSmall.appendChild(img);
        } else {
            avatarSmall.innerHTML = `<svg><use xlink:href="#iconUser"></use></svg>`;
        }
        avatarSmall.addEventListener('click', (e) => {
            e.stopPropagation();
            this.plugin.uploadAvatar(avatarSmall, 'self'); // 修改：指定上传自己头像
        });

        const nick = document.createElement('span');
        nick.className = 'north-cover-nickname';
        nick.textContent = this.plugin.store.getCustomTitle() || '时光笺';

        userInfo.appendChild(avatarSmall);
        userInfo.appendChild(nick);
        coverDiv.appendChild(userInfo);

        this.middlePanel.appendChild(coverDiv);

        const recs = this.filteredRecords;
        if (!recs.length) {
            const emptyDiv = document.createElement('div');
            emptyDiv.className = 'timeline-empty';
            emptyDiv.textContent = '暂无动态';
            this.middlePanel.appendChild(emptyDiv);
            return;
        }

        const sorted = [...recs].sort((a, b) => {
            const da = parseLifelogDate(a.lifelog_created);
            const db = parseLifelogDate(b.lifelog_created);
            return db - da;
        });

        const userAvatar = this.plugin.store.getAvatar();
        const userNickname = this.plugin.store.getCustomTitle() || '时光笺';

        sorted.forEach(rec => {
            const dateObj = parseLifelogDate(rec.lifelog_created);
            const timeStr = dateObj ? this.formatAbsoluteTime(dateObj) : '';
            const typeStr = rec.lifelog_type ? ` #${rec.lifelog_type}` : '';
            let content = rec.content || '';
            content = content.replace(/^\d{1,2}:\d{2}(:\d{2})?\s+[^：]+：/, '').trim();

            const card = document.createElement('div');
            card.className = 'north-moments-card';
            card.dataset.id = rec.id;

            const userBar = document.createElement('div');
            userBar.className = 'north-moments-userbar';

            const cardAvatar = document.createElement('div');
            cardAvatar.className = 'north-moments-card-avatar';
            if (userAvatar) {
                const img = document.createElement('img');
                img.src = userAvatar.startsWith('http') ? userAvatar : '/' + userAvatar;
                img.onerror = () => {
                    cardAvatar.innerHTML = `<svg><use xlink:href="#iconUser"></use></svg>`;
                };
                cardAvatar.appendChild(img);
            } else {
                cardAvatar.innerHTML = `<svg><use xlink:href="#iconUser"></use></svg>`;
            }

            const cardNick = document.createElement('span');
            cardNick.className = 'north-moments-card-nickname';
            cardNick.textContent = userNickname;

            userBar.appendChild(cardAvatar);
            userBar.appendChild(cardNick);

            const contentDiv = document.createElement('div');
            contentDiv.className = 'north-moments-card-content';
            contentDiv.textContent = content;

            const metaDiv = document.createElement('div');
            metaDiv.className = 'north-moments-card-meta';
            metaDiv.textContent = `${timeStr}${typeStr}`;

            card.appendChild(userBar);
            card.appendChild(contentDiv);
            card.appendChild(metaDiv);

            card.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.showContextMenu(e, rec);
            });

            this.middlePanel.appendChild(card);
        });
    }

    // 新增：碎碎念朋友圈渲染
    _renderDiaryMoments() {
        this.middlePanel.innerHTML = '';

        const coverDiv = document.createElement('div');
        coverDiv.className = 'north-moments-cover';  
        coverDiv.setAttribute('title', '点击上传封面');

        const coverPath = this.plugin.store.getCover();
        if (coverPath) {
            coverDiv.style.backgroundImage = `url('${coverPath.startsWith('http') ? coverPath : '/' + coverPath}')`;
            coverDiv.style.backgroundSize = 'cover';
            coverDiv.style.backgroundPosition = 'center';
        } else {
            coverDiv.style.backgroundColor = '#e9ecef';
        }

        coverDiv.addEventListener('click', () => this.plugin.uploadCover(coverDiv));

        const userInfo = document.createElement('div');
        userInfo.className = 'north-cover-user-info';

        const avatarSmall = document.createElement('div');
        avatarSmall.className = 'north-cover-avatar';
        const avatarPath = this.plugin.store.getAvatar();
        if (avatarPath) {
            const img = document.createElement('img');
            img.src = avatarPath.startsWith('http') ? avatarPath : '/' + avatarPath;
            img.onerror = () => {
                avatarSmall.innerHTML = `<svg><use xlink:href="#iconUser"></use></svg>`;
            };
            avatarSmall.appendChild(img);
        } else {
            avatarSmall.innerHTML = `<svg><use xlink:href="#iconUser"></use></svg>`;
        }
        avatarSmall.addEventListener('click', (e) => {
            e.stopPropagation();
            this.plugin.uploadAvatar(avatarSmall, 'self');
        });

        const nick = document.createElement('span');
        nick.className = 'north-cover-nickname';
        nick.textContent = this.plugin.store.getCustomTitle() || '时光笺';

        userInfo.appendChild(avatarSmall);
        userInfo.appendChild(nick);
        coverDiv.appendChild(userInfo);

        this.middlePanel.appendChild(coverDiv);

        const recs = this.diaryRecords;
        if (!recs || recs.length === 0) {
            const emptyDiv = document.createElement('div');
            emptyDiv.className = 'timeline-empty';
            emptyDiv.textContent = '暂无碎碎念';
            this.middlePanel.appendChild(emptyDiv);
            return;
        }

        // 按日期分组，每组内按时间正序（早到晚）
        const grouped = new Map();
        recs.forEach(rec => {
            let dateStr = '';
            let fullTimeStr = '';
            if (rec.deco_date) {
                // 格式 YYYY-MM-DD HH:MM
                const parts = rec.deco_date.split(' ');
                dateStr = parts[0]; // YYYY-MM-DD
                fullTimeStr = rec.deco_date;
            } else {
                // 回退到创建时间
                const d = new Date(rec.created);
                dateStr = formatDate(d);
                fullTimeStr = this.formatTimestamp(rec.created);
            }
            if (!grouped.has(dateStr)) {
                grouped.set(dateStr, []);
            }
            grouped.get(dateStr).push({ ...rec, displayTime: fullTimeStr });
        });

        // 日期倒序（新的在前）
        const sortedDates = Array.from(grouped.keys()).sort().reverse();

        const userAvatar = this.plugin.store.getAvatar();
        const userNickname = this.plugin.store.getCustomTitle() || '时光笺';

        sortedDates.forEach(dateStr => {
            const records = grouped.get(dateStr);

            records.forEach(rec => {
                const card = document.createElement('div');
                card.className = 'north-moments-card';
                card.dataset.id = rec.id;

                const userBar = document.createElement('div');
                userBar.className = 'north-moments-userbar';

                const cardAvatar = document.createElement('div');
                cardAvatar.className = 'north-moments-card-avatar';
                if (userAvatar) {
                    const img = document.createElement('img');
                    img.src = userAvatar.startsWith('http') ? userAvatar : '/' + userAvatar;
                    img.onerror = () => {
                        cardAvatar.innerHTML = `<svg><use xlink:href="#iconUser"></use></svg>`;
                    };
                    cardAvatar.appendChild(img);
                } else {
                    cardAvatar.innerHTML = `<svg><use xlink:href="#iconUser"></use></svg>`;
                }

                const cardNick = document.createElement('span');
                cardNick.className = 'north-moments-card-nickname';
                cardNick.textContent = userNickname;

                userBar.appendChild(cardAvatar);
                userBar.appendChild(cardNick);

                const contentDiv = document.createElement('div');
                contentDiv.className = 'north-moments-card-content';
                let content = rec.content || '';
                // 可选：如果内容开头有时间前缀，可以去掉，但碎碎念可能没有，所以保留原样
                contentDiv.textContent = content;

                const metaDiv = document.createElement('div');
                metaDiv.className = 'north-moments-card-meta';
                // 只显示时间，不显示类型
                metaDiv.textContent = rec.displayTime;

                card.appendChild(userBar);
                card.appendChild(contentDiv);
                card.appendChild(metaDiv);

                card.addEventListener('contextmenu', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.showContextMenu(e, rec);
                });

                this.middlePanel.appendChild(card);
            });
        });
    }

    renderTimelinePanel() {
        this.middlePanel.innerHTML = '';

        const recs = this.filteredRecords;
        if (!recs.length) {
            this.middlePanel.innerHTML = '<div class="timeline-empty">暂无记录</div>';
            return;
        }

        const grouped = new Map();
        recs.forEach(r => {
            const dateObj = parseLifelogDate(r.lifelog_created);
            if (!dateObj) return;
            const dateStr = formatDate(dateObj);
            if (!grouped.has(dateStr)) {
                grouped.set(dateStr, []);
            }
            grouped.get(dateStr).push({ ...r, dateObj });
        });

        const sortedDates = Array.from(grouped.keys()).sort().reverse();

        const timelinePanel = document.createElement('div');
        timelinePanel.className = 'timeline-timeline-panel';

        sortedDates.forEach(dateStr => {
            const records = grouped.get(dateStr);
            records.sort((a, b) => a.dateObj - b.dateObj);

            const dateHeader = document.createElement('div');
            dateHeader.className = 'timeline-timeline-date-header';
            const [year, month, day] = dateStr.split('-');
            dateHeader.textContent = `${year}年${parseInt(month)}月${parseInt(day)}日`;
            timelinePanel.appendChild(dateHeader);

            // 根据时间模式调整间隔计算
            if (this.timeMode === 'start') {
                // 开始模式：当前记录到下一条记录的时间差（可能跨天）
                for (let i = 0; i < records.length; i++) {
                    const rec = records[i];
                    const dateObj = rec.dateObj;
                    const timeStr = dateObj ? 
                        `${String(dateObj.getHours()).padStart(2, '0')}:${String(dateObj.getMinutes()).padStart(2, '0')}` : '';
                    const type = rec.lifelog_type || '';
                    const typeColor = getTypeColorFromCSS(type);
                    let content = rec.content || '';
                    content = content.replace(/^\d{1,2}:\d{2}(:\d{2})?\s+[^：]+：/, '').trim();

                    let intervalText = '';
                    // 先看组内是否有下一条记录
                    if (i < records.length - 1) {
                        const nextDateObj = records[i + 1].dateObj;
                        const diffMinutes = Math.round((nextDateObj - dateObj) / (1000 * 60));
                        intervalText = this.formatDuration(diffMinutes);
                    } else {
                        // 当天最后一条：尝试获取下一条记录（可能跨天）
                        const nextRec = this._getNextRecord(rec);
                        if (nextRec) {
                            const nextDateObj = nextRec.dateObj;
                            const diffMinutes = Math.round((nextDateObj - dateObj) / (1000 * 60));
                            intervalText = this.formatDuration(diffMinutes);
                        }
                        // 没有下一条则不显示
                    }

                    const item = this._createTimelineItem(rec, timeStr, type, typeColor, content, intervalText, dateObj);
                    timelinePanel.appendChild(item);
                }
            } else {
                // 结束模式：上一个记录到当前记录的时间差（可能跨天）
                for (let i = 0; i < records.length; i++) {
                    const rec = records[i];
                    const dateObj = rec.dateObj;
                    const timeStr = dateObj ? 
                        `${String(dateObj.getHours()).padStart(2, '0')}:${String(dateObj.getMinutes()).padStart(2, '0')}` : '';
                    const type = rec.lifelog_type || '';
                    const typeColor = getTypeColorFromCSS(type);
                    let content = rec.content || '';
                    content = content.replace(/^\d{1,2}:\d{2}(:\d{2})?\s+[^：]+：/, '').trim();

                    let intervalText = '';
                    if (i > 0) {
                        const prevDateObj = records[i - 1].dateObj;
                        const diffMinutes = Math.round((dateObj - prevDateObj) / (1000 * 60));
                        intervalText = this.formatDuration(diffMinutes);
                    } else {
                        // 当天第一条记录：尝试获取前一天的记录
                        const prevRec = this._getPreviousRecord(rec);
                        if (prevRec) {
                            const prevDateObj = prevRec.dateObj;
                            const diffMinutes = Math.round((dateObj - prevDateObj) / (1000 * 60));
                            intervalText = this.formatDuration(diffMinutes);
                        } else {
                            intervalText = '开始';
                        }
                    }

                    const item = this._createTimelineItem(rec, timeStr, type, typeColor, content, intervalText, dateObj);
                    timelinePanel.appendChild(item);
                }
            }
        });

        this.middlePanel.appendChild(timelinePanel);
    }

    // 创建时间日志样式的一个条目（抽取公共方法）
    _createTimelineItem(rec, timeStr, type, typeColor, content, intervalText, dateObj) {
        const item = document.createElement('div');
        item.className = 'timeline-timeline-item';
        item.dataset.id = rec.id;

        const timeCol = document.createElement('div');
        timeCol.className = 'timeline-timeline-time-col';
        const timeMain = document.createElement('div');
        timeMain.className = 'timeline-timeline-time-main';
        timeMain.textContent = timeStr;
        timeCol.appendChild(timeMain);

        if (intervalText) {
            const intervalDiv = document.createElement('div');
            intervalDiv.className = 'timeline-timeline-interval';
            intervalDiv.textContent = intervalText;
            timeCol.appendChild(intervalDiv);
        }

        const card = document.createElement('div');
        card.className = 'timeline-timeline-card';

        const tag = document.createElement('div');
        tag.className = 'timeline-timeline-tag';
        tag.textContent = type;
        tag.style.backgroundColor = typeColor;
        tag.style.color = '#fff';

        const cardContent = document.createElement('div');
        cardContent.className = 'timeline-timeline-card-content';
        const desc = document.createElement('div');
        desc.className = 'timeline-timeline-desc';
        desc.textContent = content;
        cardContent.appendChild(desc);

        card.appendChild(tag);
        card.appendChild(cardContent);

        item.appendChild(timeCol);
        item.appendChild(card);

        item.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.showContextMenu(e, rec);
        });

        return item;
    }

    // 伪农历
// 获取农历日（中文数字，如“廿九”）
getPseudoLunar(date) {
    if (!date) return '';
    try {
        // 使用 Intl 获取农历日期（只取日）
        const formatter = new Intl.DateTimeFormat('zh-CN-u-ca-chinese', { day: 'numeric' });
        const parts = formatter.formatToParts(date);
        for (const part of parts) {
            if (part.type === 'day') {
                const dayValue = part.value;
                // 如果返回的是数字字符串（如 "29"），则转换为中文数字
                if (/^\d+$/.test(dayValue)) {
                    const dayNum = parseInt(dayValue, 10);
                    return this.chineseNumbers[dayNum] || dayValue;
                }
                // 如果返回的是中文（如 "廿九"），直接返回
                return dayValue;
            }
        }
        // 如果 parts 中没有 day，回退到公历日
        throw new Error('未找到农历日');
    } catch (e) {
        console.warn('农历获取失败，使用公历日', e);
        // 回退：使用公历日转换为中文数字
        const day = date.getDate();
        return this.chineseNumbers[day] || day.toString();
    }
}

    // 渲染一周日历
    renderWeeklyCalendar() {
        const container = document.createElement('div');
        container.className = 'timeline-v2-calendar';

        let baseDate = this.selectedDate ? new Date(this.selectedDate + 'T00:00:00') : new Date();
        const dayOfWeek = baseDate.getDay();
        const diffToMonday = (dayOfWeek === 0 ? 6 : dayOfWeek - 1);
        const monday = new Date(baseDate);
        monday.setDate(baseDate.getDate() - diffToMonday);
        monday.setHours(0, 0, 0, 0);

        const weekdays = ['一', '二', '三', '四', '五', '六', '日'];

        for (let i = 0; i < 7; i++) {
            const date = new Date(monday);
            date.setDate(monday.getDate() + i);
            const day = date.getDate();
            const dateStr = formatDate(date);
            const isActive = (this.selectedDate === dateStr);

            const lunar = this.getPseudoLunar(date);

            const dayItem = document.createElement('div');
            dayItem.className = `timeline-v2-calendar-day ${isActive ? 'active' : ''}`;
            dayItem.dataset.date = dateStr;
            dayItem.innerHTML = `
                <div class="day-name">${weekdays[i]}</div>
                <div class="date-group">
                    <span class="day-num">${day}</span>
                    <span class="day-lunar">${lunar}</span>
                </div>
            `;
            dayItem.addEventListener('click', () => {
                if (this.selectedDate === dateStr) {
                    this.setFilter(null, undefined);
                } else {
                    this.setFilter(dateStr, undefined);
                }
            });

            container.appendChild(dayItem);
        }

        return container;
    }

    renderTimelineV2Panel() {
        if (!this.selectedDate) {
            const today = new Date();
            const todayStr = formatDate(today);
            this.selectedDate = todayStr;
            this.filteredRecords = this.allRecords.filter(r => {
                const dateObj = parseLifelogDate(r.lifelog_created);
                if (!dateObj) return false;
                return formatDate(dateObj) === todayStr;
            });
        }

        this.middlePanel.innerHTML = '';

        const recs = this.filteredRecords;
        if (!recs.length) {
            this.middlePanel.innerHTML = '<div class="timeline-empty">暂无记录</div>';
            return;
        }

        const sorted = [...recs]
            .map(r => ({ ...r, dateObj: parseLifelogDate(r.lifelog_created) }))
            .filter(r => r.dateObj)
            .sort((a, b) => a.dateObj - b.dateObj);

        const calendarEl = this.renderWeeklyCalendarV2();
        this.middlePanel.appendChild(calendarEl);

        const wrapper = document.createElement('div');
        wrapper.className = 'timeline-v2-wrapper';

        // 根据时间模式构建时间范围
        if (this.timeMode === 'start') {
            // 开始模式：使用当前记录到下一条记录（可能跨天）
            for (let i = 0; i < sorted.length; i++) {
                const rec = sorted[i];
                const dateObj = rec.dateObj;
                const timeStr = dateObj ? `${String(dateObj.getHours()).padStart(2, '0')}:${String(dateObj.getMinutes()).padStart(2, '0')}` : '';
                const type = rec.lifelog_type || '';
                const typeColor = getTypeColorFromCSS(type);
                let content = rec.content || '';
                content = content.replace(/^\d{1,2}:\d{2}(:\d{2})?\s+[^：]+：/, '').trim();

                let timeRange = '';
                // 先看组内是否有下一条记录（即当前记录不是最后一条）
                if (i < sorted.length - 1) {
                    const nextRec = sorted[i + 1];
                    const nextDateObj = nextRec.dateObj;
                    const endStr = `${String(nextDateObj.getHours()).padStart(2, '0')}:${String(nextDateObj.getMinutes()).padStart(2, '0')}`;
                    timeRange = `${timeStr} - ${endStr}`;
                } else {
                    // 当天最后一条：尝试获取下一条记录（可能跨天）
                    const nextRec = this._getNextRecord(rec);
                    if (nextRec) {
                        const nextDateObj = nextRec.dateObj;
                        const endStr = `${String(nextDateObj.getHours()).padStart(2, '0')}:${String(nextDateObj.getMinutes()).padStart(2, '0')}`;
                        timeRange = `${timeStr} - ${endStr}`;
                    }
                    // 没有下一条则不显示
                }

                const item = this._createTimelineV2Item(rec, timeStr, type, typeColor, content, timeRange);
                wrapper.appendChild(item);
            }
        } else {
            // 结束模式：使用上一个记录到当前记录（可能跨天）
            for (let i = 0; i < sorted.length; i++) {
                const rec = sorted[i];
                const dateObj = rec.dateObj;
                const timeStr = dateObj ? `${String(dateObj.getHours()).padStart(2, '0')}:${String(dateObj.getMinutes()).padStart(2, '0')}` : '';
                const type = rec.lifelog_type || '';
                const typeColor = getTypeColorFromCSS(type);
                let content = rec.content || '';
                content = content.replace(/^\d{1,2}:\d{2}(:\d{2})?\s+[^：]+：/, '').trim();

                let timeRange = '';
                if (i > 0) {
                    const prevRec = sorted[i - 1];
                    const prevDateObj = prevRec.dateObj;
                    const startStr = `${String(prevDateObj.getHours()).padStart(2, '0')}:${String(prevDateObj.getMinutes()).padStart(2, '0')}`;
                    timeRange = `${startStr} - ${timeStr}`;
                } else {
                    // 当天第一条记录：尝试获取前一天的记录
                    const prevRec = this._getPreviousRecord(rec);
                    if (prevRec) {
                        const prevDateObj = prevRec.dateObj;
                        const startStr = `${String(prevDateObj.getHours()).padStart(2, '0')}:${String(prevDateObj.getMinutes()).padStart(2, '0')}`;
                        timeRange = `${startStr} - ${timeStr}`;
                    } else {
                        timeRange = `开始 - ${timeStr}`;
                    }
                }

                const item = this._createTimelineV2Item(rec, timeStr, type, typeColor, content, timeRange);
                wrapper.appendChild(item);
            }
        }

        this.middlePanel.appendChild(wrapper);
    }

    // 创建时间轴 V2 的一个条目
    _createTimelineV2Item(rec, timeStr, type, typeColor, content, timeRange) {
        const item = document.createElement('div');
        item.className = 'timeline-v2-item';
        item.dataset.id = rec.id;

        const timeCol = document.createElement('div');
        timeCol.className = 'timeline-v2-time-col';
        timeCol.textContent = timeStr;
        item.appendChild(timeCol);

        const connectorCol = document.createElement('div');
        connectorCol.className = 'timeline-v2-connector-col';
        const dot = document.createElement('div');
        dot.className = 'timeline-v2-dot';
        dot.style.borderColor = typeColor;
        connectorCol.appendChild(dot);
        item.appendChild(connectorCol);

        const cardCol = document.createElement('div');
        cardCol.className = 'timeline-v2-card-col';

        if (timeRange) {
            const rangeSpan = document.createElement('span');
            rangeSpan.className = 'timeline-v2-card-time-range';
            rangeSpan.textContent = timeRange;
            cardCol.appendChild(rangeSpan);
        }

        const typeDiv = document.createElement('div');
        typeDiv.className = 'timeline-v2-card-type';
        typeDiv.textContent = type;
        typeDiv.style.color = typeColor;
        cardCol.appendChild(typeDiv);

        const contentDiv = document.createElement('div');
        contentDiv.className = 'timeline-v2-card-content';
        contentDiv.textContent = content;
        cardCol.appendChild(contentDiv);

        const icon = document.createElement('svg');
        icon.className = 'timeline-v2-card-icon';
        icon.innerHTML = '<use xlink:href="#iconTime"></use>';
        cardCol.appendChild(icon);

        item.appendChild(cardCol);

        item.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.showContextMenu(e, rec);
        });

        return item;
    }

    renderWeeklyCalendarV2() {
        const container = document.createElement('div');
        container.className = 'timeline-v2-calendar';

        const today = new Date();
        const todayStr = formatDate(today);
        const baseDate = this.selectedDate ? new Date(this.selectedDate + 'T00:00:00') : today;

        const dayOfWeek = baseDate.getDay();
        const diffToMonday = (dayOfWeek === 0 ? 6 : dayOfWeek - 1);
        const monday = new Date(baseDate);
        monday.setDate(baseDate.getDate() - diffToMonday);
        monday.setHours(0, 0, 0, 0);

        const weekdays = ['一', '二', '三', '四', '五', '六', '日'];

        for (let i = 0; i < 7; i++) {
            const date = new Date(monday);
            date.setDate(monday.getDate() + i);
            const day = date.getDate();
            const dateStr = formatDate(date);

            let isActive = false;
            if (this.selectedDate) {
                isActive = (this.selectedDate === dateStr);
            } else {
                isActive = (dateStr === todayStr);
            }

            const lunar = this.getPseudoLunar(date);

            const dayItem = document.createElement('div');
            dayItem.className = `timeline-v2-calendar-day ${isActive ? 'active' : ''}`;
            dayItem.dataset.date = dateStr;

            const dayName = document.createElement('span');
            dayName.className = 'day-name';
            dayName.textContent = weekdays[i];
            dayItem.appendChild(dayName);

            const dateGroup = document.createElement('div');
            dateGroup.className = 'date-group';

            const dayNum = document.createElement('span');
            dayNum.className = 'day-num';
            dayNum.textContent = day;
            dateGroup.appendChild(dayNum);

            const dayLunar = document.createElement('span');
            dayLunar.className = 'day-lunar';
            dayLunar.textContent = lunar;
            dateGroup.appendChild(dayLunar);

            dayItem.appendChild(dateGroup);

            dayItem.addEventListener('click', () => {
                if (this.selectedDate === dateStr) {
                    this.setFilter(null, undefined);
                } else {
                    this.setFilter(dateStr, undefined);
                }
            });

            container.appendChild(dayItem);
        }

        return container;
    }

// ========== 微信聊天样式渲染（日期倒序 + 类型固定方向 + 右键控制） ==========
renderWechatPanel() {
    this.middlePanel.innerHTML = '';
    const recs = this.filteredRecords;
    if (!recs.length) {
        this.middlePanel.innerHTML = '<div class="timeline-empty">暂无消息</div>';
        return;
    }
    // 1. 按时间正序排序（旧到新），用于计算日期内顺序
    const sortedAsc = [...recs]
        .map(r => ({ ...r, dateObj: parseLifelogDate(r.lifelog_created) }))
        .filter(r => r.dateObj)
        .sort((a, b) => a.dateObj - b.dateObj);
    
    // 2. 为每个类型分配固定方向（可被用户手动覆盖）
    const typeDirectionMap = new Map();
    let nextDirection = 'left'; // 下一个新类型的默认方向
    
    sortedAsc.forEach(rec => {
        const type = rec.lifelog_type || '';
        // 优先使用用户设置的方向（从插件配置读取）
        const userDir = this.plugin.store.getWechatDirection(rec.id);
        if (userDir) {
            rec.direction = userDir;
        } else {
            // 没有用户设置则使用类型固定方向
            if (!typeDirectionMap.has(type)) {
                typeDirectionMap.set(type, nextDirection);
                nextDirection = nextDirection === 'left' ? 'right' : 'left';
            }
            rec.direction = typeDirectionMap.get(type);
        }
    });
    
    // 3. 按日期分组（组内记录已是正序）
    const grouped = new Map();
    sortedAsc.forEach(rec => {
        const ds = formatDate(rec.dateObj);
        if (!grouped.has(ds)) grouped.set(ds, []);
        grouped.get(ds).push(rec);
    });
    
    const container = document.createElement('div');
    container.className = 'wechat-panel';
    
    // 4. 【修改点】获取日期数组并倒序排序（新日期在前）
    const sortedDates = Array.from(grouped.keys()).sort().reverse();
    
    // 5. 遍历日期分组（日期倒序）
    for (const dateStr of sortedDates) {
        const records = grouped.get(dateStr);
        
        // 日期分隔线
        const divider = document.createElement('div');
        divider.className = 'wechat-date-divider';
        divider.innerHTML = `<span>${dateStr}</span>`;
        container.appendChild(divider);
        
        // 遍历该日期内的记录（保持正序：旧消息在上，新消息在下）
        records.forEach(rec => {
            const dateObj = rec.dateObj;
            const timeStr = dateObj ?
                `${String(dateObj.getHours()).padStart(2, '0')}:${String(dateObj.getMinutes()).padStart(2, '0')}` : '';
            const type = rec.lifelog_type || '';
            
            // 时间戳行
            const timestamp = document.createElement('div');
            timestamp.className = 'wechat-timestamp';
            timestamp.innerHTML = `<span>${timeStr} ${type}</span>`;
            container.appendChild(timestamp);
            
            // 消息行
            const row = document.createElement('div');
            row.className = 'wechat-message-row';
            row.dataset.id = rec.id;
            row.classList.add(rec.direction); // left 或 right
            
            // 头像逻辑
            const avatarDiv = document.createElement('div');
            avatarDiv.className = 'wechat-avatar';
            if (rec.direction === 'left') {
                avatarDiv.classList.add('wechat-avatar-opposite');
                const oppositeAvatarPath = this.plugin.store.getOppositeAvatar();
                if (oppositeAvatarPath) {
                    const img = document.createElement('img');
                    img.src = oppositeAvatarPath.startsWith('http') ? oppositeAvatarPath : '/' + oppositeAvatarPath;
                    img.onerror = () => {
                        avatarDiv.innerHTML = `<svg><use xlink:href="#iconUser"></use></svg>`;
                    };
                    avatarDiv.appendChild(img);
                } else {
                    avatarDiv.innerHTML = `<svg><use xlink:href="#iconUser"></use></svg>`;
                }
                avatarDiv.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.plugin.uploadAvatar(avatarDiv, 'opposite');
                });
            } else {
                avatarDiv.classList.add('wechat-avatar-self');
                const selfAvatarPath = this.plugin.store.getAvatar();
                if (selfAvatarPath) {
                    const img = document.createElement('img');
                    img.src = selfAvatarPath.startsWith('http') ? selfAvatarPath : '/' + selfAvatarPath;
                    img.onerror = () => {
                        avatarDiv.innerHTML = `<svg><use xlink:href="#iconUser"></use></svg>`;
                    };
                    avatarDiv.appendChild(img);
                } else {
                    avatarDiv.innerHTML = `<svg><use xlink:href="#iconUser"></use></svg>`;
                }
                avatarDiv.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.plugin.uploadAvatar(avatarDiv, 'self');
                });
            }
            
            // 气泡内容
            const bubble = document.createElement('div');
            bubble.className = 'wechat-bubble';
            let content = rec.content || '';
            content = content.replace(/^\d{1,2}:\d{2}(:\d{2})?\s+[^：]+：/, '').trim();
            bubble.textContent = content;
            
            row.appendChild(avatarDiv);
            row.appendChild(bubble);
            
            // 【修改】微信样式专用右键菜单
            row.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.showWechatContextMenu(e, rec, row);
            });
            
            container.appendChild(row);
        });
    }
    this.middlePanel.appendChild(container);
}

    // 更新单条记录内容
    updateRecordContent(blockId, newContent) {
        const selector = `.timeline-item[data-id="${blockId}"], .north-moments-card[data-id="${blockId}"], .timeline-timeline-item[data-id="${blockId}"], .timeline-v2-item[data-id="${blockId}"], .wechat-message-row[data-id="${blockId}"]`;
        const item = this.middlePanel.querySelector(selector);
        if (item) {
            // 优先更新微信气泡内容
            const wechatBubble = item.querySelector('.wechat-bubble');
            if (wechatBubble) {
                let displayContent = newContent.replace(/^\d{1,2}:\d{2}\s+[^：]+：/, '').trim();
                wechatBubble.textContent = displayContent;
                return;
            }
            // 更新其他样式
            const contentDiv = item.querySelector('.timeline-v2-card-content');
            if (contentDiv) {
                let displayContent = newContent.replace(/^\d{1,2}:\d{2}\s+[^：]+：/, '').trim();
                contentDiv.textContent = displayContent;
            } else {
                const fallbackDiv = item.querySelector('.timeline-content, .north-moments-card-content, .timeline-timeline-text');
                if (fallbackDiv) {
                    let displayContent = newContent.replace(/^\d{1,2}:\d{2}\s+[^：]+：/, '').trim();
                    fallbackDiv.textContent = displayContent;
                }
            }
        }
    }

    // 右键菜单
    showContextMenu(event, record) {
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

        menu.querySelector('[data-action="edit"]').addEventListener('click', () => {
            this.plugin.showEditBlockDialog(record.id, record.content);
            menu.remove();
        });
        menu.querySelector('[data-action="open"]').addEventListener('click', () => {
            this.plugin.openBlockDocument(record.id);
            menu.remove();
        });

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

            const hasRecord = this.dailyCounts.has(dateStr); // 使用当前的 dailyCounts（可能为全部或本年）

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
        this.renderStyleSwitcher(); // 重新渲染样式切换按钮
    }

    async refresh() {
        this.plugin.eventBus.emit('timeline-refresh');
    }

    // 修改 setDisplayMode：处理统计视图数据切换
    async setDisplayMode(mode) {
        if (mode === this.displayMode) return;
        if (![TimelineView.MODE_LIST, TimelineView.MODE_MOMENTS, TimelineView.MODE_TIMELINE, TimelineView.MODE_TIMELINE_V2, TimelineView.MODE_STATISTICS, TimelineView.MODE_WECHAT].includes(mode)) {
            console.warn('无效模式:', mode);
            return;
        }

        // 切换到统计视图
        if (mode === TimelineView.MODE_STATISTICS) {
            if (!this.allRecordsUnfiltered) {
                await this.loadAllRecords();
            }
            this.allRecords = this.allRecordsUnfiltered;
            this.dailyCounts = this.allDailyCountsUnfiltered; // 右侧日历使用全部数据计数
            this.globalSorted = this.globalSortedAll;         // 使用全部记录的全局排序
        } else {
            // 切换回普通视图（包括微信样式）
            this.allRecords = this.yearRecords;
            this.dailyCounts = this.yearDailyCounts;          // 右侧日历恢复为本年数据
            this.globalSorted = this._buildGlobalSorted(this.yearRecords); // 重建本年记录的全局排序
        }

        // 重新计算 filteredRecords（基于新的 allRecords 和当前筛选条件）
        this.filteredRecords = this.allRecords.filter(r => {
            const dateObj = parseLifelogDate(r.lifelog_created);
            if (!dateObj) return false;
            const ds = formatDate(dateObj);
            if (this.selectedDate && ds !== this.selectedDate) return false;
            if (this.selectedType && r.lifelog_type !== this.selectedType) return false;
            return true;
        });

        this.displayMode = mode;
        await this.plugin.store.setDisplayMode(mode);

        // 重新渲染中间面板和右侧面板（日历和类型列表）
        this.renderMiddlePanel();
        this.renderCalendarAndTypes();
        this.renderStyleSwitcher(); // 更新左侧按钮高亮
    }
}

// ========== 主插件类 ==========
module.exports = class CardStyleWorkshopPlugin extends siyuan.Plugin {
    styleDefaults = null;
    attrsCache = new Map();

    async onload() {

        // 加载 Font Awesome（确保图标显示）
        if (!document.querySelector('link[href*="font-awesome"]')) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
            document.head.appendChild(link);
        }

        // 添加图标着色样式
        const style = document.createElement('style');
        style.textContent = `
            .north-menu-icon {
                color: var(--b3-theme-primary);  /* 使用思源主题主色，也可自定义颜色如 #ff6b6b */
            }
        `;
        document.head.appendChild(style);

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

        // 添加图标
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
        this.addIcons(`<symbol id="iconEdit" viewBox="0 0 24 24">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="currentColor"/>
        </symbol>`);
        this.addIcons(`<symbol id="iconFile" viewBox="0 0 24 24">
            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" fill="currentColor"/>
        </symbol>`);
        this.addIcons(`<symbol id="iconTime" viewBox="0 0 24 24">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm.5-13H11v6l5.2 3.1.8-1.2-4.5-2.7V7z" fill="currentColor"/>
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
                    // 初始加载只取本年数据
                    const data = await this.plugin.queryAllRecords(); 
                    this.container.innerHTML = '';
                    this.view = new TimelineView(this.plugin, this.container, data);
                };

                this.loadDataAndRender();

                this.refreshHandler = () => this.loadDataAndRender();
                this.plugin.eventBus.on('timeline-refresh', this.refreshHandler);
            },
beforeDestroy() {
    // 防止 this 为 undefined
    if (!this) return;
    
    // 安全卸载事件监听
    if (this.plugin?.eventBus && this.refreshHandler) {
        this.plugin.eventBus.off('timeline-refresh', this.refreshHandler);
    }
    
    // 安全销毁视图
    if (this.view?.destroy) {
        this.view.destroy();
        this.view = null;
    }
}
        });

        // ========== 移动端 Dock 添加 ==========
        if (this.isMobile) {
            this.addDock({
                config: {
                    position: "LeftBottom",
                    size: { width: 200, height: 0 },
                    icon: "iconCamera",
                    title: "时光笺",
                    hotkey: "⌥⌘W",
                },
                data: {},
                type: "timeline_dock",
                init: (dock) => {
                    dock.element.innerHTML = `
                        <div class="toolbar toolbar--border toolbar--dark">
                            <svg class="toolbar__icon"><use xlink:href="#iconCamera"></use></svg>
                            <div class="toolbar__text">时光笺</div>
                        </div>
                        <div class="fn__flex-1 timeline-dock-container"></div>
                    `;
                    const container = dock.element.querySelector('.timeline-dock-container');
                    // 异步加载数据并渲染视图
                    this.queryAllRecords().then(data => {
                        dock.view = new TimelineView(this, container, data);
                    });
                },
// ✅ 修复后：增加 dock 和 dock.view 的双重检查
destroy: (dock) => {
    // 防止 dock 为 undefined/null
    if (!dock) return;
    
    // 安全销毁视图
    if (dock.view?.destroy) {
        dock.view.destroy();
        dock.view = null;
    }
}
            });
        }
    }

    addIcons(svgContent) {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.style.display = 'none';
        svg.innerHTML = svgContent;
        document.body.appendChild(svg);
    }

    onLayoutReady() {
        // 非移动端才添加顶部栏图标
        if (!this.isMobile) {
            this.addTopBar({
                icon: 'iconCamera',
                title: '时光笺',
                position: 'right',
                callback: () => this.openTimelineTab()
            });
        }
    }

    openTimelineTab() {
        openTab({
            app: this.app,
            custom: {
                icon: "iconCamera",
                title: "时光笺",
                data: {},
                id: this.name + TIMELINE_TAB_TYPE
            }
        });
    }

    // 查询本年数据（用于普通视图）
    async queryAllRecords() {
        const sql = `
            SELECT 
                b.id,
                b.content,
                a1.value AS lifelog_date,
                a2.value AS lifelog_time,
                a3.value AS lifelog_type
            FROM blocks b
            INNER JOIN attributes a1 ON b.id = a1.block_id AND a1.name = 'custom-lifelog-date'
            INNER JOIN attributes a2 ON b.id = a2.block_id AND a2.name = 'custom-lifelog-time'
            INNER JOIN attributes a3 ON b.id = a3.block_id AND a3.name = 'custom-lifelog-type'
            WHERE 
                b.type = 'p' 
                AND substr(a1.value, 1, 4) = strftime('%Y', 'now')
            ORDER BY 
                a1.value DESC, 
                a2.value DESC
            LIMIT -1
        `;
        const result = await this.callSiyuanAPI('/api/query/sql', { stmt: sql });
        if (result && result.code === 0) {
            return result.data.map(record => ({
                ...record,
                lifelog_created: `${record.lifelog_date} ${record.lifelog_time}`,
            }));
        }
        return [];
    }

    // 查询全部数据（用于统计视图）
    async queryAllRecordsUnfiltered() {
        const sql = `
            SELECT 
                b.id,
                b.content,
                a1.value AS lifelog_date,
                a2.value AS lifelog_time,
                a3.value AS lifelog_type
            FROM blocks b
            INNER JOIN attributes a1 ON b.id = a1.block_id AND a1.name = 'custom-lifelog-date'
            INNER JOIN attributes a2 ON b.id = a2.block_id AND a2.name = 'custom-lifelog-time'
            INNER JOIN attributes a3 ON b.id = a3.block_id AND a3.name = 'custom-lifelog-type'
            WHERE b.type = 'p'
            ORDER BY a1.value DESC, a2.value DESC
            LIMIT -1
        `;
        const result = await this.callSiyuanAPI('/api/query/sql', { stmt: sql });
        if (result && result.code === 0) {
            return result.data.map(record => ({
                ...record,
                lifelog_created: `${record.lifelog_date} ${record.lifelog_time}`,
            }));
        }
        return [];
    }

    // 新增：查询所有碎碎念记录（custom-deco-style = '碎碎念'）
    async queryDiaryRecords() {
        const sql = `
            SELECT 
                b.id,
                b.content,
                a2.value AS deco_date,
                b.created
            FROM blocks b
            INNER JOIN attributes a1 ON b.id = a1.block_id AND a1.name = 'custom-deco-style' AND a1.value = '碎碎念'
            LEFT JOIN attributes a2 ON b.id = a2.block_id AND a2.name = 'custom-deco-card-date'
            WHERE b.type = 'p'
            ORDER BY COALESCE(a2.value, b.created) DESC
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

    /**
     * 上传头像
     * @param {HTMLElement} avatarElement - 触发上传的头像元素
     * @param {string} role - 'self' 或 'opposite'，指定上传给谁
     */
    uploadAvatar(avatarElement, role) {
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
                        if (role === 'self') {
                            await this.store.setAvatar(newPath);
                            this.updateAvatarsByRole('self', newPath);
                        } else {
                            await this.store.setOppositeAvatar(newPath);
                            this.updateAvatarsByRole('opposite', newPath);
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

    /**
     * 根据角色更新对应头像
     * @param {string} role - 'self' 或 'opposite'
     * @param {string} path - 图片路径
     */
    updateAvatarsByRole(role, path) {
        const selector = role === 'self' 
            ? '.timeline-avatar, .cover-avatar, .north-moments-card-avatar, .wechat-avatar-self'
            : '.wechat-avatar-opposite';
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            el.innerHTML = '';
            const img = document.createElement('img');
            img.src = path.startsWith('http') ? path : '/' + path;
            img.onerror = () => {
                el.innerHTML = `<svg><use xlink:href="#iconUser"></use></svg>`;
            };
            el.appendChild(img);
        });
    }

    uploadCover(coverElement) {
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
                        await this.store.setCover(newPath);
                        if (coverElement) {
                            coverElement.style.backgroundImage = `url('${'/' + newPath}')`;
                            coverElement.style.backgroundSize = 'cover';
                            coverElement.style.backgroundPosition = 'center';
                        }
                        showMessage('封面上传成功');
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

    async removeCardStyles(blockId) {
        const attrsResult = await this.callSiyuanAPI('/api/attr/getBlockAttrs', { id: blockId });
        if (!attrsResult || attrsResult.code !== 0) {
            showMessage('获取块属性失败');
            return false;
        }
        const currentAttrs = attrsResult.data || {};

        const newAttrs = {};
        for (const [key, value] of Object.entries(currentAttrs)) {
            if (!key.startsWith('custom-deco-')) {
                newAttrs[key] = value;
            }
        }

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

        if (this.attrsCache.has(blockId)) {
            const cached = this.attrsCache.get(blockId);
            Object.keys(cached).forEach(key => {
                if (key.startsWith('custom-deco-')) {
                    delete cached[key];
                }
            });
        }

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
                    <div style="display: flex; gap: 8px;">
                        <input id="card-icon-input" class="b3-text-field" type="text" value="${currentIcon}" placeholder="例如 ✨" style="flex:1;">
                        <button class="b3-button b3-button--outline" id="choose-emoji-btn">选择</button>
                    </div>
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

        dialogElement.querySelector('#choose-emoji-btn').addEventListener('click', () => {
            this.showEmojiPicker(iconInput);
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

        dialogElement.querySelector('#remove-style-btn').addEventListener('click', async () => {
            await this.removeCardStyles(blockId);
            dialog.destroy();
        });
    }

    async showEmojiPicker(targetInput) {
        const result = await this.callSiyuanAPI('/api/system/getEmojiConf', {});
        if (!result || result.code !== 0) {
            showMessage('获取表情列表失败');
            return;
        }

        const groups = result.data || [];
        const builtinGroups = groups.filter(g => g.id !== 'custom');

        const unicodeToChar = (unicodeStr) => {
            if (!unicodeStr) return '';
            if (/[^0-9a-fA-F\-]/.test(unicodeStr)) {
                return unicodeStr;
            }
            try {
                const codePoints = unicodeStr.split('-').map(part => parseInt(part, 16));
                return String.fromCodePoint(...codePoints);
            } catch (e) {
                console.warn('Emoji 转换失败:', unicodeStr, e);
                return unicodeStr;
            }
        };

        let groupsHtml = '';
        builtinGroups.forEach(group => {
            const title = group.title_zh_cn || group.title || '表情';
            let itemsHtml = '';
            group.items.forEach(item => {
                const emojiChar = unicodeToChar(item.unicode);
                itemsHtml += `<button class="b3-button emoji-item" data-emoji="${emojiChar}" style="font-size: 1.4rem; width: 36px; height: 36px; margin: 2px; padding: 0; display: inline-flex; align-items: center; justify-content: center;">${emojiChar}</button>`;
            });
            groupsHtml += `
                <div class="emoji-group" style="margin-bottom: 20px;">
                    <div class="emoji-group-title" style="font-weight: 600; margin-bottom: 8px;">${title}</div>
                    <div style="display: flex; flex-wrap: wrap; gap: 2px;">${itemsHtml}</div>
                </div>
            `;
        });

        const dialog = new Dialog({
            title: '选择图标',
            content: `
                <div style="padding: 16px; max-height: 400px; overflow-y: auto;">
                    ${groupsHtml}
                </div>
            `,
            width: '600px',
        });

        const dialogElement = dialog.element;
        dialogElement.querySelectorAll('.emoji-item').forEach(btn => {
            btn.addEventListener('click', () => {
                const emoji = btn.dataset.emoji;
                targetInput.value = emoji;
                dialog.destroy();
            });
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
    btn.innerHTML = `<svg class="b3-menu__icon north-menu-icon"><use xlink:href="#iconList"></use></svg>
                     <span class="b3-menu__label">${this.getText('cardview', '卡片视图')}</span>
                     <svg class="b3-menu__icon b3-menu__icon--small"><use xlink:href="#iconRight"></use></svg>`;
        
        const subMenu = document.createElement("div");
        subMenu.className = "b3-menu__submenu";
        const itemsContainer = document.createElement("div");
        itemsContainer.className = "b3-menu__items";

        this.getSecondaryGroups().forEach(group => {
            itemsContainer.appendChild(this.createSecondaryGroupButton(blockId, group));
        });

        itemsContainer.appendChild(this.createSeparator());
        const removeItem = this.createRemoveStyleItem(blockId);
        itemsContainer.appendChild(removeItem);

        subMenu.appendChild(itemsContainer);
        btn.appendChild(subMenu);
        return btn;
    }

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

    // ========== 修改后的二级菜单生成方法（图标彩色） ==========
    createSecondaryGroupButton(blockId, group) {
        const btn = document.createElement("button");
        btn.className = "b3-menu__item";

        // 为二级菜单生成独特颜色
        const iconColor = this.getColorForString(group.id, 75, 60); // 饱和75%，明度60%

        btn.innerHTML = `<svg class="b3-menu__icon" style="color: ${iconColor};"><use xlink:href="${group.icon}"></use></svg>
                         <span class="b3-menu__label">${this.getText(group.labelKey)}</span>
                         <svg class="b3-menu__icon b3-menu__icon--small"><use xlink:href="#iconRight"></use></svg>`;
        btn.appendChild(this.createTertiaryMenu(blockId, group.filter));
        return btn;
    }

    // ========== 修改后的三级菜单生成方法（图标彩色） ==========
    createCardItem(blockId, label, key) {
        const item = document.createElement("button");
        item.className = "b3-menu__item";

        // 为卡片生成独特颜色
        const iconColor = this.getColorForString(key, 80, 60); // 饱和度稍高，更鲜艳

        item.innerHTML = `<svg class="b3-menu__icon" style="color: ${iconColor};"><use xlink:href="#iconSparkles"></use></svg>
                          <span class="b3-menu__label">${label}</span>`;

        item.onclick = async (e) => {
            e.stopPropagation();

            const currentBlock = document.querySelector(`[data-node-id="${blockId}"]`);
            const existingTitle = currentBlock?.getAttribute('custom-deco-card-title') || '';

            const attrs = { "custom-deco-style": label };

            if (!key.endsWith('QuoteCard') && !key.includes('WhisperCard') && !key.endsWith('ImageCard') && !key.startsWith('topLine')
            && !key.startsWith('polka')) {
                const defaults = this.styleDefaults[label];
                if (defaults) {
                    attrs["custom-deco-card-icon"] = defaults.icon || '';
                    if (!existingTitle) {
                        attrs["custom-deco-card-title"] = defaults.title || '';
                    }
                }
            }

if (key === 'diaryChatWhisperCard') {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    attrs["custom-deco-card-date"] = `${year}-${month}-${day} ${hours}:${minutes}`;
}

            await this.setAttrs(blockId, attrs);
        };
        return item;
    }

    // ========== 新增：基于字符串生成彩色HSL的方法 ==========
    getColorForString(str, saturation = 70, lightness = 60) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        const hue = Math.abs(hash % 360);
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }

    createTertiaryMenu(blockId, filterFunc) {
        const subMenu = document.createElement("div");
        subMenu.className = "b3-menu__submenu";
        const itemsContainer = document.createElement("div");
        itemsContainer.className = "b3-menu__items";

        // 过滤并生成三级菜单项（可按需排序，此处保持原有顺序）
        this.getAllCardItems().forEach(item => {
            if (filterFunc(item.label, item.key)) {
                itemsContainer.appendChild(this.createCardItem(blockId, item.label, item.key));
            }
        });

        subMenu.appendChild(itemsContainer);
        return subMenu;
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

    // ========== 二级菜单按字数排序（已在返回前排序） ==========
    getSecondaryGroups() {
        const groups = [
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
                id: "gradientCardGroup",
                labelKey: "gradientCardGroup",
                icon: "#iconSparkles",
                filter: (label, key) => key.endsWith('GradientCard')
            },
            {
                id: "topLineStyle",
                labelKey: "topLineGroup",
                icon: "#iconQuote",
                filter: (label, key) => key.startsWith('topLine')  // 筛选所有顶线样式
            },
            {
                id: "polkaStyle",
                labelKey: "polkaGroup",
                icon: "#iconSparkles",  // 使用闪亮图标
                filter: (label, key) => key.startsWith('polka')  // 筛选所有波点样式
            },
            {
                id: "journalCard",
                labelKey: "journalCardGroup",
                icon: "#iconSparkles",
                filter: (label, key) => key.endsWith('JournalCard')
            },
            {
                id: "terminalGroup",
                labelKey: "terminalGroup",
                icon: "#iconTerminal",
                filter: (label, key) => key.endsWith('TerminalCard')
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

        // 按显示文本字数升序排序（短的在前）
        return groups.sort((a, b) => {
            const textA = this.getText(a.labelKey, '');
            const textB = this.getText(b.labelKey, '');
            return textA.length - textB.length;
        });
    }

    getText(key, fallback) {
        return TEXT[key] || fallback;
    }

    async getBlockInfo(blockId) {
        return await this.callSiyuanAPI('/api/block/getBlockInfo', { id: blockId });
    }

    async openBlockDocument(blockId) {
        try {
            await openTab({
                app: this.app,
                doc: { 
                    id: blockId,
                    action: ["cb-get-hl", "cb-get-focus"]
                }
            });
        } catch (e) {
            const info = await this.getBlockInfo(blockId);
            if (info && info.code === 0) {
                const rootID = info.data.rootID;
                await openTab({
                    app: this.app,
                    doc: { 
                        id: rootID,
                        anchor: blockId,
                        action: ["cb-get-hl", "cb-get-focus"]
                    }
                });
            } else {
                showMessage('无法获取文档信息');
            }
        }
    }

    async editBlockContent(blockId, newContent) {
        const result = await this.callSiyuanAPI('/api/block/updateBlock', {
            dataType: 'markdown',
            data: newContent,
            id: blockId
        });

        if (result && result.code === 0) {
            showMessage('更新成功');
            this.eventBus.emit('timeline-record-updated', { id: blockId, content: newContent });
        } else {
            showMessage('更新失败');
        }
    }

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
    
    // ✅ 补充：清理可能存在的 TimelineView 实例
    if (this.timelineView) {
        this.timelineView.destroy();
        this.timelineView = null;
    }
}

    uninstall() { this.onunload(); }
};