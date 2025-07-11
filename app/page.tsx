"use client";

import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  type Quote = {
    author: string;
    content: string;
  };

  const [isLoading, setIsLoading] = useState(true);
  const [quote, setQuote] = useState<Quote[]>([]);
  const [index, setIndex] = useState(0);

  const handleQuote = async (type: string) => {
    if (type === "NEXT" && index < quote.length - 1) {
      setIndex(index + 1);
    } else if (type === "PREVIOUS" && index > 0) {
      setIndex(index - 1);
    }
  };

  const fetchQuote = async () => {
    const res = await fetch("https://api.quotable.io/quotes/random?limit=10");
    const data = await res.json();
    setQuote(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div
      id="root"
      className="pt-20 flex flex-col items-center min-h-screen bg-gray-900 relative"
    >
      <header className="fixed top-0 z-50 w-full shadow-[2px_5px_3px_rgba(0,0,0,0.2)]">
        <div className="w-full p-4 bg-[#21242a] text-white text-center font-bold">
          QUOTE GENERATOR
        </div>
      </header>
      <div className="absolute top-[15%] mt-4 max-w-4xl mx-6 md:mx-auto md:ml-[2rem] md:mr-[2rem] border-2 border-gray-700 p-6 bg-black text-white rounded-md font-serif md:w-[70%] min-h-[40%] justify-between flex items-start flex-col">
        <div className="text-[#ccc] text-center text-xl mb-4">
          {isLoading ? "..." : quote[index]?.author}
        </div>
        <p className="text-[#ccc] text-lg leading-relaxed">
          {isLoading ? "..." : quote[index]?.content}
        </p>
        <div className="text-[#ccc] w-full mt-6 text-center text-sm text-gray-400 flex justify-between">
          <div
            onClick={() => handleQuote("PREVIOUS")}
            className="hover:text-white hover:cursor-pointer"
          >
            PREVIOUS
          </div>
          <div>{isLoading ? ".. / .." : `${index + 1} / ${quote.length}`}</div>
          <div
            onClick={() => handleQuote("NEXT")}
            className="hover:text-white hover:cursor-pointer"
          >
            NEXT
          </div>
        </div>
      </div>
    </div>
  );
}
