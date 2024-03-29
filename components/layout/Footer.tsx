import Image from "next/image";
import React from "react";

import logo from "../../public/images/logo.png";
import { BLOG_URL } from "../../utils/constants";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  YouTubeIcon,
} from "../../utils/icons";

const links = [
  {
    icon: <FacebookIcon />,
    url: "https://www.facebook.com/Agromove/",
    ariaLabel: "Facebook",
  },
  {
    icon: <LinkedInIcon />,
    url: "https://www.linkedin.com/company/agromove/",
    ariaLabel: "LinkedIn",
  },
  {
    icon: <InstagramIcon />,
    url: "https://www.instagram.com/agromove/?hl=pt-br",
    ariaLabel: "Instagram",
  },
  {
    icon: <YouTubeIcon />,
    url: "https://www.youtube.com/channel/UCjLsgqGSx3F51IKU3TD___g",
    ariaLabel: "YouTube",
  },
];

type FooterProps = {
  i18n: {
    whatsapp: (number: string) => string;
    email: (email: string) => string;
  };
  className?: string;
};

const Footer: React.FC<FooterProps> = ({ i18n, className = "" }) => {
  return (
    <div
      className={`${className} bg-gray-200 mt-18 py-15 p-16 flex justify-around flex-col md:flex-row gap-10 items-center md:items-initial`}
    >
      <Image
        src={logo.src}
        alt="logo"
        width={100}
        height={100}
        className="h-[100px] w-auto shrink-0"
      />
      <div className="flex flex-col gap-2">
        <p>{i18n.whatsapp("(14) 9 9134-8132")} </p>
        <p>{i18n.email("contato@agromove.com.br")}</p>
        <a href="https://blog.agromove.com.br">
          <p>{BLOG_URL}</p>
        </a>
        <div className="mt-4 flex gap-3">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              aria-label={link.ariaLabel}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <IconsLicense />
      </div>
    </div>
  );
};

const IconsLicense = () => (
  <div className="mt-4">
    Icons made by{" "}
    <a href="https://www.freepik.com/" title="Freepik">
      Freepik{" "}
    </a>
    from{" "}
    <a href="https://www.flaticon.com/" title="Flaticon">
      www.flaticon.com{" "}
    </a>
    is licensed by{" "}
    <a
      href="http://creativecommons.org/licenses/by/3.0/"
      title="Creative Commons BY 3.0"
      target="_blank"
      rel="noreferrer"
    >
      CC 3.0 BY
    </a>
  </div>
);

export default Footer;
