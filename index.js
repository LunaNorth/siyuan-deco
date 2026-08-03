"use strict";
const siyuan = require("siyuan");
const { showMessage, Dialog, openEmoji } = siyuan;

const CARD_ITEMS = [
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

    // 顶条引述组（TitleBarCard）- 引述块场景下顶部色条 + 标题 + 内容
    { key: 'titleBarBlueCard',   label: '顶条引述·蓝', icon: '' },
    { key: 'titleBarRedCard',    label: '顶条引述·红', icon: '' },
    { key: 'titleBarGreenCard',  label: '顶条引述·绿', icon: '' },
    { key: 'titleBarOrangeCard', label: '顶条引述·橙', icon: '' },
    { key: 'titleBarPurpleCard', label: '顶条引述·紫', icon: '' },
    { key: 'titleBarCyanCard',   label: '顶条引述·青', icon: '' },
    { key: 'titleBarPinkCard',   label: '顶条引述·粉', icon: '' },
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
    titleBarGroup: '顶条引述',  // 顶条引述（引述块场景）
    noticeGroup: '通知卡片',
    gradientTopGroup: '彩色顶部',
    excerptGroup: '引述卡片',  
    calloutGroup: 'Callout样式',
    imageGroup: '图片相关设置',
    chatWhisperGroup: '轻言轻语',       
    quoteGroup: '引述块样式',

    // 一级分类（块类型，最外层）
    blockQuote: '引述块',
    blockNormal: '普通块',
    blockImage: '图片相关',

    // 二级分类（块内细分类）
    categoryQuote: '引述类',
    categoryNormalCard: '普通卡片',
    categoryTimeline: '时间轴',
    categoryLineDecor: '线条装饰',
    categoryChatBubble: '对话气泡',
    categoryImage: '图片设置',

    // 自定义块样式
    blockCustom: '自定义',
    customManage: '自定义块样式',
    customName: '名称',
    customBaseStyle: '基础样式',
    customAdd: '新增自定义样式',
    customSave: '保存',
    customEdit: '编辑',
    customDelete: '删除',
    customEmpty: '暂无自定义样式，点击下方“新增”创建',
    customApplied: '已套用自定义样式：',
    customSaved: '已保存自定义样式：',
    customDeleted: '已删除自定义样式',
    customNeedName: '请填写名称',

    // 自定义分组（用户自建，数据沿用 customFolders）
    addFolder: '新建分组',
    folderName: '分组名称',
    folderNamePlaceholder: '如：工作、日记',
    needFolderName: '请填写分组名称',
    folderCreated: '已新建分组：',
    folderLabel: '归属分组',
    noFolder: '不归入分组',
    unsorted: '未分类',
    confirmCreate: '创建',
    confirm: '确定',
    renameGroup: '重命名分组',
    groupRenamed: '已重命名分组',
    groupDeleted: '已删除分组，样式已移至未分类',
    customGroup: '分组',
    groupIcon: '分组图标',
    clickPickIcon: '点击选择图标',
    searchIcon: '搜索图标...',
    changeIcon: '更换图标',
    setIconTitle: '设置图标',
    textTab: '文字',
    builtinTab: '内置图标',
    searchContent: '搜索...',
    noIcon: '无',
    loadingEmojis: '正在加载表情…',
    loadFailed: '加载失败',
    enterTextOrEmoji: '输入文字或 Emoji：',
    textPlaceholder: '如：🎯、★、自定义',
    resetToHash: '重置为 #',
    noMatch: '无匹配结果',
    applyHint: '请在文档块的右键菜单中使用「自定义」来套用此样式',

    // 预览 / 选择
    preview: '预览',
    choose: '选择',
    blockOther: '其他',
    customNamePlaceholder: '如：我的日报模板',
    iconPlaceholder: '例如 ✨',
    titlePlaceholder: '卡片标题',

    removeStyle: '移除样式',   // 新增
      
    editCardTitle: '编辑卡片',
    cardType: '类型',
    cardIcon: '图标',
    cardTitle: '标题',
    cancel: '取消',
    confirm: '确定',
};

// 卡片样式作用的三个自定义属性（多处复用，集中定义）
const DECO_ATTRS = ["custom-deco-style", "custom-deco-card-icon", "custom-deco-card-title"];

// ========== 时间轴样式（数据驱动生成，运行时注入 <style>，替代 index.css 中近千行重复静态样式） ==========
// 10 个颜色，每个仅由 浅色 / 暗色边框 / 暗色文字 三个值参数化；
// 粗时间轴: 边框 5px、圆点 0.8em；细时间轴: 边框 3px、圆点 0.5em。
// 注：粗·灰 的 first-child 原始样式缺少 border-radius: 0，这里保留该历史差异以保证渲染完全一致。
const TIMELINE_COLORS = [
    { name: "红", light: "#f43f5e", darkBorder: "#b91c1c", darkText: "#fca5a5" },
    { name: "橙", light: "#f97316", darkBorder: "#c2410c", darkText: "#fdba74" },
    { name: "黄", light: "#eab308", darkBorder: "#b45309", darkText: "#fde047" },
    { name: "绿", light: "#22c55e", darkBorder: "#166534", darkText: "#86efac" },
    { name: "青", light: "#06b6d4", darkBorder: "#0b7285", darkText: "#5eead4" },
    { name: "蓝", light: "#3b82f6", darkBorder: "#1e40af", darkText: "#93c5fd" },
    { name: "紫", light: "#a855f7", darkBorder: "#6b21a8", darkText: "#d8b4fe" },
    { name: "粉", light: "#ec4899", darkBorder: "#9d174d", darkText: "#f9a8d4" },
    { name: "黑", light: "#1e293b", darkBorder: "#1e293b", darkText: "#9ca3af" },
    { name: "灰", light: "#6b7280", darkBorder: "#4b5563", darkText: "#d1d5db" },
];

function generateTimelineCSS() {
    const blocks = [];
    const genLight = (color, { suffix, width, dot, offset, omitFirstRadius }) => {
        const sel = `时间轴·${color.name}${suffix}`;
        const s = (extra) => `.protyle-wysiwyg [custom-deco-style="${sel}"]:not([fold="1"])${extra}`;
        const sibling = `[custom-deco-style="${sel}"]:not([fold="1"])`;
        const firstChild = omitFirstRadius
            ? `    color: ${color.light};\n    font-weight: bold;\n    position: relative;`
            : `    border-radius: 0;\n    color: ${color.light};\n    font-weight: bold;\n    position: relative;`;
        return (
`.protyle-wysiwyg [custom-deco-style="${sel}"]:not([fold="1"]) {
    padding: 0px 6px;
    border-left: ${width}px solid ${color.light};
    border-radius: 0;
    background-color: transparent;
    color: unset;
    overflow: visible;
    margin: 2px 0;
    position: relative;
}
${s("")} + ${sibling} {
    margin-top: -2px;
}
${s(" > ")}[data-node-id]:first-child {
${firstChild}
}
${s(" > ")}[data-node-id]:first-child [contenteditable][spellcheck] {
    text-indent: calc(1em - 16px);
}
${s(" > ")}[data-node-id]:first-child::before {
    content: "";
    position: absolute;
    width: ${dot}em;
    height: ${dot}em;
    top: 45%;
    transform: translateY(-45%);
    left: calc(-8px - ${offset}em);
    border-radius: 50%;
    background-color: #ffffff;
    box-shadow: 0 0 0 0.2em ${color.light};
}
${s("")}::before {
    display: none;
}`
        );
    };
    const genDark = (color, suffix) => {
        const sel = `时间轴·${color.name}${suffix}`;
        const base = `:root[data-theme-mode=dark] .protyle-wysiwyg [custom-deco-style="${sel}"]:not([fold="1"])`;
        return (
`${base} {
    border-left-color: ${color.darkBorder} !important;
}
${base} > [data-node-id]:first-child {
    color: ${color.darkText} !important;
}
${base} > [data-node-id]:first-child::before {
    background-color: #2d2d2d !important;
    box-shadow: 0 0 0 0.2em ${color.darkBorder} !important;
}`
        );
    };
    for (const c of TIMELINE_COLORS) blocks.push(genLight(c, { suffix: "", width: 5, dot: 0.8, offset: 0.4, omitFirstRadius: c.name === "灰" }));
    for (const c of TIMELINE_COLORS) blocks.push(genLight(c, { suffix: "细", width: 3, dot: 0.5, offset: 0.2, omitFirstRadius: false }));
    for (const c of TIMELINE_COLORS) blocks.push(genDark(c, ""));
    for (const c of TIMELINE_COLORS) blocks.push(genDark(c, "细"));
    return blocks.join("\n\n");
}

