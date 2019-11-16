const emissaoCarbonoData = require('../../factories/emissaoCarbonoData');

function emissaoPorTipo(tipo){
    switch(tipo){
        case 'diesel':
            return emissaoCarbonoData.data.diesel;
        case 'gasolina':
            return emissaoCarbonoData.data.gasolina;
        case 'etanol':
            return emissaoCarbonoData.data.etanol;
        default:
            return 0;
    }
}

function calculaEmissao(kg, km, kgPL){
    return kg * (km / kgPL);
}


exports.calculoDiesel = (req, res) => {
    try {

        let emissaoCarbono = calculaEmissao(
            emissaoPorTipo('diesel'),
            req.query.quilometros,
            req.query.quilometrosPorLitro,
        );

        res.status(200).send({mesasge: `A emissão de carbono é de ${emissaoCarbono} KgCO² em um veículo movido a diesel.`})
    } catch(e) {
        res.status(500).send({message: 'Falha interna.', error: e});
    }
}

exports.calculoGasolina = (req, res) => {
    try {

        let emissaoCarbono = calculaEmissao(
            emissaoPorTipo('gasolina'),
            req.query.quilometros,
            req.query.quilometrosPorLitro,
        );

        res.status(200).send({mesasge: `A emissão de carbono é de ${emissaoCarbono} KgCO² em um veículo movido a gasolina.`})
    } catch(e) {
        res.status(500).send({message: 'Falha interna.', error: e});
    }
}

exports.calculoEtanol = (req, res) => {
    try {

        let emissaoCarbono = calculaEmissao(
            emissaoPorTipo('etanol'),
            req.query.quilometros,
            req.query.quilometrosPorLitro,
        );

        res.status(200).send({mesasge: `A emissão de carbono é de ${emissaoCarbono} KgCO² em um veículo movido a etanol.`})
    } catch(e) {
        res.status(500).send({message: 'Falha interna.', error: e});
    }
}