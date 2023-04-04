const {RMap} = require('../db/model/index')

async function addOneMap(receiver, webhook) {
    return await RMap.create({
        receiver: receiver,
        webhook: webhook
    })
}

async function deleteOneMap(receiver, webhook) {
    return await RMap.destroy({
        where: {
            receiver: receiver,
            webhook: webhook
        }
    })
}

async function updateOneMap(receiver, webhook, newWebhook) {
    return await RMap.update({
        'webhook': newWebhook
    }, {
        where: {
            receiver: receiver,
            webhook: webhook
        }
    })
}

async function listMaps() {
    return await RMap.findAll()
}

module.exports = {
    addOneMap,
    deleteOneMap,
    updateOneMap,
    listMaps
}
