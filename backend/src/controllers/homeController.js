// Controller responsável pela função de apresentação do sistema
const homeData = require('../factories/homeData');

exports.index = (req, res) => {
    try {
        const data = homeData.data;
        res.status(200).send(data);

    } catch (e) {
        res.status(500).send({message: 'Falha ao carregar mensagem'});
    }
}