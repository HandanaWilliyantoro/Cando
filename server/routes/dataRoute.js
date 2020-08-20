const DataController = require('../controllers/dataController')
const todoRoute = require('./todoRoute')
const categoryRoute = require('./categoryRoute')
const authentication = require('../middleware/authentication')
const UserController = require('../controllers/userController')
const authorizationDepartment = require('../middleware/authorizationDepartment')
const userRoute = require('./userRoute')
const TodoController = require('../controllers/todoController')

const dataRoute = require('express').Router()

dataRoute.get('/', DataController.findAllDepartment)
dataRoute.post('/login', UserController.login)
dataRoute.post('/todo', TodoController.createTodo)
dataRoute.get('/:id', authentication, authorizationDepartment, DataController.findAllData)
dataRoute.use('/todo', authentication, todoRoute)
dataRoute.use('/category', authentication, categoryRoute)



dataRoute.use('/user', userRoute)


module.exports = dataRoute