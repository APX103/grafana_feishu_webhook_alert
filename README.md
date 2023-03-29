# grafana_feishu_webhook_alert

> grafana feishu 告警解析

## 原理

原理就是从grafana的alert的webhook拿到信息，解析一下，再用飞书的webhook，post发给飞书群。

## 新增

1. 首先需要设计卡片类型([飞书卡片搭建工具](https://open.feishu.cn/tool/cardbuilder))
2. 将该卡片类型以如下代码template加入到`routes/index.js`

``` js
// {{样式名}}
router.post('/', async (ctx, next) => {
  //这里拿到了json body，由于是js，所以不需要parse
  const body = ctx.request.body
  // body的结构请看 routes/index.js 中的注释，可以找到一些关键的 key，例如 receiver，message 和 title

  // 然后在这里可以处理你的 receiver -> webhook 的映射

  //
  const res = await axios.post('你的webhook，如果是多个群的话就请', 
    // 下面就是你设计的卡片
    {
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
    // ==========================================
    )
})
```

## 使用

### 前提

需要安装 nodejs

### 启动

如果是调试的话

``` sh
npm run dev
```

如果是生产环境的换

``` sh
npm i -g pm2
pm2 start /your/path/to/repo/www/bin
```

## 局限

1. 暂时还没有
2. 每个群需要手工配置,最简单的方式就是直接复制一个方法，改一下route

## TODO

1. 可以做一个config(例如用sqlite来存 `receiver` -> `webhook` 的map，或者是mysql。然后写个前端来做配置)
2. 可以通过新增`route`来扩充样式
3. 新增docker构建

### 如果有开发需求的话可以联系我们。上面的第一个功能还是比较简单的。第二个就麻烦自己设计了

### 真要用的话麻烦大家一起构建一下这个。。。repo
