import React, { Component } from "react";

import GridCards from "../components/GridCards";
import Footer from "../components/Footer";

import computer from "../public/computer.svg";
import information from "../public/information.svg";
import lecture from "../public/seminar.svg";
import farm from "../public/turbine.svg";
import course from "../public/video-lecture.svg";
import ebook from "../public/ebook.svg";

const cardsFeatures = [
  {
    icon: computer,
    title: "Plataformas Inteligentes Agromove",
    text: "Ferramentas para análise do mercado de commodites, auxiliando o produtor a comprar e vender sua produção no melhor momento.",
    cta: "Quero conhecer",
    link: "https://blog.agromove.com.br/pecuaria-de-decisao-2",
  },
  {
    icon: ebook,
    title: "E-books",
    text: "Conheça nossos e-books para melhorar a gestão da sua fazenda.",
    cta: "Quero saber mais",
    link: "https://blog.agromove.com.br/e-books",
  },
  {
    icon: information,
    title: "Consultoria",
    text: "Consultoria em análise de mercado para pequenos e grandes produtores agropecuários, auxiliando a comprar e vender os insumos e produção no melhor momento.",
    cta: "Quero saber mais",
    link: "https://blog.agromove.com.br/consultoria",
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
    text: "Conheça nosso palestrante Alberto Pessina, gestor do agronegócio com mais de 20 anos de experiência.",
    cta: "Quero conhecer o Alberto",
    link: "https://blog.agromove.com.br/palestras",
  },
  {
    icon: farm,
    title: "In Company",
    text: "Treinamento para equipe de técnicos em empresas do agronegócio, para saberem responder melhor a volatilidade do mercado.",
    cta: "Quero mais informações",
    link: "https://blog.agromove.com.br/in-company",
  },
];

const ProdutosPage = () => {
  return (
    <>
      <GridCards columns={2} cards={cardsFeatures} />
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
