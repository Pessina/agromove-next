import React from "react";

import EmailForm, { EmailFormI18N } from "./EmailForm";

type MainSectionProps = {
  i18n: {
    title: string;
    subtitle: string;
    emailForm: EmailFormI18N;
  };
  className?: string;
};

const MainSection: React.FC<MainSectionProps> = ({ i18n, className }) => {
  return (
    <div
      className={`${className} flex flex-col items-center justify-center text-center max-w-[800px] mx-auto gap-4 py-20`}
    >
      <h1 className="text-3xl md:text-5xl font-bold">{i18n.title}</h1>
      <p className="md:text-lg max-w-[85%]">{i18n.subtitle}</p>
      <EmailForm i18n={i18n.emailForm} className="mt-2" />
    </div>
  );
};

export default MainSection;
