import Image from "next/image";

const DomeSection: React.FC = () => {
  return (
    <>
      <section className="w-full h-auto bg-white border border-black mb-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-auto">

          {/* Left side - Logo section */}
          <div className="flex flex-col border-r border-black py-8 sm:py-12 lg:py-[60px] px-8 sm:px-12 lg:px-[50px]">
            <div className="flex-1 mb-6 sm:mb-8">
              <Image
                src="/logo/001.svg"
                alt="Logo"
                width={30}
                height={30}
                className="sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-[38px] lg:h-[38px]"
              />
            </div>
            <div className="flex-1 flex items-end">
              <Image
                src="/images/dome-logo-dark.png"
                alt="Logo"
                width={200}
                height={39}
                className="w-32 h-auto sm:w-40 md:w-48 lg:w-[428px] lg:h-auto"
              />
            </div>
          </div>

          {/* Right side - Image and content */}
          <div className="flex flex-col border-l border-gray-300">
            {/* Image section */}
            <div className="border-b border-gray-300 relative h-64 sm:h-80 md:h-96">
              <Image
                src="/images/dome-image.jpg"
                alt="Dome"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Content section */}
            <div className="flex items-center py-8 sm:py-12 lg:py-[60px] px-8 sm:px-12 lg:px-[50px]">
              <div className="w-full max-w-2xl">
                <p className="font-normal text-sm sm:text-base leading-relaxed tracking-normal text-black mb-4 sm:mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <button className="cursor-pointer text-xs sm:text-sm tracking-widest pb-1 font-medium hover:opacity-70 transition-opacity">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default DomeSection