const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())
app.use(require('./routes/drinks.route'))

mongoose.connect('mongodb+srv://tashtamirov:Ncfuasusn9@cluster0.wdgsbkm.mongodb.net/Drinks').then(() => console.log('Успешно соединились с сервером mongoDB')).catch(() => console.log('ошибка при соединении с сервером MongoDB'))

app.listen(3000, () => {
    console.log('Сервер запущен успешно')
})

app.get('/', (req, res) => {
    res.json('hello!')
})


