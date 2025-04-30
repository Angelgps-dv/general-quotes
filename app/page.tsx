import Image from "next/image";

export default function Home() {
  return (
    <div id="root" className="flex justify-center items-center h-full">
      <header className="fixed top-0 w-full border-b border-b-[#ccc]">
        <div className="w-full p-4">QUOTE GENERATOR</div>
      </header>
      <div className="flex flex-col gap-4">
        <div className="w-full">
          <Image
            src="/assets/placeholder-image.webp"
            alt="placeholder"
            width="350"
            height="350"
          />
        </div>
        <div>
          <div>Behold! Cat wisdom</div>
          <div className="w-[50ch]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
        </div>
      </div>
    </div>
  );
}
