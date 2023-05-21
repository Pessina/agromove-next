import Image from "next/image";
import React from "react";

interface Logo {
  logo: {
    src: string;
  };
  text: string;
}

export type SupportSectionI18N = {
  title: string;
};

interface SupportSectionProps {
  logos: Logo[];
  i18n: SupportSectionI18N;
}

const SupportSection: React.FC<SupportSectionProps> = ({ logos, i18n }) => {
  return (
    <div className="text-center space-y-8">
      <h2 className="text-2xl font-bold">{i18n.title}</h2>
      <div className="flex gap-10 items-center">
        {logos.map((logo, index) => (
          <div key={index} className="flex flex-col justify-center">
            <Image src={logo.logo.src} alt="logo" width={200} height={200} />
            <p className="mt-8">{logo.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportSection;
