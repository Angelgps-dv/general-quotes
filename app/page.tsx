import Image from "next/image";

export default function Home() {
  return (
    <div
      id="root"
      className="pt-20 flex flex-col items-center min-h-screen bg-gray-900"
    >
      <header className="fixed top-0 z-50 w-full shadow-[2px_5px_3px_rgba(0,0,0,0.2)]">
        <div className="w-full p-4 bg-[#21242a] text-white text-center font-bold">
          QUOTE GENERATOR
        </div>
      </header>

      <div className="mt-4 max-w-4xl mx-6 md:mx-auto border-2 border-gray-700 p-6 bg-black text-white rounded-md font-serif">
        <div className="text-center text-xl mb-4">Thomas Jefferson</div>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Image
            width={250}
            height={250}
            src="/assets/placeholder-image.webp"
            alt="placeholder"
            className="object-cover rounded-md"
          />
          <p className="text-lg leading-relaxed">
            “Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s...”
          </p>
        </div>
        <div className="mt-6 text-center text-sm text-gray-400">1 / 10</div>
      </div>
    </div>
  );
}
