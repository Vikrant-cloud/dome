import Header from "./header";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/bg.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/10" />
      <Header />
      <div className="relative z-10 flex flex-col justify-end h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 text-white">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            Melbourne's Favourite <br />
            Buyers Agents
          </h1>
        </div>

        <div className="mt-8 sm:mt-12 md:mt-16 text-xl sm:text-2xl animate-bounce cursor-pointer w-min">
          ↓
        </div>
      </div>
    </section>
  )
}

export default Hero;