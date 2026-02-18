const Purchases: React.FC = () => {
  return (
    <>
      <p className="font-normal text-[15px] leading-[100%] tracking-[0] align-bottom uppercase text-black px-12 py-6">OUR PURCHASES</p>
      <section className="w-full bg-white border border-black mb-36">
        <div className="grid grid-cols-2 h-full">

          <div className="flex flex-col border-r border-black">
            <div className="h-[20%] p-12 border-b border-black">
              <h1 className="font-normal text-[36px] leading-[100%] tracking-normal uppercase text-black">123 Street name,<br />
                suburb 3000</h1>
            </div>
            <div className="h-[80%]">
              <img
                src="/images/grid-1.png"
                alt="House"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col border-l border-black">
            <div className="h-[80%] border-b border-black">
              <div className="grid grid-cols-2 h-full bg-[#C86C45]">
                <div className="flex flex-col justify-center items-center px-12">
                  <p className="text-white leading-relaxed mb-6 max-w-xl text-center ">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
                  </p>
                  <p className="text-white leading-relaxed mb-6 max-w-xl text-center">
                    Client Name, Information
                  </p>
                </div>
                <img
                  src="/images/grid-2.png"
                  alt="House"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
            <div className="h-[20%] flex items-center px-12">
              <div>
                <p className="font-normal text-[16px] leading-[20px] tracking-normal text-black mb-6">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="cursor-pointer tracking-widest rounded border-b border-black  border border-black px-12 py-2 font-normal text-[13px] leading-[100%] tracking-normal text-center uppercase text-black">
                  SEE ALL
                </button>
              </div>
            </div>
          </div>

        </div>
        <div className="grid grid-cols-2 h-full">

          <div className="flex flex-col border-r border-black">
            <div className="h-[20%] p-12 border-b border-black">
              <h1 className="text-4xl font-bold">123 Street name<br />
                suburb 3000</h1>
            </div>
            <div className="h-[80%] border-b border-black">
              <div className="grid grid-cols-2 h-full bg-[#C86C45]">
                <img
                  src="/images/grid-3.png"
                  alt="House"
                  className="w-full h-full object-cover"
                />
                <div className="flex flex-col justify-center items-center px-12">
                  <p className="text-white leading-relaxed mb-6 max-w-xl text-center ">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
                  </p>
                  <p className="text-white leading-relaxed mb-6 max-w-xl text-center">
                    Client Name, Information
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col border-l border-black">
            <div className="h-[80%]">
              <img
                src="/images/grid-4.png"
                alt="House"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center py-[50px] px-[60px]">
              <div>
               <p className="font-normal text-[16px] leading-[20px] tracking-normal text-black mb-6">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="cursor-pointer tracking-widest rounded border-b border-black  border border-black px-12 py-2 font-normal text-[13px] leading-[100%] tracking-normal text-center uppercase text-black">
                  SEE ALL
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>

  )
}

export default Purchases