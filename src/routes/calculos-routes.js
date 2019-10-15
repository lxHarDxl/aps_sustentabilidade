const express = require('express');
const router = express.Router();

/**
 * Rotiamento para cálculos referente ao consumo de papel
 */
const calculosPapel = require('../controllers/papel/calculos');

router.post('/papel/unidade', calculosPapel.calculoUnidade);
router.post('/papel/grama', calculosPapel.calculoGrama);


/**
 * Rotiamento para cálculos de emissão de CO2
 */
const calculosEmissaoCarbono = require('../controllers/emissaocarbono/calculos');

router.post('/emissaocarbono/diesel', calculosEmissaoCarbono.calculoDiesel);
router.post('/emissaocarbono/gasolina', calculosEmissaoCarbono.calculoGasolina);
router.post('/emissaocarbono/etanol', calculosEmissaoCarbono.calculoEtanol);

module.exports = router;