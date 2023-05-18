import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useCallback, useMemo, useState } from "react";
import { Container, Form, Grid } from "semantic-ui-react";

const parsePhone = (phone: string): string => {
  let numbers = phone.match(/\d+/g)?.join("") ?? "";
  let ret = "";

  if (numbers.length <= 2) {
    ret = numbers.slice(0, 2);
  } else if (numbers.length > 2 && numbers.length <= 7) {
    ret = "(" + numbers.slice(0, 2) + ") " + numbers.slice(2, 7);
  } else if (numbers.length > 7 && numbers.length <= 10) {
    ret =
      "(" +
      numbers.slice(0, 2) +
      ") " +
      numbers.slice(2, 6) +
      "-" +
      numbers.slice(6, 10);
  } else {
    ret =
      "(" +
      numbers.slice(0, 2) +
      ") " +
      numbers.slice(2, 7) +
      "-" +
      numbers.slice(7, 11);
  }

  return ret;
};

const FormsPage: React.FC = () => {
  const { t } = useTranslation("", { keyPrefix: "forms" });

  const router = useRouter();
  const {
    query: { keyword },
  } = router;

  const [formsValues, setFormValues] = useState({
    name: "",
    email: keyword as string,
    phone: "",
    area: "",
  });

  const onChangeForm = useCallback(({ name, value }) => {
    if (name === "phone") {
      value = parsePhone(value);
    }

    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  }, []);

  const formElements = useMemo(
    () => [
      // ...other form inputs
      <Form.Input
        key="5"
        label={t("fields.phone.label")}
        placeholder={t("fields.phone.placeholder")}
        style={{ width: "100%" }}
        name="phone"
        id="phone"
        required
        value={formsValues.phone}
        onChange={({ target }) => onChangeForm(target)}
      />,
      // ...other form inputs
    ],
    [formsValues, onChangeForm, t]
  );

  const onSubmit = () => {
    emailjs.send(
      "service_o4yhuhe",
      "template_bt2mm3i",
      formsValues,
      "xbaZfwiULKePuD2cD"
    );
    router.push("/forms-thanks");
  };

  return (
    <>
      <Container text className="Forms" onSubmit={onSubmit}>
        <Form style={{ height: "100vh" }}>
          <Grid stackable>
            <Grid.Row columns={1}>
              {formElements.map((element, index) => (
                <Grid.Column key={index} style={{ padding: "12px" }}>
                  {element}
                </Grid.Column>
              ))}
            </Grid.Row>
            <Grid.Row centered>
              <Form.Button
                style={{
                  backgroundColor: "#2E6B34",
                  color: "#FFFFFF",
                  width: "250px",
                  margin: "10px auto",
                }}
                type="submit"
              >
                {t("cta")}
              </Form.Button>
            </Grid.Row>
          </Grid>
        </Form>
      </Container>
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
    },
  };
}

export default FormsPage;
