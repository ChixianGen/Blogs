# Jquery:
11.20 星期一：

学习地址：http://www.w3school.com.cn/jquery/index.asp
## 一、jQuery 教程
1. jQuery 简介：
```
jQuery 是一个 JavaScript 函数库。
jQuery 库包含以下特性：HTML 元素选取、HTML 元素操作、CSS 操作、HTML 事件函数、JavaScript 特效和动画、HTML DOM 遍历和修改、AJAX、Utilities
```
2. jQuery 安装
3. jQuery 语法：jQuery 语法是为 HTML 元素的选取编制的，可以对元素执行某些操作。基础语法是：`$(selector).action()`
```js
//文档就绪函数：
$(document).ready(function(){--- jQuery functions go here ----});
//这是为了防止文档在完全加载（就绪）之前运行 jQuery 代码。
```
4. jQuery 选择器：jQuery 元素选择器、jQuery 属性选择器、jQuery CSS 选择器
5. jQuery 事件：
- - jQuery 名称冲突：jQuery 使用名为 noConflict() 的方法来解决该问题。
- - var jq=jQuery.noConflict()，帮助您使用自己的名称（比如 jq）来代替 $ 符号

---

## 二、jQuery 效果
1. jQuery 隐藏/显示：
```js
$(selector).hide(speed,callback);//隐藏
$(selector).show(speed,callback);//显示
$(selector).toggle(speed,callback);//隐藏和显示切换
```
- - 可选的 speed 参数规定隐藏/显示的速度，可以取以下值："slow"、"fast" 或毫秒。
- - 可选的 callback 参数是hide（）、show（）、 toggle() 方法完成后所执行的函数名称。

2. jQuery 淡入淡出：
```js
$(selector).fadeIn(speed,callback);//jQuery fadeIn() 用于淡入已隐藏的元素。
$(selector).fadeOut(speed,callback);//jQuery fadeOut() 方法用于淡出可见元素。
$(selector).fadeToggle(speed,callback);//jQuery fadeToggle() 方法可以在 fadeIn() 与 fadeOut() 方法之间进行切换。
$(selector).fadeTo(speed,opacity,callback);//jQuery fadeTo() 方法允许渐变为给定的不透明度（值介于 0 与 1 之间）。
```
- - 可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
- - 可选的 callback 参数是函数完成后所执行的函数名称。

3. jQuery 滑动：
```js
$(selector).slideDown(speed,callback);//jQuery slideDown() 方法用于向下滑动元素。
$(selector).slideUp(speed,callback);//jQuery slideUp() 方法用于向上滑动元素。
$(selector).slideToggle(speed,callback);//jQuery slidetoggle() 方法用于切换滑动元素。
```
- - 可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
- - 可选的 callback 参数是滑动完成后所执行的函数名称。

4. jQuery 动画：
```js
//1、创建自定义动画。
$(selector).animate({params},speed,callback);
//必需的 params 参数定义形成动画的 CSS 属性。
//可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
//可选的 callback 参数是动画完成后所执行的函数名称。
//2、操作多个属性：生成动画的过程中可同时使用多个属性：
$("div").animate({left:'250px',opacity:'0.5',height:'150px',width:'150px'});
//3、使用相对值：可以定义相对值（该值相对于元素的当前值）。需要在值的前面加上 += 或 -=：
    $("div").animate({left:'250px',height:'+=150px', width:'+=150px'});
//4、使用预定义的值：把属性的动画值设置为 "show"、"hide" 或 "toggle"：
$("div").animate({height:'toggle' });
//5、使用队列功能：可以编写多个 animate() 调用，jQuery 会创建包含这些方法调用的“内部”队列。然后逐一运行这些 animate 调用。
```

5. jQuery stop()：
- - jQuery stop() 方法用于在动画或效果完成前对它们进行停止。
- - stop() 方法适用于所有 jQuery 效果函数，包括滑动、淡入淡出和自定义动画
		`$(selector).stop(stopAll,goToEnd);`
		可选的 stopAll 参数规定是否应该清除动画队列。默认是 false，即仅停止活动的动画，允许任何排入队列的动画向后执行。
		可选的 goToEnd 参数规定是否立即完成当前动画。默认是 false。
		因此，默认地，stop() 会清除在被选元素上指定的当前动画。
