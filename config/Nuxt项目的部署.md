# nginx设置代理，把nuxt项目放到服务器上运行的步骤

第一步、在本地 npm run build,会在.nuxt文件夹下生成dist文件;

第二步、把本地文件的.nuxt,static,package.json,nuxt.config.js,这四个文件夹放到服务器目录文件下，四个文件放到里面;

第三步、安装依赖，npm install;

第四步、npm start 此时运行的是 http://localhost:9000;

第五步、在nginx上面设置一下配置：proxy_pass http://localhost:9000;同理如果你有后台的话，也是这样的操作。

然后你就可以访问这个地址啦~
## [http://www.yating.online](http://www.yating.online)

###### 感谢张小二帮我部署前后端的项目~(～￣▽￣)～ 

```nginx
#user  nobody;
worker_processes  1;
user root;
#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

    server {
        listen       80;
        server_name  localhost;

#myweb nuxt项目
	location / {
          #alias /root/yating-project/;
          #index  index.html index.htm;
          #autoindex on;
          proxy_pass http://127.0.0.1:9000;
      }
#静态资源
       location /game {
          alias /root/easyGame/output/;
          index  index.html index.htm;
          autoindex on;
      }
#对外开放资源
	location /res{
	  alias /root/resource/;
	  index index.html index.htm;
	  autoindex on;
	}
#后台接口地址
	location /api/ {
	expires  7d;
        proxy_set_header Host $host;
        proxy_pass_header User-Agent;
        proxy_pass http://127.0.0.1:1111/;
      }
    }

}
```

## 其他扩展：
PM2守护程序目前似乎最常见的线上部署软件。

命令行全局安装pm2
```
$ npm install -g pm2 
```

启动一个进程并把它命名为 test
```
pm2 start npm --name test -- start
```

| App name  | id | version | mode | pid   | status | restart | uptime | cpu  | mem       | user | watching |
|---|-|-|-|-|-|-|-|-|-|-|-|
| myweb     | 0  | N/A     | fork | 24435 | online | 430     | 35m    | 0.2% | 37.0 MB   | root | disabled |
| nodeAfter | 1  | N/A     | fork | 24648 | online | 60      | 28m    | 0.1% | 36.2 MB   | root | disabled |

- 启动了一个后台进程：pm2 start npm --name nodeAfter -- start

- 启动了一个前端进程：pm2 start npm --name myweb -- start

以后更新了代码可以直接先把代码拉下来，可以一起停进程，也可以一起运行。

常用的指令：

```cmd
npm install pm2 -g     # 命令行安装 pm2 
pm2 start app.js -i 4 #后台运行pm2，启动4个app.js 
                              # 也可以把'max' 参数传递给 start
                              # 正确的进程数目依赖于Cpu的核心数目
pm2 start app.js --name my-api # 命名进程
pm2 list               # 显示所有进程状态
pm2 monit              # 监视所有进程
pm2 logs               #  显示所有进程日志
pm2 stop all           # 停止所有进程
pm2 restart all        # 重启所有进程
pm2 reload all         # 0秒停机重载进程 (用于 NETWORKED 进程)
pm2 stop 0             # 停止指定的进程
pm2 restart 0          # 重启指定的进程
pm2 startup            # 产生 init 脚本 保持进程活着
pm2 web                # 运行健壮的 computer API endpoint (http://localhost:9615)
pm2 delete 0           # 杀死指定的进程
pm2 delete all         # 杀死全部进程
```