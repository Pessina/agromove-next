import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";

import { appWithTranslation, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
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

const Layout: React.FC<any> = ({ Component, pageProps }) => {
  const { t } = useTranslation("", { keyPrefix: "app" });

  useEffect(() => {
    const configInputs = () => {
      const elements = document.getElementsByTagName("INPUT");
      for (let i = 0; i < elements.length; i++) {
        (elements[i] as HTMLElement).oninvalid = function (e: any) {
          e.target.setCustomValidity("");
          if (!e.target.validity.valid) {
            e.target.setCustomValidity("Por favor preencha este campo");
          }
        };
        (elements[i] as HTMLElement).oninput = function (e: any) {
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
      <Header
        menuItems={{
          agromove: t("header.agromove"),
          products: t("header.products"),
          freeProducts: t("header.freeProducts"),
          blog: t("header.blog"),
          webinars: t("header.webinars"),
          login: t("header.login"),
        }}
      />
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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
    },
  };
}

export default appWithTranslation(Layout);
