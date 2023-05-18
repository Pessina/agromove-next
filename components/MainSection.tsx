import React from "react";

import EmailForm, { EmailFormI18N } from "./EmailForm";

type MainSectionProps = {
  i18n: {
    title: string;
    subtitle: string;
    emailForm: EmailFormI18N;
  };
};

const MainSection: React.FC<MainSectionProps> = ({ i18n }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-[700px] mx-auto space-y-4">
      <h1 className="text-4xl font-bold">{i18n.title}</h1>
      <p className="text-lg">{i18n.subtitle}</p>
      <EmailForm i18n={i18n.emailForm} />
    </div>
  );
};

export default MainSection;
