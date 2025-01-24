import { FC, useState } from "react";
import {
  BACK_GROUND,
  LEFT_BG_IMAGE,
  RECTANGLE_BG,
  RECTANGLE_PLANTS,
  RIGHT_BG_IMAGE,
} from "../../assets";
import Button from "../../components/Button";
import MenuCard from "./components/MenuCard";
import { useGetItems } from "../../hooks/useMenu";

const MenuPage: FC = () => {
  const { food, drinks, brunchCocktails } = useGetItems();
  const [activeTab, setActiveTab] = useState<"Food" | "Drinks" | "Brunch">(
    "Food"
  );

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center ">
        <div className="relative w-full h-[311px]">
          <img
            src={RECTANGLE_PLANTS}
            alt="Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center h-full">
            <div className="text-center mb-2">
              <h2
                className="text-white font-bold md:text-5xl lg:text-[75px] xs:text-[40px]"
                style={{ textShadow: "4px 3px #800020" }}
              >
                MENU
              </h2>
            </div>
            <div className="text-center px-4 md:w-3/4 lg:w-2/3">
              <p
                className="text-gray-400 "
                style={{ fontFamily: "Kelly Slab, sans-serif" }}
              >
                Please take a look at our menu featuring food, drinks, and
                brunch. If you'd like to
                <br className="2xl:hidden" />
                place an order, use the "Order Online" button located below the
                menu.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full h-[79px] overflow-hidden">
          <img
            src={RECTANGLE_BG}
            alt="Background"
            className="w-full object-cover h-full object-center sm:object-left z-10"
          />
          <div className="absolute sm:top-[5px] top-[15px] w-full flex justify-center items-center z-10">
            <Button
              onClick={() => setActiveTab("Food")}
              className="text-white sm:w-[113px] sm:h-[50px] hover:bg-[#0796EF]"
            >
              FOOD
            </Button>
            <Button
              onClick={() => setActiveTab("Drinks")}
              className="text-white sm:w-[113px] sm:h-[50px] hover:bg-[#0796EF]"
            >
              DRINKS
            </Button>
            <Button
              onClick={() => setActiveTab("Brunch")}
              className="text-white sm:w-[113px] sm:h-[50px] hover:bg-[#0796EF]"
            >
              BRUNCH
            </Button>
          </div>
        </div>
      </div>

      <div
        className="pb-[70px] pt-[86px]"
        style={{ backgroundImage: `url(${BACK_GROUND})` }}
      >
        <div>
          <div className="relative">
            <img
              src={LEFT_BG_IMAGE}
              alt="Left Background"
              className="absolute top-0  lg:right-[900px] xl:right-[1410px] md:right-[650px] h-full z-[1] object-cover hidden  md:block"
            />
            <img
              src={RIGHT_BG_IMAGE}
              alt="Right Background"
              className="absolute top-0 xs:right-[1px] sm:right-[0rem] h-full z-[1] object-cover hidden md:block"
            />

            {/*  showing the cards of drinks,BRUNCH COCKTAILS, food*/}

            {activeTab === "Food" && <MenuCard data={food} title="FOOD" />}

            {activeTab === "Drinks" && (
              <MenuCard data={drinks} title="DRINKS" />
            )}

            {activeTab === "Brunch" && (
              <MenuCard data={brunchCocktails} title="BRUNCH COCKTAILS" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuPage;
