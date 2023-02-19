import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      {/* <Head>
        <title>Agromove - Maximize os lucros da sua fazenda</title>
        <meta
          name="description"
          content=" Quer aprender a negociar commodities agrícolas (preço da arroba do
            boi, preço do milho, preço da soja)? Fazer os melhores cursos de
            negociação, finanças, planejamento, mercado futuro e gestão de
            commodities? Ferramentas de análise? Nossa missão é capacitar nossos
            clientes a tomarem decisões lucrativas em mercados turbulentos."
        />
        <link rel="icon" href="/favicon.jpg" />
        <html lang="pt" />
      </Head> */}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
