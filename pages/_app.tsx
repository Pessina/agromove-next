import "../styles/globals.css";

import { AppProps } from "next/app";
import { appWithTranslation, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useEffect } from "react";
import TagManager from "react-gtm-module";

import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { t } = useTranslation("", { keyPrefix: "app" });
  const { t: tFooter } = useTranslation("", { keyPrefix: "footer" });

  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-MH3NVGB" });
  }, []);

  return (
    <div className="font-barlow flex flex-col">
      <Header
        className="shrink-0"
        menuItems={{
          agromove: t("header.agromove"),
          products: t("header.products"),
          freeProducts: t("header.freeProducts"),
          blog: t("header.blog"),
          webinars: t("header.webinars"),
          login: t("header.login"),
        }}
      />
      <div className="px-4 md:px-8 lg:px-16 pb-16 grow">
        <Component {...pageProps} />
      </div>
      <Footer
        className="shrink-0"
        i18n={{
          whatsapp: (number: string) => tFooter("whatsapp", { number }),
          email: (email: string) => tFooter("email", { email }),
        }}
      />
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
