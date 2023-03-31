# Routes

> 有点想做一个解析服务，对接多种后端。。。但是感觉在重复造轮子

## 流程图

### 数据流

``` mermaid
flowchart TD
start(webhook msg) --> mid1(parse msg, get receiver, title and message)
mid1 --> mid2(send msg to various backend)
mid2 --> end1(feishu)
mid2 --> end2(WeCon)
mid2 --> end3(some other service)
```

### 再加上数据库呢

``` mermaid
flowchart TD
start(webhook msg) --> mid1(parse msg, get receiver, title and message)
database[(Database)] --> mid1
mid1 --> mid2(send msg to various backend)
mid2 --> end1(feishu)
mid2 --> end2(WeCon)
mid2 --> end3(some other service)
```

数据库主要用于存储 reveivers -> backends 的maps，可能会涉及到分组、交叉分组等

1. 一个后端可以属于多个分组
2. 一个分组可以属于另一个分组
