import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import React, { useMemo, useState } from "react";
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

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
    [tValidation],
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
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
    [t],
  );

  const phoneValue = watch("phone");

  const onSubmit = handleSubmit(async (data: FormData) => {
    try {
      setIsSubmitting(true);
      setSubmitError("");

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message);
      }

      router.push("/forms-thanks");
    } catch (error) {
      setSubmitError(
        typeof error === "object" && error !== null && "message" in error
          ? String(error.message)
          : "Failed to submit form",
      );
    } finally {
      setIsSubmitting(false);
    }
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
        type="tel"
        error={errors.phone?.message}
        className="w-full"
        value={phoneValue}
        onChange={(e) => {
          const formattedValue = formatPhone(e.target.value);
          setValue("phone", formattedValue, { shouldValidate: true });
        }}
        inputMode="numeric"
      />
      <Select
        label={t("fields.area.label") ?? ""}
        error={errors.area?.message}
        {...register("area", { required: true })}
      >
        {options.map((option) => (
          <option key={option.key} value={option.value}>
            {option.text}
          </option>
        ))}
      </Select>
      <Button
        className="md:w-[250px] py-3 px-auto"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? t("submitting") || "Submitting..." : t("cta")}
      </Button>

      {submitError && <div className="text-red-500 mt-2">{submitError}</div>}
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
