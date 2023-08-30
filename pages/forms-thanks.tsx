import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import Button from "../components/general/Button";

const FormsPage: React.FC = () => {
  const { t } = useTranslation("", { keyPrefix: "formsThanks" });

  return (
    <div className="py-[120px] flex flex-col items-center text-center space-y-2">
      <h2 className="font-semibold text-xl">{t("title")}</h2>
      <p>{t("subtitle")}</p>
      <Button className="mt-2">
        <Link href="/">{t("cta")}</Link>
      </Button>
    </div>
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
