import ContactUs from "./components/contact_us"
import DomeSection from "./components/dome"
import Footer from "./components/footer"
import Hero from "./components/hero"
import Location from "./components/location"
import Purchases from "./components/purchases"
import TestimonialSlider from "./components/testimonials"
import WhatWeOffer from "./components/what_we_offer"

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <DomeSection />
      <WhatWeOffer />
      <Purchases />
      <TestimonialSlider />
      <Location />
      <ContactUs />
      <Footer />
    </>
  )
}

export default Home