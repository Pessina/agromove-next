import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Container, Form, Grid } from "semantic-ui-react";

import { radioJobs } from "../utils/constants";

const FormsPage = () => {
  const router = useRouter();
  const {
    query: { keyword },
  } = router;

  useEffect(() => {
    onChangeForm({ name: "email", value: keyword });
  }, [keyword]);

  const [formsValues, setFormValues] = useState({
    name: "",
    email: keyword,
    phone: "",
    area: "",
  });

  const onChangeForm = ({ name, value }) => {
    if (name === "phone") {
      value = parsePhone(value);
    }
    setFormValues((prevState) => ({ ...prevState, [name]: [value] }));
  };

  const formElements = [
    <Form.Input
      key="3"
      label="Qual o seu nome?"
      style={{ width: "100%" }}
      name="name"
      placeholder="Nome"
      required
      value={formsValues.name}
      onChange={({ target }) => onChangeForm(target)}
    />,
    <Form.Input
      key="4"
      label="Qual o seu email?"
      style={{ width: "100%" }}
      name="email"
      placeholder="Email"
      required
      value={formsValues.email}
      onChange={({ target }) => onChangeForm(target)}
    />,
    <Form.Input
      key="5"
      label="Qual o seu celular?"
      style={{ width: "100%" }}
      name="phone"
      id="phone"
      placeholder="Celular"
      required
      value={formsValues.phone}
      onChange={({ target }) => onChangeForm(target)}
    />,
    <Form.Select
      key="6"
      options={radioJobs}
      fluid
      label="Qual a sua área de atuação?"
      name="area"
      placeholder="Área"
      required
      onChange={(e, target) => onChangeForm(target)}
    />,
  ];

  const parsePhone = (phone) => {
    let numbers = phone.match(/\d+/g) ? phone.match(/\d+/g) : [];
    numbers = numbers.join("");

    let ret = "";
    if (numbers.length <= 2) {
      ret = numbers.slice(0, 2);
    } else if (numbers.length > 2 && numbers.length <= 7) {
      ret = "(" + numbers.slice(0, 2) + ") " + numbers.slice(2, 7);
    } else if (numbers.length > 7 && numbers.length <= 10) {
      ret =
        "(" +
        numbers.slice(0, 2) +
        ") " +
        numbers.slice(2, 6) +
        "-" +
        numbers.slice(6, 10);
    } else {
      ret =
        "(" +
        numbers.slice(0, 2) +
        ") " +
        numbers.slice(2, 7) +
        "-" +
        numbers.slice(7, 11);
    }

    return ret;
  };

  const onSubmit = () => {
    emailjs.send(
      "service_o4yhuhe",
      "template_bt2mm3i",
      formsValues,
      "xbaZfwiULKePuD2cD"
    );
    router.push("/forms-thanks");
  };

  return (
    <>
      <Container text className="Forms" onSubmit={onSubmit}>
        <Form style={{ height: "100vh" }}>
          <Grid stackable>
            <Grid.Row columns={1}>
              {formElements.map((element) => (
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
                type="submit"
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
