const Dev = require('../models/Dev')
const axios = require('axios')
const parseStringAsArray =  require('../utils/parseStringAsArray')

module.exports = {
    async index (request , response){
        const {techs, latitude, longitude } = request.query
        const techsArray = parseStringAsArray(techs)
        
        const devs = await Dev.find({
            techs:{
                $in: techsArray
            },
            location:{
                $near:{
                    $geometry:{
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000
                }
            }
        })

        return response.json( {devs})
    }
}