import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-10 space-y-10">
      {/* Logo and Title */}
      <div className="flex items-center space-x-4">
        <Image
          src="/tattoos/logo.svg" // Updated to use the correct logo path
          alt="Nana's Tattoo Logo"
          width={100}
          height={100}
          className="mx-auto"
        />
        <h1 className="text-5xl font-bold sailor-font leading-tight">
          Nana's <br /> Tattoo
        </h1>
      </div>



      {/* Tattoo Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {["file.svg", "next.svg", "vercel.svg", "globe.svg", "window.svg"].map((img, index) => (
          <div key={index} className="border rounded overflow-hidden shadow-sm">
            <Image
              src={`/tattoos/${img}`}
              alt={`Tattoo ${index + 1}`}
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
