> 增加配置如下

```
[Script]
http-response api.weibo.cn  script-path=https://raw.githubusercontent.com/maxduke/Rules/master/Surge/Script/wb_rm_ad.js
http-response ^http://vip1\.kuwo\.cn/vip/  script-path=https://raw.githubusercontent.com/maxduke/Rules/master/Surge/Script/Music.js
http-response ^https?://mp\.weixin\.qq\.com/ script-path=https://raw.githubusercontent.com/maxduke/Rules/master/Surge/Script/WeChat.js
http-response ^https?://i\.weiread\.qq\.com/pay/memberCard script-path=https://raw.githubusercontent.com/maxduke/Rules/master/Surge/Script/WeRead.js
http-response ^https?://api\.rr\.tv/ script-path=https://raw.githubusercontent.com/maxduke/Rules/master/Surge/Script/RRtv.js
http-response ^https:\/\/api\.rr\.tv script-path=https://raw.githubusercontent.com/maxduke/Rules/master/Surge/Script/rrtv.js
```


---
[Surge Scripting](https://manual.nssurge.com/scripting/http-response.html)
