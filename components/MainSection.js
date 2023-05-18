import React from "react";
import { Container } from "semantic-ui-react";

import EmailForm from "../components/EmailForm";
import { styleCenter } from "../utils/utils";

const MainSection = ({ i18n }) => {
  return (
    <div className="MainSection" style={{ ...styleCenter }}>
      <Container text centered textAlign="center">
        <h1>{i18n.title}</h1>
        <p>{i18n.subtitle}</p>
        <EmailForm i18n={i18n.emailForm} />
      </Container>
    </div>
  );
};

export default MainSection;
