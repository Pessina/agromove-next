import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useCallback, useMemo, useState } from "react";

import Button from "../components/Button";

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
      <input
        key="5"
        // label={t("fields.phone.label")}
        placeholder={t("fields.phone.placeholder")}
        style={{ width: "100%" }}
        name="phone"
        id="phone"
        required
        value={formsValues.phone}
        onChange={({ target }) => onChangeForm(target)}
      />,
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
      <div onSubmit={onSubmit}>
        <form className="h-screen">
          <div>
            {formElements.map((element, index) => (
              <div key={index} className="p-3">
                {element}
              </div>
            ))}
            <div>
              <Button className="w-[250px] py-3 px-auto" type="submit">
                {t("cta")}
              </Button>
            </div>
          </div>
        </form>
      </div>
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
