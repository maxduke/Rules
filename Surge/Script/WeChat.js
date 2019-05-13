    
var obj = JSON.parse(body);
delete obj['advertisement_info'];
JSON.stringify(obj);

/*************************************************************
 *来源：https://github.com/Choler/Surge/blob/master/WeChat.js
 *http-response ^https?://mp\.weixin\.qq\.com/ script-path=https://raw.githubusercontent.com/Choler/Surge/master/WeChat.js
 *hostname = mp.weixin.qq.com
 ************************************************************/
