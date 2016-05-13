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
- [x] 完善 `.global-header-link.has-sub` 的 `menu-down` 动画；  // 已删除
- [x] 优化 iOS Safari 的 `input` 的外观；
- [x] 加入 `gh-links` 在 Mobile 端的动画；
- [x] 页面宽度变化后，媒体查询内的属性更改导致不期望的 `transition` 出现； // 通过添加 `global-header--closed` 类暂时解决，后续需要深入理解。
- [x] 为 Chrome 适配 `transition` 的 `0s` 和 `0`；
- [x] 消除不必要的背景高亮 `-webkit-tap-highlight-color`；
- [x] 加入二级菜单的过渡效果；
- [x] 把 `transform: none;` 加入试试效果； // 不合适，可能会降低性能
- [x] 暂时加入了 `will-change`； // 后续进行优化，适当的移除此属性，释放内存
- [ ] 修正 `search-form` 的 `transition`；
- [ ] Android Chrome 的 `onblur` 事件异常；
- [ ] 加入 JavaScript 用以自动计算 `transform: translateX(<value>)` 的值；
- [ ] 移除 iOS Safari 的 outline，优化 `:hover` 伪类；
- [ ] 进行代码清理，使 CSS 更加规范化。
