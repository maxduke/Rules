/*
今日热榜
http-response https:\/\/api\.tophub\.today\/account\/sync
hostname= api.tophub.today
*/

var obj = JSON.parse($response.body);
 obj={
 "data": {
  "is_vip": "1",
  "vip_expired": "4092599349",
  "is_vip_now": true
 },
 "error": false,
 "status": 200
};
$done({body: JSON.stringify(obj)});
