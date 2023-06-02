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
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-8">{i18n.title}</h2>
      <div className="flex flex-col md:flex-row gap-10">
        {logos.map((logo, index) => (
          <div key={index} className="flex flex-col justify-center">
            <Image
              src={logo.logo.src}
              alt="logo"
              width={200}
              height={200}
              loading="lazy"
            />
            <p className="mt-8">{logo.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportSection;
