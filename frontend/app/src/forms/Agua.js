import React, { Component } from "react";
import { Form, Col, Button, Card } from "react-bootstrap";

export class Agua extends Component {
  state = {
    txtNumHabitantes: "",
    consumo: "",
    consumoLitros: "",
    txtConsumoBanho: ""
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  calcularAgua(e) {
    e.preventDefault();
    fetch(
      `http://localhost:3000/calculo/agua/caixa?pessoas=${this.state.txtNumHabitantes}`,
      {
        method: "POST"
      }
    )
      .then(response => {
        if (!response.ok) {
          this.setState({
            error: true
          });
        } else {
          return response.json();
        }
      })
      .then(json => {
        this.setState({
          consumo: json
        });
      });
  }

  calcularAguaBanho(e) {
    e.preventDefault();
    fetch(
      `http://localhost:3000/calculo/agua/banho?minutos=${this.state.txtConsumoBanho}`,
      {
        method: "POST"
      }
    )
      .then(response => {
        if (!response.ok) {
          this.setState({
            error: true
          });
        } else {
          return response.json();
        }
      })
      .then(json => {
        console.log(json);
        this.setState({
          consumoLitros: json
        });
      });
  }

  render() {
    return (
      <div>
        <div className="container-agua">
          <div className="imposto-agua">
            <Card>
              <Card.Body>
                <p>Cálculo de tamanho da caixa d'água por número de habitantes:</p>

                <Form onSubmit={event => this.calcularAgua(event)}>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridtxtNumHabitantes">
                      <Form.Label>Insira o número de habitantes</Form.Label>
                      <Form.Control
                        type="text"
                        controlId="agua"
                        placeholder=""
                        onChange={this.handleChange("txtNumHabitantes")}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Button variant="primary" type="submit">
                    Calcular
                  </Button>
                </Form>
              </Card.Body>
            </Card>
            {this.state.consumo.message && (
              <Card>
                <p> {this.state.consumo.message} </p>
              </Card>
            )}
          </div>
          <div className="banho-agua">
            <div>
              <Card>
                <Card.Body>
                  <p>
                    Cálculo de consumo de água em litros pela duração do banho:
                  </p>

                  <Form onSubmit={event => this.calcularAguaBanho(event)}>
                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridtxtConsumoBanho">
                        <Form.Label>
                          Insira o tempo de duração do banho em minutos:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          controlId="minutos"
                          placeholder=""
                          onChange={this.handleChange("txtConsumoBanho")}
                        />
                      </Form.Group>
                    </Form.Row>

                    <Button variant="primary" type="submit">
                      Calcular
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
              {this.state.consumoLitros.message && (
                <Card>
                  <p> {this.state.consumoLitros.message} </p>
                  <p>
                    Para a ONU, 110 litros são o suficiente para “atender às
                    necessidades de consumo e higiene durante todo o dia.”
                  </p>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Agua;
