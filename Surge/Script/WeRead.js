var result = body

let path = '/pay/memberCardSummary';

if (url.indexOf(path) != -1) {
    var jsbody = JSON.parse(body);
    jsbody.remainTime = 86313600;
    result = JSON.stringify(jsbody);
}
result;

/******************************************************
 *来源：https://github.com/Choler/Surge/blob/master/Music.js
 *http-response ^https?://i\.weread\.qq\.com/pay/memberCard script-path= https://github.com/Choler/Surge/raw/master/WeRead.js
 *hostname = i.weiread.qq.com
 *****************************************************/
