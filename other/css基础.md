## CSS基础：
CSS3特性：
1. 选择器：
- - tbody: nth-child(even), nth-child(odd)：此处他们分别代表了表格（tbody）下面的偶数行和奇数行（tr），这种样式非常适用于表格，让人能非常清楚的看到表格的行与行之间的差别，让用户易于浏览。
- - : not(.textinput)：这里即表示所有 class 不是“textinput”的节点。
- - div:first-child：这里表示所有 div 节点下面的第一个直接子节点。

--- 

2 .Font-face 可以用来加载字体样式，而且它还能够加载服务器端的字体文件，让客户端显示客户端所没有安装的字体。
未在客户端安装的字体样式

参看如下代码：Font-face 客户端字体案例
```html 
<p><font face="arial">arial courier verdana</font></p>
```
字体基本写法
```html
<p><font style="font-family: arial">arial courier verdana</font></p>
```
Font-face 服务端字体案例
```css
@font-face { 
font-family: BorderWeb; 
src:url(BORDERW0.eot); 
} 
@font-face { 
font-family: Runic; 
src:url(RUNICMT0.eot); 
} 
.border { FONT-SIZE: 35px; COLOR: black; FONT-FAMILY: "BorderWeb" } 
.event { FONT-SIZE: 110px; COLOR: black; FONT-FAMILY: "Runic" }
 ```

--- 

3. word-wrap: break-word，设置或检索当当前行超过指定容器的边界时是否断开转行。
如果有break-word，文字超过就到到第二行去。

4. text-overflow 则设置或检索当当前行超过指定容器的边界时如何显示

5. 文字渲染的属性：
```css
Text-fill-color: 文字内部填充颜色
Text-stroke-color: 文字边界填充颜色
Text-stroke-width: 文字边界宽度
```
6. 多列布局
```css
Column-count：表示布局几列。
Column-rule：表示列与列之间的间隔条的样式
Column-gap：表示列于列之间的间隔
```
7. 边框和颜色
```css
color: rgba(255, 0, 0, 0.75); “rgba”属性中的“a”代表透明度，也就是这里的“0.75”
border-radius: 15px;
```
8. 渐变效果：左上（0% 0%）到右上（0% 100%）即从左到右水平渐变：
```css
background-image:-webkit-gradient(linear,0% 0%,100% 0%,from(#2A8BBE),
color-stop(0.33,#AAD010),color-stop(0.33,#FF7F00),to(#FE280E));
```
“color-stop”为拐点径向渐变（radial），这不是从一个点到一个点的渐变，而从一个圆到一个圆的渐变。不是放射渐变而是径向渐变。
```css
backgroud: -webkit-gradient(radial,50 50,50,50 50,0,from(black),color-stop(0.5,red),to(blue));
```
“50,50,50”是起始圆的圆心坐标和半径，“50,50,0”蓝色是目标圆的圆心坐标和半径，“color-stop(0.5,red)”是断点的位置和色彩。这里需要说明一下，和放射由内至外不一样，径向渐变刚好相反，是由外到内的渐变。

9. 阴影和反射效果
```css
.class1{ 
text-shadow:5px 2px 6px rgba(64, 64, 64, 0.5); 
} 
.class2{ 
box-shadow:3px 3px 3px rgba(0, 64, 128, 0.3); 
}
```
X 轴方向阴影向右 5px,Y 轴方向阴影向下 2px, 而阴影模糊半径 6px，颜色为 rgba(64, 64, 64, 0.5)。其中偏移量可以为负值，负值则反方向。
10. 背景效果
11. 盒子模型
- - Transitions，transforms，animation
- - Transforms：就是指拉伸，压缩，旋转，偏移等等一些图形学里面的基本变换
- - skew”是倾斜，“scale”是缩放，“rotate”是旋转，“translate”是平移
```css
.skew { 
-webkit-transform: skew(50deg); 
} 

.scale { 
-webkit-transform: scale(2, 0.5); 
} 
 
.rotate { 
-webkit-transform: rotate(30deg); 
} 
 
.translate { 
-webkit-transform: translate(50px, 50px); 
} 
 
.all_in_one_transform { 
-webkit-transform: skew(20deg) scale(1.1, 1.1) rotate(40deg) translate(10px, 15px); 
}
```
Animation：
```css
@-webkit-keyframes anim1 { //规定动画：名称{ }
   0% { //开始动画
       Opacity: 0; 
Font-size: 12px; 
   } //中间可以加任意百分比的状态
   100% { //结束动画
       Opacity: 1; 
Font-size: 24px; 
   } 
} 
.anim1Div { 
   -webkit-animation-name: anim1 ; //动画名称
   -webkit-animation-duration: 1.5s; //持续时间
   -webkit-animation-iteration-count: 4; //播放次数
   -webkit-animation-direction: alternate; 播放线性
   -webkit-animation-timing-function: ease-in-out; //动画速度曲线
}
```

--- 

