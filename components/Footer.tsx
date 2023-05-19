import Image from "next/image";
import React from "react";

import logo from "../public/images/logo.png";
import { BLOG_URL } from "../utils/constants";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  YouTubeIcon,
} from "../utils/icons";

const links = [
  {
    icon: <FacebookIcon />,
    url: "https://www.facebook.com/Agromove/",
  },
  {
    icon: <LinkedInIcon />,
    url: "https://www.linkedin.com/company/agromove/",
  },
  {
    icon: <InstagramIcon />,
    url: "https://www.instagram.com/agromove/?hl=pt-br",
  },
  {
    icon: <YouTubeIcon />,
    url: "https://www.youtube.com/channel/UCjLsgqGSx3F51IKU3TD___g",
  },
];

type FooterProps = {
  i18n: {
    whatsapp: (number: string) => string;
    email: (email: string) => string;
  };
};

const Footer: React.FC<FooterProps> = ({ i18n }) => {
  return (
    <div className="bg-gray-200 mt-18 py-15 p-16 flex justify-around">
      <Image
        src={logo.src}
        alt="logo"
        width={100}
        height={100}
        className="h-[100px] w-auto"
      />
      <div className="flex flex-col gap-2">
        <p>{i18n.whatsapp("(14) 9 9134-8132")} </p>
        <p>{i18n.email("contato@agromove.com.br")}</p>
        <a href="https://blog.agromove.com.br">
          <p>{BLOG_URL}</p>
        </a>
        <div className="mt-8 flex gap-3">
          {links.map((link) => (
            <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
