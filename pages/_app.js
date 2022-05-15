import "../styles/globals.css";

import React, { Component } from "react";
import Helmet from "react-helmet";
import {
  Loader,
  Modal,
  Button,
  Sidebar,
  Segment,
  Icon,
  Menu,
} from "semantic-ui-react";

import Header from "../components/Header";
import { burgerMenu } from "../utils/utils";

export default class Layout extends Component {
  componentDidMount() {
    this.configInputs();
  }

  configInputs() {
    const elements = document.getElementsByTagName("INPUT");
    console.log(elements);
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
        <Helmet
          title="Agromove - Maximize os lucros da sua fazenda"
          meta={[
            {
              name: "description",
              content:
                "Quer aprender a negociar commodities agrícolas (preço da arroba do boi, preço do milho, preço da soja)? Fazer os melhores cursos de negociação, finanças, planejamento, mercado futuro e gestão de commodities? Ferramentas de análise? Nossa missão é capacitar nossos clientes a tomarem decisões lucrativas em mercados turbulentos.",
            },
            {
              name: "keywords",
              content: "mercado futuro, pecuária, agricultura, agronegócio",
            },
          ]}
        >
          <html lang="pt" />
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
          <script
            type="text/javascript"
            src="https://d335luupugsy2.cloudfront.net/js/integration/stable/rd-js-integration.min.js"
            async
            defer="true"
          />
          <script
            type="text/javascript"
            async
            src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/692c217e-1873-4f7e-a27b-177d3af89c96-loader.js"
          />
        </Helmet>
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
