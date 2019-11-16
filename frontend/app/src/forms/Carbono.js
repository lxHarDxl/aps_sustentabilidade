import React, { Component } from "react";
import { Form, Col, Button, Card } from "react-bootstrap";

export class Carbono extends Component {
  state = {
    txtKmPorLitro: "",
    txtKM: "",
    tipoCombustivel: "",
    consumo: ""
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  calcularCarbono(e) {
    e.preventDefault();
    fetch(
      `http://localhost:3000/calculo/emissaocarbono/${this.state.tipoCombustivel}?quilometros=${this.state.txtKM}&quilometrosPorLitro=${this.state.txtKmPorLitro}`,
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

  render() {
    const { txtKmPorLitro, txtKM, handleChange } = this.state;
    return (
      <div>
        <React.Fragment>
          <Card style={{ width: "50%", margin: "32px auto" }}>
            <Card.Body>
            <p>Cálculo de emissão de carbono na atmosfera por veículos movidos a combustíveis fosséis:</p>
              <Form onSubmit={event => this.calcularCarbono(event)}>
                <Form.Row>
                  <Form.Group>
                    <Form.Label>Tipo de combustivel</Form.Label>
                    <Form.Check
                      type="radio"
                      label="Gasolina"
                      name="tipoCombustivel"
                      id="tipoCombustivel"
                      onChange={this.handleChange("tipoCombustivel")}
                      value="Gasolina"
                    />
                    <Form.Check
                      type="radio"
                      label="Etanol"
                      name="tipoCombustivel"
                      id="tipoCombustivel"
                      onChange={this.handleChange("tipoCombustivel")}
                      value="Etanol"
                    />
                    <Form.Check
                      type="radio"
                      label="Diesel"
                      name="tipoCombustivel"
                      id="tipoCombustivel"
                      onChange={this.handleChange("tipoCombustivel")}
                      value="Diesel"
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridkmporlitro">
                    <Form.Label>
                      Insira a quantidade de quilometros por litro de perfomance do veículo
                    </Form.Label>
                    <Form.Control
                      type="text"
                      controlId="kmporlitro"
                      placeholder="Litros/KM"
                      onChange={this.handleChange("txtKmPorLitro")}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group
                    as={Col}
                    className="userForm"
                    controlId="formGridkmporlitro"
                    onChange={this.handleChange("txtKM")}
                  >
                    <Form.Label>Insira a distância em quilômetros a ser percorrida</Form.Label>
                    <Form.Control type="text" placeholder="KM" />
                  </Form.Group>
                </Form.Row>
                <Button variant="primary" type="submit">
                  Calcular
                </Button>
              </Form>
            </Card.Body>
          </Card>

          {this.state.consumo.mesasge && (
            <Card style={{ width: "50%", margin: "32px auto" }}>
              <p> {this.state.consumo.mesasge} </p>
            </Card>
          )}
        </React.Fragment>
      </div>
    );
  }
}

export default Carbono;
