import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useMemo } from "react";

import GridCards from "../components/general/GridCards";
import computer from "../public/images/computer.svg";
import ebook from "../public/images/ebook.svg";
import information from "../public/images/information.svg";
import lecture from "../public/images/seminar.svg";
import farm from "../public/images/turbine.svg";
import course from "../public/images/video-lecture.svg";

const ProductsPage: React.FC = () => {
  const { t } = useTranslation("", { keyPrefix: "products" });

  const cardsFeatures = useMemo(
    () => [
      {
        icon: computer,
        title: t("0.title"),
        text: t("0.text"),
        cta: t("0.cta"),
        link: "https://materiais.agromove.com.br/pecuaria-de-decisao",
      },
      {
        icon: ebook,
        title: t("1.title"),
        text: t("1.text"),
        cta: t("1.cta"),
        link: "https://blog.agromove.com.br/mentorias/",
      },
      {
        icon: information,
        title: t("2.title"),
        text: t("2.text"),
        cta: t("2.cta"),
        link: "https://materiais.agromove.com.br/consultoria",
      },
      {
        icon: course,
        title: t("3.title"),
        text: t("3.text"),
        cta: t("3.cta"),
        link: "https://blog.agromove.com.br/cursos",
      },
      {
        icon: lecture,
        title: t("4.title"),
        text: t("4.text"),
        cta: t("4.cta"),
        link: "https://materiais.agromove.com.br/palestras",
      },
      {
        icon: farm,
        title: t("5.title"),
        text: t("5.text"),
        cta: t("5.cta"),
        link: "https://materiais.agromove.com.br/in-company",
      },
    ],
    [t],
  );

  return <GridCards className="mt-16" cards={cardsFeatures} />;
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default ProductsPage;
