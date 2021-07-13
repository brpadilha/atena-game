const { Router } = require('express')
const QuestionController = require('./controllers/QuestionController')

const routes = Router()

routes.get('/question', QuestionController.index)
routes.post('/question', QuestionController.store)
routes.put('/question/:id', QuestionController.update)

module.exports = routes
