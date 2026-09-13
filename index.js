"use strict";
const siyuan = require("siyuan");
const { showMessage, Dialog, openEmoji, Menu } = siyuan;

// 自定义图标（通过 this.addIcons 注册为思源全局图标，用于顶栏+右键菜单）
// 参考轻语做法：模块级常量，onload 中注册一次即可，无需主题切换兜底
const PLUGIN_ICON = `
<symbol id="iconDecoCard" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="4" width="18" height="16" rx="2"/>
    <path d="M3 9h18"/>
    <path d="M7 13h6"/>
</symbol>
<symbol id="iconDecoSparkle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z"/>
    <path d="M19 15l.6 1.4 1.4.6-1.4.6L19 19l-.6-1.4-1.4-.6 1.4-.6L19 15z"/>
</symbol>
<symbol id="iconDecoLayers" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/>
    <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/>
    <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>
</symbol>
<symbol id="iconDecoPalette" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
</symbol>
<symbol id="iconDecoBrush" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
    <path d="m14.622 17.897-10.68-2.913"/>
    <path d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"/>
    <path d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"/>
</symbol>
<symbol id="iconDecoWand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
    <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"/>
    <path d="m14 7 3 3"/>
    <path d="M5 6v4"/>
    <path d="M19 14v4"/>
    <path d="M10 2v2"/>
    <path d="M7 8H3"/>
    <path d="M21 16h-4"/>
    <path d="M11 3H9"/>
</symbol>
<symbol id="iconDecoFolder" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>
</symbol>
<symbol id="iconDecoTag" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/>
    <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>
<symbol id="iconDecoSave" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
    <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/>
    <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/>
    <path d="M6 3v5a1 1 0 0 0 1 1h7"/>
</symbol>`;


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

    // 描边引述组（OutlineQuoteCard）——透明底 + 3px 描边圆角，与调色引述同一套七色
    { key: 'outlineGrayQuoteCard',    label: '描边引述·灰', icon: '' },
    { key: 'outlineBlueQuoteCard',    label: '描边引述·蓝', icon: '' },
    { key: 'outlineGreenQuoteCard',   label: '描边引述·绿', icon: '' },
    { key: 'outlineOrangeQuoteCard',  label: '描边引述·橙', icon: '' },
    { key: 'outlinePurpleQuoteCard',  label: '描边引述·紫', icon: '' },
    { key: 'outlineRedQuoteCard',     label: '描边引述·红', icon: '' },
    { key: 'outlineYellowQuoteCard',  label: '描边引述·黄', icon: '' },

    // 衬色样式组（TintQuoteCard）——厚左条 + 衬色底 + 阴影；衬色由 CSS color-mix 从 --bq-accent 自动派生，亮暗模式自适应
    { key: 'tintPurpleQuoteCard', label: '衬色引述·紫', icon: '' },
    { key: 'tintBlueQuoteCard',   label: '衬色引述·蓝', icon: '' },
    { key: 'tintGreenQuoteCard',  label: '衬色引述·绿', icon: '' },
    { key: 'tintOrangeQuoteCard', label: '衬色引述·橙', icon: '' },
    { key: 'tintRedQuoteCard',    label: '衬色引述·红', icon: '' },
    { key: 'tintYellowQuoteCard', label: '衬色引述·黄', icon: '' },
    { key: 'tintGrayQuoteCard',   label: '衬色引述·灰', icon: '' },

    // 角标样式组（BracketQuoteCard）——一对「」角标收束文字，极简无框；颜色仅用于角标
    { key: 'bracketPurpleQuoteCard', label: '角标引述·紫', icon: '' },
    { key: 'bracketBlueQuoteCard',   label: '角标引述·蓝', icon: '' },
    { key: 'bracketGreenQuoteCard',  label: '角标引述·绿', icon: '' },
    { key: 'bracketOrangeQuoteCard', label: '角标引述·橙', icon: '' },
    { key: 'bracketRedQuoteCard',    label: '角标引述·红', icon: '' },
    { key: 'bracketYellowQuoteCard', label: '角标引述·黄', icon: '' },
    { key: 'bracketGrayQuoteCard',   label: '角标引述·灰', icon: '' },

    // 细边样式组（ThinQuoteCard）——1.5px 细描边 + 极浅衬底 + 16px 大圆角；
    // 衬底由 CSS color-mix 从 --thin-accent 自动派生，亮暗模式自适应
    { key: 'thinYellowQuoteCard', label: '细边引述·黄', icon: '' },
    { key: 'thinGreenQuoteCard',  label: '细边引述·绿', icon: '' },
    { key: 'thinBlueQuoteCard',   label: '细边引述·蓝', icon: '' },
    { key: 'thinOrangeQuoteCard', label: '细边引述·橙', icon: '' },
    { key: 'thinRedQuoteCard',    label: '细边引述·红', icon: '' },
    { key: 'thinPurpleQuoteCard', label: '细边引述·紫', icon: '' },
    { key: 'thinGrayQuoteCard',   label: '细边引述·灰', icon: '' },

    // 气泡样式组（BubbleQuoteCard）——对话气泡，颜色变体；无后缀的“气泡引述”是历史别名（= 紫），CSS 继续兼容
    { key: 'bubblePurpleQuoteCard', label: '气泡引述·紫', icon: '' },
    { key: 'bubbleBlueQuoteCard',   label: '气泡引述·蓝', icon: '' },
    { key: 'bubbleGreenQuoteCard',  label: '气泡引述·绿', icon: '' },
    { key: 'bubbleOrangeQuoteCard', label: '气泡引述·橙', icon: '' },
    { key: 'bubbleRedQuoteCard',    label: '气泡引述·红', icon: '' },
    { key: 'bubbleYellowQuoteCard', label: '气泡引述·黄', icon: '' },
    { key: 'bubbleGrayQuoteCard',   label: '气泡引述·灰', icon: '' },

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

    // 彩色便签组 - key 分别以 PostCard / MorandiCard / MarkCard 结尾，方便 endsWith 过滤
    { key: 'lemonPostCard',    label: '便利贴·柠檬', icon: '🍋' },
    { key: 'peachPostCard',    label: '便利贴·蜜桃', icon: '🍑' },
    { key: 'mintPostCard',     label: '便利贴·薄荷', icon: '🌿' },
    { key: 'skyPostCard',      label: '便利贴·天空', icon: '☁️' },
    { key: 'grapePostCard',    label: '便利贴·香芋', icon: '🍇' },
    { key: 'sageMorandiCard',  label: '莫兰迪·灰绿', icon: '🌿' },
    { key: 'roseMorandiCard',  label: '莫兰迪·灰粉', icon: '🥀' },
    { key: 'hazeMorandiCard',  label: '莫兰迪·灰蓝', icon: '🌫️' },
    { key: 'oatMorandiCard',   label: '莫兰迪·暖灰', icon: '🌾' },
    { key: 'mauveMorandiCard', label: '莫兰迪·灰紫', icon: '🪻' },
    { key: 'yellowMarkCard',   label: '荧光·黄', icon: '🖍️' },
    { key: 'greenMarkCard',    label: '荧光·绿', icon: '🖍️' },
    { key: 'pinkMarkCard',     label: '荧光·粉', icon: '🖍️' },
    { key: 'blueMarkCard',     label: '荧光·蓝', icon: '🖍️' },
    { key: 'dawnCloudCard',    label: '云笺·晨曦', icon: '🌅' },
    { key: 'mintCloudCard',    label: '云笺·薄荷', icon: '🌿' },
    { key: 'nightCloudCard',   label: '云笺·星空', icon: '🌌' },
    { key: 'peachCloudCard',   label: '云笺·蜜桃', icon: '🍑' },
    { key: 'limeCloudCard',    label: '云笺·青柠', icon: '🍋' },
];

// 历史标签别名：样式改名后，旧块上的 custom-deco-style 标签仍能映射到新 key
// （渲染由 CSS 兼容选择器兜底，这里只负责逻辑层：标题点击、引述判断等）
const LABEL_ALIASES = {
    '气泡引述': 'bubblePurpleQuoteCard', // 七色化之前无后缀的气泡引述（= 紫）
};

