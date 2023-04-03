// const { isProd } = require('../utils/env')

let SQLITE_CONFIG = {
    storage: './map.sqlite'
}

// let REDIS_CONF = {
//     port: 6379,
//     host: '127.0.0.1'
// }
//
// let MYSQL_CONF = {
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     port: '3306',
//     database: 'xxx'
// }

// if (isProd) {
//     REDIS_CONF = {
//         port: 6379,
//         host: '127.0.0.1'
//     }
//
//     MYSQL_CONF = {
//         host: 'localhost',
//         user: 'xxx',
//         password: 'xxx',
//         port: '3306',
//         database: 'xxx'
//     }
// }

module.exports = {
    // REDIS_CONF,
    // MYSQL_CONF,
    SQLITE_CONFIG
}
