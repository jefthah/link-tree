import Image from "next/image";
import Link from "next/link";

export default function MySetupPage() {
  return (
    <main className="relative min-h-screen text-white">
      {/* Background */}
      <div className="absolute inset-0 brightness-[0.2]">
        <Image
          src="/image/setup_pc.jpg"
          alt="Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen pt-20 px-4 text-center pb-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-20 drop-shadow-lg">
          My Set up 2025
        </h1>

        {/* Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-y-8 lg:gap-30 mt-10 w-full">
          {/* Card 1 */}
          <div className="relative w-full max-w-[700px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] group overflow-hidden rounded-lg shadow-lg">
            {/* Image */}
            <Image
              src="/image/PC.jpeg"
              alt="Spec PC"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-500" />
            {/* Title */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow-lg">
                Spec PC
              </span>
            </div>
            {/* Hover button khusus desktop */}
            <Link href="/mysetup/specPC" className="hidden lg:block">
              <div className="absolute inset-0 bg-white text-black flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <button className="bg-gray-300 font-bold px-6 py-2 rounded-md">
                  Lihat
                </button>
              </div>
            </Link>

            {/* Tombol kecil pojok kiri khusus mobile */}
            <div className="block lg:hidden absolute left-4 bottom-4">
              <Link href="/mysetup/specPC">
                <button className="bg-white text-black font-semibold px-4 py-2 rounded-md text-sm shadow-md">
                  Lihat
                </button>
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative w-full max-w-[700px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] group overflow-hidden rounded-lg shadow-lg">
            {/* Image */}
            <Image
              src="/image/gear.jpeg"
              alt="Gear"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-500" />
            {/* Title */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow-lg">
                Gear
              </span>
            </div>
            {/* Hover button khusus desktop */}
            <Link href="/mysetup/gear" className="hidden lg:block">
              <div className="absolute inset-0 bg-white text-black flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <button className="bg-gray-300 font-bold px-6 py-2 rounded-md">
                  Lihat
                </button>
              </div>
            </Link>

            {/* Tombol kecil pojok kiri khusus mobile */}
            <div className="block lg:hidden absolute left-4 bottom-4">
              <Link href="/mysetup/gear">
                <button className="bg-white text-black font-semibold px-4 py-2 rounded-md text-sm shadow-md">
                  Lihat
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
