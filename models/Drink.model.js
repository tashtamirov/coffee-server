const mongoose = require('mongoose')

const drinkSchema = mongoose.Schema({
    name: String,
    price: Number,
    inStock: Boolean,
    hasCaffein: Boolean,
    volume: Number,
    drinkDescription: String
})

const Drink = mongoose.model('Drink', drinkSchema)

module.exports = Drink