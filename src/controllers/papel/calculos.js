// Recupera informações para base de cálculo
const dadosPapel = require('../../factories/papelData');

function calcularArvoresUnidade(unidade){
    console.log( unidade / dadosPapel.data.quantidadePapelUnitario);
    return unidade / dadosPapel.data.quantidadePapelUnitario;
}

function calcularArvoresPeso(peso){
    return peso / (dadosPapel.data.pesoPapel * dadosPapel.data.quantidadePapelUnitario);
}

exports.calculoUnidade = (req, res) => {
    try {
        const unidade = req.query.unidade;
        let arvoresPoupadas = calcularArvoresUnidade(unidade);

        res.status(200).send({message: `Com a reciclagem serão poupadas ${arvoresPoupadas} árvores.`});
    } catch (e) {
        res.status(500).send({message: 'Falha interna'});
    }
}

exports.calculoGrama = (req, res) => {
    try {
        const grama = req.query.grama;
        let arvoresPoupadas = calcularArvoresPeso(grama);

        res.status(200).send({message: `Com a reciclagem serão poupadas ${arvoresPoupadas} árvores.`});
    } catch (e) {
        res.status(500).send({message: 'Falha interna'});
    }
}