let path1 = '/user/profile';
let path2 = '/v3plus/index/channel';
let path3 = '/v3plus/video/getTopFeed';
let path4 = '/v3plus/index/todayChoice';
let path5 = '/v3plus/medal/getAllMedalDetailWithPiece';

if (url.indexOf(path1) != -1) {
    var obj = JSON.parse(body);
    obj['data']['user']['medalList'] = JSON.parse('[{"name":"看剧必备","endTime":"2020-01-01 00:00:00","imgUrl":"http://img.rr.tv/screenshot/20171108/o_1510128764030.png","id":1},{"name":"小蜜蜂","endTime":"2020-01-01 00:00:00","imgUrl":"http://img.rr.tv/screenshot/20171108/o_1510127551022.png","id":2},{"name":"鹊桥相会","endTime":"2020-01-01 00:00:00","imgUrl":"http://img.rr.tv/screenshot/20171108/o_1510127509115.png","id":4},{"name":"皎兔弄月","endTime":"2020-01-01 00:00:00","imgUrl":"http://img.rr.tv/medal/20180518/o_1526626191919.png","id":5},{"name":"三周年·铜","endTime":"2020-01-01 00:00:00","imgUrl":"http://img.rr.tv/medal/20180518/o_1526626191919.png","id":6},{"name":"三周年·银","endTime":"2020-01-01 00:00:00","imgUrl":"http://img.rr.tv/screenshot/20171108/o_1510127445782.png","id":7},{"name":"三周年","endTime":"2020-01-01 00:00:00","imgUrl":"http://img.rr.tv/screenshot/20171108/o_1510127455270.png","id":8},{"name":"圣诞白雪","endTime":"2020-01-01 00:00:00","imgUrl":"http://img.rr.tv/screenshot/20171108/o_1510123073637.png","id":11},{"name":"新年快乐","endTime":"2020-01-01 00:00:00","imgUrl":"http://img.rr.tv/screenshot/20171108/o_1510127533186.png","id":13},{"name":"小恶魔碎片","endTime":"2020-01-01 00:00:00","imgUrl":"http://img.rr.tv/medal/20171228/o_1514456080988.png","id":18},{"name":"日诵五车","endTime":"2020-01-01 00:00:00","imgUrl":"http://img.rr.tv/medal/20171228/o_1514888181204.png","id":19},{"name":"活跃达人碎片","endTime":"2020-01-01 00:00:00","imgUrl":"http://img.rr.tv/medal/20171228/o_1516869189844.png","id":20},{"name":"生肖 [猪]","endTime":"2020-01-01 00:00:00","imgUrl":"http://img.rr.tv/medal/20171228/o_1545631459296.png","id":22},{"name":"世界杯","endTime":"2020-01-01 00:00:00","imgUrl":"http://img.rr.tv/medal/20171228/o_1526536423940.png","id":24},{"name":"1080P","endTime":"2020-01-01 00:00:00","imgUrl":"http://img.rr.tv/medal/20180607/o_1528365641950.png","id":25},{"name":"我是剧迷","endTime":"2020-01-01 00:00:00","imgUrl":"http://img.rr.tv/medal/20171228/o_1530105277271.png","id":26},{"name":"分享达人","endTime":"2020-01-01 00:00:00","imgUrl":"http://img.rr.tv/medal/20171228/o_1532434410633.png","id":27},{"name":"妙笔生花","endTime":"2020-01-01 00:00:00","imgUrl":"http://img.rr.tv/medal/20171228/o_1534413201800.png","id":28},{"name":"剧无霸","endTime":"2020-01-01 00:00:00","imgUrl":"http://img.rr.tv/medal/20171228/o_1535108129493.png","id":29},{"name":"四周年","endTime":"2020-01-01 00:00:00","imgUrl":"http://img.rr.tv/medal/20171228/o_1541151100871.png","id":31}]');
    obj['data']['user']['privilegeList'] = JSON.parse('[{"effectObject":"danmu","action":"send","func":"superBarrageBlue","description":"超级弹幕","icon":"chaojidanmu","endTime":1640966400000},{"effectObject":"video","action":"play","func":"noLimit","description":"看剧无限制","icon":"kanjuwuxianzhi","endTime":1640966400000},{"effectObject":"video","action":"play","func":"noAd","description":"看剧无广告","icon":"kanjuwuguanggao","endTime":1640966400000},{"effectObject":"growth","action":"play","func":"0.4","description":"经验值加成+40%","icon":"jingyanzhijiacheng","endTime":1640966400000},{"effectObject":"video","action":"play","func":"originalPainting","description":"解锁原画","icon":"jiesuoyuanhua","endTime":1640966400000}]');
    result = JSON.stringify(obj);
}

if (url.indexOf(path2) != -1) {
    var obj = JSON.parse(body);
    obj['data']['sections'].splice(1,1);
    obj['data']['sections'].splice(2,1);
    obj['data']['sections'].splice(14,1);
    result = JSON.stringify(obj);
}

if (url.indexOf(path3) != -1) {
    var obj = JSON.parse(body);
    delete obj['data']['notice'];
    obj['data']['indexView']['interestingList'].splice(3,1);
    result = JSON.stringify(obj);
}

if (url.indexOf(path4) != -1) {
    var obj = JSON.parse(body);
    delete obj['data']['notice'];
    obj['data']['sections'].splice(2,1);
    obj['data']['sections'].splice(4,1);
    obj['data']['sections'].splice(8,1);
    obj['data']['sections'].splice(10,1);
    result = JSON.stringify(obj);
}

if (url.indexOf(path5) != -1) {
    var obj = JSON.parse(body);
    function replaceAll(str, find, replace){
	return str.replace(new RegExp(find, 'g'), replace);
}

    var keywords = ['"endTime":null','"endTime":"2019-05-18 16:39:25"','"endTime":"2019-05-19 21:21:51"'];

    var result = body;

    keywords.forEach(function(k) {
	    result = replaceAll(result, k, '"endTime":"2020-01-01 00:00:00"');
});
}
result;

/*********************************************************
 *来源：https://github.com/Choler/Surge/blob/master/RRtv.js
 *http-response ^https?://api\.rr\.tv/ script-path= https://github.com/Choler/Surge/raw/master/RRtv.js
 *hostname = api.rr.tv
 ********************************************************/
