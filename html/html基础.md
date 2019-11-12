# html基础
## Svg基础：以像素为单位，所以不用写单位。X是右，y是下。
## 什么是svg：
1. SVG 指可伸缩矢量图形 (Scalable Vector Graphics)
2. SVG 用来定义用于网络的基于矢量的图形
3. SVG 使用 XML 格式定义图形
4. SVG 图像在放大或改变尺寸的情况下其图形质量不会有所损失
5. SVG 是万维网联盟的标准
6. SVG 与诸如 DOM 和 XSL 之类的 W3C 标准是一个整体

## 实例：
SVG 文件必须使用 .svg 后缀来保存：所有的开启标签必须有关闭标签！
`<?xml version="1.0" standalone="no"?>` standalone 属性！该属性规定此 SVG 文件是否是“独立的”，或含有对外部文件的引用。

standalone="no" 意味着 SVG 文档会引用一个外部文件 - 在这里，是 DTD 文件。
`<!DOCTYPE svg PUBLIC "-//W3C//D7TD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">`

第二和第三行引用了这个外部的 SVG DTD。该 DTD 位于` “http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd”`。该 DTD 位于 W3C，含有所有允许的 SVG 元素

```html
<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
SVG 代码以 <svg> 元素开始，包括开启标签 <svg> 和关闭标签 </svg> 。这是根元素。width 和 height 属性可设置此 SVG 文档的宽度和高度。version 属性可定义所使用的 SVG 版本，xmlns 属性可定义 SVG 命名空间。
<circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red"/>
<circle> 用来创建一个圆。cx 和 cy 属性定义圆中心的 x 和 y 坐标。stroke 和 stroke-width 属性控制如何显示形状的轮廓，fill 属性设置形状内的颜色。
</svg>```

SVG 文件可通过以下标签嵌入 HTML 文档：<embed>、<object> 或者 <iframe>。

1. <embed> 标签被所有主流的浏览器支持，并允许使用脚本。

注释：当在 HTML 页面中嵌入 SVG 时使用 <embed> 标签是 Adobe SVG Viewer 推荐的方法！创建合法的 XHTML，就不能使用 <embed>。
```html
语法：
<embed src="rect.svg" width="300" height="100"  type="image/svg+xml"
pluginspage="http://www.adobe.com/svg/viewer/install/" />
```
pluginspage 属性指向下载插件的 URL。

2. <object> 标签是 HTML 4 的标准标签，被所有较新的浏览器支持。它的缺点是不允许使用脚本。不能在 IE 中工作。
```html
语法：
<object data="rect.svg" width="300" height="100"  type="image/svg+xml"
codebase="http://www.adobe.com/svg/viewer/install/" />
```
codebase 属性指向下载插件的 URL。

3. <iframe> 标签可工作在大部分的浏览器中。
语法：
```html
<iframe src="rect.svg" width="300" height="100"></iframe>
```

## Svg形状：
1. 矩形 <rect>
x 属性定义矩形的左侧位置（例如，x="0" 定义矩形到浏览器窗口左侧的距离是 0px）
   y 属性定义矩形的顶端位置（例如，y="0" 定义矩形到浏览器窗口顶端的距离是 0px）
CSS 的 fill-opacity 属性定义填充颜色透明度（合法的范围是：0 - 1）
CSS 的 stroke-opacity 属性定义笔触颜色的透明度（合法的范围是：0 - 1）
2. 圆形 <circle>
cx 和 cy 属性定义圆点的 x 和 y 坐标。如果省略 cx 和 cy，圆的中心会被设置为 (0, 0)
r 属性定义圆的半径。
3. 椭圆 <ellipse>
cx 属性定义圆点的 x 坐标
cy 属性定义圆点的 y 坐标
rx 属性定义水平半径
ry 属性定义垂直半径
4. 线 <line>
x1 属性在 x 轴定义线条的开始
y1 属性在 y 轴定义线条的开始
x2 属性在 x 轴定义线条的结束
y2 属性在 y 轴定义线条的结束
5. 折线 <polyline>:<polygon points="220,100 300,210 170,250"/>points 属性定义多边形每个角的 x 和 y 坐标
6. 多边形 <polygon>:<polyline points="0,0 0,20 20,20 20,40 40,40 40,60"/>points属性定义多边形每个点的x和y坐标
7. 路径 <path>，在线编辑器：https://c.runoob.com/more/svgeditor/

