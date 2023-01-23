const Drink = require('../models/Drink.model')

module.exports.drinksController = {
    getAll: (req, res) => {
        Drink.find({}, ["name", "price"])
        .then((drink) => {
            res.json(drink)
        })
        .catch((err) => {
            res.json({error: err.message})
        }) //все напитки
    },

    inStockDrinks: (req, res) => {
        Drink.find({inStock: true})
        .then((drink) => {
            res.json(drink)
        })
        .catch((err) => {
            res.json({error: err})
        }) //напитки в наличии

    },

    drinkInfo: (req, res) => {
        Drink.findById(req.params.id)
        .then((drink) => {
            res.json(drink)
        })
        .catch((err) => {
            res.json(err)
        }) // инфа об одном напитке 
    },

    addDrink: (req, res) => {
        Drink.create({
            name: req.body.name,
            price: req.body.price,
            inStock: true,
            isCaffein: req.body.isCaffein,
            volume: req.body.volume,
            drinkDescription: req.body.drinkDescription
        }).then((newDrink) => {
            res.json(newDrink)
        }).catch((err) => {
            res.json({error: err.message})
        }) // добавление напитка
    },

    deleteDrinkById: (req, res) => {
        Drink.findByIdAndDelete(req.params.id)
        .then(() => {
            res.json('Напиток удален')
        }).catch((err) => {
          res.json({error: err})
        }) // удаление напитка по id
    },

    editDrinkById: (req, res) => {
        Drink.findByIdAndUpdate(re.params.id, {
            name: req.body.name,
            price: req.body.price,
            inStock: true,
            isCaffein: req.body.isCaffein,
            volume: req.body.volume,
            drinkDescription: req.body.drinkDescription
        })
        .then((editDrink) => {
            res.json(editDrink)
        }).catch((err) =>{
            res.json({error: err.message})
        }) //изменение напитка
    }
}