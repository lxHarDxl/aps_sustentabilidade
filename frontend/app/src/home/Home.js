import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <p
          style={{
            fontSize: 30,
            padding: 60,
            maxWidth: 1200,
            margin: "auto"
          }}
        >
          Este APP foi desenvolvido para a disciplina de DSD afim de criar uma
          WEBAPI com o tema sustentabilidade. Temos no menu o acesso aos
          formulários que realizam cálculos a respeito do consumo de recursos
          naturais, como a água e as árvores. Além do cálculo de emissão de
          gases na atmosfera por veículos movidos a combustíveis fósseis e o
          cálculo de imposto sobre o consumo de água.
        </p>
      </div>
    );
  }
}

export default Home;
