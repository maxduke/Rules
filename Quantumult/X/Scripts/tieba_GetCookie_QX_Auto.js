/*
Tieba Check in Get Cookie. by MaxDuke
Need to manually log in to the http://tieba.baidu.com to get cookie. When QX pops up to get a successful notification, you can disable the script.
Note that the following config is only a local script configuration, please put this script into Quantumult X/Script
[rewrite_local]
^http://tieba.baidu.com url script-response-body tieba_GetCookie_QX_Auto.js
MITM = tieba.baidu.com
*/

if ($request.headers['Cookie']) {
    var headerTieba = $request.headers['Cookie'];
    var cookie = $prefs.setValueForKey(headerTieba, "CookieTieba");
    if (!cookie){
      $notify("写入贴吧Cookie失败‼️‼️", "", "请重试")
    } else {
      $notify("写入贴吧Cookie成功🎉", "", "您可以手动禁用此脚本")
      //console.log("贴吧Cookie : \n" + $prefs.valueForKey("CookieTieba"))
    }
  } else {
    $notify("写入贴吧Cookie失败‼️‼️", "", "请退出账号, 重复步骤")
  }
  $done({})
