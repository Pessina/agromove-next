import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useMemo } from "react";
import Slider from "react-slick";

import Contact from "../components/Contact";
import Footer from "../components/Footer";
import GridCards from "../components/GridCards";
import Hero from "../components/Hero";
import MainSection from "../components/MainSection";
import Review from "../components/Review";
import Video from "../components/Video";
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

const settings = {
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 1500,
  slidesToShow: 3,
  // slidesToScroll: 3,
  centerMode: true,
};

const IndexPage: React.FC = () => {
  const { t } = useTranslation("", { keyPrefix: "home" });
  const { t: tFooter } = useTranslation("", { keyPrefix: "footer" });

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
    <>
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
      <Hero
        alt="none"
        imagePath={probabilidadeQuedaBoi}
        title={t("hero1.title")}
        phrase={t("hero1.phrase")}
        textPosition="left"
      />
      <Hero
        alt="none"
        imagePath={tabelaProbabilidadeQueda}
        title={t("hero2.title")}
        phrase={t("hero2.phrase")}
        textPosition="right"
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
        title={t("hero3.title")}
        phrase={t("hero3.phrase")}
        textPosition="right"
      />
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
      <Video id="hd2Yg4NU1Aw" title={t("video.title")} />
      <div>
        <h2>{t("mediaSection.title")}</h2>
        <Slider {...settings}>
          {logosMidia.map((element) => (
            <div key={element.src}>
              <Image
                alt={"midia images"}
                style={{ margin: "0px auto" }}
                src={element.src}
                height={200}
                width={200}
              />
            </div>
          ))}
        </Slider>
        <a href="https://blog.agromove.com.br/agromove-na-midia/">
          {t("mediaSection.seeNews")}
        </a>
      </div>
      <GridCards columns={3} cards={cardsFeatures} />
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
      <h2>{t("help.title")}</h2>
      <div className="grid-cols-4">
        {logos.map((logo) => (
          <div key={logo.text} className="flex flex-col justify-center">
            <Image
              src={logo.logo.src}
              style={{ padding: "30px" }}
              alt={"logo"}
              width={200}
              height={200}
            />
            <p>{logo.text}</p>
          </div>
        ))}
      </div>
      <Footer
        i18n={{
          whatsapp: (number: string) => tFooter("whatsapp", { number }),
          email: (email: string) => tFooter("email", { email }),
        }}
      />
    </>
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
