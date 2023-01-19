const route = require('express').Router()

route.get('/api', (req,res) => {
    res.status(200).json({
        message: 'Home page'
    })
})

const userRoutes = require('./user')
const itemRoutes = require('./item')

const gearRoutes = require('./gear')
const categoryRoutes = require('./category')
const customerRoutes = require('./customer')
const transactionRoutes = require('./transaction')


route.use('/api/users', userRoutes)
route.use('/api/items', itemRoutes)

route.use('/api/gears', gearRoutes)
route.use('/api/categories', categoryRoutes)
route.use('/api/customers', customerRoutes)
route.use('/api/transactions', transactionRoutes)



module.exports = route