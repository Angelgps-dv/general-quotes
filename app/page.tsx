"use client";
import { Header } from "@/components/header";
// import { Quote } from "@/components/quote";
import { Category } from "@/components/category";

export default function Home() {
  return (
    <div
      id="root"
      className="pt-20 flex flex-col items-center min-h-screen bg-gray-900 relative"
    >
      <Header />
      {/* <Quote /> */}
      <Category />
    </div>
  );
}
