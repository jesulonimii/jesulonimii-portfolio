import { twMerge } from "tailwind-merge";
import Constants from "@utils/constants";
import LogoSvg from "@assets/images/logo";
import FullLogoSVG from "@assets/images/full-logo";

type Props = {
  className?: string;
  icon?: boolean;
  iconSize?: number;
};

const Logo = ({ className, icon, iconSize = 1 }: Props) => {
  return (
    <div className={twMerge("flex flex-row  items-center", className)}>
      <LogoSvg
        className={twMerge(
          "fill-primary ml-4 h-8 w-8 md:w-12 md:h-12",
          className
        )}
      />

      {!icon && (
        <h1 className={"text-lg font-bold mx-2"}>{Constants.APP_NAME}</h1>
      )}
    </div>
  );
};

export default Logo;
