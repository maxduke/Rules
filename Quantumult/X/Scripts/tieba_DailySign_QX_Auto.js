/**
 *
 * [MITM]
 * tieba.baidu.com
 *
 * [task_local]
 * 0 9 * * * tieba_DailySign_QX_Auto.js
 *
 */

const cookieVal = $prefs.valueForKey("tiebaJD")

function sign() {
  
  var MyListUrl = {
    url: 'http://tieba.baidu.com/f/like/mylike',
    method: "POST",
    headers: {
      Cookie: cookieVal
    }
  }
  
  $task.fetch(MyListUrl).then(response => {
    let regex = /\/f\?kw=([^{'"}]*)/g
    for (const bar of response.body.matchAll(regex)) {
      signBar(bar)
    }
  })

}

function signBar(bar) {

  var SignUrl = {
    url: `http://tieba.baidu.com/sign/add?ie=utf-8&kw=${bar[1]}`,
    method: "POST",
    headers: {
      Cookie: cookieVal
    }
  }

  $task.fetch(SignUrl).then(response => {
    var result = JSON.parse(response.body)
    if (result.no == 0) {
      $notify(`正在签到: ${bar[1]}`, "", `签到成功`)
    } else {
      $notify(`正在签到: ${bar[1]}`, "", `错误编码: ${result.no}, 错误原因: ${result.error}`)
    }
  })

}

sign()
