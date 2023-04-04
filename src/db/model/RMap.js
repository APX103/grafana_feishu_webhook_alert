const seq = require("../seq")
const { STRING } = require('../types')

const RMap = seq.define("rMap", {
    receiver: {
        type: STRING,
        allowNull: false,
        comment: '接受者'
    },
    webhook: {
        type: STRING,
        allowNull: false,
        comment: 'webhook'
    },
})

module.exports = RMap
