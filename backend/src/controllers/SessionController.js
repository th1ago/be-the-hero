const connection = require('../database/connection');

module.exports = {
    async create(resquest, response) {
        const { id } = request.body;
                
        const ong = await connection('incedents')
            .where('id', id)
            .select('name')
            .first();
        
        if (!ong) {
            return response.status(401).json({ error: 'NOT Ong found'});
        }
        return response.json(ong);
    }
};