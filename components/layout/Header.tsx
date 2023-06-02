import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useMemo, useState } from "react";

import { BurgerMenuIcon } from "../../utils/icons";
import Button from "../general/Button";
import Sidebar from "../general/Sidebar";
import logo from "../public/images/logo.png";

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
  className?: string;
};

const Header: React.FC<HeaderProps> = ({ className = "", menuItems }) => {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const hasLoginButton = useMemo(() => {
    return router.pathname.indexOf("forms") === -1;
  }, [router.pathname]);

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
    <div
      className={`${className} flex justify-between items-center h-[72px] shadow-md sticky top-0 bg-white z-10`}
    >
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
      {hasLoginButton && (
        <Link href="https://agromove.sharepoint.com/sites/AgromovePremium">
          <Button className="hidden lg:block">{menuItems.login}</Button>
        </Link>
      )}
      <Sidebar
        trigger={
          <button
            className="lg:hidden"
            onClick={() => setIsSidebarOpen((prev) => !prev)}
          >
            <BurgerMenuIcon />
          </button>
        }
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        contentClassName="w-[250px]"
      >
        <ul className="flex flex-col">
          <Link href="/" passHref className="mb-6 px-4 mt-4">
            <Image
              src={logo.src}
              alt="logo"
              width={50}
              height={50}
              className="h-[40px] w-auto"
            />
          </Link>
          {menuItemsArr.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className="text-black opacity-70 h-12 px-4 py-2 hover:bg-gray-100 hover:text-black
              flex items-center w-full border-b-[1px] border-gray-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </Sidebar>
    </div>
  );
};

export default Header;
