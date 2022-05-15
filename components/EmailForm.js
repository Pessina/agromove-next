import Link from "next/link";
import { useState } from "react";
import { Form } from "semantic-ui-react";

const EmailForm = () => {
  const [email, setEmail] = useState("");

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
      <Form.Button disabled={!!!email} className="button--green">
        <Link
          style={{ color: "#fff" }}
          href={{ pathname: "/forms", query: { keyword: email } }}
        >
          Quero falar com um consultor
        </Link>
      </Form.Button>
      <small>*Sem compromisso, gratuitamente</small>
    </Form>
  );
};

export default EmailForm;
