/*
New Banana video unlock vip
app download link : 

QX:
^https?:\/\/server\.zhongjijulebu\.com\/ url script-response-body https://raw.githubusercontent.com/maxduke/Rules/master/Surge/Script/newbananavideo.js

Surge4：
http-response ^https?:\/\/server\.zhongjijulebu\.com\/ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/maxduke/Rules/master/Surge/Script/newbananavideo.js
Surge & QX MITM = server.zhongjijulebu.com
*/

var body = $response.body;
var url = $request.url;
const path1 = "/user/inf.php";
const path2 = "/getGlobalData";
const path3 = "/vod/reqplay/"
if (url.indexOf(path1) != -1){
  let obj = JSON.parse(body);
  obj.data["aliasName"] = "Im_VIP"
  obj.data["dailyViewNum"] = "666";
  obj.data["RemainingPlay"] = "666";
  obj.data["Level"] = "5"
  obj.data["vipdate"] = "2099.12.31"
  body = JSON.stringify(obj);
}

if (url.indexOf(path2) != -1){
  let obj = JSON.parse(body);
  obj.data.app_launch_times_adshow = "0";
  obj.data.adgroups = "";
  obj.data.iOS_adgroups ="";
  body = JSON.stringify(obj);
}
if (url.indexOf(path3) != -1){
  let obj = JSON.parse(body);
  obj.retcode = "0";
  if(obj.data.hasOwnProperty("httpurl_preview")){
		var playurl = obj.data["httpurl_preview"];
		obj.data["httpurl"] = playurl;
	};
	body = JSON.stringify(obj);
}
$done({body});

//（
