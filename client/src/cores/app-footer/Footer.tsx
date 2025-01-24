import React from "react";
import { LOGO, SOCIAL_MEDIA } from "../../assets";
import InfoCard from "../../components/InfoCard";

const Footer: React.FC = () => {
  const connectInfo = (
    <>
      <p className="text-sm leading-6">+1470-788-8255</p>
      <p className="text-sm leading-6">email@42harandgrill.com</p>
    </>
  );

  const findUsInfo = (
    <>
      <p className="text-xs mt-4">327 Memorial Dr SE, Atlanta,</p>
      <p className="text-xs">GA 30312, USA</p>
    </>
  );

  return (
    <div className="h-full w-full pt-20 bg-black ">
      <div className="mb-20">
        <div className="flex flex-col gap-10 sm:flex-row sm:gap-4 justify-center items-center mr-[1px]">
          <InfoCard title="CONNECT WITH US" content={connectInfo} />
          <InfoCard
            title=""
            content={null}
            logo={LOGO}
            socialMedia={SOCIAL_MEDIA}
          />
          <InfoCard title="FIND US" content={findUsInfo} />
        </div>
      </div>

      <div className="flex justify-between items-center bg-[#161616] text-[#857878] h-[55px] px-4 text-[14px] ">
        <p>© 2024 42 Bar & Grill. Developed by Deepnetsoft Solutions.</p>
        <div className="flex gap-4">
          <p className="cursor-pointer hover:underline">Terms & Conditions</p>
          <p className="cursor-pointer hover:underline">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
