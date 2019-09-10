使用canvas绘制小球，鼠标经过之处放大，离开缩小。

预览地址：(http://www.yating.online/demo/balls)[http://www.yating.online/demo/balls]

```js
// 随机范围的随机数
function betweenRandom(min, max) {
    return Math.random() * (max - min) + min;
}

// 小球颜色
var acolor = ["#228B22", "#FD5B78", "#00BFFF", "#FFA500", "#FF0000"];

// 鼠标所在位置
var mouseX, mouseY;
// 使用jquery给stage绑定一个mousemove事件
function getMouseXY() {
    $("#stage").mousemove(function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    })
}
// 创建一个构造函数
function mother(maxWidth, maxHeight, ctx) {
    this.ctx = ctx;
    this.maxWidth = maxWidth;
    this.maxHeight = maxHeight;
}
// 创建方法
mother.prototype = {
    // 配置小球基础信息
    init: function () {
        // 随机配置
        this.x = betweenRandom(0, this.maxWidth);
        this.y = betweenRandom(0, this.maxHeight);
        this.r = betweenRandom(5,10);
        this.beiyongR =this.r;//存储原来小球的半径，以便于恢复；
        this.color = acolor[Math.floor(betweenRandom(0, 5))];
        this.vx = betweenRandom(-1, 1);//小球x方向
        this.vy = betweenRandom(-1, 1);//小球y方向
    },
    // 绘制小球
    draw: function () {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        this.ctx.fill();
    },
    // 移动动画
    move: function () {
        // 当小球要超过画布宽度时，方向取反
        if (this.x - this.r < 0 || this.x + this.r > this.maxWidth) { this.vx = -this.vx; }
        // 当小球要超过画布高度时，方向取反
        if (this.y - this.r < 0 || this.y + this.r > this.maxHeight) { this.vy = -this.vy; }
        // 在鼠标周围就放大
        if ((mouseX - this.x <= 100 && this.x - mouseX <= 100) && (this.y - mouseY <= 100 && mouseY - this.y <= 100)) {
            // 最大放大到50
           if(this.r>=50){
               this.r=50
           }else{
            //    否则就放大
               this.r++
           }
        }
        // 不在鼠标周围时
        else{
            // 当半径大于原来半径时，那么就减小
            if(this.r>this.beiyongR){
                this.r--
            }else{
                // 否则就为原来的半径
                this.r=this.beiyongR
            }
        }
        this.x += this.vx,
            this.y += this.vy;
        this.draw()
    }
}
```
<!-- 在vue上只需要一个canvas标签 -->
```html
<template>
<div>
    <canvas id="stage" :width="canvasWidth" :height="canvasHeight"></canvas>
</div>
</template>
```


```js
<script>
// 引入刚才写的构造函数，还有获得鼠标在canvas坐标的方法
import {
    mother,getMouseXY
} from './ball';
export default {
    data() {
        return {
            ctx: null,
            canvasWidth: null,
            canvasHeight: null,
            balls: []
        }
    },
    methods: {
        begin(num) {
           for (let i = 0; i <num; i++) {
            //    实例化num个小球，并存储在balls数组中
                var qiu=new mother(this.canvasWidth,this.canvasHeight,this.ctx);
                qiu.init();
                qiu.draw();    
                this.balls.push(qiu)   
            }
            // 循环遍历运行，让小球们移动
            setInterval(()=>{
                this.ctx.clearRect(0,0,this.canvasWidth,this.canvasHeight);
                for (const item of this.balls) {
                    item.move()
                }
            },1000/60)
        }
    },
    mounted() {
        // 让画布宽度随着界面视图的放大缩小而改变；
        this.canvasWidth = Math.floor(document.body.clientWidth);
        this.canvasHeight = Math.ceil(document.body.clientHeight);
        window.onresize = () => {
            this.canvasWidth = Math.floor(document.body.clientWidth);
            this.canvasHeight = Math.ceil(document.body.clientHeight);
            console.log(this.canvasWidth, this.canvasHeight)
        }
        var c = document.getElementById("stage");
        this.ctx = c.getContext("2d");
        getMouseXY();
        this.begin(250);
    }
}
</script>
```

因为canvas是内联标签，在浏览器预览的时候有下拉条，不美观，内联标签自带一点高度，改成block就可以避免这个问题了。
```css
<style lang="less" scoped>
#stage {
    width: 100%;
    height: 100%;
    display: block;
    background: #ffc0cb12;
}
</style>
```