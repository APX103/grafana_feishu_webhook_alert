const {RMap} = require('../db/model/index')

async function addOneMap(receiver, webhook) {
    return RMap.create({
        receiver: receiver,
        webhook: webhook
    }).then(user => {
        console.log(`Created user with id ${user.id}`);
    }).catch(err => {
        console.error(err);
    })
}

async function deleteOneMap(receiver, webhook) {
    return RMap.destroy({
        where: {
            receiver: receiver,
            webhook: webhook
        }
    }).then(numDeleted => {
        console.log(`Deleted ${numDeleted} map(s)`);
    }).catch(err => {
        console.error(err);
    })
}

async function updateOneMap(receiver, webhook, newWebhook) {
    return RMap.update({
        'webhook': newWebhook
    }, {
        where: {
            receiver: receiver,
            webhook: webhook
        }
    }).then(numUpdated => {
        console.log(`Updated ${numUpdated} map(s)`);
    }).catch(err => {
        console.error(err);
    })
}

async function listMaps() {
    const result = RMap.findAll().then(numUpdated => {
        console.log(`Updated ${numUpdated} map(s)`);
    }).catch(err => {
        console.error(err);
    });
    console.log(result)
    return result
}

module.exports = {
    addOneMap,
    deleteOneMap,
    updateOneMap,
    listMaps
}
