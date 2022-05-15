import React, { Component } from "react";
import { Grid, Image, Container, Icon } from "semantic-ui-react";

import { styleCenter } from "../utils/utils";
import logo from "../public/logo.png";

export default class Footer extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#F0F0F0",
          marginTop: "72px",
          verticalAlign: "middle",
          padding: "60px 0px",
        }}
      >
        <Container>
          <Grid stackable textAlign="center">
            <Grid.Row columns={2}>
              <Grid.Column verticalAlign="middle">
                <Image src={logo} size="large" />
              </Grid.Column>
              <Grid.Column style={{ padding: "32px" }}>
                <p>WhatsApp: (14) 9 9134-8132</p>
                <p>email: contato@agromove.com.br</p>
                <a href="https://blog.agromove.com.br">
                  <p>blog.agromove.com.br</p>
                </a>
                <div style={{ marginTop: "32px" }}>
                  <a href="https://www.facebook.com/Agromove/" target="_blank">
                    <Icon name="facebook" size="big" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/agromove/"
                    target="_blank"
                  >
                    <Icon name="linkedin" size="big" />
                  </a>
                  <a
                    href="https://www.instagram.com/agromove/?hl=pt-br"
                    target="_blank"
                  >
                    <Icon name="instagram" size="big" />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCjLsgqGSx3F51IKU3TD___g"
                    target="_blank"
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
  }
}