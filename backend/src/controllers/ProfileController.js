const connection = require('../database/connection');

module.exports = {
    async index(resquest, response) {
        const ong_id = request.headers.authorization;
                
        const incedents = await connection('incedents')
            .where('ong_id', ong_id)
            .select('*')
        
        return response.json(ong);
    }
};