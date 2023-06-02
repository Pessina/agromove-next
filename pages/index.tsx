import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { lazy, useMemo } from "react";

import MainSection from "../components/home/MainSection";
import avatarAlberto from "../public/images/avatar_alberto.jpg";
import avatarFelipeMoura from "../public/images/avatar_felipe_moura.jpg";
import avatarFlavio from "../public/images/avatar_flavio.png";
import computer from "../public/images/computer.svg";
import connect from "../public/images/connect.svg";
import avatarEdison from "../public/images/edison-avatar.jpg";
import information from "../public/images/information.svg";
import logoAgTechValley from "../public/images/logo_agtech_valley.jpg";
import logoEsalqtec from "../public/images/logo_esalqtec.jpeg";
import logoFapesp from "../public/images/logo_fapesp.jpg";
import logoAgromais from "../public/images/logo-agromais.jpg";
import logoCompreRural from "../public/images/logo-comprerural.png";
import logoDna from "../public/images/logo-dna.jpg";
import logoFieldView from "../public/images/logo-fieldview.png";
import logoIRancho from "../public/images/logo-irancho.jpg";
import logoOrganic from "../public/images/logo-organic.png";
import logoTelesintese from "../public/images/logo-telesintese.png";
import logoVFL from "../public/images/logo-vfl.png";
import probabilidadeQuedaBoi from "../public/images/probabilidade_queda_boi.jpg";
import tabelaProbabilidadeQueda from "../public/images/tabela_probabilidade_queda.jpg";
import avatarTiago from "../public/images/tiago-avatar.jpg";

const Review = lazy(() => import("../components/general/Review"));
const GridCards = lazy(() => import("../components/general/GridCards"));
const Hero = lazy(() => import("../components/general/Hero"));
const Contact = lazy(() => import("../components/home/Contact"));
const MediaSection = lazy(() => import("../components/home/MediaSection"));
const SupportSection = lazy(() => import("../components/home/SupportSection"));
const Video = lazy(() => import("../components/home/VideoSection"));

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

const IndexPage: React.FC = () => {
  const { t } = useTranslation("", { keyPrefix: "home" });

  const cardsFeatures = useMemo(
    () => [
      {
        icon: computer,
        title: t("gridCards.0.title"),
        text: t("gridCards.0.text"),
      },
      {
        icon: connect,
        title: t("gridCards.1.title"),
        text: t("gridCards.1.text"),
      },
      {
        icon: information,
        title: t("gridCards.2.title"),
        text: t("gridCards.2.text"),
      },
    ],
    [t]
  );

  return (
    <div className="gap-y-10 flex flex-col items-center justify-center">
      <MainSection
        i18n={{
          title: t("mainSection.title"),
          subtitle: t("mainSection.subtitle"),
          emailForm: {
            emailPlaceholder: t("emailForm.emailPlaceholder"),
            cta: t("emailForm.cta"),
            hint: t("emailForm.hint"),
          },
        }}
      />
      <div className="space-y-10">
        <Hero
          alt="none"
          imagePath={probabilidadeQuedaBoi}
          title={t("hero1.title")}
          phrase={t("hero1.phrase")}
          textPosition="left"
          imageClassName="w-full h-auto md:h-[200px] lg:h-[300px] md:w-auto"
        />
        <Hero
          alt="none"
          imagePath={tabelaProbabilidadeQueda}
          title={t("hero2.title")}
          phrase={t("hero2.phrase")}
          textPosition="right"
          imageClassName="w-full h-auto md:h-[400px] lg:h-[500px] md:w-auto"
        />
        <Hero
          alt="none"
          imagePath={avatarAlberto}
          title={t("hero3.title")}
          phrase={t("hero3.phrase")}
          textPosition="left"
        />
        <Hero
          alt="none"
          imagePath={avatarFlavio}
          title={t("hero4.title")}
          phrase={t("hero4.phrase")}
          textPosition="right"
          imageClassName="w-[300px] h-auto"
        />
      </div>
      <div className="flex flex-col gap-10 max-w-[1200px]">
        <Review
          person={{
            image: avatarFelipeMoura,
            name: t("review1.name"),
            job: t("review1.job"),
          }}
          text={t("review1.text")}
        />
        <Review
          reversed
          person={{
            image: avatarEdison,
            name: t("review2.name"),
            job: t("review2.job"),
          }}
          text={t("review2.text")}
        />
        <Review
          person={{
            image: avatarTiago,
            name: t("review3.name"),
            job: t("review3.job"),
          }}
          text={t("review2.text")}
        />
      </div>
      <Video id="hd2Yg4NU1Aw" title={t("video.title")} className="mt-8" />
      <MediaSection
        logosMidia={logosMidia}
        i18n={{
          title: t("mediaSection.title"),
          seeNews: t("mediaSection.seeNews"),
        }}
      />
      <GridCards cards={cardsFeatures} />
      <Contact
        i18n={{
          title: t("contactLast.title"),
          subtitle: t("contactLast.subtitle"),
          emailForm: {
            emailPlaceholder: t("emailForm.emailPlaceholder"),
            cta: t("emailForm.cta"),
            hint: t("emailForm.hint"),
          },
        }}
      />
      <SupportSection
        logos={logos}
        i18n={{
          title: t("supportSection.title"),
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

export default IndexPage;
