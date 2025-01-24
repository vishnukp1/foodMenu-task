import React from "react";

interface InfoCardProps {
  title: string;
  content: React.ReactNode;
  logo?: string;
  socialMedia?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  content,
  logo,
  socialMedia,
}) => {
  return (
    <div
      className={`relative text-center text-white border border-white w-[361px] sm:w-[374px] h-[134px] rounded-[15px] bg-transparent overflow-visible mx-auto`}
    >
      {logo && (
        <div className="relative">
          <img
            src={logo}
            alt="Logo"
            className="absolute top-[-40px] left-[9rem] lg:left-[8rem] sm:left-[5rem]  xl:left-[9rem]"
          />
        </div>
      )}

      <div className="relative h-[49px]">
        <div className="absolute top-[35px] left-[6rem] lg:left-[4rem] sm:left-[1rem]  xl:left-[6rem]">
          {logo && (
            <div className="text-[2rem] font-normal">
              <span className="text-[#0796EF]">DEEP</span>
              <span> NET </span>
              <span className="text-[#857878]">SOFT</span>
            </div>
          )}

          {socialMedia && (
            <div className="ml-10">
              <img src={socialMedia} alt="Social Media Icon" />
            </div>
          )}
        </div>
      </div>

      <div className="flex-col justify-center text-white -mt-6 mr-2 sm:mr-auto">
        <h2 className="text-[#0796EF] text-[1rem] font-semibold">{title}</h2>
        <div className="text-[1rem]">{content}</div>
      </div>
    </div>
  );
};

export default InfoCard;
