import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";

import React, { useEffect } from "react";
import TagManager from "react-gtm-module";
import {
  Button,
  Icon,
  Loader,
  Menu,
  Modal,
  Segment,
  Sidebar,
} from "semantic-ui-react";

import Header from "../components/Header";
import { burgerMenu } from "../utils/utils";
const Layout = ({ Component, pageProps }) => {
  useEffect(() => {
    const configInputs = () => {
      const elements = document.getElementsByTagName("INPUT");
      for (let i = 0; i < elements.length; i++) {
        elements[i].oninvalid = function (e) {
          e.target.setCustomValidity("");
          if (!e.target.validity.valid) {
            e.target.setCustomValidity("Por favor preencha este campo");
          }
        };
        elements[i].oninput = function (e) {
          e.target.setCustomValidity("");
        };
      }
    };

    configInputs();
  }, []);

  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-MH3NVGB" });
  }, []);

  return (
    <div>
      <Header />
      <div style={{ marginTop: "69px" }}>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            id="sidebar"
            as={Menu}
            incon="labeled"
            animation="overlay"
            inverted
            vertical
            width="wide"
            borderless
          >
            <Menu.Item position="right">
              <Icon name="times" onClick={() => burgerMenu()} />
            </Menu.Item>
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
            <Menu.Item
              as="a"
              href="https://agromove.sharepoint.com/sites/AgromovePremium"
            >
              <p>Acessar sua Conta</p>
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher id="sidebar-pusher">
            <Component {...pageProps} />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
      <Modal trigger={<Button id="loading" style={{ display: "none" }} />}>
        <Loader active>Carregando</Loader>
      </Modal>
    </div>
  );
};

export default Layout;
