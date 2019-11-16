// Controller responsável pela função de apresentação das funcionalidades do sistema
const helpData = require('../factories/helpData');

exports.showHelp = (req, res) => {
    try {
        const data = helpData.data;
        res.status(200).send(data);

    } catch (e) {
        res.status(500).send({message: 'Falha ao carregar mensagem'});
    }
}