6. jQuery Callback:
7. jQuery Chaining:可以把动作/方法链接起来。
		Chaining 允许我们在一条语句中允许多个 jQuery 方法（在相同的元素上）
		例如：
```js
$("#p1").css("color","red").slideUp(2000).slideDown(2000);//"p1" 元素首先会变为红色，然后向上滑动，然后向下滑动：
```
---

## 三、jQuery HTML
1. jQuery 获取：
- - 获得内容 - text()、html() 以及 val()：
```js
		text() // - 设置或返回所选元素的文本内容
		html() //- 设置或返回所选元素的内容（包括 HTML 标记）
		val() //- 设置或返回表单字段的值
```
- - 获取属性 - attr()：
	例如：$("button").click(function(){ alert($("#w3s").attr("href"));});//获取名为w3s的href
2. jQuery 设置：
- - 设置内容 - text()、html() 以及 val()：//直接在括号里写入要设置的内容
```js
text() - 设置或返回所选元素的文本内容
html() - 设置或返回所选元素的内容（包括 HTML 标记）
val() - 设置或返回表单字段的值
```
- - text()、html() 以及 val() 的回调函数，在括号里加函数：由两个参数：被选元素列表中当前元素的下标，以及原始（旧的）值。然后以函数新值返回您希望使用的字符串。
- - 设置属性 - attr(“属性名”，“属性值”)
- - attr() 的回调函数，由两个参数：被选元素列表中当前元素的下标，以及原始（旧的）值。然后以函数新值返回您希望使用的字符串。
3. jQuery 添加：添加新的 HTML 内容
- - append() - 在被选元素的/结尾/插入内容
- - prepend() - 在被选元素的/开头/插入内容
- - after() - 在被选元素/之后/插入内容
- - before() - 在被选元素/之前/插入内容
4. jQuery 删除:删除元素/内容

		如需删除元素和内容，一般可使用以下两个 jQuery 方法：
		1、remove() - 删除/被选元素（及其子元素/
			remove() 方法也可接受一个参数，允许您对被删元素进行过滤。
			例如删除 class="italic" 的所有 <p> 元素：$("p").remove(".italic");
		2、empty() - 从被选元素中删除/子元素/
5. jQuery CSS 类：
- - addClass() - 向被选元素添加一个或多个类
- - removeClass() - 从被选元素删除一个或多个类
- - toggleClass() - 对被选元素进行添加/删除类的切换操作
- - css() - 设置或返回样式属性
6. jQuery css()：
```js
1、css("propertyname");//css() 方法设置或返回被选元素的一个或多个样式属性。
    $("p").css("background-color");//返回p元素的背景
2、css("propertyname","value");//设置样式属性
    $("p").css("background-color","yellow");//设置p元素的背景颜色为黄色
3、设置多个 CSS 属性，请使用如下语法：
    css({"propertyname":"value","propertyname":"value",...});
```
7. jQuery 尺寸：
```js
1、width/heigh不包括内边距、边框或外边距:
    width() 方法设置或返回元素的宽度（不包括内边距、边框或外边距）。
    height() 方法设置或返回元素的高度（不包括内边距、边框或外边距）。
2、width/heigh+内边距
    innerWidth() 方法返回元素的宽度（包括内边距）。
    innerHeight() 方法返回元素的高度（包括内边距）。
3、width/heigh+内边距和边框
    outerWidth() 方法返回元素的宽度（包括内边距和边框）。
    outerHeight() 方法返回元素的高度（包括内边距和边框）。
4、width/heigh+内边距、边框和外边距
    outerWidth(true) 方法返回元素的宽度（包括内边距、边框和外边距）。
    outerHeight(true) 方法返回元素的高度（包括内边距、边框和外边距）。
```
---

## 四、jQuery 遍历：
> 遍历，意为“移动”，用于根据其相对于其他元素的关系来“查找”（或选取）HTML 元素。
> 以某项选择开始，并沿着这个选择移动，直到抵达您期望的元素为止。
1. jQuery 遍历：
2. jQuery 祖先：它们用于向上遍历 DOM 树：
- - parent()：返回被选元素的/直接父元素/。该方法只会向上一级对 DOM 树进行遍历。
- - parents():返回被选元素的/所有祖先元素/，它一路向上直到文档的根元素 (<html>)。
- - parentsUntil():a.parentsUntil(b)返回介于a和b给定元素之间的所有祖先元素。
3. jQuery 后代：向下遍历 DOM 树

