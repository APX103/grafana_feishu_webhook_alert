const router = require('koa-router')()

// headers
// =============================
// {
//  host: 'xxxxxxxxxxxxxxx',
//  'user-agent': 'Grafana',
//  'content-length': '1866',
//  'content-type': 'application/json',
//  'accept-encoding': 'gzip'
//}

// body
// =============================
// {
//   receiver: 'feishu report',
//   status: 'resolved',
//   alerts: [
//     {
//       status: 'resolved',
//       labels: [Object],
//       annotations: [Object],
//       startsAt: '2022-11-24T12:05:00Z',
//       endsAt: '2022-11-25T03:23:51.712766331Z',
//       generatorURL: 'http://ci.pjlab.org.cn:3000/alerting/grafana/umGR0yO4z/view',
//       fingerprint: '38319155862c0c82',
//       silenceURL: 'http://ci.pjlab.org.cn:3000/alerting/silence/new?alertmanager=grafana&matcher=alertname%3Dbakamaka-down&matcher=foo%3Dbar&matcher=grafana_folder%3DOpenXLab',
//       dashboardURL: '',
//       panelURL: '',
//       valueString: "[ var='B0' metric='Value' labels={__name__=probe_success, instance=http://www.bakamaka.io, job=portal_health_check} value=1 ]"
//     }
//   ],
//   groupLabels: { alertname: 'bakamaka-down', grafana_folder: 'OpenXLab' },
//   commonLabels: {
//     alertname: 'bakamaka-down',
//     foo: 'bar',
//     grafana_folder: 'OpenXLab'
//   },
//   commonAnnotations: { description: 'bakamaka 网站挂了！', summary: 'bakamaka is down' },
//   externalURL: 'http://ci.pjlab.org.cn:3000/',
//   version: '1',
//   groupKey: '{}/{foo="bar"}:{alertname="bakamaka-down", grafana_folder="OpenXLab"}',
//   truncatedAlerts: 0,
//   orgId: 1,
//   title: '[RESOLVED] bakamaka-down OpenXLab (bar)',
//   state: 'ok',
//   message: '**Resolved**\n' +
//     '\n' +
//     "Value: [ var='B0' metric='Value' labels={__name__=probe_success, instance=http://www.bakamaka.io, job=portal_health_check} value=1 ]\n" +
//     'Labels:\n' +
//     ' - alertname = bakamaka-down\n' +
//     ' - foo = bar\n' +
//     ' - grafana_folder = OpenXLab\n' +
//     'Annotations:\n' +
//     ' - description = bakamaka 网站挂了！\n' +
//     ' - summary = bakamaka is down\n' +
//     'Source: http://ci.pjlab.org.cn:3000/alerting/grafana/umGR0yO4z/view\n' +
//     'Silence: http://ci.pjlab.org.cn:3000/alerting/silence/new?alertmanager=grafana&matcher=alertname%3Dbakamaka-down&matcher=foo%3Dbar&matcher=grafana_folder%3DOpenXLab\n'
// }

// plain 
router.post('/', async (ctx, next) => {

  // 可以通过校验receiver来实现是否执行
  //if(typeof(ctx.request.body.receiver) !== 'undefined' && ctx.request.body.receiver === 'feishu report'){

  const body = ctx.request.body
  const res = await axios.post('https://open.feishu.cn/open-apis/bot/v2/hook/83b952f3-8d23-4322-adcf-a0e671fbceef', {
    "msg_type": "interactive",
    "card": {
        "config": {
            "wide_screen_mode": True,
            "enable_forward": True
        },
        "elements": [
            {
                "tag": "div",
                "text": {
                    "content": String(body.message),
                    "tag": "lark_md"
                }
            }
        ],
        "header": {
            "title": {
                "content": String(body.title),
                "tag": "plain_text" // can try lark_md
            }
        }
       }
      }
    )
  // }
})


module.exports = router
