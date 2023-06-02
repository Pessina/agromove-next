import { Head, Html, Main, NextScript } from "next/document";
import React from "react";

const CustomDocument: React.FC = () => {
  return (
    <Html lang="en">
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" href="/images/favicon.ico" />
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
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default CustomDocument;
