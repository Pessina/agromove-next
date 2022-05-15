import React from "react";
import { Container } from "semantic-ui-react";

import EmailForm from "../components/EmailForm";
import { styleCenter } from "../utils/utils";

const MainSection = ({ title, subtitle }) => {
  return (
    <div className="MainSection" style={{ ...styleCenter }}>
      <Container text centered textAlign="center">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <EmailForm />
      </Container>
    </div>
  );
};

export default MainSection;
