import React from "react";
import { Container } from "semantic-ui-react";

import EmailForm from "./EmailForm";

type ContactProps = {
  i18n: {
    title: string;
    subtitle: string;
    emailForm: any; // Replace 'any' with the actual type of the 'i18n.emailForm' object
  };
};

const Contact: React.FC<ContactProps> = ({ i18n }) => {
  return (
    <div className="flex items-center justify-center">
      <Container text centered textAlign="center">
        <h2>{i18n.title}</h2>
        <p>{i18n.subtitle}</p>
        <EmailForm i18n={i18n.emailForm} />
      </Container>
    </div>
  );
};

export default Contact;
