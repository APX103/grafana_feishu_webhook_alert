const router = require('koa-router')()
const axios = require('axios')
const {feishuTemp} = require('../model/feishuModel')

router.prefix('/parser')

// plain txt
router.post('/', async (ctx, next) => {
    const body = ctx.request.body
    await axios.post('https://open.feishu.cn/open-apis/bot/v2/hook/83b952f3-8d23-4322-adcf-a0e671fbceef', feishuTemp(body.message, body.alerts[0].generatorURL, "plain")
    )
    ctx.body = {}
})


// plain txt
router.post('/plain', async (ctx, next) => {
    const body = ctx.request.body
    await axios.post('https://open.feishu.cn/open-apis/bot/v2/hook/83b952f3-8d23-4322-adcf-a0e671fbceef', feishuTemp(body.message, body.alerts[0].generatorURL, "plain")
    )
    ctx.body = {}
})


// info txt
router.post('/info', async (ctx, next) => {
    console.log(ctx.request.body)
    const body = ctx.request.body
    await axios.post('https://open.feishu.cn/open-apis/bot/v2/hook/83b952f3-8d23-4322-adcf-a0e671fbceef', feishuTemp(body.message, body.alerts[0].generatorURL, "info"))
    ctx.body = {}
})


// alert txt
router.post('/alert', async (ctx, next) => {
    const body = ctx.request.body
    await axios.post('https://open.feishu.cn/open-apis/bot/v2/hook/83b952f3-8d23-4322-adcf-a0e671fbceef', feishuTemp(body.message, body.alerts[0].generatorURL, "alert"))
    ctx.body = {}
})


// error txt
router.post('/error', async (ctx, next) => {
    const body = ctx.request.body
    await axios.post('https://open.feishu.cn/open-apis/bot/v2/hook/83b952f3-8d23-4322-adcf-a0e671fbceef', feishuTemp(body.message, body.alerts[0].generatorURL, "error")
    )
    ctx.body = {}
})


// fatal txt
router.post('/fatal', async (ctx, next) => {
    const body = ctx.request.body
    await axios.post('https://open.feishu.cn/open-apis/bot/v2/hook/83b952f3-8d23-4322-adcf-a0e671fbceef', feishuTemp(body.message, body.alerts[0].generatorURL, "fatal")
    )
    ctx.body = {}
})


module.exports = router
