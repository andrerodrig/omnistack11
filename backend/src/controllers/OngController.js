const crypto = require('crypto');
connection = require('../database/connection');


module.exports = { 
    
    // Insere nova Ong
    async create (request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        return response.json({ id });
    },
    
    // Lista Ongs
    async list (request, response) {
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    }
};