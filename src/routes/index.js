const router = require('koa-router')()
const {addOneMap, deleteOneMap, updateOneMap, listMaps} = require('../services/receiverMapService')
const seq = require('../db/seq')

router.get('/', async (ctx, next) => {
    const items = await listMaps()
    await ctx.render('maps', {
        items: items
    })
})

router.post('/add', async (ctx, next) => {
    const receiver = ctx.request.body.receiver
    const webhook = ctx.request.body.webhook
    await addOneMap(receiver, webhook)
    const items = await listMaps()
    await ctx.render('maps', {
        items: items
    })
})

router.post('/update', async (ctx, next) => {
    const receiver = ctx.request.body.receiver
    const webhook = ctx.request.body.webhook
    const newWebhook = ctx.request.body.newWebhook
    await updateOneMap(receiver, webhook, newWebhook)
    const items = await listMaps()
    await ctx.render('maps', {
        items: items
    })
})

router.post('/delete', async (ctx, next) => {
    const receiver = ctx.request.body.receiver
    const webhook = ctx.request.body.webhook
    await deleteOneMap(receiver, webhook)
    const items = await listMaps()
    await ctx.render('maps', {
        items: items
    })
})


module.exports = router
