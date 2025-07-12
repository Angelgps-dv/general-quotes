"use client";

import Image from "next/image";
import { useThemeStore } from "@/state/themeStore";

export const Header = () => {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <header className="fixed top-0 z-50 w-full shadow-[2px_5px_3px_rgba(0,0,0,0.2)]">
      <div className="w-full p-4 bg-[#21242a] text-white font-bold flex justify-between">
        <div>QUOTE GENERATOR</div>
        <div onClick={toggleTheme} className="hover:cursor-pointer">
          {theme === "light" ? (
            <Image src="/assets/sun.svg" alt="mode" width="21" height="21" />
          ) : (
            <Image src="/assets/moon.svg" alt="mode" width="21" height="21" />
          )}
          {/* <Image src="/assets/sun.svg" alt="mode" width="21" height="21" /> */}
        </div>
      </div>
    </header>
  );
};
