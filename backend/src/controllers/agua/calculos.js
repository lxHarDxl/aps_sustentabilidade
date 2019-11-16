const consumoAgua = require("../../factories/consumoAguaData");

function calculaCaixa(pessoas) {
  return (tamanho = pessoas * 150 * 2);
}

function calculaConsumo(minutos) {
  return (consumo = minutos * 9);
}

exports.calculoloCaixa = (req, res) => {
  try {
    let pessoas = req.query.pessoas;
    let tamanhoCaixa = calculaCaixa(pessoas);

    res
      .status(200)
      .send({
        message: `Para uma residência com ${pessoas} pessoas, considerando uma reserva de 2 dias em caso de falta de água e o consumo médio de 150 litros por pessoa/dia, o reservatorio deve ter a partir de ${tamanhoCaixa} litros`
      });
  } catch (e) {
    res.status(500).send({ message: "Falha interna.", error: e });
  }
};

exports.calculoAguaBanho = (req, res) => {
  try {
    let minutos = req.query.minutos;
    let valorBanho = calculaConsumo(minutos);

    res.status(200).send({
      message: `Em um banho de ${minutos} minutos são utilizados ${valorBanho} litros de água.`
    });
  } catch (e) {
    res.status(500).send({ message: "Falha interna.", error: e });
  }
};
