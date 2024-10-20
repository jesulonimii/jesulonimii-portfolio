"use client";
import Link from "next/link";
import { useState } from "react";
import CustomButton from "@components/CustomButton";
import { useRouter } from "next/navigation";
import Logo from "@components/Logo";
import { useCart } from "@commons/store/cart";
import ThemeSwitch from "@components/ThemeSwitch";
import { MoonIcon } from "@heroicons/react/20/solid";
import { useSettingsStore } from "@store/settings.store";
import { X } from "lucide-react";

function Header({ className = "" }) {
  const router = useRouter();
  const { cart } = useCart();
  const { darkMode, setDarkMode } = useSettingsStore();

  const [menuClick, setMenuClick] = useState(false);

  return (
    <div
      className={`sticky top-0 z-[1000] bg-white dark:bg-bg-dark ${className}`}
    >
      <div className=" flex h-[8%] w-full items-center justify-between px-4 py-4 dark:border-gray-900  md:px-12">
        <div className="flex">
          <button
            onClick={() => setMenuClick(!menuClick)}
            className="md:hidden"
          >
            <MenuIcon className="text-primary-dark h-6 w-6 cursor-pointer text-3xl dark:text-white " />
          </button>
          <Link
            href="/"
            className="logo  text-3xl font-bold text-black dark:text-white"
            aria-label="Home Page"
          >
            <Logo icon className={""} />
          </Link>
        </div>
        {/*<div className="links hidden w-[40%] gap-8 justify-center text-black  dark:text-white md:flex ">
					{links.map((link, index) => {
						return (
							<Link
								key={index}
								href={link.href}
								className="text-md text-primary-dark dark:text-white border-primary pb-2 transition duration-500 hover:border-b ">
								{link.name}
							</Link>
						);
					})}
				</div>*/}

        <div className={"md:hidden"}>
          <CustomButton
            text={"Start your project"}
            className={"mx-4"}
            onClick={() => router.push("/bookings")}
          />
        </div>
        <div className="cta hidden w-fit items-center justify-end gap-1.5 md:flex">
          <Link href={"/portfolio"} className={"mx-4"}>
            Portfolio
          </Link>

          <Link href={"/bookings"}>
            <CustomButton className="px-4 py-2">
              Start your Project
            </CustomButton>
          </Link>

          <MoonIcon
            onClick={() => setDarkMode(!darkMode)}
            className={`mx-4 w-5 cursor-pointer ${darkMode ? "text-primary" : "text-gray-600"}`}
          />
        </div>
      </div>

      <MobileMenu
        links={[]}
        menuClick={menuClick}
        setMenuClick={setMenuClick}
      />
    </div>
  );
}

export default Header;

const MenuIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const MobileMenu = ({ links, menuClick, setMenuClick }) => {
  //const [menuClick, setMenuClick] = useState(false)

  return (
    <div
      className={`fixed left-0 top-[8%] z-[400] flex w-full border-b dark:border-gray-900 dark:bg-bg-dark-50 md:hidden ${
        menuClick ? "flex" : "hidden"
      }`}
    >
      <div className=" flex w-full items-center justify-between  border-b bg-bg-50  dark:border-gray-900 dark:bg-bg-dark-50">
        <button
          className="relative -top-[47%] left-[88%] z-[800] p-2"
          onClick={() => setMenuClick(false)}
        >
          <X />
        </button>
        <div
          className={`${
            menuClick ? "" : "-translate-x-[100%]"
          }  text-x-blue font-outfit  z-[500] flex min-h-screen w-full flex-col items-center justify-center space-y-5 bg-opacity-90 px-10 py-10 font-bold text-bg-dark dark:text-white`}
        >
          {/*{links.map((link, index) => {
							return (
								<div
									key={index}
									onClick={()=>{
										router.push(link.href)
										setMenuClick(false)
									}}
									className="text-md cursor-pointer hover:text-x-blue-alt mx-2 border-primary pb-2 hover:border-b ">
									{link.name}
								</div>
							);
						})}*/}

          <div className="cta mx-auto  flex flex-col items-center justify-center space-y-4">
            {/*Download button here*/}

            <Link href={"/#contact"} className={"my-8"}>
              <CustomButton className="bg-white px-4 text-black dark:text-black">
                Contact Us
              </CustomButton>
            </Link>

            <ThemeSwitch icon className={"my-12"} />
          </div>
        </div>
      </div>
    </div>
  );
};
