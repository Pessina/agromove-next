import "../styles/globals.css";

import { appWithTranslation, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useEffect } from "react";
import TagManager from "react-gtm-module";

import Header from "../components/Header";

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
    <div className="font-barlow flex flex-col">
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
      <div className="px-16">
        <Component {...pageProps} />
      </div>
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
