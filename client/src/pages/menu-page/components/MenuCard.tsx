import { FC } from "react";
import { COCKTAIL_ONE, COCKTAIL_TWO } from "../../../assets";

interface MenuItem {
  title: string;
}

interface MenuCardProps {
  data: {
    _id: string;
    title: string;
    category: string;
    price: number;
    menuItems: MenuItem[];
  }[];
  title: string;
}

const MenuCard: FC<MenuCardProps> = ({ data, title }) => {
  return (
    <div className="relative lg:px-10 py-3 mb-[15px] sm:mx-7 xs:mx-0">
      <div className="relative md:mx-10 mx-3 border border-white rounded-lg shadow-lg">
        <div
          className={`lg:top-[352px] md:top-[570px] xs:top-[780px] md:w-40 w-20 md:h-40 h-20 absolute right-[-8px] -top-[2rem]`}
        >
          <img
            className="w-full h-full object-contain"
            src={COCKTAIL_TWO}
            alt={title}
          />
        </div>
        <div className="md:w-40 w-20 md:h-40 h-20 absolute md:top-[-4rem] top-[-10px] md:left-[-10px] left-[-20px]">
          <img
            className="w-full h-full object-cover"
            src={COCKTAIL_ONE}
            alt={title}
          />
        </div>
        <div className="w-full h-fit flex justify-center items-center gap-5 p-1 relative   ">
          <div className="text-[#544C4C] w-32 h-1 bg-[#544C4C]"></div>
          <div
            className="text-white  text-center my-16 font-oswald font-semibold sm:text-6xl xs:text-[30px] leading-[74.1px] tracking-wide"
            style={{ textShadow: "4px 3px #800020" }}
          >
            {title}
          </div>
          <div className="text-[#544C4C] w-32 h-1 bg-[#544C4C]"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:px-10 pb-10 ">
          {data.map((category) => (
            <div key={category._id}>
              <div className="flex justify-between items-center py-2 px-4 rounded-md">
                <p className="text-lg sm:text-2xl text-white uppercase">
                  {category.title}
                </p>
                <p className="text-lg font-medium text-white">
                  ${category.price}
                </p>
              </div>

              <div className="flex justify-between items-center py-2 px-4 rounded-md">
                <p className="sm:text-lg xs:text-[0.9rem] text-[#7B7B7B]">
                  {category.menuItems
                    .map((menuItem) => menuItem.title)
                    .join(", ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
