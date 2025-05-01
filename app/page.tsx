import Image from "next/image";

export default function Home() {
  return (
    <div id="root" className="flex justify-center items-center h-full">
      <header className="w-full fixed top-0 z-5000 w-full shadow-[2px_5px_3px_rgba(0,0,0,0.2)]">
        <div className="w-full p-4 bg-[#21242a]">QUOTE GENERATOR</div>
      </header>
      <div className="max-w-4xl mx-auto border-2 border-gray-700 p-6 bg-black text-white rounded-md font-serif">
        <div className="text-center text-xl mb-4">Thomas Jefferson</div>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Image
            width={250}
            height={250}
            src="/assets/placeholder-image.webp"
            alt="placeholder"
            className="w-55 h-55 object-cover rounded-md"
          />
          <p className="text-lg leading-relaxed w-[40ch]">
            “Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.”
          </p>
        </div>
        <div className="mt-6 text-center text-sm text-gray-400">1 / 10</div>
      </div>
    </div>
  );
}
