import React, { Component } from "react";
import { Form, Col, Button, Card } from "react-bootstrap";

export class Carbono extends Component {
  state = {
    txtKmPorLitro: "",
    txtKM: "",
    tipoCombustivel: "",
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  calcularCarbono(e) {
    e.preventDefault();
    fetch(
      `http://localhost:3000/calculo/emissaocarbono/${this.state.tipoCombustivel}?quilometros=${this.state.txtKM}&quilometrosPorLitro=${this.state.txtKmPorLitro}`,
      {
        method: "POST",
      }
    )
      .then(response => {
        if (!response.ok) {
          this.setState({
            error: true,
          });
        } else {
          return response.json();
        }
      })
      .then(json => {
        console.log(json);
      });
  }

  render() {
    const { txtKmPorLitro, txtKM, handleChange } = this.state;
    return (
      <div>
        <React.Fragment>
          <Card style={{ width: "50%", margin: "32px auto" }}>
            <Card.Body>
              <Form onSubmit={event => this.calcularCarbono(event)}>
                <Form.Row>
                  <Form.Group >
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
                      Insira a quantidade de quilometros por litro
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
                    <Form.Label>Insira a distância a ser percorrida</Form.Label>
                    <Form.Control type="text" placeholder="KM" />
                  </Form.Group>
                </Form.Row>
                <Button variant="primary" type="submit">
                  Calcular
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </React.Fragment>
      </div>
    );
  }
}

export default Carbono;
