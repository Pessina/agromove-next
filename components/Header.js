import React from "react";
import { Menu, Image, Container, Grid, Icon, Button } from "semantic-ui-react";

import logo from "../public/logo.png";
import { burgerMenu } from "../utils/utils";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const onClickHandle = () => {
    router.push("https://agromove.sharepoint.com/sites/AgromovePremium");
  };

  const checkPage = () => {
    return router.pathname.indexOf("forms") == -1;
  };

  const scroll = (className) => {
    document.getElementsByClassName(className)[0].scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Menu borderless fixed="top">
        <Container>
          <Menu.Item only="computer">
            <Link href="/">
              <Image src={logo} size="small" alt="logo" />
            </Link>
          </Menu.Item>
          <Grid>
            <Grid.Row only="computer">
              <Menu.Item as="a" href="/">
                <p>Agromove</p>
              </Menu.Item>
              <Menu.Item as="a" href="/produtos">
                <p>Produtos</p>
              </Menu.Item>
              <Menu.Item
                as="a"
                href="https://blog.agromove.com.br/produtos-gratuitos/"
              >
                <p>Produtos gratuitos</p>
              </Menu.Item>
              <Menu.Item as="a" href="https://blog.agromove.com.br">
                <p>Blog</p>
              </Menu.Item>
              <Menu.Item as="a" href="https://blog.agromove.com.br/webinars/">
                <p>Webinars</p>
              </Menu.Item>
            </Grid.Row>
          </Grid>
          <Menu.Item position="right">
            <Grid>
              <Grid.Row only="computer">
                {checkPage() && (
                  <Button
                    style={{ backgroundColor: "#2E6B34", color: "#FFFFFF" }}
                    onClick={() => onClickHandle()}
                  >
                    Acessar sua Conta
                  </Button>
                )}
              </Grid.Row>
              <Grid.Row only="mobile tablet">
                <Icon name="bars" size="big" onClick={() => burgerMenu()} />
              </Grid.Row>
            </Grid>
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
};

export default Header;
