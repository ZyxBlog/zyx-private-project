## HTTP中的OPTIONS请求

### 存在的目的
解决跨域的问题（浏览器的同源策略，域名，协议，端口）

### 请求的方式
OPTIONS、GET、HEAD、POST、PUT、DELETE、TRACE和CONNECT。

### 跨域请求带来的问题
* request失败
* 收不到response

### Simple Requests 和 Preflighted Requests 
1. Simple Requests：当且仅当一个 request 满足下面全部条件的时候
* request method 只能是 GET，HEAD，POST
* Content-Type这个header的value只能是特定的3个
包含一些非 CORS 协议默许的 headers，比如Authorization，X-Request-With 或者一些自定义的headers。
跨域方式：CORS  设置Access-Control-Allow-Origin

2. preflight request：不满足上述要求的请求
浏览器发送 preflight request（那个 OPTIONS 请求）
浏览器收到 preflight response（也就是刚刚那个 request 的返回）
浏览器根据 preflight response 中的 Access-Control-Allow-Origin, Access-Control-Allow-Headers以及其他Access-Control-*类的headers 中的 value 来判断网页程序真正要发出的 request 是否符合要求
如果这个 request 符合要求，request 被发出，网页程序可以收到正常的 response（如果不出网络通讯上的意外）；如果这个 request 被判定为不符合要求，这个 request 干脆就不会被发出。