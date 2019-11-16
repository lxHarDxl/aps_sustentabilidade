const express = require('express');
const router = express.Router();

// Informações de apresentação do sistema
const homePage = require('../controllers/homeController');

// Importa informações do 'help'
const help = require('../controllers/helpController');

router.get('/', homePage.index);
router.get('/help', help.showHelp);

module.exports = router;