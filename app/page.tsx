"use client";

// import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const [quote, setQuote] = useState<any>("");
  const [index, setIndex] = useState(0);

  const handleQuote = async (type: string) => {
    if (type === "NEXT") {
      if (index < quote.length - 1) {
        setIndex(index + 1);
      } else return index;
    } else if (type === "PREVIOUS") {
      if (index > 0) {
        setIndex(index - 1);
      } else return index;
    }
  };

  const fetchQuote = async () => {
    const res = await fetch("https://api.quotable.io/quotes/random?limit=10");
    const data = await res.json();
    setQuote(data);
  };

  useEffect(() => {
    fetchQuote();
    // setIndex(quote.length)
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
      <div className="absolute top-[15%] mt-4 max-w-4xl mx-6 md:mx-auto md:ml-[2rem] md:mr-[2rem] border-2 border-gray-700 p-6 bg-black text-white rounded-md font-serif md:w-[70%] md:h-[40%] md:justify-between flex md:flex-col md:items-start">
        <div className="text-center text-xl mb-4">
          {quote[index]?.author}
          {/* AUTHOR */}
        </div>
        <p className="text-lg leading-relaxed">
          {quote[index]?.content}
          {/* QUOTE */}
        </p>
        {/* </div> */}
        <div className="w-full mt-6 text-center text-sm text-gray-400 flex justify-between">
          <div
            onClick={() => handleQuote("PREVIOUS")}
            className="hover:text-white hover:cursor-pointer"
          >
            PREVIOUS
          </div>
          <div>{index} / 10</div>
          {/* <div>1 / 10</div> */}
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
