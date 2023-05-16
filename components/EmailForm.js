import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { Form } from "semantic-ui-react";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const { t } = useTranslation("", { keyPrefix: "emailForm" });

  return (
    <Form>
      <Form.Field style={{ padding: "3% 6%" }}>
        <input
          placeholder="Email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Field>
      <Form.Button className="button--green">
        <Link
          style={{ color: "#fff" }}
          href={{ pathname: "/forms", query: { keyword: email } }}
        >
          {t("cta")}
        </Link>
      </Form.Button>
      <small>{t("hint")}</small>
    </Form>
  );
};

export default EmailForm;
