import React, { Component } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Grid, Image, Container } from "semantic-ui-react";

import MainSection from "../components/MainSection";
import Hero from "../components/Hero";
import GridCards from "../components/GridCards";
import Review from "../components/Review";
import Video from "../components/Video";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import probabilidadeQuedaBoi from "../public/probabilidade_queda_boi.jpg";
import tabelaProbabilidadeQueda from "../public/tabela_probabilidade_queda.jpg";
import avatarAlberto from "../public/avatar_alberto.jpg";

import computer from "../public/computer.svg";
import connect from "../public/connect.svg";
import information from "../public/information.svg";

import avatarFelipeMoura from "../public/avatar_felipe_moura.jpg";
import avatarTiago from "../public/tiago-avatar.jpg";
import avatarEdison from "../public/edison-avatar.jpg";

import logoFapesp from "../public/logo_fapesp.jpg";
import logoAgTechValley from "../public/logo_agtech_valley.jpg";
import logoEsalqtec from "../public/logo_esalqtec.jpeg";

import logoAgromais from "../public/logo-agromais.jpg";
import logoCompreRural from "../public/logo-comprerural.png";
import logoFieldView from "../public/logo-fieldview.png";
import logoIRancho from "../public/logo-irancho.jpg";
import logoOrganic from "../public/logo-organic.png";
import logoTelesintese from "../public/logo-telesintese.png";
import logoVFL from "../public/logo-vfl.png";
import logoDna from "../public/logo-dna.jpg";

const logosMidia = [
  logoAgromais,
  logoCompreRural,
  logoFieldView,
  logoIRancho,
  logoOrganic,
  logoTelesintese,
  logoVFL,
];

const logos = [
  {
    logo: logoFapesp,
    text: "Processo 2018/22442-9",
  },
  {
    logo: logoAgTechValley,
    text: "",
  },
  {
    logo: logoEsalqtec,
    text: "",
  },
  {
    logo: logoDna,
    text: "",
  },
];

const cardsFeatures = [
  {
    icon: computer,
    title: "Gráficos",
    text: "Não tem forma melhor de visualizar dados do que com gráficos. E não é diferente na Agromove, aqui você terá acesso à diferentes gráficos das commodities atualizados com a tendência de queda.",
  },
  {
    icon: connect,
    title: "Chat",
    text: "Esqueça a dor de cabeça de ligar para o suporte e ficar horas ao telefone. Ou trocar emails com consultores que demoram horas ou dias para responder, aqui na Agromove trabalhamos com um Chat Real Time para ajudar em todos os seus problemas o mais rápido possível.",
  },
  {
    icon: information,
    title: "Informativos e Vídeos",
    text: "Quando se trata de informações mais detalhadas, nós usamos outros canais para melhorar a nossa comunicação. Você receberá semanalmente acesso aos nossos informativos e vídeos feitos por nosso fundador, comentando sobre os principais impactos da política e econômica na produção agrícola e pecuária. Se você preferir, pode receber tudo direto no seu email.",
  },
];

const settings = {
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 1500,
  slidesToShow: 3,
  // slidesToScroll: 3,
  centerMode: true,
};

export default class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <MainSection
          title="Encontre o melhor momento para comprar e vender a produção e insumos de sua fazenda"
          subtitle="Converse com um de nossos consultores para conhecer a ferramenta, que irá ajudar você a maximizar os lucros da sua fazenda"
        />
        <Hero
          imagePath={probabilidadeQuedaBoi}
          title="Mais do que simples cotações"
          phrase="Como você sabe, hoje em dia os sites dão várias informações sobre preço das sacas, arroba, dólar, etc. Mas é tarefa do produtor analisar e saber o melhor momento para comprar e vender. Vemos que muitas vezes isso é uma dor de cabeça e você perde o foco na gestão da sua produção. Por isto criamos a Agromove, uma ferramenta que analisa o mercado para você, enquanto você faz o seu melhor cuidando da produção."
          textPosition="left"
        />
        <Hero
          imagePath={tabelaProbabilidadeQueda}
          title="Nem tudo é software"
          phrase="É claro que nem tudo conseguimos fazer com software, por isso temos uma equipe de consultores que analisa semanalmente o mercado, política e economia e seus impactos na produção agrícola e pecuária. Ajudando você a ter uma visão melhor do mercado no futuro, trabalhando com dados e certezas."
          textPosition="right"
        />
        <Hero
          imagePath={avatarAlberto}
          title="Nada seria possível sem um expert"
          phrase="Alberto Pessina, Engenheiro Agrônomo formado pela Esalq-USP, com MBA pela Fundação Dom Cabral e mais de 20 anos atuando no setor. É o fundador da Agromove e desenvolvedor da ferramenta que vai ajudar você a saber o melhor momento para comprar e vender a produção e insumos de sua fazenda."
          textPosition="left"
        />
        <Review
          person={{
            image: avatarFelipeMoura,
            name: "Felipe Moura",
            job: "Pecuarista",
          }}
          text='"Essa ferramenta vem auxiliando a gente a tomar decisões pautadas em dados reais.  Em apenas 4 dias que esperamos para realizar a venda, baseado nas analises do Pecuária de Decisão, tivemos um ganho financeiro acima do esperado."'
        />
        <Review
          reversed
          person={{
            image: avatarEdison,
            name: "Edison Castelano",
            job: "Diretor Boitel VFL",
          }}
          text="“Com a vinda da Plataforma Agromove, aumentamos nosso Lucro e maximizamos os resultados do Confinamento. E na agricultura sabemos a hora de vender a soja e o milho.”"
        />
        <Review
          person={{
            image: avatarTiago,
            name: "Thiago Pedroso Palma",
            job: "Eng. Agrônomo, Gerente de Produção do Grupo APB",
          }}
          text="“O Pecuária de Decisão nos permite tomar decisões e alcançarmos médias mais interessantes que as do mercado. O curso de introdução ao Pecuária de Decisão é muito bom! Com frequência pedimos para novos colaboradores vê-lo e assim compreender melhor o mercado pecuário.”"
        />
        <Video id="hd2Yg4NU1Aw" />
        <Container textAlign="center">
          <h2>Agromove na mídia</h2>
          <Slider {...settings}>
            {logosMidia.map((element) => (
              <div key={element}>
                <Image
                  alt={"midia images"}
                  style={{ margin: "0px auto" }}
                  verticalAlign="center"
                  centered
                  src={element}
                  size="small"
                />
              </div>
            ))}
          </Slider>
          <a href="https://blog.agromove.com.br/agromove-na-midia/">
            Veja as notícias
          </a>
        </Container>
        <GridCards columns={3} cards={cardsFeatures} />
        <Contact />
        <Grid container stackable centered>
          <h2>Apoio</h2>
          <Grid.Row columns={4}>
            {logos.map((logo) => (
              <Grid.Column key={logo} verticalAlign="middle">
                <Image
                  src={logo.logo}
                  style={{ padding: "30px" }}
                  alt={"logo"}
                />
                <p>{logo.text}</p>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
        <Footer />
        <div style={{ padding: "6px 0px", textAlign: "center" }}>
          <div>
            Icons made by{" "}
            <a href="https://www.freepik.com/" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>{" "}
            is licensed by
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              title="Creative Commons BY 3.0"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              CC 3.0 BY
            </a>
          </div>
        </div>
      </Layout>
    );
  }
}
