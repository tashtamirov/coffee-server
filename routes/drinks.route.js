const {Router} = require('express')
const {drinksController} = require('../controllers/drinks.controller')

const router = Router()

router.get('/drinks', drinksController.getAll)
router.get('/drinks/in-stock', drinksController.inStockDrinks)
router.get('/drinks/:id', drinksController.drinkInfo)
router.post('/drinks', drinksController.addDrink)
router.delete('/drinks/:id', drinksController.deleteDrinkById)
router.patch('/drinks/:id', drinksController.editDrinkById)

module.exports = router