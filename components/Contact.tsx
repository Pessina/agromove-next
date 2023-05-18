import React from "react";
import { Container } from "semantic-ui-react";

import EmailForm, { EmailFormI18N } from "./EmailForm";

type ContactProps = {
  i18n: {
    title: string;
    subtitle: string;
    emailForm: EmailFormI18N;
  };
};

const Contact: React.FC<ContactProps> = ({ i18n }) => {
  return (
    <div className="flex items-center justify-center py-10 px-0">
      <Container text centered textAlign="center">
        <h2>{i18n.title}</h2>
        <p>{i18n.subtitle}</p>
        <EmailForm
          i18n={i18n.emailForm}
          className="w-[80%] px-auto py-5 flex items-center flex-col justify-center"
        />
      </Container>
    </div>
  );
};

export default Contact;
