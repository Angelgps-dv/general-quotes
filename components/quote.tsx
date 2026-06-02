"use client";

import { useState } from "react";
// import { useEffect } from "react";
import Image from "next/image";

type Quote = {
  author: string;
  content: string;
};

interface QuoteProps {
  typex: string;
  categoryData: Quote[];
}

export const Quote = ({ categoryData, typex }: QuoteProps) => {
  const [quote, setQuote] = useState<Quote[]>(categoryData);
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleIndex = async (type: string) => {
    if (type === "NEXT" && index < quote.length - 1) {
      setIndex(index + 1);
    } else if (type === "PREVIOUS" && index > 0) {
      setIndex(index - 1);
    }
  };
  console.log(quote);
  const fetchQuote = async () => {
    const res = await fetch(
      `https://api.quotable.io/quotes?tags=${typex}?limit=10`
    );
    const data = await res.json();
    setQuote(data);
    setIndex(0);
    // setIsLoading(false);
  };

  // useEffect(() => {
  //   setIsLoading(false);
  // }, []);

  // console.log(quote);
  // setIsLoading(false);
  setTimeout(() => {
    setIsLoading(false);
  }, 4000);

  return (
    <div className="absolute top-[15%] mt-4 max-w-4xl mx-6 md:mx-auto md:ml-[2rem] md:mr-[2rem] border-2 border-gray-700 p-6 bg-black text-white rounded-md font-serif md:w-[70%] w-[90%] min-h-[40%] justify-between flex items-start flex-col">
      <div className="flex justify-between gap-[1rem] items-center w-full">
        <div className="text-[#ccc] text-center text-xl mb-4o">
          {isLoading ? "..." : quote[index]?.author}
        </div>
        <div onClick={fetchQuote} className="hover:cursor-pointer">
          {isLoading ? (
            "..."
          ) : (
            <Image
              src="/assets/reload-icon.svg"
              alt="reload"
              width="21"
              height="21"
            />
          )}
        </div>
      </div>
      <p className="text-[#ccc] text-lg leading-relaxed">
        {isLoading ? "..." : quote[index]?.content}
      </p>
      <div className="text-[#ccc] w-full mt-6 text-center text-sm text-gray-400 flex justify-between">
        <div
          onClick={() => handleIndex("PREVIOUS")}
          className="hover:text-white hover:cursor-pointer"
        >
          PREVIOUS
        </div>
        <div>{isLoading ? ".. / .." : `${index + 1} / ${quote.length}`}</div>
        <div
          onClick={() => handleIndex("NEXT")}
          className="hover:text-white hover:cursor-pointer"
        >
          NEXT
        </div>
      </div>
    </div>
  );
};
