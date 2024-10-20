import Link from "next/link";
import React from "react";
import { PiInstagramLogo } from "react-icons/pi";
import CustomButton from "@components/CustomButton";
import { CgFacebook } from "react-icons/cg";
import { BsTwitter } from "react-icons/bs";

function FooterSection({}) {
  const socialIconProps = {
    className: "w-4 h-4 text-white",
  };

  const socials = [
    {
      name: "Facebook",
      icon: <CgFacebook {...socialIconProps} />,
      link: "#",
    },
    {
      name: "Instagram",
      icon: <PiInstagramLogo {...socialIconProps} />,
      link: "#",
    },
    {
      name: "Twitter",
      icon: <BsTwitter {...socialIconProps} />,
      link: "#",
    },
  ];

  return (
    <footer className="relative my-12 flex flex-col items-center justify-center px-12 lg:px-32">
      <div className="my-[5%] flex flex-col items-center justify-center gap-y-4">
        <p className={"text-5xl font-semibold"}>Ready to Get Started</p>

        <p
          className={
            "my-4 text-center text-gray-700 dark:text-gray-400 md:w-[70%]"
          }
        >
          Let’s bring your project to life. Whether you need a custom solution
          or expert guidance, our team is here to help you every step of the
          way. Book your appointment today and take the first step toward
          success!
        </p>

        <Link href={"/bookings"}>
          <CustomButton>Start Your Project</CustomButton>
        </Link>
      </div>

      <hr className="my-8 w-full border-outline dark:border-outline-dark" />

      <div className="flex w-full flex-col items-center justify-between space-y-[32px] md:flex-row md:space-y-0 ">
        <div className="flex flex-row space-x-[13px]">
          {socials.map((social, index) => (
            <Link href={social.link} key={index}>
              <div
                className={
                  "items-center justify-center rounded-full bg-primary p-3"
                }
              >
                {social.icon}
              </div>
            </Link>
          ))}
        </div>
        <div className="text-[14px] text-text-dark dark:text-text-light">
          Copyright © 2024 Trex Consultancy LTD
        </div>
        <div className="text-[14px] text-text-dark dark:text-text-light">
          Terms & Privacy Policy
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
