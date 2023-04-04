const { RMap } = require('../src/db/model/index')

!(async function(){
    const r = await RMap.findAll()
    console.log(r)
})()
