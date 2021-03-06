# web缓存
客户端缓存
- from disk cache
- from memory cache

每次打开新的页面会使用本地缓存，再次刷新，就使用浏览器缓存；
关闭标签以后，就没有浏览器缓存了

## web缓存
web资源存在于web服务器和客户端之间的副本；

### web缓存的作用
- 减少网络带宽消耗；
- 减低服务器压力；
- 减少网络延迟，加快页面打开速度；

### web缓存的类型
- 数据库数据缓存；
- 服务器端换；
- 浏览器端缓存；
- web应用层缓存；
  
> 浏览器缓存是将文件保存在客户端，在同一个会话过程中会检查缓存的副本是否足够新；在退后网页是，访问过的资源可以从浏览器缓存中拿出使用；

### web缓存的工作原理
1. 规则是在http协议头和html页面的Meta标签中定义的；
2. 从新鲜度和校验值两个维度规定浏览器是否去使用缓存中的副本；
   
### 新鲜度
缓存副本有效期，
### 校验值

服务器返回资源的时候有在控制头信息带上这个资源的实体标签Etag。可以用作浏览器请求过程的教研表示，校验不匹配说明资源已过期或被修改，则浏览器重新获取资源内容；

方法：
1. 仅在部分浏览器支持，代理器失效，因为代理器不解析HTML内容本身；
```html
<meta HTTP-EQUIV='Pragma' CONTENT='no-cache'>
```

与缓存相关的消息报头：
1. Expires
2. Pragme//忽略缓存副本
3. Cache-Contol：no-cache 忽略缓存副本；no-store 任何情况下都不保存副本； max-age=[秒] 缓存副本有效时长； public 无条件缓存资源； private 只对单个用户或实体缓存；
4. Last-Modified：告诉浏览器当前资源最后修改时间；
5. If-Modify-Match：如果第一次请求中last-modify非空，第二次请求同一资源会八他当做该项的值发给服务器；

