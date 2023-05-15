import React from "react";

import Footer from "../components/Footer";
import GridCards from "../components/GridCards";
import computer from "../public/images/computer.svg";
import ebook from "../public/images/ebook.svg";
import information from "../public/images/information.svg";
import lecture from "../public/images/seminar.svg";
import farm from "../public/images/turbine.svg";
import course from "../public/images/video-lecture.svg";

const cardsFeatures = [
  {
    icon: computer,
    title: "Plataformas Inteligentes Agromove",
    text: "Ferramentas para análise do mercado de commodites, auxiliando o produtor a comprar e vender sua produção no melhor momento.",
    cta: "Quero conhecer",
    link: "https://materiais.agromove.com.br/pecuaria-de-decisao",
  },
  {
    icon: ebook,
    title: "Mentoria",
    text: "Aprenda a proteger sua margem de lucro, criar previsibilidade e ter a segurança de que está fazendo o melhor negócio para sua fazenda. ",
    cta: "Quero saber mais",
    link: "https://materiais.agromove.com.br/mentoria-mercado-futuro",
  },
  {
    icon: information,
    title: "Consultoria",
    text: "Consultoria em análise de mercado para pequenos e grandes produtores agropecuários, auxiliando a comprar e vender os insumos e produção no melhor momento.",
    cta: "Quero saber mais",
    link: "https://materiais.agromove.com.br/consultoria",
  },
  {
    icon: course,
    title: "Cursos e Simuladores",
    text: "Conheça nossos cursos para gestores do agronegócio e planilhas para auxiliar na tomada de decisão baseada em dados.",
    cta: "Quero saber mais",
    link: "https://blog.agromove.com.br/cursos",
  },
  {
    icon: lecture,
    title: "Palestras",
    text: "Conheça nosso palestrante Alberto Pessina, gestor do agronegócio com mais de 25 anos de experiência.",
    cta: "Quero conhecer o Alberto",
    link: "https://materiais.agromove.com.br/palestras",
  },
  {
    icon: farm,
    title: "In Company",
    text: "Treinamento para equipe de técnicos em empresas do agronegócio, para saberem responder melhor a volatilidade do mercado.",
    cta: "Quero mais informações",
    link: "https://materiais.agromove.com.br/in-company",
  },
];

const ProdutosPage = () => {
  return (
    <>
      <GridCards columns={3} cards={cardsFeatures} />
      <Footer />
      <div style={{ padding: "6px 0px", textAlign: "center" }}>
        <div>
          Icons made by{" "}
          <a href="https://www.freepik.com/" title="Freepik">
            Freepik
          </a>{" "}
          from
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
            CC 3.0 BY
          </a>
        </div>
      </div>
    </>
  );
};

export default ProdutosPage;
