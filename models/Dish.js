const {Schema, model} = require('mongoose')

const schema = new Schema({
    name: {type: String, required: true},
    detail: {type: String, required: true}
})

module.exports = model('Dish', schema)