### 滤镜
1. <filter>标签用来定义滤镜，滤镜必须含有id属性来标识滤镜。图形元素通过filter=url(#id)来引用滤镜。
2. <filter> 标签用来定义 SVG 滤镜。
3. <filter> 标签必须嵌套在 <defs> 标签内。<defs> 标签是 definitions 的缩写，它允许对诸如滤镜等特殊元素进行定义。

```html
<defs>
    <filter id="Gaussian_Blur"><filter> 标签必须嵌套在 <defs> 标签内。<filter> 标签的 id 属性可为滤镜定义一个唯一的名称（同一滤镜可被文档中的多个元素使用）
        <feGaussianBlur in="SourceGraphic" stdDeviation="3" />以滤镜为标签开始，in="SourceGraphic" 这个部分定义了由整个图像创建效果，stdDeviation 属性可定义模糊的程度
    </filter>
</defs>
```
<ellipse cx="200" cy="150" rx="70" ry="40"
style="fill:#ff0000;stroke:#000000;
stroke-width:2;filter:url(#Gaussian_Blur)"/> filter:url 属性用来把元素链接到滤镜。当链接滤镜 id 时，必须使用 # 字符

### 线性渐变：
渐变必须在 <defs> 标签中进行定义。渐变是一种从一种颜色到另一种颜色的平滑过渡。另外，可以把多个颜色的过渡应用到同一个元素上。
```html
<defs>
<linearGradient id="orange_red" x1="0%" y1="0%" x2="100%" y2="0%">
<linearGradient> 标签的 id 属性可为渐变定义一个唯一的名称，x1、x2、y1、y2 属性可定义渐变的开始和结束位置
<stop offset="0%" style="stop-color:rgb(255,255,0);
stop-opacity:1"/>
<stop offset="100%" style="stop-color:rgb(255,0,0);
stop-opacity:1"/>
每种颜色通过一个 <stop> 标签来规定。offset 属性用来定义渐变的开始和结束位置。
</linearGradient>
</defs>

<ellipse cx="200" cy="190" rx="85" ry="55"
style="fill:url(#orange_red)"/>
```

### 放射性渐变：
```html
<defs>
<radialGradient id="grey_blue" cx="50%" cy="50%" r="50%"
fx="50%" fy="50%">cx、cy 和 r 属性定义外圈，而 fx 和 fy 定义内圈 渐变的颜色范围可由两种或多种颜色组成。每种颜色通过一个 <stop> 标签来规定。offset 属性用来定义渐变的开始和结束位置。
<stop offset="0%" style="stop-color:rgb(200,200,200);
stop-opacity:0"/>
<stop offset="100%" style="stop-color:rgb(0,0,255);
stop-opacity:1"/>
</radialGradient>
</defs>
<ellipse cx="230" cy="200" rx="110" ry="100"
style="fill:url(#grey_blue)"/> fill:url(#grey_blue)
```
canvas：
```js
<canvas> 元素用于图形的绘制，通过脚本 (通常是JavaScript)来完成.
<canvas> 标签只是图形容器，您必须使用脚本来绘制图形。
```

### 必须要有的两个步骤：
1. 找到 <canvas> 元素:var c=document.getElementById("myCanvas");
2. 创建 context 对象：var ctx=c.getContext("2d");

getContext("2d") 对象是内建的 HTML5 对象，拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。

路径：
```js
划横线路径一定要有的方法：
ctx.moveTo(x,y);定义线条开始坐标；
ctx.lineTo(x,y);定义结束坐标，可以有n多个
ctx.stroke()；连接
```

绘制圆形一定要有的方法：
```js
ctx.arc(x,y,start,stop);
ctx.stroke()描边或者ctx.fill()填充;
```

绘制文本一定要有的方法：
```js
ctx.fon=”字体大小 字体类型”；
ctx.fillText(text,x,y)实心的文本；或者 ctx.strokeText(text,x,y)空心的文本；
```

渐变一定要有的方法：
```js
grd=ctx.createLinearGradient(x,y,x1,y1)线性渐变
或者grd=ctx.createRadialGradient(x,y,r,x1,y1)径向渐变
grd.addColorStop(0-1,”颜色名”)；可以有n多个
ctx.fillStyle=grd;把自己设置的渐变效果赋给填充样式；
ctx.fillRect(10,10,150,80);
```

图像一定要有：
```js
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
var img=document.getElementById(“图片id名”)；
ctx.drawImage(img,x左上角，y左上角)
```

## 媒体：
视频<video>在html5中：把video换成audio同样适用；
适用于 Safari 浏览器，视频文件必须是 MPEG4 类型。
```html
<video width="320" height="240" controls="controls"> 
  <source src="movie.ogg" type="video/ogg">
</video>
  ```
允许多个 source 元素。source 元素可以链接不同的视频文件。浏览器将使用第一个可识别的格式：
```html
<source src="movie.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video> 
```
Video标签的常见属性：`autoplay=“autoplay”`视频就绪后马上播放；`controls=“controls”`出现显示控件；`loop=“loop”`循环播放
`video/audio + dom：`
js中视频的播放用`play（）`方法；暂停用`pause（）`方法；

## PWA（ 全称：Progressive Web App ）也就是说这是个渐进式的网页应用程序。
优点可以一步一步地增强现有的web应用。
### PWA 应该具备以下特点：
- 响应式
- 独立于网络连接
- 类似原生应用的交互体验
- 始终保持更新
- 安全
- 可发现
- 可重连
- 可安装
- 可链接
- PWA 带给 Web 的功能使开发者可以为用户构建更快、更可靠、更吸引人的网站。
> 这些功能被添加到浏览器中，这意味着它们也可以与你熟悉的任何库或框架一起很好地工作。无论你是有一个现成的应用，还是想从头开始构建新的 Web 应用，都可以根据需要来定制 PWA。