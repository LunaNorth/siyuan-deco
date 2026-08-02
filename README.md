<div style="width: 100% !important; max-width: 100% !important; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; box-sizing: border-box;">

  <!-- 头部横幅 -->
<div style="margin: 1.5em 0; padding: 2em; background: var(--b3-theme-primary); border-radius: 12px; text-align: center; width: 100%; box-sizing: border-box;">
    <h1 style="color: var(--b3-theme-on-primary); margin: 0 0 0.5em; font-size: 2em; font-weight: 700;">✨ 轻饰笔记</h1>
    <p style="color: var(--b3-theme-on-primary); opacity: 0.92; margin: 0; font-size: 14px; line-height: 1.6;">通过自定义属性为思源笔记块添加精美卡片样式<br>支持图标 · 标题 · 多风格预设 · 让笔记视觉更统一</p>
</div>

  <!-- 特别感谢 -->
  <div style="margin: 1.5em 0; padding: 1.2em 1.5em; background: var(--b3-theme-surface); border-left: 4px solid var(--b3-theme-primary); border-radius: 8px; width: 100%; box-sizing: border-box;">
    <h3 style="margin: 0 0 0.8em; color: var(--b3-theme-primary); font-size: 1.1em;">🎁 特别感谢</h3>
    <p style="margin: 0; color: var(--b3-theme-on-surface); font-size: 14px; line-height: 1.6;">感谢 <a href="https://github.com/QYLexpired/QYL-theme" style="color: var(--b3-theme-primary); text-decoration: none;">QYL 主题作者</a>，很多代码灵感来源于大佬的开源分享～</p>
  </div>

  <!-- 使用指南 -->
  <div style="margin: 1.5em 0; padding: 1.5em; background: var(--b3-theme-surface); border-radius: 10px; border: 1px solid var(--b3-border-color); width: 100%; box-sizing: border-box;">
    <h3 style="margin: 0 0 1em; color: var(--b3-theme-primary); font-size: 1.1em;">📋 使用指南</h3>
    <p style="margin: 0 0 12px; color: var(--b3-theme-on-surface-light); font-size: 14px;">安装插件后，右键菜单 → 轻饰笔记 → 选择样式即可：</p>
    <div style="display: flex; flex-wrap: wrap; gap: 10px; width: 100%;">
      <div style="flex: 1; min-width: 150px; padding: 10px 12px; background: var(--b3-theme-background); border-radius: 6px; font-size: 13px; color: var(--b3-theme-on-background); display: flex; align-items: center; gap: 8px; box-sizing: border-box;"><span style="min-width: 22px; height: 22px; background: var(--b3-theme-primary); color: var(--b3-theme-on-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 600; flex-shrink: 0;">1</span>选中文本块</div>
      <div style="flex: 1; min-width: 150px; padding: 10px 12px; background: var(--b3-theme-background); border-radius: 6px; font-size: 13px; color: var(--b3-theme-on-background); display: flex; align-items: center; gap: 8px; box-sizing: border-box;"><span style="min-width: 22px; height: 22px; background: var(--b3-theme-primary); color: var(--b3-theme-on-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 600; flex-shrink: 0;">2</span>右键 → 轻饰笔记</div>
      <div style="flex: 1; min-width: 150px; padding: 10px 12px; background: var(--b3-theme-background); border-radius: 6px; font-size: 13px; color: var(--b3-theme-on-background); display: flex; align-items: center; gap: 8px; box-sizing: border-box;"><span style="min-width: 22px; height: 22px; background: var(--b3-theme-primary); color: var(--b3-theme-on-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 600; flex-shrink: 0;">3</span>选择喜欢的样式</div>
      <div style="flex: 1; min-width: 150px; padding: 10px 12px; background: var(--b3-theme-background); border-radius: 6px; font-size: 13px; color: var(--b3-theme-on-background); display: flex; align-items: center; gap: 8px; box-sizing: border-box;"><span style="min-width: 22px; height: 22px; background: var(--b3-theme-primary); color: var(--b3-theme-on-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 600; flex-shrink: 0;">4</span>即时预览 ✨</div>
    </div>
  </div>

  <!-- 励志标语 -->
  <div style="text-align: center; margin: 1.8em 0; font-style: italic; color: var(--b3-theme-primary); font-size: 14px; width: 100%;">✨ 让每一块笔记，都拥有属于自己的样子</div>

### 更新日志

#### v1.4.0

- 【新增】引述块新增「顶条引述」样式组，共 7 种配色（蓝 / 红 / 绿 / 橙 / 紫 / 青 / 粉）
- 【新增】顶条引述采用「厚色条标题栏 + 白字标题」外观，块内首行自动渲染为标题栏，无需设置属性
- 【优化】基础样式选择器由三级折叠树改为 Tab 分类 + 网格布局，选中一个样式由 4 次点击减少到 2 次
- 【优化】图标选择统一改用思源内核 Emoji 面板，移除自建的「内置图标」Tab 与旧版图标选择器
- 【优化】新增 / 编辑样式弹窗移除图标行的长输入框，改为点击图标方块直接唤起 Emoji 面板
- 【优化】新增 / 编辑样式弹窗中图标列固定宽度、标题列自适应，布局更紧凑
- 【优化】样式选项芯片圆角调整为 6px，并去除鼠标悬停时的颜色跳变
- 【优化】样式悬停预览移除下方的示例文字块，仅保留图标与标题卡片
- 【修复】引述块样式（顶线、引用卡、细语、波点、顶条引述等）点击标题会误弹出编辑框的问题
- 【修复】编辑样式弹窗内预览区不随修改实时刷新的问题
- 【修复】自定义分组图标设置为 Emoji 时无法正常显示的问题

#### v1.3.9

- 【新增】自定义块样式支持用户自建分组，可新建、重命名、删除分组并设置内置图标
- 【新增】基础样式选择器改为可折叠树形列表，支持逐级展开与平滑动画
- 【新增】图标选择器重写为双 Tab 选择器（Emoji / 内置图标），支持搜索过滤与实时预览
- 【新增】右键与顶部菜单样式列表项支持鼠标悬停预览，快速查看样式效果
- 【新增】设置面板样式列表同样支持悬停预览浮层
- 【新增】样式管理界面分组箭头与操作按钮改用思源内置图标
- 【修复】内置图标名称解析异常，正确识别全部图标
- 【修复】弹窗内图标无法显示的问题，统一改为正确渲染方式
- 【修复】图标选择器弹窗过大，改为固定高度并支持内容滚动
- 【修复】预览区图标显示异常文字或重复内容，仅保留单行效果
- 【修复】基础样式下拉错误归入同一分组的问题
- 【优化】加宽新增与编辑样式弹窗，提升编辑体验
- 【优化】加宽设置面板，菜单悬停预览改为更舒适的宽度并智能定位
- 【移除】移除整体时光笺功能
- 【移除】移除图标选择器的「文字」Tab 与基础样式树的「图片相关」分组