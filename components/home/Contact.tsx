import React from "react";

import Section from "../general/Section";
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
    <Section
      className="max-w-[700px]"
      title={i18n.title}
      subtitle={i18n.subtitle}
    >
      <EmailForm
        i18n={i18n.emailForm}
        className="px-auto py-5 flex items-center flex-col justify-center"
      />
    </Section>
  );
};

export default Contact;
