import React from "react";

import EmailForm, { EmailFormI18N } from "./EmailForm";

type ContactProps = {
  i18n: {
    title: string;
    subtitle: string;
    emailForm: EmailFormI18N;
  };
};

const Contact: React.FC<ContactProps> = ({ i18n }) => {
  return (
    <div className="flex flex-col items-center justify-center py-10 gap-4 max-w-[700px] text-center">
      <h2 className="text-3xl font-bold">{i18n.title}</h2>
      <p className="text-lg">{i18n.subtitle}</p>
      <EmailForm
        i18n={i18n.emailForm}
        className="px-auto py-5 flex items-center flex-col justify-center"
      />
    </div>
  );
};

export default Contact;
