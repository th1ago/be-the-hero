// import
const express = require('express');

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/incidentController')

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.post('/incidents');

// exportar a rota
module.exports = routes;