import emailjs from "@emailjs/browser";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

import Input from "../components/forms/Input";
import Select from "../components/forms/Select";
import Button from "../components/general/Button";
import { formatPhone } from "../utils/utils";

interface FormData {
  name: string;
  email: string;
  phone: string;
  area: string;
}

const FormsPage: React.FC = () => {
  const { t } = useTranslation("", { keyPrefix: "forms" });
  const { t: tValidation } = useTranslation("", { keyPrefix: "validation" });
  const router = useRouter();
  const {
    query: { keyword },
  } = router;

  const validationSchema = useMemo(
    () =>
      Yup.object().shape({
        name: Yup.string().required(tValidation("required") ?? ""),
        email: Yup.string()
          .email(tValidation("invalid") ?? "")
          .required(tValidation("required") ?? ""),
        phone: Yup.string()
          .required(tValidation("required") ?? "")
          .matches(/^\(\d{2}\) \d{4,5}-\d{4}$/, tValidation("invalid") ?? ""),
        area: Yup.string().required(tValidation("required") ?? ""),
      }),
    [tValidation]
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: keyword as string,
      phone: "",
      area: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const options = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => {
        const number = i + 1;
        const valueAndText = t(`fields.area.options.${number}`);
        return { value: valueAndText, text: valueAndText, key: number };
      }),
    [t]
  );

  const onSubmit = handleSubmit((data: FormData) => {
    emailjs.send(
      "service_o4yhuhe",
      "template_bt2mm3i",
      data as unknown as Record<string, unknown>,
      "xbaZfwiULKePuD2cD"
    );
    router.push("/forms-thanks");
  });

  return (
    <form
      className="h-screen flex flex-col gap-4 items-center mt-16 max-w-[350px] mx-auto w-full"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <Input
        autoFocus
        label={t("fields.name.label") ?? ""}
        placeholder={t("fields.name.placeholder") ?? ""}
        error={errors.name?.message}
        className="w-full"
        {...register("name", { required: true })}
      />
      <Input
        label={t("fields.email.label") ?? ""}
        placeholder={t("fields.email.placeholder") ?? ""}
        error={errors.email?.message}
        className="w-full"
        {...register("email", { required: true })}
      />
      <Input
        label={t("fields.phone.label") ?? ""}
        placeholder={t("fields.phone.placeholder") ?? ""}
        type="number"
        error={errors.phone?.message}
        className="w-full"
        {...register("phone", { required: true })}
        onChange={(event) => {
          event.target.value = formatPhone(event.target.value);
        }}
      />
      <Select
        label={t("fields.area.label") ?? ""}
        placeholder={t("fields.area.placeholder") ?? ""}
        error={errors.area?.message}
        {...register("area", { required: true })}
      >
        {options.map((option) => (
          <option key={option.key} value={option.value}>
            {option.text}
          </option>
        ))}
      </Select>
      <Button className="md:w-[250px] py-3 px-auto" type="submit">
        {t("cta")}
      </Button>
    </form>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default FormsPage;
