import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";

import Head from "next/head";
import React, { Component } from "react";
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
export default class Layout extends Component {
  componentDidMount() {
    this.configInputs();
  }

  configInputs() {
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
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <Head>
          <title>Agromove - Maximize os lucros da sua fazenda</title>
          <meta
            name="description"
            content=" Quer aprender a negociar commodities agrícolas (preço da arroba do
            boi, preço do milho, preço da soja)? Fazer os melhores cursos de
            negociação, finanças, planejamento, mercado futuro e gestão de
            commodities? Ferramentas de análise? Nossa missão é capacitar nossos
            clientes a tomarem decisões lucrativas em mercados turbulentos."
          />
          <html lang="pt" />
        </Head>
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
  }
}