下面是两个用于向下遍历 DOM 树的 jQuery 方法：
- - children()：返回被选元素的所有/直接子元素/。
- - find():返回被选元素的/后代元素/，一路向下直到最后一个后代。
4. jQuery 同胞:水平遍历：
```js
siblings()://返回被选元素的所有同胞元素。就是同一辈分的兄弟姐妹
next()：//返回被选元素的下一个同胞元素，平辈在后面的一位离最近的弟/妹
nextAll()：//返回被选元素的所有跟随的同胞元素。平辈在后面的所有的即所有弟/妹
nextUntil()：//返回介于两个给定参数之间的所有跟随的同胞元素。我到弟/妹之间的弟/妹
prev()：//最近一位的哥/姐
prevAll()://全部哥哥姐姐
prevUntil()：//在哥/姐到我之间的哥/姐
```
5、jQuery 过滤：
- - first() 方法返回被选元素的首个元素。
- - last() 方法返回被选元素的最后一个元素。
- - eq() 方法返回被选元素中带有指定索引号的元素。
索引号从 0 开始，因此首个元素的索引号是 0 而不是 1。下面的例子选取第二个 <p> 元素（索引号 1）：实例$("p").eq(1);
- - filter() 方法允许您规定一个标准。不匹配这个标准的元素会被从集合中删除，匹配的元素会被返回。
`$("p").filter(".intro");`//返回带有类名 "intro" 的所有 <p> 元素：
- - not() 方法返回不匹配标准的所有元素。
提示：not() 方法与 filter() 相反。
    $("p").not(".intro");//返回不带有类名 "intro" 的所有 <p> 元素：

---

## 五、jQuery AJAX
1. jQuery AJAX 简介：AJAX 是与服务器交换数据的艺术，它在不重载全部页面的情况下，实现了对部分网页的更新。
- - 什么是ajax：
AJAX = 异步 JavaScript 和 XML（Asynchronous JavaScript and XML）。
###  简短地说，在不重载整个网页的情况下，AJAX 通过后台加载数据，并在网页上进行显示。
通过 jQuery AJAX 方法，您能够使用 HTTP Get 和 HTTP Post 从远程服务器上请求文本、HTML、XML 或 JSON - 同时您能够把这些外部数据直接载入网页的被选元素中。

2. jQuery 加载：load() 方法从服务器加载数据，并把返回的数据放入被选元素中。

		$(selector).load(URL,data,callback);
			必需的 URL 参数规定您希望加载的 URL。
			可选的 data 参数规定与请求一同发送的查询字符串键/值对集合。
			可选的 callback 参数是 load() 方法完成后所执行的函数名称。

```js
		例如：$("#div1").load("demo_test.txt")//吧demo_test.txt的文件内容加载到div1中
```        
		可选的 callback 参数规定当 load() 方法完成后所要允许的回调函数。回调函数可以设置不同的参数：
			responseTxt - 包含调用成功时的结果内容
			statusTXT - 包含调用的状态
			xhr - 包含 XMLHttpRequest 对象
3. jQuery Get/Post：两种在客户端和服务器端进行请求-响应的常用方法是：GET 和 POST。

		GET - 从指定的资源请求数据
		POST - 向指定的资源提交要处理的数据
		1、$.get(URL,callback);//通过 HTTP GET 请求从服务器上请求数据。
		2、$.post(URL,data,callback);//通过 HTTP POST 请求从服务器上请求数据。
		必需的 URL 参数规定您希望请求的 URL。
		可选的 data 参数规定连同请求发送的数据。
		可选的 callback 参数是请求成功后所执行的函数名。

---

## 六、jQuery 杂项
> jQuery noConflict()：某些框架也使用 $ 符号作为简写（就像 jQuery），如果在用的两种不同的框架正在使用相同的简写符号，有可能导致脚本停止运行。

例如：
```js
$.noConflict();//释放$
jQuery(document).ready(function(){
    jQuery("button").click(function(){
    jQuery("p").text("jQuery 仍在运行！");
    });
});
var jq = $.noConflict();//设置jq为jQuery简写
jq(document).ready(function(){
    jq("button").click(function(){
    jq("p").text("jQuery 仍在运行！");
    });
});
```