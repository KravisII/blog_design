# blog_design Version 1.0
[详细文档](https://shimo.im/doc/quKkJaZK5DsqpbJk)

#### 2016.4.3

设计临时的 logo。

long style: 

<img src="README_files/Long Style.png" alt="Long Style.png" height="80">

short style: 

<img src="README_files/Short Style.png" alt="Short Style.png" height="80">

#### 2016.4.4

设计 `header`。

<img src="README_files/header design.png" alt="header design.png" height="170">

#### 2016.4.19

设计 `menu-icon` 的动画，参（剽）考（窃）于 [Apple](http://www.apple.com)。

<img src="README_files/menu_icon_animation_v1@8x.gif" alt="menu_icon_animation_v1@8x.gif" height="150">

#### 2016.5.3

设计 `search-form` 的动画。

<img src="README_files/search_form_animation_v1.gif" alt="search_form_animation_v1.gif" height="48">

#### 2016.5.4

初步完成 `global-header` 的代码部分。

##### Task List
- [x] 纠正 `sub-links` 在 Mobile 端的显示；
- [x] 完善 `.global-header-link.has-sub` 的 `menu-down` 动画；
- [x] 优化 iOS Safari 的 `input` 的外观；
- [x] 加入 `gh-links` 在 Mobile 端的动画；
- [x] 页面宽度变化后，媒体查询内的属性更改导致不期望的 `transition` 出现； // 通过添加 `global-header--closed` 类暂时解决，后续需要深入理解。
- [x] 为 Chrome 适配 `transition` 的 `0s` 和 `0`；
- [x] 消除不必要的背景高亮 `-webkit-tap-highlight-color`；
- [x] 把 `transform: none;` 加入试试效果； // 不合适，可能会降低性能
- [x] 暂时加入了 `will-change`； // 后续进行优化，适当的移除此属性，释放内存
- [x] 重命名大部分类名，例如 `global-header-links-link` 换为 `gh-menu-list-item`；
- [x] 移除 iOS Safari 的 outline；
- [x] 将部分单位修改为 em；
- [x] 加入 JavaScript 用以自动计算 `transform: translateX(<value>)` 的值；
- [x] 更合理的消除 `-webkit-tap-highlight-color`；
- [x] 完善 `gn-menu-icon` 的动画，调整 `gn-menu-icon--middle-content` 的位置；
- [x] Safari 中，若一个元素 `display: none`，则它的伪元素的值不能通过 `window.getComputedStyle(node, "::after")` 获取；
- [x] 使用 `getComputedStyle()` 函数获取 CSS 属性值时，应该注意「清洗」字符串，例如 `" "` 等；
- [x] 加入 `div#gn-viewport-emitter` 用于 CSS 响应布局，改进 `search-form` 的 `transition`；
- [x] 加入 `div.gn-curtain` 用于在 Mobile 端显示 Menu 时背景颜色加深；
- [ ] 进一步完善 `.gh-menu-list.has-sub` 的动画；
- [ ] 参考 Github，优化 `:hover` 伪类；
- [ ] Android Chrome 的 `onblur` 事件异常；
- [ ] 进行代码清理，使 CSS 和 JavaScript 更加规范化。
