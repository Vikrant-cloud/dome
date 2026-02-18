import Image from "next/image"

const ContactUs: React.FC = () => {
  return (
    <>
      <section className="w-full bg-[#EFEFEF] py-18 px-6 lg:px-16">
        <div className="max-w-7xl">
          <h1
            className="font-normal text-[41.2px] leading-[100%] tracking-normal uppercase text-black"
          >
            START WITH <br /> DOME
          </h1>
        </div>
      </section>
      <section className="w-full  border border-black">
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-between p-15 border-r border-gray-400">
            <div>
              <h2 className="font-normal text-[32px] leading-[35px]">
                1800 000 000
              </h2>
              <h3 className="font-normal text-[32px] leading-[35px]">
                info@dome.com.au
              </h3>
            </div>

            <p className="max-w-md font-normal text-[16px] leading-[20px] text-black pt-15">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>

          </div>

          <div className="py-15 px-12 flex flex-col justify-center">
            <h2 className="font-medium text-[20px] leading-[50px] tracking-normal align-middle text-[#1E1E1E] mb-15">
              GET IN TOUCH WITH US
            </h2>
            <form className="space-y-6">
              <div>
                <label className="font-normal text-[14px] leading-[50px] tracking-normal align-middle text-[#1E1E1E]">
                  FULL NAME:
                </label>
                <input
                  type="text"
                  className="pb-1 w-full bg-transparent border-b border-gray-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="font-normal text-[14px] leading-[50px] tracking-normal align-middle text-[#1E1E1E]">
                    PHONE NUMBER:
                  </label>
                  <input
                    type="text"
                    className="pb-1 w-full bg-transparent border-b border-gray-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-normal text-[14px] leading-[50px] tracking-normal align-middle text-[#1E1E1E]">
                    EMAIL:
                  </label>
                  <input
                    type="email"
                    className="pb-1 w-full bg-transparent border-b border-gray-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="font-normal text-[14px] leading-[50px] tracking-normal align-middle text-[#1E1E1E]">
                  MESSAGE:
                </label>
                <textarea
                  className="pb-1 w-full bg-transparent border-b border-gray-400 focus:outline-none resize-none"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="cursor-pointer tracking-widest rounded border-b border-black  border border-black px-12 py-2 font-normal text-[13px] leading-[100%] tracking-normal text-center uppercase text-black"
                >
                  SEND
                </button>
              </div>

            </form>
          </div>

        </div>
        <div className="border-b border-gray-300 relative  h-96">
          <Image
            src="/images/bg.jpg"
            alt="Dome"
            fill
            className="object-cover"
          />
        </div>
      </section>
    </>

  )
}
export default ContactUs