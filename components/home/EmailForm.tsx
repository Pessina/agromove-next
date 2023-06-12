import { useRouter } from "next/router";
import React, { useState } from "react";

import Input from "../formss/Input";
import Button from "../general/Button";

export type EmailFormI18N = {
  emailPlaceholder: string;
  cta: string;
  hint: string;
};

type EmailFormProps = {
  i18n: EmailFormI18N;
  className?: string;
};

const EmailForm: React.FC<EmailFormProps> = ({ i18n, className }) => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const onSubmit = () => {
    router.push({ pathname: "/forms", query: { keyword: email } });
  };

  return (
    <form
      className={`${className} flex flex-col items-center`}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <Input
        placeholder={i18n.emailPlaceholder}
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-[300px]"
      />
      <Button className="w-fit mt-4" type="submit">
        {i18n.cta}
      </Button>
      <small className="mt-2">{i18n.hint}</small>
    </form>
  );
};

export default EmailForm;
