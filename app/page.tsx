import Image from "next/image";
import { FaGithub, FaTiktok, FaLinkedin } from "react-icons/fa";
import Link from "next/link";


export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center p-6">
      {/* Header */}
      <div className="w-full">
        <h1 className="ml-20 text-4xl font-bold">Hello There</h1>
        <div className="mb-6 text-center mt-4 flex justify-center relative">
          {/* Div Pembungkus dengan border dan overflow hidden */}
          <div className="border-4 border-white rounded-full w-[200px] h-[200px] flex items-center justify-center overflow-hidden">
            <Image
              src="/image/jefta.jpeg"
              alt="Jefta Supraja"
              width={400} // Lebar gambar
              height={400} // Tinggi gambar yang sama dengan lebar
              className="object-cover" // Menggunakan object-cover agar gambar menyesuaikan dengan baik
            />
          </div>
        </div>
        <h2 className="mt-4 text-xl text-center">Jefta Supraja</h2>
      </div>

      {/* Social Media Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-7xl px-6 py-10 rounded-xl">
        {/* Instagram */}
        <div className="flex flex-col items-center bg-[#123458] p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
          <Image
            src="/image/instagram.png"
            alt="Instagram"
            width={80}
            height={80}
          />
          <p className="mt-4 text-xl">Instagram</p>
          <a
            href="https://www.instagram.com/jefta_supraja?igsh=MWd6MmExbXI2ZHI3Yg%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-gray-200 text-black px-6 py-2 rounded-md"
          >
            Visit Site
          </a>
        </div>

        {/* YouTube */}
        <div className="flex flex-col items-center bg-[#123458] p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
          <Image
            src="/image/youtube.png"
            alt="YouTube"
            width={80}
            height={80}
          />
          <p className="mt-4 text-xl">YouTube</p>
          <a
            href="https://www.youtube.com/@jeftasupraja6732"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-gray-200 text-black px-6 py-2 rounded-md"
          >
            Visit Site
          </a>
        </div>

        {/* GitHub */}
        <div className="flex flex-col items-center bg-[#123458] p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
          <FaGithub size={80} />
          <p className="mt-4 text-xl">GitHub</p>
          <a
            href="https://github.com/jefthah"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-gray-200 text-black px-6 py-2 rounded-md"
          >
            Visit Site
          </a>
        </div>

        {/* TikTok */}
        <div className="flex flex-col items-center bg-[#123458] p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
          <FaTiktok size={80} />
          <p className="mt-4 text-xl">TikTok</p>
          <a
            href="https://www.tiktok.com/@stuckrank?_t=ZS-8vHaZydeG1a&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-gray-200 text-black px-6 py-2 rounded-md"
          >
            Visit Site
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex flex-col items-center bg-[#123458] p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
          <FaLinkedin size={80} />
          <p className="mt-4 text-xl">LinkedIn</p>
          <a
            href="https://www.linkedin.com/in/jefta-supraja-925805286/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-gray-200 text-black px-6 py-2 rounded-md"
          >
            Visit Site
          </a>
        </div>

        {/* My Setup and Gear */}
        <div className="flex flex-col items-center bg-[#123458] p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
          <Image
            src="/image/setup.png"
            alt="My Setup and Gear"
            width={80}
            height={80}
          />
          <p className="mt-4 text-xl">My Setup and Gear</p>
          <Link
            href="/mysetup"
            className="mt-4 bg-gray-200 text-black px-6 py-2 rounded-md"
          >
            Visit Page
          </Link>
        </div>
      </div>
    </main>
  );
}
