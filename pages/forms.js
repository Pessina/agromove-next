import React, { Component } from "react";
import { Form, Container, Grid } from "semantic-ui-react";

import { handleClickButtonForms } from "../utils/utils";
import { radioJobs } from "../utils/constants";

const FormsPage = () => {
  formId = "formComplete-PageForms";

  formElements = [
    <Form.Input key="1" id="area" type="hidden" />,
    <Form.Input key="2" id="type" type="hidden" />,
    <Form.Input
      key="3"
      label="Qual o seu nome?"
      style={{ width: "100%" }}
      id="name"
      placeholder="Nome"
      required
    />,
    <Form.Input
      key="4"
      label="Qual o seu email?"
      style={{ width: "100%" }}
      id="email"
      placeholder="Email"
      required
    />,
    <Form.Input
      key="5"
      label="Qual o seu celular?"
      style={{ width: "100%" }}
      id="phone"
      placeholder="Celular"
      required
    />,
    <Form.Select
      key="6"
      options={radioJobs}
      fluid
      label="Qual a sua área de atuação?"
      id="area-copy"
      placeholder="Área"
      onChange={(e, { value }) => {
        document.getElementById("area").value = value;
      }}
      required
    />,
  ];

  const configurePhoneInput = () => {
    const phone = document.getElementById("phone");
    if (phone) {
      phone.addEventListener("input", () => {
        let numbers = phone.value.match(/\d+/g)
          ? phone.value.match(/\d+/g)
          : [];
        numbers = numbers.join("");
        if (numbers.length <= 2) {
          phone.value = numbers.slice(0, 2);
        } else if (numbers.length > 2 && numbers.length <= 7) {
          phone.value = "(" + numbers.slice(0, 2) + ") " + numbers.slice(2, 7);
        } else if (numbers.length > 7 && numbers.length <= 10) {
          phone.value =
            "(" +
            numbers.slice(0, 2) +
            ") " +
            numbers.slice(2, 6) +
            "-" +
            numbers.slice(6, 10);
        } else {
          phone.value =
            "(" +
            numbers.slice(0, 2) +
            ") " +
            numbers.slice(2, 7) +
            "-" +
            numbers.slice(7, 11);
        }
      });
    }
  };

  return (
    <>
      <Container text className="Forms">
        <Form id={this.formId} style={{ height: "100vh" }}>
          <div style={{ height: "0px" }}>
            <Form.Input
              type="hidden"
              id="token_rdstation"
              name="token_rdstation"
              value="515c24c672fad7174004a058136dbbb0"
            />
            <Form.Input
              type="hidden"
              id="identificador"
              name="identificador"
              value="Forms Completo"
            />
          </div>
          <Grid stackable>
            <Grid.Row columns={1}>
              {this.formElements.map((element) => (
                <Grid.Column key={element} style={{ padding: "12px" }}>
                  {element}
                </Grid.Column>
              ))}
            </Grid.Row>
            <Grid.Row centered>
              <Form.Button
                style={{
                  backgroundColor: "#2E6B34",
                  color: "#FFFFFF",
                  width: "250px",
                  margin: "10px auto",
                }}
                onClick={() => {
                  handleClickButtonForms(
                    "Forms-Falar com Consultor",
                    this.formId,
                    ""
                  );
                }}
              >
                Falar com um consultor
              </Form.Button>
            </Grid.Row>
          </Grid>
        </Form>
      </Container>
    </>
  );
};

export default FormsPage;