// ========== 主插件类 ==========
module.exports = class CardStyleWorkshopPlugin extends siyuan.Plugin {
    styleDefaults = null;
    customStyles = [];
    attrsCache = new Map();

    async onload() {
        // 添加图标着色样式
        const style = document.createElement('style');
        style.textContent = `
            .north-menu-icon {
                color: var(--b3-theme-primary);  /* 使用思源主题主色，也可自定义颜色如 #ff6b6b */
            }
        `;
        document.head.appendChild(style);

        // 注入数据驱动生成的时间轴样式（替代 index.css 中近千行重复静态样式）
        const timelineStyle = document.createElement('style');
        timelineStyle.id = 'siyuan-deco-timeline';
        timelineStyle.textContent = generateTimelineCSS();
        document.head.appendChild(timelineStyle);
        this._timelineStyle = timelineStyle;

        this.loadStyleDefaults();

        // 加载用户自定义块样式（持久化于插件数据）
        try {
            this.customStyles = await this.loadData('customStyles') || [];
        } catch (e) {
            console.warn('[CardStyleWorkshop] 读取自定义样式失败', e);
            this.customStyles = [];
        }

        // 加载用户自定义文件夹
        try {
            this.customFolders = await this.loadData('customFolders') || [];
        } catch (e) {
            console.warn('[CardStyleWorkshop] 读取文件夹失败', e);
            this.customFolders = [];
        }

        // 顶栏按钮：打开自定义块样式管理器
        this.addTopBar({
            icon: 'iconStar',
            title: this.getText('customManage', '自定义块样式'),
            position: 'right',
            callback: () => this.openSetting()
        });

        this.state = { menu: null, observer: null, restoreObserver: null };
        this.waitForMenu();
        this.addTitleClickListener();
        this.startAttributeRestoreObserver();

    }

    addIcons(svgContent) {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.style.display = 'none';
        svg.innerHTML = svgContent;
        document.body.appendChild(svg);
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
            if (key.startsWith('custom-deco-')) {
                newAttrs[key] = '';
            }
        }

        try {
            const resetResult = await this.callSiyuanAPI('/api/attr/setBlockAttrs', {
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
            attributeFilter: DECO_ATTRS
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
        for (const attr of DECO_ATTRS) {
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

        // 引述块（quoteBlock 父级）所有样式不弹编辑框——用结构判断而非 key 后缀硬编码，
        // 覆盖 QuoteCard/ExcerptCard/WhisperCard/ThinWhisper/topLine/polka 及自定义样式。
        if (this._isQuoteStyle(style)) return;

        // 日记私语等 WhisperCard 变体仍允许弹编辑框（保留旧例外的意图）：
        // 原逻辑是 WhisperCard 全部排除但 diaryChatWhisperCard 例外——上面 _isQuoteStyle 不会命中 normalBlock 的 chatWhisper，
        // 所以 diaryChatWhisperCard 仍会走到这里，保留编辑入口。
        if (cardKey && cardKey.includes('WhisperCard') && cardKey !== 'diaryChatWhisperCard') return;

        // 没有标题属性的普通卡片也不弹
        if (!cardBlock.hasAttribute('custom-deco-card-title') && !(cardKey && cardKey.includes('WhisperCard'))) return;

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

    // 判断 label 是否属于「引述块（quoteBlock）」父级（顶层第一个 Tab）。
    // 用于：点击标题时不弹编辑框。复用 getMenuStructure 的分类，避免硬编码 key 后缀。
    _isQuoteStyle(label) {
        if (!label) return false;
        const cardKey = this.getCardKeyByLabel(label);
        const structure = this.getMenuStructure();
        const quoteParent = structure.find(p => p.id === 'quoteBlock');
        if (!quoteParent) return false;
        for (const cat of quoteParent.children) {
            for (const group of cat.subGroups) {
                if (typeof group.filter === 'function' && group.filter(label, cardKey)) return true;
            }
        }
        return false;
    }

    async showEditDialog(blockEl) {
        const self = this;
        const blockId = blockEl.dataset.nodeId;
        const currentStyle = blockEl.getAttribute('custom-deco-style') || Object.keys(this.styleDefaults)[0] || '';
        const currentTitle = blockEl.getAttribute('custom-deco-card-title') || this.styleDefaults[currentStyle]?.title || '';
        const currentIcon = blockEl.getAttribute('custom-deco-card-icon') || this.styleDefaults[currentStyle]?.icon || '';

        const tabsHtml = this._buildStyleTabsHtml(currentStyle);

        const contentHtml = `
            <div class="b3-dialog__content cs-edit-dialog" style="padding: 20px;">
                <div class="b3-dialog__item" style="margin-bottom: 16px;">
                    <label style="display:block; margin-bottom:8px; font-weight:600; font-size:13px;">${this.getText('cardType', '类型')}</label>
                    <div style="display:flex; gap:14px; align-items:stretch;">
                        ${tabsHtml}
                        <div id="card-style-preview" class="cs-preview-box" style="width:200px; flex:none;">
                            <div class="cs-preview-label">👁️ ${this.getText('preview', '预览')}</div>
                            <div id="card-style-preview-inner" class="protyle-wysiwyg" style="flex:1; overflow:auto;"></div>
                        </div>
                    </div>
                    <input id="card-type-select" type="hidden" value="${this._escapeAttr(currentStyle)}">
                </div>
                <div class="b3-dialog__item" style="margin-bottom: 16px;">
                    <label style="display:block; margin-bottom:6px; font-weight:500;">${this.getText('cardIcon', '图标')}</label>
                    <div style="display: flex; gap: 8px; align-items: center;">
                        <div id="card-icon-preview" data-icon="${this._escapeAttr(currentIcon)}" class="cs-icon-preview">${this._escapeAttr(currentIcon) || '😀'}</div>
                        <button class="b3-button b3-button--outline" id="choose-emoji-btn">${this.getText('choose', '选择')}</button>
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
        const styleInput = dialogElement.querySelector('#card-type-select');
        const iconPreviewEl = dialogElement.querySelector('#card-icon-preview');
        const setIconVal = (v) => { iconPreviewEl.dataset.icon = v || ''; iconPreviewEl.textContent = v || '😀'; };
        const titleInput = dialogElement.querySelector('#card-title-input');
        const previewInnerEl = dialogElement.querySelector('#card-style-preview-inner');

        // --- 预览渲染 ---
        const escapeAttr = s => String(s || '').replace(/"/g, '&quot;').replace(/&/g, '&amp;');
        const renderStylePreview = () => {
            if (!previewInnerEl) return;
            const label = styleInput.value;
            if (!label) { previewInnerEl.innerHTML = '<span style="font-size:12px;color:var(--b3-text-color3);">请选择样式</span>'; return; }
            const defaults = self.styleDefaults[label] || { icon: '', title: label };
            const ico = (iconPreviewEl.dataset.icon || '').trim() || defaults.icon;
            const ttl = titleInput.value.trim() || defaults.title;
            const isBuiltin = /^icon[A-Z]/.test(ico);
            const iconAttr = isBuiltin ? '' : ico;
            previewInnerEl.innerHTML =
                '<div custom-deco-style="' + escapeAttr(label) + '"' +
                (iconAttr ? ' custom-deco-card-icon="' + escapeAttr(iconAttr) + '"' : '') +
                (ttl ? ' custom-deco-card-title="' + escapeAttr(ttl) + '"' : '') +
                ' style="padding:14px 16px;" data-type="NodeParagraph">&nbsp;</div>';
        };
        // 初始渲染
        setTimeout(renderStylePreview, 50);

        // ---- Tab + 芯片交互：切换分类、选中样式 ----
        const tabsEl = dialogElement.querySelector('.cs-style-tabs');
        if (tabsEl) {
            tabsEl.querySelectorAll('.cs-tab').forEach(tab => {
                tab.addEventListener('click', () => {
                    const idx = tab.getAttribute('data-tab');
                    tabsEl.querySelectorAll('.cs-tab').forEach(t => t.classList.toggle('cs-tab--active', t === tab));
                    tabsEl.querySelectorAll('.cs-tab-panel').forEach(p => {
                        p.classList.toggle('cs-tab-panel--active', p.getAttribute('data-panel') === idx);
                    });
                });
            });

            tabsEl.querySelectorAll('.cs-chip').forEach(chip => {
                chip.addEventListener('click', () => {
                    tabsEl.querySelectorAll('.cs-chip.cs-chip--active').forEach(c => c.classList.remove('cs-chip--active'));
                    chip.classList.add('cs-chip--active');
                    styleInput.value = chip.getAttribute('data-label') || '';
                    // 自动填充默认图标和标题
                    const label = styleInput.value;
                    const defaults = this.styleDefaults[label] || { icon: '', title: '' };
                    setIconVal(defaults.icon);
                    titleInput.value = defaults.title;
                    renderStylePreview();
                });
            });
        }

        dialogElement.querySelector('#choose-emoji-btn').addEventListener('click', () => {
            this._pickEmojiIcon((iconPreviewEl.dataset.icon || '').trim(), (picked) => {
                setIconVal(picked);
                renderStylePreview();
            }, dialogElement.querySelector('#choose-emoji-btn'));
        });
        // 预览方块本身也可点击 → 弹 emoji 选择器
        iconPreviewEl.addEventListener('click', () => {
            this._pickEmojiIcon((iconPreviewEl.dataset.icon || '').trim(), (picked) => {
                setIconVal(picked);
                renderStylePreview();
            }, iconPreviewEl);
        });

        // 标题变化时刷新预览
        titleInput.addEventListener('input', renderStylePreview);

        dialogElement.querySelector('#confirm-btn').addEventListener('click', async () => {
            const newStyle = styleInput.value;
            const newIcon = (iconPreviewEl.dataset.icon || '').trim();
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

    // （原自定义 Emoji 弹窗 showEmojiPicker 已移除，统一改用思源内核 openEmoji）

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

        // 一级块分类：引述块 / 普通块 / 图片相关
        this.getMenuStructure().forEach(parent => {
            itemsContainer.appendChild(this.createParentButton(blockId, parent));
        });

        // 用户自定义块样式（预设）
        if (this.customStyles && this.customStyles.length) {
            itemsContainer.appendChild(this.createCustomParentButton(blockId));
        }

        itemsContainer.appendChild(this.createSeparator());
        const removeItem = this.createRemoveStyleItem(blockId);
        itemsContainer.appendChild(removeItem);

        subMenu.appendChild(itemsContainer);
        btn.appendChild(subMenu);
        return btn;
    }

    // ========== 一级块分类按钮 → 二级细分类列表 ==========
    createParentButton(blockId, parent) {
        const btn = document.createElement("button");
        btn.className = "b3-menu__item";

        const iconColor = this.getColorForString(parent.id, 60, 50);

        btn.innerHTML = `<svg class="b3-menu__icon" style="color: ${iconColor};"><use xlink:href="${parent.icon}"></use></svg>
                         <span class="b3-menu__label">${this.getText(parent.labelKey)}</span>
                         <svg class="b3-menu__icon b3-menu__icon--small"><use xlink:href="#iconRight"></use></svg>`;

        const subMenu = document.createElement("div");
        subMenu.className = "b3-menu__submenu";
        const itemsContainer = document.createElement("div");
        itemsContainer.className = "b3-menu__items";

        // 二级细分类（如 引述类 / 时间轴 / 线条装饰）
        parent.children.forEach(category => {
            itemsContainer.appendChild(this.createCategoryButton(blockId, category));
        });

        subMenu.appendChild(itemsContainer);
        btn.appendChild(subMenu);
        return btn;
    }

    // ========== 二级：分类按钮 → 三级：组列表 ==========
    createCategoryButton(blockId, category) {
        const btn = document.createElement("button");
        btn.className = "b3-menu__item";

        const iconColor = this.getColorForString(category.id, 65, 55);

        btn.innerHTML = `<svg class="b3-menu__icon" style="color: ${iconColor};"><use xlink:href="${category.icon}"></use></svg>
                         <span class="b3-menu__label">${this.getText(category.labelKey)}</span>
                         <svg class="b3-menu__icon b3-menu__icon--small"><use xlink:href="#iconRight"></use></svg>`;

        const subMenu = document.createElement("div");
        subMenu.className = "b3-menu__submenu";
        const itemsContainer = document.createElement("div");
        itemsContainer.className = "b3-menu__items";

        // 三级：该分类下的具体组按钮
        category.subGroups.forEach(group => {
            itemsContainer.appendChild(this.createSecondaryGroupButton(blockId, group));
        });

        subMenu.appendChild(itemsContainer);
        btn.appendChild(subMenu);
        return btn;
    }

    // ========== 思源笔记原生设置入口：打开自定义块样式管理器 ==========
    // 复写 Plugin.openSetting()，以思源原生设置风格（Dialog 模态面板）承载管理器，
    // 不再使用自定义 Tab 页。顶栏按钮与右键「管理自定义样式」均调用此方法。
    openSetting() {
        const self = this;
        const dialog = new Dialog({
            title: this.getText('customManage', '自定义块样式'),
            content: '<div id="cs-setting-root" style="height:100%; overflow:auto;"></div>',
            width: "1200px",
            height: "860px"
        });
        const rootEl = dialog.element.querySelector('#cs-setting-root');
        this._settingRootEl = rootEl;
        this.renderCustomStyleManager(rootEl);
    }

    // ========== 辅助：构建「Tab 分类 + 网格芯片」样式选择器（替代多级折叠树）==========
    _buildStyleTabsHtml(selectedLabel) {
        const structure = this.getMenuStructure();
        const allCards = this.getAllCardItems();
        const findItems = (group) => allCards.filter(item => !!group.filter(item.label, item.key));

        // 收集已归组 label，用于「其他」兜底
        const groupedLabels = new Set();
        structure.forEach(parent => parent.children.forEach(cat => cat.subGroups.forEach(group => {
            findItems(group).forEach(item => groupedLabels.add(item.label));
        })));
        const ungrouped = allCards.filter(item => !groupedLabels.has(item.label) && !item.key.endsWith('ImageCard'));
        const hasOther = ungrouped.length > 0;

        // 渲染某父级 Tab 内的面板（分类分组 + 芯片网格）
        const buildPanel = (parent) => {
            let html = '';
            for (const cat of parent.children) {
                const catLabel = this.getText(cat.labelKey, cat.id);
                let subHtml = '';
                for (const group of cat.subGroups) {
                    const items = findItems(group);
                    if (!items.length) continue;
                    const gLabel = this.getText(group.labelKey, group.id);
                    subHtml += `
                        <div class="cs-cat-block">
                            <div class="cs-cat-block-title">${this._escapeAttr(gLabel)}</div>
                            <div class="cs-chip-grid">
                                ${items.map(item => {
                                    const sel = item.label === selectedLabel ? ' cs-chip--active' : '';
                                    const d = this.styleDefaults[item.label] || {};
                                    const ico = d.icon ? '<span class="cs-chip-ico">' + this._escapeAttr(d.icon) + '</span>' : '';
                                    return `<div class="cs-chip${sel}" data-label="${this._escapeAttr(item.label)}">${ico}${this._escapeAttr(item.label)}</div>`;
                                }).join('')}
                            </div>
                        </div>`;
                }
                if (!subHtml) continue;
                html += `
                    <div class="cs-cat-group">
                        <div class="cs-cat-group-title">${this._escapeAttr(catLabel)}</div>
                        ${subHtml}
                    </div>`;
            }
            return html;
        };

        // 决定默认激活的 Tab（含「其他」）
        const isInParent = (parent) => parent.children.some(cat => cat.subGroups.some(group =>
            findItems(group).some(it => it.label === selectedLabel)));
        let activeTab = 0;
        for (let p = 0; p < structure.length; p++) { if (isInParent(structure[p])) { activeTab = p; break; } }
        if (hasOther && activeTab === 0 && ungrouped.some(it => it.label === selectedLabel)) activeTab = structure.length;

        // 组装所有 Tab
        const tabs = structure.map((parent, pIdx) => {
            const parentLabel = this.getText(parent.labelKey, parent.id);
            const parentIcon = (parent.icon || '').startsWith('#') ? parent.icon.slice(1) : (parent.icon || '');
            return { pIdx, label: parentLabel, icon: parentIcon, panel: buildPanel(parent) };
        });
        if (hasOther) {
            tabs.push({
                pIdx: structure.length,
                label: this.getText('blockOther', '其他'),
                icon: '',
                panel: `<div class="cs-cat-block"><div class="cs-chip-grid">${ungrouped.map(item => {
                    const sel = item.label === selectedLabel ? ' cs-chip--active' : '';
                    return `<div class="cs-chip${sel}" data-label="${this._escapeAttr(item.label)}">${this._escapeAttr(item.label)}</div>`;
                }).join('')}</div></div>`
            });
        }

        const tabBtns = tabs.map(t => `
            <button class="cs-tab${t.pIdx === activeTab ? ' cs-tab--active' : ''}" data-tab="${t.pIdx}" type="button">
                ${t.icon ? '<svg style="width:14px;height:14px;"><use xlink:href="#' + t.icon + '"></use></svg>' : ''}
                <span>${this._escapeAttr(t.label)}</span>
            </button>`).join('');

        const panels = tabs.map(t => `
            <div class="cs-tab-panel${t.pIdx === activeTab ? ' cs-tab-panel--active' : ''}" data-panel="${t.pIdx}">
                ${t.panel || '<div class="cs-empty">暂无样式</div>'}
            </div>`).join('');

        return `<div class="cs-style-tabs">
            <div class="cs-tab-bar" role="tablist">${tabBtns}</div>
            <div class="cs-tab-panels">${panels}</div>
        </div>`;
    }

    // ========== 打开新增/编辑样式的 Dialog 弹窗（含预览）==========
    openStyleDialog(editId) {
        const self = this;
        const allCards = this.getAllCardItems();
        const editing = editId ? (this.customStyles || []).find(c => c.id === editId) : null;
        const tabsHtml = this._buildStyleTabsHtml(editing ? editing.style : '');

        const contentHtml = `
            <div style="padding:20px 28px;">
                <div style="font-size:16px; font-weight:700; margin-bottom:18px;">${editing ? (this.getText('customEdit', '编辑') + ' · ' + editing.name) : this.getText('customAdd', '新增自定义样式')}</div>

                <!-- 名称 -->
                <div style="margin-bottom:14px;">
                    <label style="display:block; margin-bottom:6px; font-size:13px; font-weight:600;">${this.getText('customName', '名称')}<sup style="color:#e53935;">*</sup></label>
                    <input id="cs-d-name" class="b3-text-field" type="text" value="${editing ? editing.name : ''}" placeholder="${this.getText('customNamePlaceholder', '如：我的日报模板')}" style="width:100%;">
                </div>

                <!-- 基础样式（Tab + 网格） -->
                <div style="margin-bottom:14px;">
                    <label style="display:block; margin-bottom:8px; font-size:13px; font-weight:600;">${this.getText('customBaseStyle', '基础样式')}<sup style="color:#e53935;">*</sup></label>
                    ${tabsHtml}
                    <input id="cs-d-style" type="hidden" value="${this._escapeAttr(editing ? editing.style : '')}">
                </div>

                <!-- 图标 + 标题 并排（图标列按内容收缩，标题列占满剩余） -->
                <div style="display:flex; gap:14px; margin-bottom:14px;">
                    <div style="flex:none;">
                        <label style="display:block; margin-bottom:6px; font-size:13px; font-weight:600;">${this.getText('cardIcon', '图标')}</label>
                        <div style="display:flex; gap:6px; align-items:center;">
                            <span id="cs-d-icon-prev" data-icon="${this._escapeAttr(editing ? (editing.icon || '') : '')}" style="display:inline-flex;align-items:center;width:28px;height:28px;justify-content:center;font-size:18px;flex:none;border-radius:6px;background:var(--b3-theme-background);border:1px solid var(--b3-border-color);cursor:pointer;"></span>
                            <button class="b3-button b3-button--outline" id="cs-d-emoji">${this.getText('choose', '选择')}</button>
                        </div>
                    </div>
                    <div style="flex:1;">
                        <label style="display:block; margin-bottom:6px; font-size:13px; font-weight:600;">${this.getText('cardTitle', '标题')}</label>
                        <input id="cs-d-title" class="b3-text-field" type="text" value="${editing ? (editing.title || '') : ''}" placeholder="${this.getText('titlePlaceholder', '卡片标题')}" style="width:100%;">
                    </div>
                </div>

                <!-- 归属分组 -->
                <div style="margin-bottom:14px;">
                    <label style="display:block; margin-bottom:6px; font-size:13px; font-weight:600;">${this.getText('folderLabel', '归属分组')}</label>
                    <div style="display:flex; gap:8px;">
                        <select id="cs-d-folder" class="b3-select" style="flex:1; min-width:0;">${this._buildFolderOptionsHtml(editing ? editing.folderId : '')}</select>
                        <button class="b3-button b3-button--outline" id="cs-d-newgroup" style="flex:none; white-space:nowrap;">+ ${this.getText('addFolder', '新建分组')}</button>
                    </div>
                </div>

                <!-- 预览区域 -->
                <div style="margin-top:16px; padding:12px; border-radius:8px; border:1px dashed var(--b3-border-color); background:var(--b3-theme-background);">
                    <div style="font-size:11px; font-weight:600; opacity:.55; margin-bottom:8px; display:flex; align-items:center; gap:5px;">
                        <svg style="width:12px;height:12px;"><use xlink:href="#iconEye"></use></svg>${this.getText('preview', '预览')}
                    </div>
                    <div id="cs-d-preview" style="min-height:70px;"></div>
                </div>

                <!-- 操作按钮 -->
                <div class="fn__flex" style="justify-content:flex-end; gap:8px; margin-top:16px; padding-top:12px; border-top:1px solid var(--b3-border-color);">
                    ${editing ? '<button class="b3-button b3-button--cancel" id="cs-d-cancel">' + this.getText('cancel', '取消') + '</button>' : ''}
                    <button class="b3-button b3-button--outline" id="cs-d-save" style="padding:6px 24px; font-weight:600;">💾 ${this.getText('customSave', '保存')}</button>
                </div>
            </div>`;

        const dialog = new Dialog({
            title: this.getText('customManage', '自定义块样式'),
            content: contentHtml,
            width: "720px"
        });

        const el = dialog.element;
        const nameInput = el.querySelector('#cs-d-name');
        const styleInput = el.querySelector('#cs-d-style');
        const titleInput = el.querySelector('#cs-d-title');
        const previewContainer = el.querySelector('#cs-d-preview');
        const folderSelect = el.querySelector('#cs-d-folder');

        // ---- Tab + 芯片交互：切换分类、选中基础样式 ----
        const tabsEl = el.querySelector('.cs-style-tabs');
        if (tabsEl) {
            tabsEl.querySelectorAll('.cs-tab').forEach(tab => {
                tab.addEventListener('click', () => {
                    const idx = tab.getAttribute('data-tab');
                    tabsEl.querySelectorAll('.cs-tab').forEach(t => t.classList.toggle('cs-tab--active', t === tab));
                    tabsEl.querySelectorAll('.cs-tab-panel').forEach(p => {
                        p.classList.toggle('cs-tab-panel--active', p.getAttribute('data-panel') === idx);
                    });
                });
            });
            tabsEl.querySelectorAll('.cs-chip').forEach(chip => {
                chip.addEventListener('click', () => {
                    tabsEl.querySelectorAll('.cs-chip.cs-chip--active').forEach(c => c.classList.remove('cs-chip--active'));
                    chip.classList.add('cs-chip--active');
                    styleInput.value = chip.getAttribute('data-label') || '';
                    renderPreview();
                });
            });
        }

        const escapeAttr = s => String(s || '').replace(/"/g, '&quot;').replace(/&/g, '&amp;');

        // --- 预览渲染 ---
        // 辅助：在容器内渲染图标预览（内置图标用 SVG，emoji/文字直接文本）
        const renderIconPreview = (container, val) => {
            if (!container) return;
            container.innerHTML = '';
            if (!val) return;
            const ns = 'http://www.w3.org/2000/svg';
            const isBuiltin = /^icon[A-Z]/.test(val);
            if (isBuiltin) {
                const svg = document.createElementNS(ns, 'svg');
                svg.setAttribute('style', 'width:18px;height:18px;');
                svg.setAttribute('viewBox', '0 0 24 24');
                const use = document.createElementNS(ns, 'use');
                use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#' + val);
                use.setAttribute('href', '#' + val);
                svg.appendChild(use);
                container.appendChild(svg);
            } else {
                container.textContent = val;
            }
        };

        // 图标预览方块（同时承担值存储：dataset.icon = 当前 emoji）
        const iconPrevEl = el.querySelector('#cs-d-icon-prev');
        const setIconVal = (v) => {
            const val = v || '';
            iconPrevEl.dataset.icon = val;
            renderIconPreview(iconPrevEl, val);
        };
        const refreshIconPreview = () => renderIconPreview(iconPrevEl, (iconPrevEl.dataset.icon || '').trim());
        setTimeout(refreshIconPreview, 50);
        // 预览方块本身也可点击 → 弹 emoji 选择器
        iconPrevEl.addEventListener('click', () => {
            self._pickEmojiIcon((iconPrevEl.dataset.icon || '').trim(), function (picked) {
                setIconVal(picked);
            }, iconPrevEl);
        });

        const renderPreview = () => {
            const label = styleInput.value;
            if (!label || !previewContainer) return;
            const defaults = self.styleDefaults[label] || { icon: '', title: label };
            const rawIconVal = (iconPrevEl.dataset.icon || '').trim() || defaults.icon;
            const titleVal = titleInput.value.trim() || defaults.title;

            // 内置图标（iconXxx）CSS content:attr() 无法渲染为 SVG，会显示原始名文本
            // 所以预览时对内置图标不传 custom-deco-card-icon，让 CSS 用默认 emoji fallback
            const isBuiltinIcon = /^icon[A-Z]/.test(rawIconVal);
            const iconAttr = isBuiltinIcon ? '' : rawIconVal;

            previewContainer.innerHTML =
                '<div class="protyle-wysiwyg"><div custom-deco-style="' + escapeAttr(label) + '"' +
                (iconAttr ? ' custom-deco-card-icon="' + escapeAttr(iconAttr) + '"' : '') +
                (titleVal ? ' custom-deco-card-title="' + escapeAttr(titleVal) + '"' : '') +
                ' style="padding:16px 20px;" data-type="NodeParagraph">&nbsp;</div></div>';
        };

        setTimeout(renderPreview, 50);
        titleInput.addEventListener('input', renderPreview);

        el.querySelector('#cs-d-emoji').addEventListener('click', () => self._pickEmojiIcon((iconPrevEl.dataset.icon || '').trim(), function (picked) {
            setIconVal(picked);
        }, el.querySelector('#cs-d-emoji')));

        // 在弹窗内直接新建分组，并自动选中
        const newGroupBtn = el.querySelector('#cs-d-newgroup');
        if (newGroupBtn) newGroupBtn.addEventListener('click', () => {
            self.openGroupDialog(null, async (g) => {
                if (!self.customFolders) self.customFolders = [];
                const newId = 'grp_' + Date.now();
                self.customFolders.push({ id: newId, name: g.name, icon: g.icon || '📁' });
                await self.saveData('customFolders', self.customFolders);
                showMessage(self.getText('folderCreated', '已新建分组：') + name);
                if (folderSelect) {
                    folderSelect.innerHTML = self._buildFolderOptionsHtml(newId);
                    folderSelect.value = newId;
                }
                // 同步刷新后台设置面板（若存在）
                if (self._settingRootEl && self._settingRootEl.isConnected) self.renderCustomStyleManager(self._settingRootEl);
            });
        });

        // 保存
        el.querySelector('#cs-d-save').addEventListener('click', async () => {
            const name = nameInput.value.trim();
            const style = styleInput.value;
            const icon = (iconPrevEl.dataset.icon || '').trim();
            const title = titleInput.value.trim();
            const folderId = folderSelect ? folderSelect.value : '';

            if (!name) { showMessage(self.getText('customNeedName', '请填写名称')); return; }

            const rec = { id: editing ? editing.id : ('cs_' + Date.now()), name, style, icon, title, folderId: folderId || null };
            if (editing) { const idx = self.customStyles.findIndex(c => c.id === editing.id); if (idx >= 0) self.customStyles[idx] = rec; }
            else self.customStyles.push(rec);

            await self.saveData('customStyles', self.customStyles);
            showMessage(self.getText('customSaved', '已保存自定义样式：') + name);
            dialog.destroy();

            // 重渲染设置面板内容以刷新列表
            if (self._settingRootEl && self._settingRootEl.isConnected) {
                self.renderCustomStyleManager(self._settingRootEl);
            }
        });

        // 取消
        const cancelBtn = el.querySelector('#cs-d-cancel');
        if (cancelBtn) cancelBtn.addEventListener('click', () => dialog.destroy());
    }

    // ========== 设置面板渲染：现代化单栏布局（顶部分组标签栏 + 下方卡片网格）==========
    renderCustomStyleManager(element) {
        const self = this;
        const allStyles = this.customStyles || [];
        const totalCount = allStyles.length;
        const groups = this._getGroupedByFolder();

        // 确定默认激活的分组（第一个有项目的分组）
        const activeGroupId = this._csActiveGroup || (groups.find(g => g.items.length) ? groups.find(g => g.items.length).id : groups[0]?.id);
        const activeGroup = groups.find(g => g.id === activeGroupId) || groups[0];
        const activeItems = activeGroup?.items || [];

        // ---- 顶部分组标签栏 ----
        let tabsHtml = '';
        let firstVisibleId = null;
        for (const g of groups) {
            const isNone = g.id === '__none__';
            if (!g.items.length && isNone) continue;
            if (!firstVisibleId) firstVisibleId = g.id;
            const isActive = g.id === activeGroupId;
            const icon = this._groupIconSvg(isNone ? '🗂️' : (g.icon || '📁'), { size: 14 });
            tabsHtml += `
                <button class="cs-tab-pill ${isActive ? 'cs-tab-pill--active' : ''}" data-gid="${g.id}">
                    ${icon}
                    <span class="cs-tab-pill__name">${this._escapeAttr(g.name)}</span>
                    <span class="cs-tab-pill__count">${g.items.length}</span>
                </button>`;
        }

        // ---- 内容区 ----
        let contentHtml = '';
        if (totalCount === 0) {
            contentHtml = `
                <div class="cs-empty-state">
                    <div class="cs-empty-illustration">✨</div>
                    <div class="cs-empty-title">${this.getText('customEmpty', '暂无自定义样式')}</div>
                    <div class="cs-empty-desc">${this.getText('customEmptyHint', '点击右上角「新增」创建你的第一个样式')}</div>
                    <button class="b3-button b3-button--outline cs-empty-btn" id="cs-btn-new-empty">
                        <svg style="width:14px;height:14px;"><use xlink:href="#iconAdd"></use></svg>
                        ${this.getText('customAdd', '新增自定义样式')}
                    </button>
                </div>`;
        } else if (activeItems.length === 0) {
            contentHtml = `
                <div class="cs-empty-state">
                    <div class="cs-empty-illustration">📂</div>
                    <div class="cs-empty-title">${this.getText('groupEmpty', '该分组暂无样式')}</div>
                    <div class="cs-empty-desc">${this.getText('groupEmptyHint', '切换到其他分组或新建一个样式')}</div>
                </div>`;
        } else {
            contentHtml = `<div class="cs-card-grid">`;
            activeItems.forEach((cs, idx) => {
                contentHtml += self._renderStyleCard(cs, idx);
            });
            contentHtml += `</div>`;
        }

        // ---- 整体布局（现代单栏）----
        const html = `
            <div id="cs-root" class="cs-modern-layout">

                <!-- 顶部导航栏 -->
                <header class="cs-header">
                    <div class="cs-header__left">
                        <svg class="cs-header__icon"><use xlink:href="#iconStar"></use></svg>
                        <span class="cs-header__title">${this.getText('customManage', '自定义块样式')}</span>
                        ${totalCount > 0 ? `<span class="cs-header__badge">${totalCount}</span>` : ''}
                    </div>
                    <div class="cs-header__actions">
                        <button class="cs-action-btn" id="cs-btn-newgroup" title="${this.getText('customGroup', '新建分组')}">
                            <svg style="width:15px;height:15px;"><use xlink:href="#iconAdd"></use></svg>
                            <span>${this.getText('customGroup', '分组')}</span>
                        </button>
                        <button class="cs-action-btn cs-action-btn--primary" id="cs-btn-new" title="${this.getText('customAdd', '新增自定义样式')}">
                            <svg style="width:15px;height:15px;"><use xlink:href="#iconAdd"></use></svg>
                            <span>${this.getText('customAdd', '新增')}</span>
                        </button>
                    </div>
                </header>

                <!-- 分组标签栏 -->
                ${groups.some(g => g.items.length) ? `
                <nav class="cs-tabs-bar" id="cs-tabs-bar">
                    <div class="cs-tabs-track">
                        ${tabsHtml}
                    </div>
                </nav>` : ''}

                <!-- 主内容区 -->
                <main class="cs-content" id="cs-content">
                    ${contentHtml}
                </main>

            </div>`;

        element.innerHTML = html;

        // ====== 交互绑定 ======

        // 新建分组
        const ngBtn = element.querySelector('#cs-btn-newgroup');
        if (ngBtn) ngBtn.addEventListener('click', () => {
            self.openGroupDialog(null, (g) => self.createGroup(g.name, g.icon));
        });

        // 新增按钮（顶部 + 空状态）
        element.querySelectorAll('#cs-btn-new, #cs-btn-new-empty').forEach(btn => {
            if (btn) btn.addEventListener('click', () => self.openStyleDialog(null));
        });

        // 分组标签切换
        element.querySelectorAll('.cs-tab-pill').forEach(tab => {
            tab.addEventListener('click', () => {
                const gid = tab.getAttribute('data-gid');
                if (gid === self._csActiveGroup) return;
                self._csActiveGroup = gid;
                // 动画过渡：淡出 → 重绘 → 淡入
                const contentEl = element.querySelector('#cs-content');
                if (contentEl) {
                    contentEl.style.opacity = '0';
                    contentEl.style.transform = 'translateY(6px)';
                    setTimeout(() => {
                        self.renderCustomStyleManager(element);
                        const newContent = element.querySelector('#cs-content');
                        if (newContent) {
                            newContent.style.opacity = '0';
                            newContent.style.transform = 'translateY(6px)';
                            requestAnimationFrame(() => {
                                newContent.style.transition = 'opacity .25s ease, transform .25s ease';
                                newContent.style.opacity = '1';
                                newContent.style.transform = 'translateY(0)';
                            });
                        }
                    }, 120);
                }
                return;
            });
        });

        // 卡片编辑 / 删除
        element.querySelectorAll('[data-cs-edit]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                self.openStyleDialog(btn.getAttribute('data-cs-edit'));
            });
        });
        element.querySelectorAll('[data-cs-del]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = btn.getAttribute('data-cs-del');
                const cs = (self.customStyles || []).find(c => c.id === id);
                const name = cs ? cs.name : '';
                const dlg = new Dialog({
                    title: self.getText('customDeleteConfirmTitle', '删除自定义样式'),
                    width: '360px',
                    content: `<div style="padding:20px 24px;">
                        <div style="font-size:13px; line-height:1.6; color:var(--b3-text-color);">
                            ${self.getText('customDeleteConfirmText', '确定要删除')}
                            「<strong style="color:var(--b3-text-color);">${self._escapeAttr(name)}</strong>」
                            ${self.getText('customDeleteConfirmText2', '吗？此操作不可撤销。')}
                        </div>
                        <div class="fn__flex" style="justify-content:flex-end; gap:8px; margin-top:20px;">
                            <button class="b3-button b3-button--cancel" id="cs-del-cancel">${self.getText('customCancel', '取消')}</button>
                            <button class="b3-button b3-button--outline" id="cs-del-ok" style="padding:6px 20px; font-weight:600;">${self.getText('customDelete', '删除')}</button>
                        </div>
                    </div>`
                });
                const confirmDel = async () => {
                    dlg.destroy();
                    self.customStyles = (self.customStyles || []).filter(c => c.id !== id);
                    await self.saveData('customStyles', self.customStyles);
                    showMessage(self.getText('customDeleted', '已删除自定义样式'));
                    self.renderCustomStyleManager(element);
                };
                dlg.element.querySelector('#cs-del-ok').addEventListener('click', confirmDel);
                dlg.element.querySelector('#cs-del-cancel').addEventListener('click', () => dlg.destroy());
            });
        });

        // 卡片点击 → 编辑
        element.querySelectorAll('.cs-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (e.target.closest('[data-cs-edit]') || e.target.closest('[data-cs-del]')) return;
                self.openStyleDialog(card.getAttribute('data-cs-id'));
            });
        });

        // ---- 悬停预览浮层 ----
        let hoverPreview = document.getElementById('cs-hover-preview');
        if (!hoverPreview) {
            hoverPreview = document.createElement('div');
            hoverPreview.id = 'cs-hover-preview';
            hoverPreview.className = 'b3-dialog__content';
            hoverPreview.style.cssText = 'position:fixed; z-index:9999; width:420px; max-width:90vw; padding:8px 14px; box-shadow:0 6px 20px rgba(0,0,0,.14); border-radius:8px; background:var(--b3-theme-background); border:1px solid var(--b3-border-color); pointer-events:none; opacity:0; transition:opacity .15s,transform .15s; display:none; transform:scale(.96);';
            document.body.appendChild(hoverPreview);
        }

        element.querySelectorAll('.cs-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                const label = card.getAttribute('data-cs-style') || '';
                const ico = card.getAttribute('data-cs-icon') || '';
                const ttl = card.getAttribute('data-cs-title') || '';
                if (!label) return;
                const isBuiltin = /^icon[A-Z]/.test(ico);
                const iconAttr = (ico && !isBuiltin) ? ico : '';
                const titleAttr = ttl || label;
                hoverPreview.innerHTML =
                    '<div class="protyle-wysiwyg">' +
                    '<div custom-deco-style="' + self._escapeAttr(label) + '"' +
                    (iconAttr ? ' custom-deco-card-icon="' + self._escapeAttr(iconAttr) + '"' : '') +
                    (titleAttr ? ' custom-deco-card-title="' + self._escapeAttr(titleAttr) + '"' : '') +
                    ' style="padding:10px 14px;" data-type="NodeParagraph">&nbsp;</div>' +
                    '</div>';

                // 定位到卡片下方
                const rect = card.getBoundingClientRect();
                hoverPreview.style.display = 'block';
                const pw = hoverPreview.offsetWidth, ph = hoverPreview.offsetHeight;
                let left = rect.left + (rect.width - pw) / 2;  // 水平居中对齐卡片
                if (left < 8) left = 8;
                if (left + pw > window.innerWidth - 8) left = window.innerWidth - pw - 8;
                let top = rect.bottom + 8;  // 卡片正下方
                if (top + ph > window.innerHeight - 8) {
                    // 下方放不下则改到上方
                    top = rect.top - ph - 8;
                }
                if (top < 8) top = 8;
                hoverPreview.style.left = left + 'px';
                hoverPreview.style.top = top + 'px';
                requestAnimationFrame(() => { hoverPreview.style.opacity = '1'; hoverPreview.style.transform = 'scale(1) translateY(0)'; });
            });
            card.addEventListener('mouseleave', () => {
                hoverPreview.style.opacity = '0';
                hoverPreview.style.transform = 'scale(.96)';
                setTimeout(() => { if (hoverPreview.style.opacity === '0') hoverPreview.style.display = 'none'; }, 160);
            });
        });

        // 入场动画：卡片依次淡入
        const cards = element.querySelectorAll('.cs-card');
        cards.forEach((card, i) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(12px)';
            setTimeout(() => {
                card.style.transition = 'opacity .3s ease, transform .3s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 60 + i * 45);
        });
    }

    // 渲染单张样式卡片（现代网格版）
    _renderStyleCard(cs, index) {
        const icon = cs.icon || '✨';
        // 根据图标/名称生成一个稳定的柔和背景色
        const hue = this._stringHue(cs.name + cs.id);
        const bgLight = `hsl(${hue}, 70%, 96%)`;
        const bgMid = `hsl(${hue}, 65%, 90%)`;
        const accentColor = `hsl(${hue}, 65%, 45%)`;

        return `
            <div class="cs-card" data-cs-id="${cs.id}" data-cs-style="${cs.style}" data-cs-icon="${cs.icon || ''}" data-cs-title="${cs.title || ''}"
                 style="--cs-accent:${accentColor}; --cs-bg-light:${bgLight}; --cs-bg-mid:${bgMid}; animation-delay:${index * 45}ms;">
                <div class="cs-card__icon-wrap">
                    <span class="cs-card__icon">${icon}</span>
                </div>
                <div class="cs-card__body">
                    <div class="cs-card__name">${this._escapeAttr(cs.name)}</div>
                    <div class="cs-card__meta">${this._escapeAttr(cs.style)}${cs.title ? '<span class="cs-card__meta-sep">·</span>' + this._escapeAttr(cs.title) : ''}</div>
                </div>
                <div class="cs-card__actions">
                    <button class="cs-card__act cs-card__act--edit" data-cs-edit="${cs.id}" title="${this.getText('customEdit', '编辑')}">
                        <svg style="width:14px;height:14px;"><use xlink:href="#iconEdit"></use></svg>
                    </button>
                    <button class="cs-card__act cs-card__act--del" data-cs-del="${cs.id}" title="${this.getText('customDelete', '删除')}">
                        <svg style="width:14px;height:14px;"><use xlink:href="#iconTrashcan"></use></svg>
                    </button>
                </div>
            </div>`;
    }

    // 辅助：根据字符串生成色相值（用于卡片图标背景色）
    _stringHue(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) hash = ((hash << 5) - hash + str.charCodeAt(i)) | 0;
        return Math.abs(hash % 360);
    }

    // ========== 二级：自定义块父按钮 → 分组（引述/普通/图片/未分类）→ 各预设项 ==========
    createCustomParentButton(blockId) {
        const btn = document.createElement("button");
        btn.className = "b3-menu__item";
        btn.innerHTML = `<svg class="b3-menu__icon"><use xlink:href="#iconStar"></use></svg>
                         <span class="b3-menu__label">${this.getText('blockCustom', '自定义')}</span>
                         <svg class="b3-menu__icon b3-menu__icon--small"><use xlink:href="#iconRight"></use></svg>`;

        const subMenu = document.createElement("div");
        subMenu.className = "b3-menu__submenu";
        const itemsContainer = document.createElement("div");
        itemsContainer.className = "b3-menu__items";

        const groups = this._getGroupedByFolder();
        let anyGroup = false;

        for (const g of groups) {
            if (!g.items.length) continue;
            anyGroup = true;

            const isNone = g.id === '__none__';
            const iconHtml = this._groupIconSvg(isNone ? '🗂️' : (g.icon || '📁'), { size: 14, cls: 'b3-menu__icon' });
            const groupBtn = document.createElement("button");
            groupBtn.className = "b3-menu__item";
            groupBtn.innerHTML = `${iconHtml}<span class="b3-menu__label">${this._escapeAttr(g.name)}</span>
                                <svg class="b3-menu__icon b3-menu__icon--small"><use xlink:href="#iconRight"></use></svg>`;

            const groupSub = document.createElement("div");
            groupSub.className = "b3-menu__submenu";
            const groupItems = document.createElement("div");
            groupItems.className = "b3-menu__items";
            g.items.forEach(cs => groupItems.appendChild(this.createCustomStyleItem(blockId, cs)));
            groupSub.appendChild(groupItems);
            groupBtn.appendChild(groupSub);
            itemsContainer.appendChild(groupBtn);
        }

        if (!anyGroup) {
            const empty = document.createElement("button");
            empty.className = "b3-menu__item";
            empty.setAttribute('disabled', 'true');
            empty.innerHTML = `<span class="b3-menu__label" style="opacity:.5;">${this.getText('customEmpty', '暂无自定义样式')}</span>`;
            itemsContainer.appendChild(empty);
        }

        // 管理入口
        const manage = document.createElement("button");
        manage.className = "b3-menu__item";
        manage.innerHTML = `<svg class="b3-menu__icon"><use xlink:href="#iconSettings"></use></svg>
                            <span class="b3-menu__label">${this.getText('customManage', '管理自定义样式')}</span>`;
        manage.onclick = (e) => { e.stopPropagation(); this.openSetting(); };
        itemsContainer.appendChild(manage);

        subMenu.appendChild(itemsContainer);
        btn.appendChild(subMenu);
        return btn;
    }

    // ========== 三级：自定义预设项（一键套用） ==========
    createCustomStyleItem(blockId, cs) {
        const item = document.createElement("button");
        item.className = "b3-menu__item";
        item.innerHTML = `<span class="b3-menu__icon">${cs.icon || '✨'}</span>
                          <span class="b3-menu__label">${cs.name}</span>`;

        // 悬停预览
        item.addEventListener('mouseenter', () => this._showMenuHoverPreview(item, cs.style, cs.icon || '', cs.title || ''));
        item.addEventListener('mouseleave', () => this._hideMenuHoverPreview());

        item.onclick = async (e) => {
            e.stopPropagation();
            this._hideMenuHoverPreview();
            const attrs = {
                "custom-deco-style": cs.style,
                "custom-deco-card-icon": cs.icon || '',
                "custom-deco-card-title": cs.title || ''
            };
            await this.setAttrs(blockId, attrs);
            showMessage(this.getText('customApplied', '已套用自定义样式：') + cs.name);
        };

        return item;
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
                          <span class="b3-menu__label">${label}</span`;

        // 悬停预览
        const defaults = this.styleDefaults ? this.styleDefaults[label] : null;
        const previewIcon = defaults?.icon || '';
        const previewTitle = defaults?.title || '';
        item.addEventListener('mouseenter', () => this._showMenuHoverPreview(item, label, previewIcon, previewTitle));
        item.addEventListener('mouseleave', () => this._hideMenuHoverPreview());

        item.onclick = async (e) => {
            e.stopPropagation();
            this._hideMenuHoverPreview();

            const currentBlock = document.querySelector(`[data-node-id="${blockId}"]`);
            const existingTitle = currentBlock?.getAttribute('custom-deco-card-title') || '';

            const attrs = { "custom-deco-style": label };

            if (!key.endsWith('QuoteCard') && !key.includes('WhisperCard') && !key.endsWith('ImageCard') && !key.startsWith('topLine')
            && !key.startsWith('polka') && !key.startsWith('titleBar')) {
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

        return item;;
    }

    // ========== 菜单项悬停预览（tooltip 浮层）==========
    _menuHoverEl = null;

    _getMenuHoverEl() {
        if (this._menuHoverEl) return this._menuHoverEl;
        const el = document.createElement('div');
        el.id = 'cs-menu-hover-preview';
        el.style.cssText = 'position:fixed; z-index:2147483647; width:420px; max-width:70vw; padding:16px 18px; box-shadow:0 8px 32px rgba(0,0,0,.2); border-radius:12px; background:var(--b3-theme-background); border:1px solid var(--b3-border-color); pointer-events:none; opacity:0; transition:opacity .15s ease; display:none;';
        document.body.appendChild(el);
        this._menuHoverEl = el;
        return el;
    }

    _showMenuHoverPreview(targetEl, styleLabel, icon, title) {
        const el = this._getMenuHoverEl();
        if (!styleLabel) return;
        const isBuiltin = /^icon[A-Z]/.test(icon);
        // 渲染图标
        let headHtml = '';
        if (icon && isBuiltin) {
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('style', 'width:16px;height:16px;vertical-align:text-bottom;margin-right:6px;');
            svg.setAttribute('viewBox', '0 0 24 24');
            const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
            use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#' + icon);
            use.setAttribute('href', '#' + icon);
            svg.appendChild(use);
            const tmp = document.createElement('div'); tmp.appendChild(svg); headHtml = tmp.innerHTML;
        } else if (icon) {
            headHtml = '<span style="margin-right:6px;">' + icon + '</span>';
        }
        // 只传 custom-deco-style 让 CSS ::before 自动渲染图标+标题；内部只放占位符避免重复
        el.innerHTML =
            '<div class="protyle-wysiwyg"><div custom-deco-style="' + styleLabel + '"' +
            ' style="padding:14px 16px;border-radius:8px;" data-type="NodeParagraph">&nbsp;</div></div>';

        el.style.display = 'block';
        const rect = targetEl.getBoundingClientRect();
        const ew = el.offsetWidth, eh = el.offsetHeight;
        let left = rect.right + 10;
        if (left + ew > window.innerWidth - 6) left = rect.left - ew - 10;
        if (left < 6) left = 6;
        let top = rect.top;
        if (top + eh > window.innerHeight - 6) top = window.innerHeight - eh - 6;
        if (top < 6) top = 6;
        el.style.left = left + 'px';
        el.style.top = top + 'px';
        requestAnimationFrame(() => { el.style.opacity = '1'; });
    }

    _hideMenuHoverPreview() {
        const el = this._menuHoverEl;
        if (!el) return;
        el.style.opacity = '0';
        setTimeout(() => { if (el && el.style.opacity === '0') { el.style.display = 'none'; } }, 160);
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

    // ========== 自定义样式按「用户分组（文件夹）」归类 ==========
    _escapeAttr(s) {
        return String(s == null ? '' : s)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    // 渲染分组图标：内置图标名（iconXxx）渲染为思源 svg，其余（Emoji / 文字）按文本渲染
    _groupIconSvg(iconName, opts) {
        const o = opts || {};
        const sz = o.size || 16;
        const cls = o.cls ? ` class="${o.cls}"` : '';
        const isSvg = (iconName && typeof iconName === 'string' && /^icon[A-Z]/.test(iconName));
        if (isSvg) {
            const style = o.style || `width:${sz}px;height:${sz}px;flex:none;opacity:.8;`;
            return `<svg${cls} style="${style}"><use xlink:href="#${iconName}"></use></svg>`;
        }
        const text = (iconName && String(iconName).length) ? iconName : '📁';
        const style = o.style || `font-size:${sz}px;flex:none;opacity:.85;line-height:1;`;
        return `<span${cls} style="${style}">${this._escapeAttr(text)}</span>`;
    }

    // 返回有序数组：用户分组（按 customFolders 顺序）+ 末尾「未分类」
    _getGroupedByFolder() {
        const folders = this.customFolders || [];
        const result = [];
        const folderIds = new Set();
        for (const f of folders) {
            folderIds.add(f.id);
            result.push({ id: f.id, name: f.name, icon: f.icon || '📁', items: [] });
        }
        const noneGroup = { id: '__none__', name: this.getText('unsorted', '未分类'), items: [] };
        for (const cs of (this.customStyles || [])) {
            const fid = cs.folderId || '';
            if (fid && folderIds.has(fid)) {
                const g = result.find(r => r.id === fid);
                if (g) g.items.push(cs);
                else noneGroup.items.push(cs);
            } else {
                noneGroup.items.push(cs);
            }
        }
        result.push(noneGroup);
        return result;
    }

    _buildFolderOptionsHtml(selectedId) {
        const folders = this.customFolders || [];
        let html = '<option value="">— ' + this.getText('noFolder', '不归入分组') + ' —</option>';
        for (const f of folders) {
            const sel = f.id === selectedId ? ' selected' : '';
            html += `<option value="${f.id}"${sel}>${this._escapeAttr(f.name)}</option>`;
        }
        return html;
    }

    // ========== 分组的增删改 ==========
    // existing: { name, icon } | null（新建）；onConfirm 回调接收 { name, icon }
    openGroupDialog(existing, onConfirm) {
        const self = this;
        const isEdit = !!(existing && existing.name);
        const selIcon = (existing && existing.icon) || '📁';

        // 用 createElementNS 渲染图标（innerHTML 的 <use> 在 Dialog 内无法解析 symbol）
        function makeIconPreview(name, size) {
            const s = size || 18;
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('width', String(s));
            svg.setAttribute('height', String(s));
            svg.style.display = 'inline-block';
            svg.style.verticalAlign = 'middle';
            svg.style.flexShrink = '0';
            const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
            use.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#' + name);
            use.setAttribute('xlink:href', '#' + name);
            svg.appendChild(use);
            return svg;
        }

        function isBuiltinIcon(val) {
            return typeof val === 'string' && /^icon[A-Z]/.test(val);
        }

        function renderCurIcon(el, val) {
            el.innerHTML = '';
            if (isBuiltinIcon(val)) {
                el.appendChild(makeIconPreview(val, 18));
            } else {
                el.textContent = val || '';
                el.style.fontSize = '16px';
            }
        }

        const dlg = new Dialog({
            title: isEdit ? this.getText('renameGroup', '重命名分组') : this.getText('addFolder', '新建分组'),
            width: "420px",
            content: `<div style="padding:20px 24px;">
                <label style="display:block; margin-bottom:6px; font-size:13px; font-weight:600;">${this.getText('folderName', '分组名称')}</label>
                <input id="cs-g-name" class="b3-text-field" type="text" value="${existing && existing.name ? this._escapeAttr(existing.name) : ''}" placeholder="${this.getText('folderNamePlaceholder', '如：工作、日记')}" style="width:100%;">
                <div style="display:flex; align-items:center; gap:10px; margin-top:16px;">
                    <span id="cs-g-cur-icon" style="font-size:12px; opacity:.6; flex:1; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; display:inline-flex; align-items:center; min-height:20px;"></span>
                    <button id="cs-g-pick-btn" class="b3-button b3-button--outline" style="padding:5px 14px; font-size:12px;">${this.getText('changeIcon', '更换图标')}</button>
                </div>
                <div class="fn__flex" style="justify-content:flex-end; gap:8px; margin-top:18px;">
                    <button class="b3-button b3-button--cancel" id="cs-g-cancel">${this.getText('cancel', '取消')}</button>
                    <button class="b3-button b3-button--outline" id="cs-g-ok" style="padding:6px 20px; font-weight:600;">${this.getText('confirm', '确定')}</button>
                </div>
            </div>`
        });
        const el = dlg.element;
        const input = el.querySelector('#cs-g-name');
        const curIconEl = el.querySelector('#cs-g-cur-icon');
        let currentIcon = selIcon;

        // 初始渲染图标预览
        renderCurIcon(curIconEl, currentIcon);

        // 点击「更换图标」→ 弹出三 Tab 选择器
        el.querySelector('#cs-g-pick-btn').addEventListener('click', () => {
            self._pickEmojiIcon(currentIcon, function (picked) {
                currentIcon = picked;
                renderCurIcon(curIconEl, picked);
            }, el.querySelector('#cs-g-pick-btn'));
        });

        setTimeout(() => input.focus(), 30);
        const confirm = () => {
            const name = input.value.trim();
            if (!name) { showMessage(this.getText('needFolderName', '请填写分组名称')); return; }
            onConfirm({ name, icon: currentIcon });
            dlg.destroy();
        };
        el.querySelector('#cs-g-ok').addEventListener('click', confirm);
        el.querySelector('#cs-g-cancel').addEventListener('click', () => dlg.destroy());
        input.addEventListener('keydown', (e) => { if (e.key === 'Enter') confirm(); });
    }




    // ========== 图标选择：直接调用思源内核 openEmoji（去除内置图标，统一用 Emoji）==========

    // 将 openEmoji 返回的十六进制码点（或自定义图标路径）归一化为可存储的图标串
    _normalizeEmoji(v) {
        const s = (typeof v === 'string') ? v.trim() : '';
        if (!s) return '';
        if (s.includes('.') || s.includes('/')) return s; // 自定义/动态图标为路径，原样返回
        if (/^[0-9a-fA-F]+(-[0-9a-fA-F]+)*$/.test(s)) {
            const codes = s.split('-').map(c => parseInt(c, 16));
            if (codes.every(c => Number.isFinite(c))) {
                try { return String.fromCodePoint(...codes); } catch (e) { return s; }
            }
        }
        return s;
    }

    // 统一的图标选择器：优先使用思源内核 openEmoji；不可用时退回文本输入
    _pickEmojiIcon(currentValue, onPick, anchorEl) {
        const self = this;
        const cur = (currentValue || '').toString().trim();

        const fallback = () => self._showIconTextInput(cur, onPick);

        if (typeof openEmoji !== 'function') { fallback(); return; }

        let position = { x: Math.round(window.innerWidth / 2), y: Math.round(window.innerHeight / 2) };
        if (anchorEl && typeof anchorEl.getBoundingClientRect === 'function') {
            const r = anchorEl.getBoundingClientRect();
            position = { x: Math.round(r.left), y: Math.round(r.bottom) };
        }

        try {
            openEmoji({
                position: position,
                selectedCB: (emoji) => {
                    const v = self._normalizeEmoji(emoji);
                    if (onPick) onPick(v);
                },
                hideDynamicIcon: false,
                hideCustomIcon: true,
            });
        } catch (e) {
            console.warn('openEmoji 调用失败，退回文本输入', e);
            fallback();
        }
    }

    // openEmoji 不可用时的兜底：纯文本 / Emoji 输入
    _showIconTextInput(currentValue, onPick) {
        const self = this;
        const dlg = new Dialog({
            title: self.getText('setIconTitle', '设置图标'),
            width: '360px',
            content: '<div style="padding:16px;">' +
                '<label style="display:block;font-size:13px;opacity:.65;margin-bottom:8px;">' + self.getText('enterTextOrEmoji', '输入文字或 Emoji') + '</label>' +
                '<input id="ip-txt-fb" class="b3-text-field" type="text" value="' + self._escapeAttr(currentValue) + '" placeholder="' + self._escapeAttr(self.getText('textPlaceholder', '输入 Emoji 或文字')) + '" style="width:100%;font-size:14px;">' +
                '<div id="ip-txt-prev-fb" style="margin-top:14px;text-align:center;min-height:48px;font-size:36px;"></div>' +
                '<div style="display:flex;justify-content:flex-end;gap:8px;margin-top:16px;">' +
                    '<button class="b3-button b3-button--cancel" id="ip-fb-cancel">' + self.getText('cancel', '取消') + '</button>' +
                    '<button class="b3-button b3-button--outline" id="ip-fb-ok">' + self.getText('confirm', '确定') + '</button>' +
                '</div>' +
            '</div>'
        });
        const el = dlg.element;
        const ti = el.querySelector('#ip-txt-fb');
        const tp = el.querySelector('#ip-txt-prev-fb');
        const upd = () => { tp.textContent = ti.value.trim(); tp.style.opacity = ti.value.trim() ? '1' : '.2'; };
        ti.addEventListener('input', upd);
        upd();
        ti.focus();
        el.querySelector('#ip-fb-cancel').addEventListener('click', () => dlg.destroy());
        el.querySelector('#ip-fb-ok').addEventListener('click', () => { if (onPick) onPick(ti.value.trim()); dlg.destroy(); });
    }

    async createGroup(name, icon) {
        if (!this.customFolders) this.customFolders = [];
        this.customFolders.push({ id: 'grp_' + Date.now(), name, icon: icon || '📁' });
        await this.saveData('customFolders', this.customFolders);
        showMessage(this.getText('folderCreated', '已新建分组：') + name);
        if (this._settingRootEl && this._settingRootEl.isConnected) this.renderCustomStyleManager(this._settingRootEl);
    }

    async renameGroup(id, name, icon) {
        const f = (this.customFolders || []).find(x => x.id === id);
        if (!f) return;
        f.name = name;
        f.icon = icon || '📁';
        await this.saveData('customFolders', this.customFolders);
        showMessage(this.getText('groupRenamed', '已重命名分组'));
        if (this._settingRootEl && this._settingRootEl.isConnected) this.renderCustomStyleManager(this._settingRootEl);
    }

    async deleteGroup(id) {
        this.customFolders = (this.customFolders || []).filter(f => f.id !== id);
        this.customStyles = (this.customStyles || []).map(c => (c.folderId === id ? Object.assign({}, c, { folderId: null }) : c));
        await this.saveData('customFolders', this.customFolders);
        await this.saveData('customStyles', this.customStyles);
        showMessage(this.getText('groupDeleted', '已删除分组，样式已移至未分类'));
        if (this._settingRootEl && this._settingRootEl.isConnected) this.renderCustomStyleManager(this._settingRootEl);
    }

    // ========== 菜单数据结构（五级：轻饰笔记 → 块类型 → 细分类 → 组 → 卡片项） ==========
    getMenuStructure() {
        return [
            {
                id: "quoteBlock",
                labelKey: "blockQuote",
                icon: "#iconQuote",
                children: [
                    {
                        id: "quoteCategory",
                        labelKey: "categoryQuote",
                        icon: "#iconQuote",
                        subGroups: [
                            { id: "quoteBlock", labelKey: "quoteGroup", icon: "#iconQuote", filter: (label, key) => key.endsWith('QuoteCard') },
                            { id: "excerptGroup", labelKey: "excerptGroup", icon: "#iconQuote", filter: (label, key) => key.endsWith('ExcerptCard') }
                        ]
                    },
                    {
                        id: "timelineCategory",
                        labelKey: "categoryTimeline",
                        icon: "#iconLayout",
                        subGroups: [
                            { id: "whisper", labelKey: "whisperGroup", icon: "#iconLayout", filter: (label, key) => key.startsWith('timeline') && key.includes('WhisperCard') && !key.includes('Thin') },
                            { id: "whisperThin", labelKey: "whisperThinGroup", icon: "#iconLayout", filter: (label, key) => key.includes('ThinWhisperCard') }
                        ]
                    },
                    {
                        id: "lineDecorCategory",
                        labelKey: "categoryLineDecor",
                        icon: "#iconQuote",
                        subGroups: [
                            { id: "topLineStyle", labelKey: "topLineGroup", icon: "#iconQuote", filter: (label, key) => key.startsWith('topLine') },
                            { id: "polkaStyle", labelKey: "polkaGroup", icon: "#iconSparkles", filter: (label, key) => key.startsWith('polka') },
                            { id: "titleBarStyle", labelKey: "titleBarGroup", icon: "#iconSparkles", filter: (label, key) => key.startsWith('titleBar') }
                        ]
                    }
                ]
            },
            {
                id: "normalBlock",
                labelKey: "blockNormal",
                icon: "#iconSparkles",
                children: [
                    {
                        id: "normalCardCategory",
                        labelKey: "categoryNormalCard",
                        icon: "#iconSparkles",
                        subGroups: [
                            { id: "cardStyle", labelKey: "creativeGroup", icon: "#iconSparkles", filter: (label, key) => key.endsWith('CreativeCard') },
                            { id: "gradientCardGroup", labelKey: "gradientCardGroup", icon: "#iconSparkles", filter: (label, key) => key.endsWith('GradientCard') },
                            { id: "journalCard", labelKey: "journalCardGroup", icon: "#iconSparkles", filter: (label, key) => key.endsWith('JournalCard') },
                            { id: "terminalGroup", labelKey: "terminalGroup", icon: "#iconTerminal", filter: (label, key) => key.endsWith('TerminalCard') },
                            { id: "noticeGroup", labelKey: "noticeGroup", icon: "#iconInfo", filter: (label, key) => key.endsWith('NoticeCard') },
                            { id: "gradientTop", labelKey: "gradientTopGroup", icon: "#iconSparkles", filter: (label, key) => key.endsWith('GradientTopCard') },
                            { id: "calloutGroup", labelKey: "calloutGroup", icon: "#iconInfo", filter: (label, key) => key.endsWith('CalloutCard') }
                        ]
                    },
                    {
                        id: "chatBubbleCategory",
                        labelKey: "categoryChatBubble",
                        icon: "#iconSparkles",
                        subGroups: [
                            { id: "chatWhisper", labelKey: "chatWhisperGroup", icon: "#iconSparkles", filter: (label, key) => key.endsWith('ChatWhisperCard') }
                        ]
                    }
                ]
            },
        ];
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

    // 移除运行时注入的时间轴样式
    if (this._timelineStyle && this._timelineStyle.parentNode) {
        this._timelineStyle.parentNode.removeChild(this._timelineStyle);
        this._timelineStyle = null;
    }
}

    uninstall() { this.onunload(); }
};