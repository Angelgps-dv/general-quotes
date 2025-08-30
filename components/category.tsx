"use client";
// import { useCategoryData } from "../utils/useCategoryData";
import { useState } from "react";
import { Quote } from "./quote";
import { categoryData } from "@/utils/categoryData";

type Quote = {
  author: string;
  content: string;
};

export const Category = () => {
  const [change, setChange] = useState(false);
  const [quote, setQuote] = useState<Quote[]>([]);
  const [type, setType] = useState<string>("");

  const handleCategory = async (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const category = target.textContent?.toLowerCase();
    const res = await fetch(
      `https://api.quotable.io/quotes?tags=${target.textContent?.toLowerCase()}&limit=10`
    );
    const data = await res.json();
    // console.log(data);
    setQuote(data);
    setType(category!);
    setChange(true);
  };

  return (
    <div className="grid grid-cols-3 gap-[2rem] absolute top-[15%]">
      {change ? (
        // <Quote />
        <Quote typex={type} categoryData={quote} />
      ) : (
        <>
          {categoryData.map((item) => (
            <div
              key={item.key}
              onClick={handleCategory}
              className="hover:cursor-pointer"
            >
              {item.category}
            </div>
          ))}
          <div onClick={handleCategory} className="hover:cursor-pointer">
            Random Category
          </div>
        </>
      )}
    </div>
  );
};
