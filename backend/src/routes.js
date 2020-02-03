const { Router } = require('express')
const axios = require('axios')
const Dev =  require('./models/Dev')
const DevController = require('./controllers/DevController')
const SeachDevsController = require('./controllers/SeachDevsController')
const routes = Router()

routes.get('/', (request, response) => {
    return response.json({message: 'hello'})
}) 
routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)
routes.get('/seach',SeachDevsController.index)

module.exports = routes
