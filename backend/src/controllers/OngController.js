const crypto = require('crypto')

const connection = require('../database/connections');

module.exports = {
    async create(req, res){
        const {name, email, whatsapp, city, uf,address}  = req.body;
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
            id, 
            name, 
            email, 
            whatsapp, 
            city, 
            uf, 
            address,
        })
        return res.json({id});
    },

    async index(req, res){
        const ongs = await connection('ongs').select('*');
        return res.json(ongs);
    }
}