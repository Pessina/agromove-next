import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import { Button, Container } from "semantic-ui-react";

const FormsPage = () => {
  const { t } = useTranslation("", { keyPrefix: "formsThanks" });

  return (
    <Container
      text
      textAlign="center"
      verticalAlign="middle"
      style={{ padding: "120px 0px" }}
    >
      <h2>{t("title")}</h2>
      <p>{t("subtitle")}</p>
      <Button className="button--green">
        <Link href="/">{t("cta")}</Link>
      </Button>
    </Container>
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
