import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import Button from "../components/Button";

const FormsPage: React.FC = () => {
  const { t } = useTranslation("", { keyPrefix: "formsThanks" });

  return (
    <div className="py-[120px]">
      <h2>{t("title")}</h2>
      <p>{t("subtitle")}</p>
      <Button className="button--green">
        <Link href="/">{t("cta")}</Link>
      </Button>
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

export default FormsPage;
