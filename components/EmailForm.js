import Link from "next/link";
import { useState } from "react";
import { Form } from "semantic-ui-react";

const EmailForm = ({ i18n }) => {
  const [email, setEmail] = useState("");

  return (
    <Form>
      <Form.Field style={{ padding: "3% 6%" }}>
        <input
          placeholder={i18n.emailPlaceholder}
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
          {i18n.cta}
        </Link>
      </Form.Button>
      <small>{i18n.hint}</small>
    </Form>
  );
};

export default EmailForm;
