import React from "react";
import { Container, Grid, Icon, Image } from "semantic-ui-react";

import logo from "../public/images/logo.png";

type FooterProps = {
  i18n: {
    whatsapp: (number: string) => string;
    email: (email: string) => string;
  };
};

const Footer: React.FC<FooterProps> = ({ i18n }) => {
  return (
    <div className="bg-gray-200 mt-18 py-15 align-middle">
      <Container>
        <Grid stackable textAlign="center">
          <Grid.Row columns={2}>
            <Grid.Column verticalAlign="middle">
              <Image src={logo.src} size="large" alt="logo" />
            </Grid.Column>
            <Grid.Column className="mt-8">
              <p>{i18n.whatsapp("(14) 9 9134-8132")} </p>
              <p>{i18n.email("contato@agromove.com.br")}</p>
              <a href="https://blog.agromove.com.br">
                <p>blog.agromove.com.br</p>
              </a>
              <div className="mt-8">
                <a
                  href="https://www.facebook.com/Agromove/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="facebook" size="big" />
                </a>
                <a
                  href="https://www.linkedin.com/company/agromove/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="linkedin" size="big" />
                </a>
                <a
                  href="https://www.instagram.com/agromove/?hl=pt-br"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="instagram" size="big" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCjLsgqGSx3F51IKU3TD___g"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="youtube" size="big" />
                </a>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