const TEXT = {
    cardview: '轻饰笔记',

    previewToggle: '悬停预览',
    previewDesc: '鼠标悬停在样式项上时，是否实时显示样式效果预览',
    previewOn: '已开启悬停预览',
    previewOff: '已关闭悬停预览',

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
    categoryBubble: '气泡样式',
    bubbleGroup: '气泡引述',
    categoryOutline: '描边样式',
    outlineGroup: '描边引述',
    categoryTint: '衬色样式',
    tintGroup: '衬色引述',
    categoryBracket: '角标样式',
    bracketGroup: '角标引述',
    categoryThin: '细边样式',
    thinGroup: '细边引述',
    categoryNormalCard: '普通卡片',
    categoryTimeline: '时间轴',
    categoryLineDecor: '线条装饰',
    categoryChatBubble: '对话气泡',
    categorySticky: '彩色便签',
    postItGroup: '便利贴',
    morandiGroup: '莫兰迪色卡',
    markerGroup: '荧光笔迹',
    cloudGroup: '云霞渐变',
    categoryImage: '图片设置',

    // 自定义块样式
    blockCustom: '自定义',
    customManage: '轻饰笔记',
    showCustomMenuToggle: '显示自定义样式',
    showCustomMenuDesc: '是否在右键菜单中显示「自定义」样式入口（关闭后仍可通过顶栏按钮进入管理器）',
    showCustomMenuOn: '已显示自定义样式入口',
    showCustomMenuOff: '已隐藏自定义样式入口',

    // 样式显隐（独立分类：控制右键菜单中哪些样式项显示或隐藏）
    styleVisibilityTitle: '样式显隐',
    styleVisibilityDesc: '控制右键菜单中哪些样式项显示或隐藏',
    styleVisibilitySearch: '搜索样式...',
    bulkShow: '全部显示',
    bulkHide: '全部隐藏',
    styleVisibilityBuiltIn: '内置样式',
    styleVisibilityCustom: '自定义样式',

    // 设置搜索
    settingsSearch: '设置搜索',
    noSearchResult: '未找到匹配的设置项',
    noSearchHint: '尝试更换关键词，或检查是否有空格/错别字',
    searchResultsFor: '搜索结果',
    customName: '名称',
    customBaseStyle: '基础样式',
    customBaseStyleHint: '先选块类型，再点选具体样式',
    customNeedStyle: '请先选择基础样式',
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
    allTab: '全部',
    moveToGroup: '移动到分组',
    movedToGroup: '已移动到分组：',
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
                color: var(--b3-theme-primary);  /* 亮色模式：使用思源主题主色（品牌色） */
            }
            [data-theme-mode="dark"] .north-menu-icon {
                color: var(--b3-theme-on-background);  /* 暗色模式：改用文字色（确保图标可见） */
            }
        `;
        document.head.appendChild(style);

        // 注入数据驱动生成的时间轴样式（替代 index.css 中近千行重复静态样式）
        const timelineStyle = document.createElement('style');
        timelineStyle.id = 'siyuan-deco-timeline';
        timelineStyle.textContent = generateTimelineCSS();
        document.head.appendChild(timelineStyle);
        this._timelineStyle = timelineStyle;

        // 注入自定义图标（贴合「轻饰笔记」卡片样式主题）
        this.addIcons(PLUGIN_ICON);

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

        // 加载悬停预览开关（默认关闭）
        try {
            this.showPreview = (await this.loadData('showPreview')) === true;
        } catch (e) {
            console.warn('[CardStyleWorkshop] 读取预览开关失败', e);
            this.showPreview = false;
        }

        // 加载右键菜单「自定义样式」显示开关（默认开启）
        try {
            this.showCustomMenu = (await this.loadData('showCustomMenu')) !== false;
        } catch (e) {
            console.warn('[CardStyleWorkshop] 读取自定义菜单开关失败', e);
            this.showCustomMenu = true;
        }

        // 加载样式显示控制（隐藏的样式 key 集合，默认全部显示）
        try {
            this.hiddenStyles = (await this.loadData('hiddenStyles')) || [];
            if (!Array.isArray(this.hiddenStyles)) this.hiddenStyles = [];
        } catch (e) {
            console.warn('[CardStyleWorkshop] 读取隐藏样式失败', e);
            this.hiddenStyles = [];
        }

        this.state = { menu: null, observer: null, restoreObserver: null };

        // 仅当刚在编辑器内右键、或点击块把手时才允许注入「轻饰笔记」菜单项，
        // 防止主菜单（Alt+\）等其它共用 #commonMenu 的菜单被误注入。
        this._blockMenuArmed = 0;
        this._onDocContextmenu = (e) => {
            if (e.target && e.target.closest && e.target.closest('.protyle-wysiwyg')) {
                this._blockMenuArmed = Date.now();
            }
        };
        this._onDocGutterClick = (e) => {
            if (e.target && e.target.closest && e.target.closest('.protyle-gutters')) {
                this._blockMenuArmed = Date.now();
            }
        };
        document.addEventListener('contextmenu', this._onDocContextmenu, true);
        document.addEventListener('click', this._onDocGutterClick, true);

        this.waitForMenu();
        this.addTitleClickListener();
        this.startAttributeRestoreObserver();

    }

    // 布局就绪后注册顶栏按钮（参考轻语：addTopBar 必须在 onLayoutReady 中调用，
    // 而非 onload，否则自定义图标在主题切换后会丢失）
    onLayoutReady() {
        this.addTopBar({
            icon: 'iconDecoCard',
            title: this.getText('customManage', '自定义块样式'),
            position: 'right',
            callback: () => this.openSetting()
        });
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

        // 荧光笔迹等纯排版样式（MarkCard）不渲染图标/标题，点击不弹编辑卡片
        if (cardKey && cardKey.endsWith('MarkCard')) return;

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
        // 历史标签别名（如改名前的“气泡引述”）
        if (label && Object.prototype.hasOwnProperty.call(LABEL_ALIASES, label)) {
            return LABEL_ALIASES[label];
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
                // 未注册标签（自定义样式等）没有 key，传空串避免过滤器对 null 调字符串方法
                if (typeof group.filter === 'function' && group.filter(label, cardKey || '')) return true;
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
                    <div class="cs-edit-row">
                        ${tabsHtml}
                        <div id="card-style-preview" class="cs-preview-box">
                            <div class="cs-preview-label">👁️ ${this.getText('preview', '预览')}</div>
                            <div id="card-style-preview-inner" class="protyle-wysiwyg" style="flex:1; overflow:auto;"></div>
                        </div>
                    </div>
                    <input id="card-type-select" type="hidden" value="${this._escapeAttr(currentStyle)}">
                </div>
                <div class="b3-dialog__item" style="margin-bottom: 16px;">
                    <label style="display:block; margin-bottom:6px; font-weight:500;">${this.getText('cardIcon', '图标')}</label>
                    <div style="display: flex; gap: 8px; align-items: center;">
                        <div id="card-icon-preview" data-icon="${this._escapeAttr(currentIcon)}" class="cs-icon-preview">${this._renderIconHtml(currentIcon) || '😀'}</div>
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
            width: Math.min(480, window.innerWidth - 24) + "px"
        });

        const dialogElement = dialog.element;
        const styleInput = dialogElement.querySelector('#card-type-select');
        const iconPreviewEl = dialogElement.querySelector('#card-icon-preview');
        const setIconVal = (v) => {
            iconPreviewEl.dataset.icon = v || '';
            iconPreviewEl.innerHTML = v ? this._renderIconHtml(v) : '😀';
        };
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
            for (const m of muts) {
                // 主路径：监听 #commonMenu 的 class 变化（从隐藏变为显示）
                if (m.type === "attributes" && m.attributeName === "class") {
                    const oldClass = m.oldValue || "", newClass = m.target.className;
                    if (oldClass.includes("fn__none") && !newClass.includes("fn__none")) {
                        this.insertMenuItem();
                        return;
                    }
                }
                // 兜底 1：监听 style 变化（部分版本直接改 display）
                if (m.type === "attributes" && m.attributeName === "style") {
                    const styleAttr = m.target.getAttribute("style") || "";
                    if (!/display\s*:\s*none/i.test(styleAttr)) {
                        if (!document.querySelector("#North-CardView-Top")) {
                            this.insertMenuItem();
                        }
                        return;
                    }
                }
                // 兜底 2：监听 #commonMenu 子节点变化（菜单内容被重新填充时）
                if (m.type === "childList" && m.target === this.state.menu && m.addedNodes.length > 0) {
                    if (!document.querySelector("#North-CardView-Top")) {
                        this.insertMenuItem();
                    }
                    return;
                }
            }
        });
        this.state.observer.observe(this.state.menu, {
            attributes: true,
            attributeFilter: ["class", "style"],
            attributeOldValue: true,
            childList: true,
            subtree: false
        });
    }

    insertMenuItem() {
        // 仅当 2 秒内刚在编辑器内右键 / 点击块把手时才注入；
        // 主菜单等其它菜单打开时没有该武装标记，直接跳过（块选中态 class 会残留，不能作为判断依据）。
        if (!this._blockMenuArmed || (Date.now() - this._blockMenuArmed) > 2000) return;
        this._blockMenuArmed = 0;

        // 防止重复插入：先清理已存在的菜单项（连同其前的分隔符）
        const existing = document.querySelector("#North-CardView-Top");
        if (existing) {
            const prev = existing.previousElementSibling;
            if (prev && prev.classList && prev.classList.contains("b3-menu__separator")) {
                prev.remove();
            }
            existing.remove();
        }

        const container = document.querySelector("#commonMenu .b3-menu__items");
        if (!container) return;

        // 定位插入参考点：用户偏好放在菜单最顶部（「转换为」之前）。
        // refItem = 第一个子元素时，insertBefore 会把插件项插到「转换为」前面。
        // Fallback：菜单为空时退回 updateAndCreatedAt 之前 / 最后一个分隔符之后。
        let refItem = container.firstElementChild;
        if (!refItem) {
            refItem = Array.from(container.children)
                .find(i => i.getAttribute("data-id") === "updateAndCreatedAt");
            if (!refItem) {
                const seps = Array.from(container.querySelectorAll(".b3-menu__separator"));
                if (seps.length) {
                    refItem = seps[seps.length - 1].nextElementSibling;
                }
            }
        }

        // 多重 fallback 查找当前选中/悬停的块，兼容桌面端、平板端、移动端
        const findBlockEl = () => {
            return document.querySelector(".protyle-wysiwyg--select")
                || document.querySelector(".protyle-wysiwyg--hl")
                || document.querySelector("[data-node-id].protyle-wysiwyg--hl")
                || document.querySelector(".protyle-wysiwyg__hl [data-node-id]");
        };

        // 延迟重试：处理思源设置选中状态与菜单显示之间的时序差
        // （某些平板/移动端是菜单先弹出、选中 class 后设置）
        const tryInsert = (attempt = 0) => {
            const block = findBlockEl();
            if (block && block.dataset.nodeId) {
                const topBtn = this.createTopMenuButton(block.dataset.nodeId);
                const sep = this.createSeparator();
                if (refItem && refItem.parentNode === container) {
                    container.insertBefore(topBtn, refItem);
                    container.insertBefore(sep, refItem);
                } else {
                    container.appendChild(sep);
                    container.appendChild(topBtn);
                }
                return;
            }
            if (attempt < 10) {
                setTimeout(() => tryInsert(attempt + 1), 40);
            }
        };

        tryInsert();
    }

    createTopMenuButton(blockId) {
    const btn = document.createElement("button");
    btn.id = "North-CardView-Top";
    btn.className = "b3-menu__item";
    btn.innerHTML = `<svg class="b3-menu__icon north-menu-icon"><use xlink:href="#iconDecoCard"></use></svg>
                     <span class="b3-menu__label">${this.getText('cardview', '卡片视图')}</span>
                     <svg class="b3-menu__icon b3-menu__icon--small"><use xlink:href="#iconRight"></use></svg>`;

        const subMenu = document.createElement("div");
        subMenu.className = "b3-menu__submenu";
        const itemsContainer = document.createElement("div");
        itemsContainer.className = "b3-menu__items";

        // 一级块分类：引述块 / 普通块 / 图片相关（全部隐藏的分类不显示）
        let hasAny = false;
        this.getMenuStructure().forEach(parent => {
            const parentBtn = this.createParentButton(blockId, parent);
            if (parentBtn) {
                itemsContainer.appendChild(parentBtn);
                hasAny = true;
            }
        });

        // 用户自定义块样式（预设）
        if (this.showCustomMenu && this.customStyles && this.customStyles.length) {
            const customBtn = this.createCustomParentButton(blockId);
            if (customBtn) {
                itemsContainer.appendChild(customBtn);
                hasAny = true;
            }
        }

        // 上方没有任何可见项时不加分隔符；「移除样式」始终保留
        if (hasAny) itemsContainer.appendChild(this.createSeparator());
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
        let hasVisible = false;
        parent.children.forEach(category => {
            const catBtn = this.createCategoryButton(blockId, category);
            if (catBtn) {
                itemsContainer.appendChild(catBtn);
                hasVisible = true;
            }
        });
        // 一级入口下没有任何可见分类时，整个入口不显示
        if (!hasVisible) return null;

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

        // 三级：该分类下的具体组按钮；分类下仅有一个组时直接平铺条目，省掉一层菜单
        let hasVisible = false;
        if (category.subGroups.length === 1) {
            const hiddenSet = new Set(this.hiddenStyles || []);
            this.getAllCardItems().forEach(item => {
                // 被「样式显示控制」隐藏的项不出现在右键菜单
                if (hiddenSet.has(item.key)) return;
                if (category.subGroups[0].filter(item.label, item.key)) {
                    itemsContainer.appendChild(this.createCardItem(blockId, item.label, item.key));
                    hasVisible = true;
                }
            });
        } else {
            category.subGroups.forEach(group => {
                const groupBtn = this.createSecondaryGroupButton(blockId, group);
                if (groupBtn) {
                    itemsContainer.appendChild(groupBtn);
                    hasVisible = true;
                }
            });
        }
        // 分类下没有任何可见条目时，整个分类菜单不显示
        if (!hasVisible) return null;

        subMenu.appendChild(itemsContainer);
        btn.appendChild(subMenu);
        return btn;
    }

    // ========== 思源笔记原生设置入口：打开自定义块样式管理器 ==========
    // 复写 Plugin.openSetting()，以思源原生设置风格（左侧分类导航 + 右侧内容区）承载管理器，
    // 不再使用自定义 Tab 页。顶栏按钮与右键「管理自定义样式」均调用此方法。
    openSetting() {
        const self = this;
        // 手机端 / 矮窗口下夹紧弹窗尺寸：思源会按 88vw 截宽，固定 1280x780 会让内部布局被挤坏
        const dialog = new Dialog({
            title: this.getText('customManage', '自定义块样式'),
            content: '<div id="cs-setting-root" style="height:100%;width:100%;display:flex;overflow:hidden;"></div>',
            width: Math.min(1280, window.innerWidth - 24) + "px",
            height: Math.min(780, window.innerHeight - 24) + "px"
        });
        const rootEl = dialog.element.querySelector('#cs-setting-root');
        this._settingRootEl = rootEl;
        this._activeSettingsCategory = this._activeSettingsCategory || 'general';
        this.renderCustomStyleManager(rootEl);
    }

    // ========== 辅助：构建「Tab 分类 + 网格芯片」样式选择器（替代多级折叠树）==========
    // 色系芯片色点：无图标且名称含色彩字时，渲染对应色相的小圆点便于扫读
    _colorDotHtml(label) {
        const HUES = { '红': 4, '橙': 25, '黄': 48, '绿': 135, '青': 178, '蓝': 215, '紫': 268, '粉': 325 };
        const m = String(label || '').match(/红|橙|黄|绿|青|蓝|紫|粉|黑|灰/);
        if (!m) return '';
        const bg = HUES[m[0]] !== undefined ? `hsl(${HUES[m[0]]}, 72%, 58%)`
            : (m[0] === '黑' ? '#454545' : '#b9b9b9');
        return `<span class="cs-chip-dot" style="background:${bg};"></span>`;
    }

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
                    // 分类下只有一个组、或子组与分类同名时，省掉一层重复标题
                    const hideSubTitle = cat.subGroups.length === 1 || gLabel === catLabel;
                    subHtml += `
                        <div class="cs-cat-block">
                            ${hideSubTitle ? '' : `<div class="cs-cat-block-title">${this._escapeAttr(gLabel)}</div>`}
                            <div class="cs-chip-grid">
                                ${items.map(item => {
                                    const sel = item.label === selectedLabel ? ' cs-chip--active' : '';
                                    const d = this.styleDefaults[item.label] || {};
                                    const ico = d.icon
                                        ? '<span class="cs-chip-ico">' + this._escapeAttr(d.icon) + '</span>'
                                        : this._colorDotHtml(item.label);
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

    // ========== 打开新增/编辑样式的 Dialog 弹窗（左表单 + 右常驻预览）==========
    openStyleDialog(editId) {
        const self = this;
        const editing = editId ? (this.customStyles || []).find(c => c.id === editId) : null;
        const tabsHtml = this._buildStyleTabsHtml(editing ? editing.style : '');

        const dialogTitle = editing
            ? (this.getText('customEdit', '编辑') + ' · ' + editing.name)
            : this.getText('customAdd', '新增自定义样式');

        const contentHtml = `
            <div class="cs-dlg">
                <div class="cs-dlg__main">
                    <!-- 名称 -->
                    <div class="cs-dlg__field">
                        <label class="cs-dlg__label">${this.getText('customName', '名称')}<sup class="cs-dlg__req">*</sup></label>
                        <input id="cs-d-name" class="b3-text-field" type="text" value="${editing ? this._escapeAttr(editing.name) : ''}" placeholder="${this.getText('customNamePlaceholder', '如：我的日报模板')}" style="width:100%;">
                    </div>

                    <!-- 基础样式（块类型分段 + 具体样式芯片） -->
                    <div class="cs-dlg__field" id="cs-d-style-field">
                        <label class="cs-dlg__label">${this.getText('customBaseStyle', '基础样式')}<sup class="cs-dlg__req">*</sup><span class="cs-dlg__label-hint">${this.getText('customBaseStyleHint', '先选块类型，再点选具体样式')}</span></label>
                        ${tabsHtml}
                        <input id="cs-d-style" type="hidden" value="${this._escapeAttr(editing ? editing.style : '')}">
                    </div>

                    <!-- 图标 + 标题 并排 -->
                    <div class="cs-dlg__row">
                        <div class="cs-dlg__field cs-dlg__field--icon">
                            <label class="cs-dlg__label">${this.getText('cardIcon', '图标')}</label>
                            <span id="cs-d-icon-prev" class="cs-dlg__icon-btn" data-icon="${this._escapeAttr(editing ? (editing.icon || '') : '')}" title="${this.getText('clickPickIcon', '点击选择图标')}"></span>
                        </div>
                        <div class="cs-dlg__field" style="flex:1;">
                            <label class="cs-dlg__label">${this.getText('cardTitle', '标题')}</label>
                            <input id="cs-d-title" class="b3-text-field" type="text" value="${editing ? this._escapeAttr(editing.title || '') : ''}" placeholder="${this.getText('titlePlaceholder', '卡片标题')}" style="width:100%;">
                        </div>
                    </div>

                    <!-- 归属分组 -->
                    <div class="cs-dlg__field">
                        <label class="cs-dlg__label">${this.getText('folderLabel', '归属分组')}</label>
                        <div class="cs-dlg__folder">
                            <select id="cs-d-folder" class="b3-select">${this._buildFolderOptionsHtml(editing ? editing.folderId : '')}</select>
                            <button class="b3-button b3-button--outline" id="cs-d-newgroup" style="flex:none; white-space:nowrap;">+ ${this.getText('addFolder', '新建分组')}</button>
                        </div>
                    </div>
                </div>

                <!-- 右侧常驻预览 -->
                <aside class="cs-dlg__side">
                    <div class="cs-dlg__side-label">
                        <svg style="width:12px;height:12px;"><use xlink:href="#iconEye"></use></svg>${this.getText('preview', '预览')}
                    </div>
                    <div id="cs-d-preview" class="cs-dlg__preview"></div>
                </aside>
            </div>

            <!-- 操作按钮 -->
            <div class="cs-dlg__footer">
                <button class="b3-button b3-button--outline" id="cs-d-cancel">${this.getText('cancel', '取消')}</button>
                <button class="b3-button" id="cs-d-save">
                    <svg style="width:14px;height:14px;"><use xlink:href="#iconDecoSave"></use></svg>
                    ${this.getText('customSave', '保存')}
                </button>
            </div>`;

        const dialog = new Dialog({
            title: dialogTitle,
            content: contentHtml,
            width: Math.min(780, window.innerWidth - 24) + "px"
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
            // 新建时自动选中当前面板的第一个芯片，保证预览始终有内容、不会存出空样式
            if (!editing && !styleInput.value) {
                const firstChip = tabsEl.querySelector('.cs-tab-panel--active .cs-chip');
                if (firstChip) {
                    firstChip.classList.add('cs-chip--active');
                    styleInput.value = firstChip.getAttribute('data-label') || '';
                }
            }
        }

        const escapeAttr = s => String(s || '').replace(/"/g, '&quot;').replace(/&/g, '&amp;');

        // --- 预览渲染 ---
        // 辅助：在容器内渲染图标预览（内置图标用 SVG，emoji/文字直接文本，空值显示灰色加号）
        const renderIconPreview = (container, val) => {
            if (!container) return;
            container.classList.toggle('is-empty', !val);
            container.innerHTML = '';
            if (!val) {
                container.innerHTML = '<svg style="width:13px;height:13px;opacity:.4;"><use xlink:href="#iconAdd"></use></svg>';
                return;
            }
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
            } else if (val.includes('/') || val.includes('.')) {
                // 动态图标路径（如 api/icon/getDynamicIcon?...）用 <img> 渲染
                const img = document.createElement('img');
                const src = val.startsWith('http') || val.startsWith('//') ? val : '/' + val;
                img.src = src;
                img.alt = '';
                img.style.cssText = 'width:100%;height:100%;object-fit:contain;display:block;';
                container.appendChild(img);
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
            if (!previewContainer) return;
            if (!label) {
                previewContainer.innerHTML = `<div class="cs-dlg__preview-empty">${self.getText('customNeedStyle', '请先选择基础样式')}</div>`;
                return;
            }
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
                ' style="padding:12px 14px;" data-type="NodeParagraph">&nbsp;</div></div>';
        };

        setTimeout(renderPreview, 50);
        titleInput.addEventListener('input', renderPreview);

        // 在弹窗内直接新建分组，并自动选中
        const newGroupBtn = el.querySelector('#cs-d-newgroup');
        if (newGroupBtn) newGroupBtn.addEventListener('click', () => {
            self.openGroupDialog(null, async (g) => {
                if (!self.customFolders) self.customFolders = [];
                const newId = 'grp_' + Date.now();
                self.customFolders.push({ id: newId, name: g.name, icon: g.icon || '📁' });
                await self.saveData('customFolders', self.customFolders);
                showMessage(self.getText('folderCreated', '已新建分组：') + g.name);
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

            if (!name) { showMessage(self.getText('customNeedName', '请填写名称')); nameInput.focus(); return; }
            if (!style) {
                showMessage(self.getText('customNeedStyle', '请先选择基础样式'));
                const styleField = el.querySelector('#cs-d-style-field');
                if (styleField) {
                    styleField.classList.add('cs-dlg__field--error');
                    setTimeout(() => styleField.classList.remove('cs-dlg__field--error'), 1200);
                }
                return;
            }

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

    // ========== 设置面板渲染：思源原生风格（左侧分类导航 + 右侧内容区）==========
    renderCustomStyleManager(element) {
        const self = this;
        const allStyles = this.customStyles || [];
        const totalCount = allStyles.length;

        // ---- 左侧分类栏 HTML ----
        const categories = [
            { id: 'general', label: '通用', icon: 'iconSettings' },
            { id: 'styles', label: '自定义样式', icon: 'iconSparkles' },
            { id: 'groups', label: '分组管理', icon: 'iconFolder' },
            { id: 'visibility', label: '样式显隐', icon: 'iconEye' }
        ];
        const catHtml = categories.map(c => {
            const isActive = c.id === this._activeSettingsCategory;
            return `<button class="cs-settings-cat-item${isActive ? ' active' : ''}" data-cat="${c.id}">
                <svg class="cs-settings-cat-icon"><use xlink:href="#${c.icon}"></use></svg>
                <span>${c.label}</span>
            </button>`;
        }).join('');

        // ---- 右侧内容区：根据激活分类渲染 ----
        let mainHtml = '';
        if (this._activeSettingsCategory === 'general') {
            mainHtml = this._renderGeneralSettings();
        } else if (this._activeSettingsCategory === 'groups') {
            mainHtml = this._renderGroupSettings();
        } else if (this._activeSettingsCategory === 'visibility') {
            mainHtml = this._renderVisibilitySettings();
        } else {
            mainHtml = this._renderStylesSettings(element);
        }

        // ---- 整体布局（左右分栏）----
        const html = `
            <div id="cs-root" class="cs-settings-layout">
                <aside class="cs-settings-sidebar">
                    <div class="cs-settings-sidebar-header">
                        <svg class="cs-settings-sidebar-header-icon"><use xlink:href="#iconSettings"></use></svg>
                        <span>设置</span>
                    </div>
                    <input type="text" class="cs-settings-sidebar-search" id="cs-settings-search" placeholder="搜索">
                    ${catHtml}
                </aside>
                <div class="cs-settings-main" id="cs-settings-main">
                    ${mainHtml}
                </div>
            </div>`;

        element.innerHTML = html;

        // ====== 交互绑定 ======

        // 分类切换
        element.querySelectorAll('.cs-settings-cat-item').forEach(btn => {
            btn.addEventListener('click', () => {
                const catId = btn.getAttribute('data-cat');
                if (catId === self._activeSettingsCategory) return;
                self._activeSettingsCategory = catId;
                self.renderCustomStyleManager(element);
            });
        });

        // 分类内容事件绑定
        if (this._activeSettingsCategory === 'general') {
            this._bindGeneralSettings(element);
        } else if (this._activeSettingsCategory === 'groups') {
            this._bindGroupSettings(element);
        } else if (this._activeSettingsCategory === 'visibility') {
            this._bindVisibilitySettings(element);
        } else {
            // 自定义样式管理：绑定卡片网格事件
            this._bindStylesSettings(element);
        }

        // 侧栏全局搜索绑定
        this._bindSettingsSearch(element);
    }

    // ---------- 渲染「通用」分类内容 ----------
    _renderGeneralSettings() {
        return `
            <div class="cs-settings-group">
                <div class="cs-settings-section-title">预览</div>
                <div class="cs-settings-group-card">
                    <div class="cs-settings-group-body">
                        <div class="cs-settings-item">
                            <div class="cs-settings-item-text">
                                <div class="cs-settings-item-title">${this.getText('previewToggle', '悬停预览')}</div>
                                <div class="cs-settings-item-desc">${this.getText('previewDesc', '鼠标悬停在样式项上时，是否实时显示样式效果预览')}</div>
                            </div>
                            <div class="cs-settings-item-ctrl">
                                <label class="cs-switch">
                                    <input type="checkbox" id="cs-toggle-preview" ${this.showPreview ? 'checked' : ''}>
                                    <span class="cs-switch-slider"></span>
                                </label>
                            </div>
                        </div>
                        <div class="cs-settings-item">
                            <div class="cs-settings-item-text">
                                <div class="cs-settings-item-title">${this.getText('showCustomMenuToggle', '显示自定义样式')}</div>
                                <div class="cs-settings-item-desc">${this.getText('showCustomMenuDesc', '是否在右键菜单中显示「自定义」样式入口（关闭后仍可通过顶栏按钮进入管理器）')}</div>
                            </div>
                            <div class="cs-settings-item-ctrl">
                                <label class="cs-switch">
                                    <input type="checkbox" id="cs-toggle-custom-menu" ${this.showCustomMenu ? 'checked' : ''}>
                                    <span class="cs-switch-slider"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    }

    _bindGeneralSettings(element) {
        const self = this;
        const previewToggle = element.querySelector('#cs-toggle-preview');
        if (previewToggle) {
            previewToggle.addEventListener('change', async (e) => {
                self.showPreview = e.target.checked;
                try {
                    await self.saveData('showPreview', self.showPreview);
                } catch (err) { /* 忽略保存失败 */ }
                showMessage(self.getText(e.target.checked ? 'previewOn' : 'previewOff',
                    e.target.checked ? '已开启悬停预览' : '已关闭悬停预览'));
            });
        }
        // 右键菜单「自定义样式」显示开关
        const customMenuToggle = element.querySelector('#cs-toggle-custom-menu');
        if (customMenuToggle) {
            customMenuToggle.addEventListener('change', async (e) => {
                self.showCustomMenu = e.target.checked;
                try {
                    await self.saveData('showCustomMenu', self.showCustomMenu);
                } catch (err) { /* 忽略保存失败 */ }
                showMessage(self.getText(e.target.checked ? 'showCustomMenuOn' : 'showCustomMenuOff',
                    e.target.checked ? '已显示自定义样式入口' : '已隐藏自定义样式入口'));
            });
        }
    }

    // ---------- 渲染「分组管理」分类内容 ----------
    _renderGroupSettings() {
        const folders = this.customFolders || [];
        const styles = this.customStyles || [];

        // 每个分组的样式数量
        const countMap = {};
        styles.forEach(s => {
            const fid = s.folderId || '__none__';
            countMap[fid] = (countMap[fid] || 0) + 1;
        });

        let rowsHtml = '';
        if (folders.length === 0) {
            rowsHtml = `
                <div class="cs-empty-state">
                    <div class="cs-empty-illustration">📁</div>
                    <div class="cs-empty-title">${this.getText('groupEmptyTitle', '还没有任何分组')}</div>
                    <div class="cs-empty-desc">${this.getText('groupEmptyHint2', '点击右上角「新建分组」开始整理你的样式')}</div>
                </div>`;
        } else {
            rowsHtml = folders.map((g, idx) => {
                const cnt = countMap[g.id] || 0;
                return `
                    <div class="cs-group-chip" data-gid="${g.id}" style="animation-delay:${idx * 40}ms;" title="${cnt} ${this.getText('customCountUnit', '个样式')}">
                        <span class="cs-group-chip__icon">${this._renderIconHtml(g.icon) || '📁'}</span>
                        <span class="cs-group-chip__name">${this._escapeAttr(g.name)}</span>
                        <span class="cs-group-chip__count">${cnt}</span>
                        <span class="cs-group-chip__actions">
                            <button class="cs-group-row__act" data-g-edit="${g.id}" title="${this.getText('edit', '编辑')}">
                                <svg style="width:13px;height:13px;"><use xlink:href="#iconEdit"></use></svg>
                            </button>
                            <button class="cs-group-row__act cs-group-row__act--del" data-g-del="${g.id}" title="${this.getText('delete', '删除')}">
                                <svg style="width:13px;height:13px;"><use xlink:href="#iconTrashcan"></use></svg>
                            </button>
                        </span>
                    </div>`;
            }).join('');
        }

        return `
            <div class="cs-settings-group">
                <div style="display:flex; align-items:center; justify-content:space-between; gap:12px; margin:0 0 10px 4px;">
                    <div class="cs-settings-section-title" style="margin:0;">${this.getText('groupManage', '分组管理')}</div>
                    <button class="cs-action-btn cs-action-btn--primary" id="cs-btn-newgroup2" title="${this.getText('customGroup', '新建分组')}">
                        <svg style="width:15px;height:15px;"><use xlink:href="#iconAdd"></use></svg>
                        <span>${this.getText('customGroup', '新建分组')}</span>
                    </button>
                </div>
                <div class="cs-settings-group-card" style="padding:12px 16px;">
                    <div class="cs-group-chip-list">
                        ${rowsHtml}
                    </div>
                </div>
            </div>`;
    }

    // ---------- 渲染「样式显隐」分类内容（开关行式：状态一目了然） ----------
    _renderVisibilitySettings() {
        const hiddenSet = new Set(this.hiddenStyles || []);
        const allStyles = CARD_ITEMS || [];
        const customStyles = this.customStyles || [];

        // 单个显隐行（图标 + 名称 + 开关）
        const itemRow = (key, label, icon, isHidden) => `
                                <div class="cs-visibility-item${isHidden ? ' cs-visibility-item--hidden' : ''}" data-vs-key="${this._escapeAttr(key)}">
                                    <span class="cs-visibility-item__icon">${this._renderIconHtml(icon) || ''}</span>
                                    <span class="cs-visibility-item__label">${this._escapeAttr(label)}</span>
                                    <label class="cs-switch cs-switch--sm">
                                        <input type="checkbox" class="cs-vs-toggle" data-vs-key="${this._escapeAttr(key)}" ${!isHidden ? 'checked' : ''}>
                                        <span class="cs-switch-slider"></span>
                                    </label>
                                </div>`;

        // 分组头部（名称 + 计数 + 批量操作）
        const header = (label, visible, total) => `
                            <div class="cs-visibility-group__header">
                                <span class="cs-visibility-group__name">${this._escapeAttr(label)}</span>
                                <span class="cs-visibility-group__right">
                                    <span class="cs-visibility-group__count">${visible}/${total} ${this.getText('visible', '显示')}</span>
                                    <button class="cs-vs-bulk" data-vs-bulk="show">${this.getText('bulkShow', '全部显示')}</button>
                                    <button class="cs-vs-bulk" data-vs-bulk="hide">${this.getText('bulkHide', '全部隐藏')}</button>
                                </span>
                            </div>
                            <div class="cs-visibility-items">`;

        // 按菜单层级分组内置样式
        const structure = this.getMenuStructure();
        let sectionsHtml = '';

        for (const block of structure) {
            for (const cat of (block.children || [])) {
                for (const sg of (cat.subGroups || [])) {
                    const items = allStyles.filter(item => sg.filter(item.label, item.key));
                    if (!items.length) continue;
                    const groupLabel = this.getText(sg.labelKey, sg.labelKey);
                    const visibleItems = items.filter(i => !hiddenSet.has(i.key));

                    sectionsHtml += `
                        <div class="cs-visibility-group">
                            ${header(groupLabel, visibleItems.length, items.length)}`;
                    for (const item of items) {
                        sectionsHtml += itemRow(item.key, item.label, item.icon, hiddenSet.has(item.key));
                    }
                    sectionsHtml += `
                            </div>
                        </div>`;
                }
            }
        }

        // 自定义样式
        if (customStyles.length) {
            const visibleCustom = customStyles.filter(s => !hiddenSet.has(s.id));
            sectionsHtml += `
                <div class="cs-visibility-group">
                    ${header(this.getText('styleVisibilityCustom', '自定义样式'), visibleCustom.length, customStyles.length)}`;
            for (const cs of customStyles) {
                sectionsHtml += itemRow(cs.id, cs.name, cs.icon, hiddenSet.has(cs.id));
            }
            sectionsHtml += `
                    </div>
                </div>`;
        }

        return `
            <div class="cs-settings-group">
                <div class="cs-settings-section-title">${this.getText('styleVisibilityTitle', '样式显隐')}</div>
                <div class="cs-settings-group-card" style="padding:16px 20px;">
                    <div style="font-size:12.5px; opacity:.6; margin-bottom:12px; line-height:1.5;">
                        ${this.getText('styleVisibilityDesc', '控制右键菜单中哪些样式项显示或隐藏')}
                    </div>
                    <input type="text" class="cs-settings-sidebar-search" id="cs-vs-search" placeholder="${this.getText('styleVisibilitySearch', '搜索样式...')}" style="width:100%; margin-bottom:12px;">
                    <div id="cs-visibility-list">
                        ${sectionsHtml}
                    </div>
                </div>
            </div>`;
    }

    _bindGroupSettings(element) {
        const self = this;
        const ngBtn = element.querySelector('#cs-btn-newgroup2');
        if (ngBtn) ngBtn.addEventListener('click', () => {
            self.openGroupDialog(null, (g) => self.createGroup(g.name, g.icon));
        });

        // 编辑分组
        element.querySelectorAll('[data-g-edit]').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-g-edit');
                const f = (self.customFolders || []).find(x => x.id === id);
                if (!f) return;
                self.openGroupDialog(f, (g) => {
                    self.renameGroup(id, g.name, g.icon);
                    self.renderCustomStyleManager(element);
                });
            });
        });

        // 点击芯片 = 编辑分组（按钮除外）
        element.querySelectorAll('.cs-group-chip').forEach(chip => {
            chip.addEventListener('click', (e) => {
                if (e.target.closest('[data-g-edit]') || e.target.closest('[data-g-del]')) return;
                const id = chip.getAttribute('data-gid');
                const f = (self.customFolders || []).find(x => x.id === id);
                if (!f) return;
                self.openGroupDialog(f, (g) => {
                    self.renameGroup(id, g.name, g.icon);
                    self.renderCustomStyleManager(element);
                });
            });
        });

        // 删除分组（含确认）
        element.querySelectorAll('[data-g-del]').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-g-del');
                const f = (self.customFolders || []).find(x => x.id === id);
                const name = f ? f.name : '';
                const dlg = new Dialog({
                    title: self.getText('deleteGroupConfirmTitle', '删除分组'),
                    width: '360px',
                    content: `<div style="padding:20px 24px;">
                        <div style="font-size:13px; line-height:1.6; color:var(--b3-text-color);">
                            ${self.getText('deleteGroupConfirmText', '确定要删除分组')}
                            「<strong style="color:var(--b3-text-color);">${self._escapeAttr(name)}</strong>」
                            ${self.getText('deleteGroupConfirmText2', '吗？分组下的样式会移到「未分类」。')}
                        </div>
                        <div class="fn__flex" style="justify-content:flex-end; gap:8px; margin-top:20px;">
                            <button class="b3-button b3-button--cancel" id="cs-gdel-cancel">${self.getText('cancel', '取消')}</button>
                            <button class="b3-button b3-button--outline" id="cs-gdel-ok" style="padding:6px 20px; font-weight:600;">${self.getText('delete', '删除')}</button>
                        </div>
                    </div>`
                });
                const confirmDel = async () => {
                    dlg.destroy();
                    await self.deleteGroup(id);
                    showMessage(self.getText('groupDeleted', '已删除分组'));
                    self.renderCustomStyleManager(element);
                };
                dlg.element.querySelector('#cs-gdel-ok').addEventListener('click', confirmDel);
                dlg.element.querySelector('#cs-gdel-cancel').addEventListener('click', () => dlg.destroy());
            });
        });

        // 入场动画
        const rows = element.querySelectorAll('.cs-group-chip');
        rows.forEach((row, i) => {
            row.style.opacity = '0';
            row.style.transform = 'translateY(8px)';
            setTimeout(() => {
                row.style.transition = 'opacity .25s ease, transform .25s ease';
                row.style.opacity = '1';
                row.style.transform = 'translateY(0)';
                setTimeout(() => {
                    row.style.transition = '';
                    row.style.transform = '';
                    row.style.opacity = '';
                }, 300);
            }, 40 + i * 40);
        });
    }

    // ---------- 绑定「样式显隐」分类交互（开关行式 + 批量操作） ----------
    _bindVisibilitySettings(element) {
        const self = this;

        const persist = async () => {
            try { await self.saveData('hiddenStyles', self.hiddenStyles); } catch (err) { /* 忽略 */ }
        };
        // 更新分组头部的 x/y 计数
        const updateCount = (group) => {
            const items = group.querySelectorAll('.cs-visibility-item');
            const visibleCount = Array.from(items).filter(el => !el.classList.contains('cs-visibility-item--hidden')).length;
            const countEl = group.querySelector('.cs-visibility-group__count');
            if (countEl) countEl.textContent = `${visibleCount}/${items.length} ${self.getText('visible', '显示')}`;
        };

        // 显隐开关绑定
        element.querySelectorAll('.cs-vs-toggle').forEach(toggle => {
            toggle.addEventListener('change', async (e) => {
                const key = e.target.getAttribute('data-vs-key');
                if (!key) return;
                const itemEl = e.target.closest('.cs-visibility-item');
                if (e.target.checked) {
                    // 显示：从 hiddenStyles 移除
                    self.hiddenStyles = (self.hiddenStyles || []).filter(k => k !== key);
                } else {
                    // 隐藏：加入 hiddenStyles
                    if (!self.hiddenStyles.includes(key)) self.hiddenStyles.push(key);
                }
                await persist();
                if (itemEl) itemEl.classList.toggle('cs-visibility-item--hidden', !e.target.checked);
                const group = itemEl ? itemEl.closest('.cs-visibility-group') : null;
                if (group) updateCount(group);
            });
        });

        // 分组批量显示/隐藏
        element.querySelectorAll('[data-vs-bulk]').forEach(btn => {
            btn.addEventListener('click', async () => {
                const group = btn.closest('.cs-visibility-group');
                if (!group) return;
                const hide = btn.getAttribute('data-vs-bulk') === 'hide';
                group.querySelectorAll('.cs-visibility-item').forEach(itemEl => {
                    const key = itemEl.getAttribute('data-vs-key');
                    if (!key) return;
                    itemEl.classList.toggle('cs-visibility-item--hidden', hide);
                    const cb = itemEl.querySelector('.cs-vs-toggle');
                    if (cb) cb.checked = !hide;
                    if (hide) {
                        if (!self.hiddenStyles.includes(key)) self.hiddenStyles.push(key);
                    } else {
                        self.hiddenStyles = (self.hiddenStyles || []).filter(k => k !== key);
                    }
                });
                await persist();
                updateCount(group);
            });
        });

        // 搜索过滤（隐藏无结果的分组）
        const searchInput = element.querySelector('#cs-vs-search');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const q = (e.target.value || '').trim().toLowerCase();
                element.querySelectorAll('.cs-visibility-item').forEach(item => {
                    const label = (item.querySelector('.cs-visibility-item__label') || {}).textContent || '';
                    item.style.display = (!q || label.toLowerCase().includes(q)) ? '' : 'none';
                });
                element.querySelectorAll('.cs-visibility-group').forEach(group => {
                    const hasVisible = Array.from(group.querySelectorAll('.cs-visibility-item')).some(el => el.style.display !== 'none');
                    group.style.display = hasVisible ? '' : 'none';
                });
            });
        }
    }

    // ---------- 侧栏全局搜索 ----------
    _bindSettingsSearch(element) {
        const self = this;
        const searchInput = element.querySelector('#cs-settings-search');
        if (!searchInput) return;

        // 防抖：避免每次按键都重新渲染
        let timer = null;

        const doSearch = () => {
            const q = (searchInput.value || '').trim();
            const mainEl = element.querySelector('#cs-settings-main');
            if (!mainEl) return;

            if (!q) {
                // 搜索清空，恢复当前分类视图
                self._restoreCategoryView(element);
                return;
            }
            mainEl.innerHTML = self._renderSearchResults(q);

            // 绑定搜索结果中的通用开关（悬停预览 / 显示自定义样式）
            mainEl.querySelectorAll('.cs-search-toggle').forEach(toggle => {
                toggle.addEventListener('change', async (e) => {
                    const itemRow = e.target.closest('[data-search-key]');
                    const key = itemRow ? itemRow.getAttribute('data-search-key') : '';
                    if (key === 'preview') {
                        self.showPreview = e.target.checked;
                        try { await self.saveData('showPreview', self.showPreview); } catch (err) { /* ignore */ }
                        showMessage(self.getText(e.target.checked ? 'previewOn' : 'previewOff',
                            e.target.checked ? '已开启悬停预览' : '已关闭悬停预览'));
                    } else if (key === 'customMenu') {
                        self.showCustomMenu = e.target.checked;
                        try { await self.saveData('showCustomMenu', self.showCustomMenu); } catch (err) { /* ignore */ }
                        showMessage(self.getText(e.target.checked ? 'showCustomMenuOn' : 'showCustomMenuOff',
                            e.target.checked ? '已显示自定义样式入口' : '已隐藏自定义样式入口'));
                    }
                });
            });

            // 绑定搜索结果中的显隐开关（样式显示/隐藏）
            mainEl.querySelectorAll('.cs-search-vs-toggle').forEach(toggle => {
                toggle.addEventListener('change', async (e) => {
                    const vsKey = e.target.getAttribute('data-vs-key');
                    if (!vsKey) return;
                    if (e.target.checked) {
                        self.hiddenStyles = (self.hiddenStyles || []).filter(k => k !== vsKey);
                    } else {
                        if (!self.hiddenStyles.includes(vsKey)) self.hiddenStyles.push(vsKey);
                    }
                    try { await self.saveData('hiddenStyles', self.hiddenStyles); } catch (err) { /* ignore */ }
                    // 更新该项视觉
                    const itemRow = e.target.closest('[data-vs-key]');
                    if (itemRow) {
                        itemRow.classList.toggle('cs-settings-item--dimmed', !e.target.checked);
                    }
                });
            });
        };

        searchInput.addEventListener('input', () => {
            clearTimeout(timer);
            timer = setTimeout(doSearch, 180);
        });

        // 回车时也立即触发
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                clearTimeout(timer);
                doSearch();
            }
        });
    }

    _restoreCategoryView(element) {
        let html = '';
        if (this._activeSettingsCategory === 'general') {
            html = this._renderGeneralSettings();
        } else if (this._activeSettingsCategory === 'groups') {
            html = this._renderGroupSettings();
        } else if (this._activeSettingsCategory === 'visibility') {
            html = this._renderVisibilitySettings();
        } else {
            html = this._renderStylesSettings(element);
        }
        const mainEl = element.querySelector('#cs-settings-main');
        if (mainEl) mainEl.innerHTML = html;

        // 重新绑定当前分类的事件
        if (this._activeSettingsCategory === 'general') {
            this._bindGeneralSettings(element);
        } else if (this._activeSettingsCategory === 'groups') {
            this._bindGroupSettings(element);
        } else if (this._activeSettingsCategory === 'visibility') {
            this._bindVisibilitySettings(element);
        } else {
            this._bindStylesSettings(element);
        }
    }

    _renderSearchResults(query) {
        const q = query.toLowerCase();
        const allItems = [];   // 所有匹配项（扁平列表，按类型区分渲染）

        // ---- 1. 通用设置项（带真实开关）----
        const generalDefs = [
            { id: 'cs-search-preview', key: 'preview', label: this.getText('previewToggle', '悬停预览'), desc: this.getText('previewDesc', '鼠标悬停在样式项上时，是否实时显示样式效果预览'), checked: !!this.showPreview, type: 'toggle' },
            { id: 'cs-search-custommenu', key: 'customMenu', label: this.getText('showCustomMenuToggle', '显示自定义样式'), desc: this.getText('showCustomMenuDesc', '是否在右键菜单中显示「自定义」样式入口（关闭后仍可通过顶栏按钮进入管理器）'), checked: !!this.showCustomMenu, type: 'toggle' }
        ];
        generalDefs.forEach(def => {
            if (def.label.toLowerCase().includes(q) || def.desc.toLowerCase().includes(q)) {
                allItems.push({ ...def, icon: 'iconSettings', section: this.getText('blockGeneral', '通用') });
            }
        });

        // ---- 2. 样式显隐项（带真实显隐开关）----
        const hiddenSet = new Set(this.hiddenStyles || []);
        const allCards = CARD_ITEMS || [];
        const customStyles = this.customStyles || [];
        const structure = this.getMenuStructure();

        for (const block of structure) {
            for (const cat of (block.children || [])) {
                for (const sg of (cat.subGroups || [])) {
                    const items = allCards.filter(item => sg.filter(item.label, item.key));
                    items.forEach(m => {
                        if (m.label.toLowerCase().includes(q) || m.key.toLowerCase().includes(q)) {
                            allItems.push({
                                id: 'cs-vs-s-' + m.key,
                                vsKey: m.key,
                                label: m.label,
                                desc: m.key,
                                icon: m.icon || 'iconSparkles',
                                checked: !hiddenSet.has(m.key),
                                type: 'visibility',
                                section: this.getText('styleVisibilityTitle', '样式显隐')
                            });
                        }
                    });
                }
            }
        }
        // 自定义样式的显隐
        customStyles.forEach(cs => {
            if ((cs.name || '').toLowerCase().includes(q)) {
                allItems.push({
                    id: 'cs-vs-c-' + cs.id,
                    vsKey: cs.id,
                    label: cs.name,
                    desc: this.getText('styleVisibilityCustom', '自定义样式'),
                    icon: cs.icon || 'iconSparkles',
                    checked: !hiddenSet.has(cs.id),
                    type: 'visibility',
                    section: this.getText('styleVisibilityTitle', '样式显隐')
                });
            }
        });

        // ---- 3. 分组管理：分组名称（信息行，无开关）----
        const folders = this.customFolders || [];
        folders.forEach(f => {
            if ((f.name || '').toLowerCase().includes(q)) {
                allItems.push({
                    label: f.name,
                    desc: this.getText('groupManage', '分组管理'),
                    icon: f.icon || 'iconFolder',
                    type: 'info',
                    section: this.getText('groupManage', '分组管理')
                });
            }
        });

        // ---- 4. 自定义样式：名称（信息行，无开关）----
        customStyles.forEach(cs => {
            if ((cs.name || '').toLowerCase().includes(q)) {
                // 避免和显隐里重复（同一个自定义样式可能同时命中两处）
                const already = allItems.some(it => it.type === 'visibility' && it.vsKey === cs.id);
                if (!already) {
                    allItems.push({
                        label: cs.name,
                        desc: cs.style ? this.getText('customBaseStyle', '基础样式') + ': ' + cs.style : '',
                        icon: cs.icon || 'iconSparkles',
                        type: 'info',
                        section: this.getText('blockCustom', '自定义样式')
                    });
                }
            }
        });

        // ---- 无结果 ----
        if (!allItems.length) {
            return `
                <div class="cs-search-empty">
                    <div class="cs-search-empty__icon">
                        <svg style="width:48px;height:48px;opacity:.25;"><use xlink:href="#iconSearch"></use></svg>
                    </div>
                    <div class="cs-search-empty__text">${this.getText('noSearchResult', '未找到匹配的设置项')}</div>
                    <div class="cs-search-empty__hint">${this.getText('noSearchHint', '尝试更换关键词，或检查是否有空格/错别字')}</div>
                </div>`;
        }

        // ---- 渲染：使用 .cs-settings-item 风格（无图标，和正常设置项完全一致）----
        const itemsHtml = allItems.map(item => {
            const textHtml = `
                <div class="cs-settings-item-text">
                    <div class="cs-settings-item-title">${this._escapeAttr(item.label)}</div>
                    <div class="cs-settings-item-desc">${this._escapeAttr(item.desc)}</div>
                </div>`;

            if (item.type === 'toggle') {
                // 通用开关项
                return `
                    <div class="cs-settings-item" data-search-type="toggle" data-search-key="${item.key}">
                        ${textHtml}
                        <div class="cs-settings-item-ctrl">
                            <label class="cs-switch">
                                <input type="checkbox" class="cs-search-toggle" id="${item.id}" ${item.checked ? 'checked' : ''}>
                                <span class="cs-switch-slider"></span>
                            </label>
                        </div>
                    </div>`;
            } else if (item.type === 'visibility') {
                // 显隐开关项
                return `
                    <div class="cs-settings-item${item.checked ? '' : ' cs-settings-item--dimmed'}" data-search-type="visibility" data-vs-key="${item.vsKey}">
                        ${textHtml}
                        <div class="cs-settings-item-ctrl">
                            <label class="cs-switch">
                                <input type="checkbox" class="cs-search-vs-toggle" id="${item.id}" data-vs-key="${item.vsKey}" ${item.checked ? 'checked' : ''}>
                                <span class="cs-switch-slider"></span>
                            </label>
                        </div>
                    </div>`;
            } else {
                // 信息行（无开关，如分组名）
                return `
                    <div class="cs-settings-item" data-search-type="info">
                        ${textHtml}
                        <div class="cs-settings-item-ctrl">
                            <span class="cs-settings-item__section-tag">${this._escapeAttr(item.section)}</span>
                        </div>
                    </div>`;
            }
        }).join('');

        return `
            <div class="cs-settings-group">
                <div class="cs-settings-group-card">
                    <div class="cs-settings-group-body">
                        ${itemsHtml}
                    </div>
                </div>
            </div>`;
    }

    // ---------- 渲染「自定义样式」分类内容 ----------
    _renderStylesSettings(element) {
        const allStyles = this.customStyles || [];
        const totalCount = allStyles.length;
        const groups = this._getStylePanelGroups();

        const activeGroupId = this._csActiveGroup || '__all__';
        // 首次渲染时同步 _csActiveGroup，确保后续标签切换有正确的基准值
        if (!this._csActiveGroup) this._csActiveGroup = activeGroupId;
        const activeGroup = groups.find(g => g.id === activeGroupId) || groups[0];
        const activeItems = activeGroup?.items || [];

        // 分组标签栏
        let tabsHtml = '';
        for (const g of groups) {
            const isNone = g.id === '__none__';
            if (!g.items.length && isNone) continue;
            const isActive = g.id === activeGroupId;
            const isEmpty = !g.items.length;
            const icon = this._groupIconSvg(isNone ? '🗂️' : (g.icon || '📁'), { size: 14 });
            tabsHtml += `
                <button class="cs-tab-pill${isActive ? ' cs-tab-pill--active' : ''}${isEmpty ? ' cs-tab-pill--empty' : ''}" data-gid="${g.id}">
                    ${icon}
                    <span class="cs-tab-pill__name">${this._escapeAttr(g.name)}</span>
                    <span class="cs-tab-pill__count">${g.items.length}</span>
                </button>`;
        }

        // 内容区（列表式布局，参考市场/插件列表风格）
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
            contentHtml = `<div class="cs-style-list">`;
            activeItems.forEach((cs, idx) => {
                contentHtml += this._renderStyleRow(cs, idx);
            });
            contentHtml += `</div>`;
        }

        return `
            <div class="cs-settings-group">
                <div class="cs-settings-group-card" style="padding:16px 20px 20px;">
                    <div class="cs-styles-toolbar">
                        <div class="cs-styles-toolbar-left">
                            <span class="cs-styles-toolbar-title">${this.getText('customManage', '自定义块样式')}</span>
                            ${totalCount > 0 ? `<span class="cs-header__badge">${totalCount}</span>` : ''}
                        </div>
                        <div class="cs-styles-toolbar-right">
                            <button class="cs-action-btn" id="cs-btn-newgroup" title="${this.getText('customGroup', '新建分组')}">
                                <svg style="width:15px;height:15px;"><use xlink:href="#iconAdd"></use></svg>
                                <span>${this.getText('customGroup', '分组')}</span>
                            </button>
                            <button class="cs-action-btn cs-action-btn--primary" id="cs-btn-new" title="${this.getText('customAdd', '新增自定义样式')}">
                                <svg style="width:15px;height:15px;"><use xlink:href="#iconAdd"></use></svg>
                                <span>${this.getText('customAdd', '新增')}</span>
                            </button>
                        </div>
                    </div>
                    ${groups.some(g => g.items.length) ? `
                    <nav class="cs-tabs-bar" id="cs-tabs-bar">
                        <div class="cs-tabs-track">
                            ${tabsHtml}
                        </div>
                    </nav>` : ''}
                    <div class="cs-content" id="cs-content" style="flex:1;overflow-y:auto;padding-top:4px;">
                        ${contentHtml}
                    </div>
                </div>
            </div>`;
    }

    _bindStylesSettings(element) {
        const self = this;

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
                // 更新激活状态：先移除所有标签的 active 类，再给当前点击的加上
                element.querySelectorAll('.cs-tab-pill').forEach(t => t.classList.remove('cs-tab-pill--active'));
                tab.classList.add('cs-tab-pill--active');
                self._csActiveGroup = gid;
                const contentEl = element.querySelector('#cs-content');
                if (contentEl) {
                    contentEl.style.opacity = '0';
                    contentEl.style.transform = 'translateY(6px)';
                    setTimeout(() => {
                        // 只刷新内容区，不重建整个面板
                        self._refreshStylesContent(element);
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

        // 内容区事件（卡片 / 悬停预览 / 入场动画）单独绑定，避免刷新内容时重复绑定工具栏与分类标签
        this._bindStylesContentEvents(element);
    }

    // 内容区事件：仅绑定 #cs-content 内部的可变部分（卡片 / 悬停预览 / 入场动画）
    _bindStylesContentEvents(element) {
        const self = this;

        // 卡片编辑 / 删除 / 点击
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
        element.querySelectorAll('[data-cs-move]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                self._openMoveToGroupMenu(btn.getAttribute('data-cs-move'), btn, () => self.renderCustomStyleManager(element));
            });
        });
        element.querySelectorAll('.cs-style-row').forEach(row => {
            row.addEventListener('click', (e) => {
                if (e.target.closest('[data-cs-edit]') || e.target.closest('[data-cs-del]') || e.target.closest('[data-cs-move]')) return;
                self.openStyleDialog(row.getAttribute('data-cs-id'));
            });
        });

        // 悬停预览浮层（严格跟随「悬停预览」开关）
        let hoverPreview = document.getElementById('cs-hover-preview');
        if (!hoverPreview) {
            hoverPreview = document.createElement('div');
            hoverPreview.id = 'cs-hover-preview';
            hoverPreview.className = 'b3-dialog__content';
            hoverPreview.style.cssText = 'position:fixed; z-index:9999; width:420px; max-width:90vw; padding:8px 14px; box-shadow:0 6px 20px rgba(0,0,0,.14); border-radius:8px; background:var(--b3-theme-background); border:1px solid var(--b3-border-color); pointer-events:none; opacity:0; transition:opacity .15s,transform .15s; display:none; transform:scale(.96);';
            document.body.appendChild(hoverPreview);
        }

        element.querySelectorAll('.cs-style-row').forEach(row => {
            row.addEventListener('mouseenter', () => {
                if (!self.showPreview) return;
                const label = row.getAttribute('data-cs-style') || '';
                const ico = row.getAttribute('data-cs-icon') || '';
                const ttl = row.getAttribute('data-cs-title') || '';
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
                const rect = row.getBoundingClientRect();
                hoverPreview.style.display = 'block';
                const pw = hoverPreview.offsetWidth, ph = hoverPreview.offsetHeight;
                let left = rect.left + (rect.width - pw) / 2;
                if (left < 8) left = 8;
                if (left + pw > window.innerWidth - 8) left = window.innerWidth - pw - 8;
                let top = rect.bottom + 8;
                if (top + ph > window.innerHeight - 8) {
                    top = rect.top - ph - 8;
                }
                if (top < 8) top = 8;
                hoverPreview.style.left = left + 'px';
                hoverPreview.style.top = top + 'px';
                requestAnimationFrame(() => { hoverPreview.style.opacity = '1'; hoverPreview.style.transform = 'scale(1) translateY(0)'; });
            });
            row.addEventListener('mouseleave', () => {
                hoverPreview.style.opacity = '0';
                hoverPreview.style.transform = 'scale(.96)';
                setTimeout(() => { if (hoverPreview.style.opacity === '0') hoverPreview.style.display = 'none'; }, 160);
            });
        });

        // 入场动画（淡入 + 轻微上移，结束后清理内联样式）
        const rows = element.querySelectorAll('.cs-style-row');
        rows.forEach((row, i) => {
            row.style.opacity = '0';
            row.style.transform = 'translateY(8px)';
            setTimeout(() => {
                row.style.transition = 'opacity .25s ease, transform .25s ease';
                row.style.opacity = '1';
                row.style.transform = 'translateY(0)';
                setTimeout(() => {
                    row.style.transition = '';
                    row.style.transform = '';
                    row.style.opacity = '';
                }, 300);
            }, 40 + i * 35);
        });
    }

    // 仅刷新「自定义样式」分类的内容区（不重建侧栏）
    _refreshStylesContent(element) {
        const allStyles = this.customStyles || [];
        const groups = this._getStylePanelGroups();
        const activeGroupId = this._csActiveGroup || '__all__';
        const activeGroup = groups.find(g => g.id === activeGroupId) || groups[0];
        const activeItems = activeGroup?.items || [];

        let contentHtml = '';
        if (allStyles.length === 0) {
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
            contentHtml = `<div class="cs-style-list">`;
            activeItems.forEach((cs, idx) => {
                contentHtml += this._renderStyleRow(cs, idx);
            });
            contentHtml += `</div>`;
        }

        const contentEl = element.querySelector('#cs-content');
        if (contentEl) contentEl.innerHTML = contentHtml;

        // 重新绑定内容区事件（仅内容区，工具栏/分类标签不重复绑定）
        this._bindStylesContentEvents(element);
    }

    // 渲染单条样式（紧凑芯片，多列自动换行，同「样式选择」芯片风格）
    _renderStyleRow(cs, index) {
        const icon = cs.icon || '✨';
        // 根据图标/名称生成一个稳定的柔和背景色
        const hue = this._stringHue(cs.name + cs.id);
        const bgLight = `hsl(${hue}, 70%, 96%)`;
        const accentColor = `hsl(${hue}, 65%, 45%)`;
        const folder = (this.customFolders || []).find(f => f.id === cs.folderId);
        const groupText = folder ? folder.name : this.getText('unsorted', '未分类');
        const tip = this.getText('folderLabel', '归属分组') + '：' + groupText
            + ' · ' + this.getText('customBaseStyle', '基础样式') + '：' + (cs.style || '');

        return `
            <div class="cs-style-row" data-cs-id="${cs.id}" data-cs-style="${cs.style}" data-cs-icon="${cs.icon || ''}" data-cs-title="${cs.title || ''}"
                 style="--cs-accent:${accentColor}; --cs-bg-light:${bgLight}; animation-delay:${index * 40}ms;" title="${this._escapeAttr(tip)}">
                <span class="cs-style-row__icon">${this._renderIconHtml(icon) || '✨'}</span>
                <span class="cs-style-row__name">${this._escapeAttr(cs.name)}</span>
                <span class="cs-style-row__actions">
                    <button class="cs-group-row__act" data-cs-move="${cs.id}" title="${this.getText('moveToGroup', '移动到分组')}">
                        <svg style="width:13px;height:13px;"><use xlink:href="#iconFolder"></use></svg>
                    </button>
                    <button class="cs-group-row__act" data-cs-edit="${cs.id}" title="${this.getText('customEdit', '编辑')}">
                        <svg style="width:13px;height:13px;"><use xlink:href="#iconEdit"></use></svg>
                    </button>
                    <button class="cs-group-row__act cs-group-row__act--del" data-cs-del="${cs.id}" title="${this.getText('customDelete', '删除')}">
                        <svg style="width:13px;height:13px;"><use xlink:href="#iconTrashcan"></use></svg>
                    </button>
                </span>
            </div>`;
    }

    // 卡片快捷「移动到分组」菜单（原生 Menu，免打开编辑弹窗）
    _openMoveToGroupMenu(id, anchorEl, onMoved) {
        const cs = (this.customStyles || []).find(c => c.id === id);
        if (!cs || !anchorEl) return;
        const folders = this.customFolders || [];

        const move = async (folderId) => {
            cs.folderId = folderId || null;
            await this.saveData('customStyles', this.customStyles);
            const target = folderId ? (folders.find(f => f.id === folderId)?.name || '') : this.getText('unsorted', '未分类');
            showMessage(this.getText('movedToGroup', '已移动到分组：') + target);
            if (onMoved) onMoved();
        };

        const menu = new Menu('cs-move-group');
        menu.addItem({
            label: this.getText('unsorted', '未分类'),
            icon: 'iconFolder',
            current: !cs.folderId,
            click: () => move('')
        });
        for (const f of folders) {
            menu.addItem({
                label: f.name,
                icon: 'iconFolder',
                current: cs.folderId === f.id,
                click: () => move(f.id)
            });
        }
        menu.addSeparator();
        // 菜单里直接新建分组并移入
        menu.addItem({
            label: '+ ' + this.getText('addFolder', '新建分组'),
            icon: 'iconAdd',
            click: () => {
                this.openGroupDialog(null, async (g) => {
                    if (!this.customFolders) this.customFolders = [];
                    const newId = 'grp_' + Date.now();
                    this.customFolders.push({ id: newId, name: g.name, icon: g.icon || '📁' });
                    await this.saveData('customFolders', this.customFolders);
                    cs.folderId = newId;
                    await this.saveData('customStyles', this.customStyles);
                    showMessage(this.getText('folderCreated', '已新建分组：') + g.name);
                    if (onMoved) onMoved();
                });
            }
        });
        const rect = anchorEl.getBoundingClientRect();
        menu.open({ x: rect.left, y: rect.bottom + 4 });
    }

    // 辅助：将图标值渲染为 HTML（Emoji 字符原样输出，动态图标路径用 <img> 渲染）
    _renderIconHtml(iconValue) {
        const v = (iconValue || '').trim();
        if (!v) return '';
        // 含 / 或 . 的视为路径/URL（动态图标如 api/icon/getDynamicIcon?...）
        if (v.includes('/') || v.includes('.')) {
            // 相对路径补全
            const src = v.startsWith('http') || v.startsWith('//') ? v : '/' + v;
            return `<img src="${this._escapeAttr(src)}" alt="" style="width:100%;height:100%;object-fit:contain;display:block;">`;
        }
        // 内置图标（如 iconSettings、iconFolder、iconSparkles 等）渲染为 SVG <use>
        if (/^icon[A-Z]/.test(v)) {
            return `<svg style="width:1em;height:1em;vertical-align:text-bottom;fill:currentColor;"><use xlink:href="#${this._escapeAttr(v)}"></use></svg>`;
        }
        // 其他（emoji 等）原样返回
        return this._escapeAttr(v);
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
        const iconColor = this.getColorForString('custom', 60, 50);
        btn.innerHTML = `<svg class="b3-menu__icon" style="color: ${iconColor};"><use xlink:href="#iconDecoLayers"></use></svg>
                         <span class="b3-menu__label">${this.getText('blockCustom', '自定义')}</span>
                         <svg class="b3-menu__icon b3-menu__icon--small"><use xlink:href="#iconRight"></use></svg>`;

        const subMenu = document.createElement("div");
        subMenu.className = "b3-menu__submenu";
        const itemsContainer = document.createElement("div");
        itemsContainer.className = "b3-menu__items";

        const groups = this._getGroupedByFolder();
        const hiddenSet = new Set(this.hiddenStyles || []);
        let anyGroup = false;

        for (const g of groups) {
            // 过滤掉被「样式显示控制」隐藏的自定义样式
            g.items = (g.items || []).filter(cs => !hiddenSet.has(cs.id));
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
        item.innerHTML = `<svg class="b3-menu__icon" style="color: var(--b3-color-red, #e74c3c);"><use xlink:href="#iconTrashcan"></use></svg>
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

        // 组内全部被「样式显隐」隐藏时，整组菜单不显示
        const hiddenSet = new Set(this.hiddenStyles || []);
        const hasVisible = this.getAllCardItems().some(item => !hiddenSet.has(item.key) && group.filter(item.label, item.key));
        if (!hasVisible) return null;

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
            && !key.startsWith('polka') && !key.startsWith('titleBar') && !key.endsWith('MarkCard')) {
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
        if (!this.showPreview) return; // 预览开关关闭时直接返回
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

        const hiddenSet = new Set(this.hiddenStyles || []);
        // 过滤并生成三级菜单项（可按需排序，此处保持原有顺序）
        this.getAllCardItems().forEach(item => {
            // 被「样式显示控制」隐藏的项不出现在右键菜单
            if (hiddenSet.has(item.key)) return;
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
        // 动态图标路径用 <img> 渲染，Emoji/文本原样输出
        if (iconName && typeof iconName === 'string' && (iconName.includes('/') || iconName.includes('.'))) {
            const src = iconName.startsWith('http') || iconName.startsWith('//') ? iconName : '/' + iconName;
            const style = o.style || `width:${sz}px;height:${sz}px;flex:none;object-fit:contain;`;
            return `<img${cls} src="${this._escapeAttr(src)}" alt="" style="${style}">`;
        }
        const text = (iconName && String(iconName).length) ? iconName : '📁';
        const style = o.style || `font-size:${sz}px;flex:none;opacity:.85;line-height:1;`;
        return `<span${cls} style="${style}">${this._escapeAttr(text)}</span>`;
    }

    // 返回有序数组：用户分组（按 customFolders 顺序）+ 末尾「未分类」
    // 管理面板专用：分组前加一个「全部」聚合组（不落库，仅用于列表渲染）
    _getStylePanelGroups() {
        const groups = this._getGroupedByFolder();
        return [
            { id: '__all__', name: this.getText('allTab', '全部'), icon: '📚', items: (this.customStyles || []).slice() },
            ...groups
        ];
    }

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
            } else if (val && (val.includes('/') || val.includes('.'))) {
                // 动态/自定义图标为路径：渲染为图片，而不是把路径当文本显示
                const img = document.createElement('img');
                img.src = val.startsWith('http') || val.startsWith('//') ? val : '/' + val;
                img.alt = '';
                img.style.cssText = 'width:18px;height:18px;object-fit:contain;display:block;border-radius:4px;flex:none;';
                el.appendChild(img);
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
                            { id: "quoteBlock", labelKey: "quoteGroup", icon: "#iconQuote", filter: (label, key) => typeof key === 'string' && key.endsWith('QuoteCard') && typeof label === 'string' && label.endsWith('调引述') }
                        ]
                    },
                    {
                        id: "bubbleCategory",
                        labelKey: "categoryBubble",
                        icon: "#iconQuote",
                        subGroups: [
                            { id: "bubbleStyle", labelKey: "bubbleGroup", icon: "#iconQuote", filter: (label, key) => typeof key === 'string' && key.startsWith('bubble') }
                        ]
                    },
                    {
                        id: "outlineCategory",
                        labelKey: "categoryOutline",
                        icon: "#iconQuote",
                        subGroups: [
                            { id: "outlineStyle", labelKey: "outlineGroup", icon: "#iconQuote", filter: (label, key) => typeof key === 'string' && key.startsWith('outline') }
                        ]
                    },
                    {
                        id: "tintCategory",
                        labelKey: "categoryTint",
                        icon: "#iconQuote",
                        subGroups: [
                            { id: "tintStyle", labelKey: "tintGroup", icon: "#iconQuote", filter: (label, key) => typeof key === 'string' && key.startsWith('tint') }
                        ]
                    },
                    {
                        id: "bracketCategory",
                        labelKey: "categoryBracket",
                        icon: "#iconQuote",
                        subGroups: [
                            { id: "bracketStyle", labelKey: "bracketGroup", icon: "#iconQuote", filter: (label, key) => typeof key === 'string' && key.startsWith('bracket') }
                        ]
                    },
                    {
                        id: "thinCategory",
                        labelKey: "categoryThin",
                        icon: "#iconQuote",
                        subGroups: [
                            { id: "thinStyle", labelKey: "thinGroup", icon: "#iconQuote", filter: (label, key) => typeof key === 'string' && key.startsWith('thin') }
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
                        id: "excerptCategory",
                        labelKey: "excerptGroup",
                        icon: "#iconQuote",
                        subGroups: [
                            { id: "excerptGroup", labelKey: "excerptGroup", icon: "#iconQuote", filter: (label, key) => key.endsWith('ExcerptCard') }
                        ]
                    },
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
                    },
                    {
                        id: "stickyCategory",
                        labelKey: "categorySticky",
                        icon: "#iconSparkles",
                        subGroups: [
                            { id: "postItGroup",   labelKey: "postItGroup",   icon: "#iconSparkles", filter: (label, key) => key.endsWith('PostCard') },
                            { id: "morandiGroup",  labelKey: "morandiGroup",  icon: "#iconSparkles", filter: (label, key) => key.endsWith('MorandiCard') },
                            { id: "markerGroup",   labelKey: "markerGroup",   icon: "#iconSparkles", filter: (label, key) => key.endsWith('MarkCard') },
                            { id: 'cloudGroup', labelKey: 'cloudGroup', icon: '#iconSparkles', filter: (label, key) => key.endsWith('CloudCard') }
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
    if (this._onDocContextmenu) {
        document.removeEventListener('contextmenu', this._onDocContextmenu, true);
        this._onDocContextmenu = null;
    }
    if (this._onDocGutterClick) {
        document.removeEventListener('click', this._onDocGutterClick, true);
        this._onDocGutterClick = null;
    }
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