import React, { useState } from "react";
import logo2 from "../assets/images/logo2.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItems from "./HeaderItems";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const menu = [
    { name: "HOME", icon: HiHome },
    { name: "SEARCH", icon: HiMagnifyingGlass },
    { name: "WATCH LIST", icon: HiPlus },
    { name: "ORIGINALS", icon: HiStar },
    { name: "MOVIES", icon: HiPlayCircle },
    { name: "SERIES", icon: HiTv },
  ];

  return (
    <div className="flex items-center justify-between p-5 h-[64px] ">
      <div className="flex gap-8 items-center">
        <img
          src={logo2}
          className="w-[80px] h-[60px] md:w-[90px] object-cover"
          alt="Logo"
        />

        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItems key={item.name} name={item.name} Icon={item.icon} />
          ))}
        </div>

        <div className="flex gap-2 md:hidden">
          {menu.slice(0, 3).map((item) => (
            <HeaderItems key={item.name} name={item.name} Icon={item.icon} />
          ))}
        </div>

        <div className="md:hidden relative" onClick={() => setToggle((prev) => !prev)}>
          <HeaderItems name={""} Icon={HiDotsVertical} />
          {toggle && (
            <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-600 p-3 px-5 py-4">
              {menu.slice(3).map((item) => (
                <HeaderItems key={item.name} name={item.name} Icon={item.icon} />
              ))}
            </div>
          )}
        </div>
      </div>

      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className="w-[40px] rounded-full"
        alt="User Avatar"
      />
    </div>
  );
}
