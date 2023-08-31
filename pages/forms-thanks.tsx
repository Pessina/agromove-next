import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import Button from "../components/general/Button";
import Section from "../components/general/Section";

const FormsPage: React.FC = () => {
  const { t } = useTranslation("", { keyPrefix: "formsThanks" });

  return (
    <Section
      title={t("title")}
      className="py-[120px] flex flex-col items-center"
      subtitle={t("subtitle")}
    >
      <Button className="mt-2 md:w-[300px]">
        <Link href="/" className="h-full w-full block">
          {t("cta")}
        </Link>
      </Button>
    </Section>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default FormsPage;
