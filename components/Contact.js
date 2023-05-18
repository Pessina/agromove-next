import React from "react";
import { Container } from "semantic-ui-react";

import EmailForm from "../components/EmailForm";
import { styleCenter } from "../utils/utils";

const Contact = ({ i18n }) => {
  return (
    <div className="Contact" style={{ ...styleCenter }}>
      <Container text centered textAlign="center">
        <h2>{i18n.title}</h2>
        <p>{i18n.subtitle}</p>
        <EmailForm i18n={i18n.emailForm} />
      </Container>
    </div>
  );
};

export default Contact;
