const { Router } = require('express')

const routes = Router()

routes.get('/', (request, response) => {
    return response.json({message: 'hello'})
}) 

routes.post('/devs', (request, response) => {
    console.log(request.body)
    return response.json({message: 'hello'})
}) 
module.exports = routes
