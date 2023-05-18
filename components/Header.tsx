import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

import logo from "../public/images/logo.png";
import Button from "./Button";

type MenuItems = {
  agromove: string;
  products: string;
  freeProducts: string;
  blog: string;
  webinars: string;
  login: string;
};

type HeaderProps = {
  menuItems: MenuItems;
};

const Header: React.FC<HeaderProps> = ({ menuItems }) => {
  const router = useRouter();

  const onClickHandle = () => {
    router.push("https://agromove.sharepoint.com/sites/AgromovePremium");
  };

  const checkPage = () => {
    return router.pathname.indexOf("forms") === -1;
  };

  const menuItemsArr = useMemo(
    () => [
      {
        name: menuItems.agromove,
        href: "/",
      },
      {
        name: menuItems.products,
        href: "/produtos",
      },
      {
        name: menuItems.freeProducts,
        href: "https://blog.agromove.com.br/produtos-gratuitos/",
      },
      {
        name: menuItems.blog,
        href: "https://blog.agromove.com.br",
      },
      {
        name: menuItems.webinars,
        href: "https://blog.agromove.com.br/webinars/",
      },
    ],
    [menuItems]
  );

  return (
    <div className="flex justify-between items-center px-16 h-[72px] shadow-md sticky top-0 bg-white">
      <div className="flex items-center gap-2 h-full">
        <Link href="/" passHref className="mr-4">
          <Image
            src={logo.src}
            alt="logo"
            width={50}
            height={50}
            className="h-[40px] w-auto"
          />
        </Link>
        <div className="hidden lg:flex items-center h-full">
          {menuItemsArr.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className="text-black opacity-70 h-full px-2 hover:bg-gray-100 hover:text-black
              flex items-center"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      {checkPage() && (
        <Button onClick={() => onClickHandle()}>{menuItems.login}</Button>
      )}
      {/* <Grid.Row only="mobile tablet">
                <Icon name="bars" size="big" onClick={() => burgerMenu()} />
              </Grid.Row> */}
    </div>
  );
};

export default Header;
