import React from "react";
import { Container } from "semantic-ui-react";

import EmailForm from "../components/EmailForm";
import { styleCenter } from "../utils/utils";

const Contact = ({ subtitle }) => {
  return (
    <div className="Contact" style={{ ...styleCenter }}>
      <Container text centered textAlign="center">
        <h2>
          Gostou da Agromove e quer ter a melhor ferramenta de análise de
          mercado para sua fazenda?
        </h2>
        <p>Entre em contato conosco agora e conheça nossos planos.</p>
        <p>{subtitle}</p>
        <EmailForm />
      </Container>
    </div>
  );
};

export default Contact;
