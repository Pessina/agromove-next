import Link from "next/link";
import React from "react";
import { Button, Container } from "semantic-ui-react";

const FormsPage = () => {
  return (
    <>
      <Container
        text
        textAlign="center"
        verticalAlign="middle"
        style={{ padding: "120px 0px" }}
      >
        <h2>Obrigado por entrar em contato com a Agromove</h2>
        <p>Entraremos em contato o mais breve possível</p>
        <Button className="button--green">
          <Link href="/">Inicio</Link>
        </Button>
      </Container>
    </>
  );
};

export default FormsPage;
