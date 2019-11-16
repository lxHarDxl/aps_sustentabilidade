import React, { Component } from "react";
import { Form, Col, Button, Card } from "react-bootstrap";

export class Papel extends Component {
  state = {
    tipoUnidade: "",
    txtPapel: "",
    consumo: ""
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  calcularPapel(e) {
    e.preventDefault();
    fetch(
      `http://localhost:3000/calculo/papel/${this.state.tipoUnidade}?${this.state.tipoUnidade}=${this.state.txtPapel}`,
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
    return (
      <div>
        <React.Fragment>
          <Card style={{ width: "50%", margin: "32px auto" }}>
            <Card.Body>
            <p>Cálculo de reciclagem de papel:</p>

              <Form onSubmit={event => this.calcularPapel(event)}>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Tipo de unidade</Form.Label>
                    <Col sm={10}>
                      <Form.Check
                        type="radio"
                        label="Grama"
                        name="tipoUnidade"
                        id="tipoUnidade"
                        onChange={this.handleChange("tipoUnidade")}
                        value="grama"
                      />
                      <Form.Check
                        type="radio"
                        label="unidade"
                        name="tipoUnidade"
                        id="tipoUnidade"
                        onChange={this.handleChange("tipoUnidade")}
                        value="unidade"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridkmporlitro">
                    <Form.Label>Insira a quantidade do papel a ser reciclado</Form.Label>
                    <Form.Control
                      type="text"
                      controlId="papel"
                      placeholder={this.state.tipoUnidade}
                      onChange={this.handleChange("txtPapel")}
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
            <Card style={{ width: "50%", margin: "32px auto" }}>
              <p> {this.state.consumo.message} </p>
            </Card>
          )}
        </React.Fragment>
      </div>
    );
  }
}

export default Papel;
