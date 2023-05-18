import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Button, Container, Grid, Icon, Image, Menu } from "semantic-ui-react";

import logo from "../public/images/logo.png";
import { burgerMenu } from "../utils/utils";

type MenuItems = {
  agromove: string;
  products: string;
  freeProducts: string;
  blog: string;
  webinars: string;
  login: string;
};

type HeaderProps = {
  menuItems: MenuItems;
};

const Header: React.FC<HeaderProps> = ({ menuItems }) => {
  const router = useRouter();

  const onClickHandle = () => {
    router.push("https://agromove.sharepoint.com/sites/AgromovePremium");
  };

  const checkPage = () => {
    return router.pathname.indexOf("forms") === -1;
  };

  return (
    <div>
      <Menu borderless fixed="top">
        <Container>
          <Menu.Item only="computer">
            <Link href="/" passHref>
              <Image src={logo.src} size="small" alt="logo" />
            </Link>
          </Menu.Item>
          <Grid>
            <Grid.Row only="computer">
              <Menu.Item as="a" href="/">
                <p>{menuItems.agromove}</p>
              </Menu.Item>
              <Menu.Item as="a" href="/produtos">
                <p>{menuItems.products}</p>
              </Menu.Item>
              <Menu.Item
                as="a"
                href="https://blog.agromove.com.br/produtos-gratuitos/"
              >
                <p>{menuItems.freeProducts}</p>
              </Menu.Item>
              <Menu.Item as="a" href="https://blog.agromove.com.br">
                <p>{menuItems.blog}</p>
              </Menu.Item>
              <Menu.Item as="a" href="https://blog.agromove.com.br/webinars/">
                <p>{menuItems.webinars}</p>
              </Menu.Item>
            </Grid.Row>
          </Grid>
          <Menu.Item position="right">
            <Grid>
              <Grid.Row only="computer">
                {checkPage() && (
                  <Button
                    className="text-white bg-green-800"
                    onClick={() => onClickHandle()}
                  >
                    {menuItems.login}
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
