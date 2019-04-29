    
let path2 = '/statuses/';
let path3 = '/statuses/extend';
let path4 = '/comments/build_comments';
let path5 = '/photo/recommend_list';
let path6 = '/stories/video_stream';
var result = body;
if (url.indexOf(path2) != -1) {
    var json_body = JSON.parse(body);
    if (url.indexOf(path3) != -1) { 
        delete json_body.trend
    }else {
        if (json_body.trends) {
            json_body.trends = [];
        }
        var ad = json_body.ad;
        if (typeof(ad) != "undefined") {
            var statuses = json_body.statuses;
            for (let i = 0; i < ad.length; i++) {
                const element = ad[i];
                let ad_id = element.id;
                for (let j = 0; j < statuses.length; j++) {
                    const element = statuses[j];
                    let statuses_id = element.id;
                    if (statuses_id == parseInt(ad_id)) {
                        statuses.splice(j,1);
                    }
                }
            }
        }
    }
    result = JSON.stringify(json_body);
}
if (url.indexOf(path4) != -1) { 
    var json_body = JSON.parse(body);
    var datas = json_body.datas;
    var new_datas = []
    for (let j = 0; j < datas.length; j++) {
        const element = datas[j];
        let type = element.type;
        if (type!=5 && type!=1 && type!=6) {
            new_datas.push(element);
        }
    }
    json_body.datas = new_datas;
    result = JSON.stringify(json_body);
}
if (url.indexOf(path5) != -1) { 
    var json_body = JSON.parse(body);
    json_body.data = {};
    result = JSON.stringify(json_body);
}
if (url.indexOf(path6) != -1) { 
    var json_body = JSON.parse(body);
    var segments = json_body.segments;
    var new_segments = [];
    for (let j = 0; j < segments.length; j++) {
        const element = segments[j];
        let is_ad = element.is_ad;
        if (typeof(is_ad) == "undefined" || is_ad == false) {
            new_segments.push(element);
        }
    }
    json_body.segments = new_segments;
    result = JSON.stringify(json_body);
}
result;

/*******************************************************
 *来源：https://github.com/yichahucha/surge/blob/master/wb_rm_ad.js
 *http-response api.weibo.cn script-path=https://raw.githubusercontent.com/yichahucha/surge/master/wb_rm_ad.js
 *hostname = api.weibo.cn
 *******************************************************/
