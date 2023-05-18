import Link from "next/link";
import React, { useState } from "react";

import Button from "./Button";

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

  return (
    <form className={`${className} flex flex-col items-center`}>
      <input
        placeholder={i18n.emailPlaceholder}
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-[200px]"
      />
      <Button className="w-fit">
        <Link href={{ pathname: "/forms", query: { keyword: email } }}>
          {i18n.cta}
        </Link>
      </Button>
      <small className="mt-2">{i18n.hint}</small>
    </form>
  );
};

export default EmailForm;
