/***********************************

> 應用名稱：一言
> 軟件版本：4.13
> 下載地址：https://apps.apple.com/us/app/id1010174792
> 更新時間：2022-07-21
 
[rewrite_local]

# ～ 一言解锁会员权限（2022-07-21）
^https:\/\/app\.yiyan\.art\/yiyan\/ url script-response-body https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Crack/yiyan.js

[mitm] 

hostname=app.yiyan.art

***********************************/
var body = $response.body.replace(/viptype":"1"/g, 'viptype":"4"')
$done({ body });
