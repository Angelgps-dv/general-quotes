import Image from "next/image";

export default function Home() {
  return (
    <div id="root" className="flex justify-center items-center h-full">
      <header className="w-full fixed top-0 w-full shadow-[inset_0_-7px_6px_-6px_#23272fcc]">
        <div className="w-full p-4">QUOTE GENERATOR</div>
      </header>
      <div className="flex flex-col gap-4 mx-[4rem] my-0 md:w-1/2 md:mx-auto">
        <div>AUTHOR: John Author</div>
        <div className="overflow-hidden rounded border-2 border-[#46454c] max-w-[630px] min-w-[240px]">
          <Image
            src="/assets/placeholder-image.webp"
            alt="placeholder"
            width="350"
            height="350"
            className="w-full"
          />
        </div>
        <div className="">
          <div className="leading-[28px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </div>
        </div>
      </div>
    </div>
  );
}
