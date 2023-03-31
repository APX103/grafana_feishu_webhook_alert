const colors = {
    "alert": "yellow",
    "info": "green",
    "error": "red",
    "fatal": "gray",
    "plain": "blue"
}

function feishuTemp(msg, url, level, title = "QA Monitor Alert") {
    return {
        "msg_type": "interactive",
        "card": {
            "config": {
                "wide_screen_mode": true,
                "enable_forward": true
            },

            "elements": [
                {
                    "tag": "div",
                    "text": {
                        "content": msg,
                        "tag": "lark_md"
                    }
                },
                {
                    "tag": "hr"
                },
                {
                    "tag": "action",
                    "actions": [
                        {
                            "tag": "button",
                            "text": {
                                "tag": "plain_text",
                                "content": "了解详情"
                            },
                            "type": "default",
                            "multi_url": {
                                "url": url,
                                "android_url": "",
                                "ios_url": "",
                                "pc_url": ""
                            }
                        }
                    ]
                }
            ],
            "header": {
                "template": colors[level],
                "title": {
                    "content": title,
                    "tag": "plain_text"
                }
            }
        }
    }
}

module.exports = {feishuTemp}
