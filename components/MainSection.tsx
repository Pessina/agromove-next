import React from "react";
import { Container } from "semantic-ui-react";

import EmailForm, { EmailFormI18N } from "./EmailForm";

type MainSectionProps = {
  i18n: {
    title: string;
    subtitle: string;
    emailForm: EmailFormI18N;
  };
};

const MainSection: React.FC<MainSectionProps> = ({ i18n }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Container text centered textAlign="center">
        <h1>{i18n.title}</h1>
        <p>{i18n.subtitle}</p>
        <EmailForm i18n={i18n.emailForm} />
      </Container>
    </div>
  );
};

export default MainSection;