### 尺寸：ppi每英寸的像素点，是一个率，表示了清晰度，精准
```css
Pt：专用的印刷单位，大小为1/72英寸，打印的时候是固定的，显示效果主要看显示屏
En：就是%，1em=100%；相对长度，不固定，会继承父级元素字体大小。
Rem：相对的只是html根元素；
Px：像素，是屏幕上显示数据最基本的点，相对于显示屏分辨率而言
IE无法调整使用px作为单位的字体大小
国外的大部分网站能够调整em和rem
Firefox能够调整px，和em，rem
```

---

### UI布局：
1. 网格容器：

通过display属性设置属性值为grid或inline-grid可以创建一个网格容器。网格容器中的所有子元素就会自动变成网格项目（grid item）
```css
display: grid
display: inline-grid
```
网格项目默认放在行中，并且跨网格容器的全宽

2. 显示网格：　

- - 使用grid-template-columns和grid-template-rows属性可以显式的设置一个网格的列和行 

```css
【grid-template-rows】默认值为none
```

grid-template-rows指定的每个值可以创建每行的高度。行的高度可以是任何非负值，长度可以是px、%、em等长度单位的值

```css
【grid-template-columns】默认值为none
```

像行一样，通过grid-template-columns指定的每个值来创建每列的列宽

- fr单位可以帮助我们创建一个弹列的网格轨道。它代表了网格容器中可用的空间（就像Flexbox中无单位的值）
```css
grid-template-columns: 1fr 1fr 2fr
```
> 在这个示例中，网格容器分成了4等份（1 + 1 + 2 = 4），每一份（1fr）是网格容器宽度的四分之一。所以item1和item2的宽度是网格容器的四分之一宽，item3是网格容器宽度的四分之二（2fr）

```css
grid-template-columns: 3rem 25% 1fr 2fr
```

- - 当fr和其它长度单位的值结合在一起的时候，fr是基于网格容器可用空间来计算。
- - 在这个示例中，网格容器可用空间是网格宽度减去3rem和25%剩下的宽度，而fr就是基于这个尺寸计算：
```css
1fr = (网格宽度 - 3rem - 网格宽度 * 25%) / 3
```

- 【minmax()】是网格宽度或者高度的属性方法
　　可以通过minmax()函数来创建网格轨道的最小或最大尺寸。minmax()函数接受两个参数：第一个参数定义网格轨道的最小值，第二个参数定义网格轨道的最大值。可以接受任何长度值，也接受auto值。auto值允许网格轨道基于内容的尺寸拉伸或挤压
```css
grid-template-rows: minmax(100px, auto);
grid-template-columns: minmax(auto, 50%) 1fr 3em;
```
在这个示例中，第一行的高度最小值是100px，但其最大值为auto，允许行的高度可以变大超过100px。第一列设置了最小值为auto，但它的最大值是50%，也就是列的最大宽度不会超过网格容器宽度的50%

- 【repeat()】是网格宽度或者高度的属性方法
> 使用repeat()可以创建重复的网格轨道。这个适用于创建相等尺寸的网格项目和多个网格项目。repeat()接受两个参数：第一个参数定义网格轨道应该重复的次数，第二个参数定义每个轨道的尺寸。
```css
grid-template-rows: repeat(3, 1fr);    
grid-template-columns: 30px repeat(3, 1fr) 30px;
```

在这个示例中，第一列和最后一列的宽度都是30px，并且它们之间有另列三列，这三列是通过repeat()来创建的，而且每列的列宽是1fr（1fr = (网格宽度 - 30px - 30px) / 3）

- grid-template-areas
- - 使用grid-area属性定义网格区域名称，从而定义网格模板。网格区域重复的名称就会导致内容跨越这些单元格。句点表示一个空单元格。语法本身提供了一种可视化的网格结构。
- - grid-column-gap和grid-row-gap:指定网格线的大小。你可以把它想像成在行/列之间设置间距宽度。
都在container里写属性；
```css
align-items：网格内的项目在网格中的垂直方向
justify-items：网格内的项目在网格中的水平方向
align-content:整个网格在父级元素中的垂直位置
justify-content:整个网格在父级元素中的水平位置
```

---

### 网格里项属性：
//网格里的内容，使用特定的网格线确定网格项在网格内的位置。
```css
grid-column-start/网格项左边线，
grid-column-end/网格项右边线；
上面两个可以写成：grid-column: 3 / span 2;
grid-row-start/网格项上面线；
grid-row-end/网格项下面线；
上面两个可以写成：grid-row: third-line / 4;
```

```css
justify-self：网各项在网格中垂直方向
start: 内容与网格区域的左端对齐
end: 内容与网格区域的右端对齐
center: 内容处于网格区域的中间位置
stretch: 内容宽度占据整个网格区域空间(默认值)
align-self：网格项在网格中水平方向
start: 内容与网格区域的顶端对齐
end: 内容与网格区域的底部对齐
center: 内容处于网格区域的中间位置
stretch: 内容高度占据整个网格区域空间(默认值)
```
