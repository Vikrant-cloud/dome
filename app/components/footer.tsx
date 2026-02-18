import Image from "next/image"
export default function Footer() {
  return (
    <footer className="text-white bg-[#C56B45]">

      <div className="px-15 py-10">

        <div className="grid grid-cols-7 gap-6">
          <Image
            src="/logo/002.svg"
            alt="Logo"
            width={38}
            height={38}
          />

          <div className="col-span-2">
            <h2 className="font-medium text-[24px] leading-[100%] tracking-[0%] uppercase mb-10">
              Every Move, Structured.
            </h2>

            <div className="leading-7 space-y-4">
              <p className="font-normal text-[14px] tracking-[0%]">
                123 Street Name,<br />
                Suburb 3000
              </p>

              <p className="font-normal text-[14px] tracking-[0%]">Melbourne, VIC</p>
            </div>

          </div>

          <div>
            <h3 className="font-bold text-[15px] leading-[100%] tracking-[0%] align-middle uppercase mb-6">
              Services
            </h3>

            <ul className="space-y-4 text-white/90">
              <li className="font-normal text-[14px] leading-[100%] tracking-[0%] align-middle">Home Buyers</li>
              <li className="font-normal text-[14px] leading-[100%] tracking-[0%] align-middle">Investors</li>
              <li className="font-normal text-[14px] leading-[100%] tracking-[0%] align-middle">Buyerbud +</li>
              <li className="font-normal text-[14px] leading-[100%] tracking-[0%] align-middle">SMSF Purchase</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[15px] leading-[100%] tracking-[0%] align-middle uppercase mb-6">
              Locations
            </h3>

            <ul className="space-y-4 text-white/90">
              <li className="font-normal text-[14px] leading-[100%] tracking-[0%] align-middle">Melbourne</li>
              <li className="font-normal text-[14px] leading-[100%] tracking-[0%] align-middle">Sydney</li>
              <li className="font-normal text-[14px] leading-[100%] tracking-[0%] align-middle">Perth</li>
              <li className="font-normal text-[14px] leading-[100%] tracking-[0%] align-middle">Brisbane</li>
              <li className="font-normal text-[14px] leading-[100%] tracking-[0%] align-middle">Hobart</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[15px] leading-[100%] tracking-[0%] align-middle uppercase mb-6">
              About
            </h3>

            <ul className="space-y-4 text-white/90">
              <li className="font-normal text-[14px] leading-[100%] tracking-[0%] align-middle">Our Team</li>
              <li className="font-normal text-[14px] leading-[100%] tracking-[0%] align-middle">Resources</li>
              <li className="font-normal text-[14px] leading-[100%] tracking-[0%] align-middle">Contact Us</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[15px] leading-[100%] tracking-[0%] align-middle uppercase mb-6">
              Case Studies
            </h3>

            <ul className="space-y-4 text-white/90">
              <li className="font-normal text-[14px] leading-[100%] tracking-[0%] align-middle">Name & Name</li>
              <li className="font-normal text-[14px] leading-[100%] tracking-[0%] align-middle">Name & Name</li>
              <li className="font-normal text-[14px] leading-[100%] tracking-[0%] align-middle">Name & Name</li>
              <li className="font-normal text-[14px] leading-[100%] tracking-[0%] align-middle">Name & Name</li>
              <li className="font-normal text-[14px] leading-[100%] tracking-[0%] align-middle">Name & Name</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center pt-16 mt-16 text-sm tracking-wide text-white/90">
          <p>COPYRIGHT 2026</p>
          <p>DESIGN BY CORELANDS</p>
        </div>

      </div>
    </footer>
  )
}
