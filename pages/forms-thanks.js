import React from "react";
import { Container, Button } from "semantic-ui-react";
import Link from "next/link";

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
        <Link href="/">
          <Button style={{ backgroundColor: "#2E6B34", color: "#FFFFFF" }}>
            Inicio
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default FormsPage;
