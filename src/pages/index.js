import React from "react"

import About from "../components/sections/About/About"
import Features from "../components/sections/Features/Features"
import Tours from "../components/sections/Tours/Tours"
import Testimonials from "../components/sections/Testimonials/Testimonials"
import Booking from "../components/sections/Booking/Booking"
import Popup from "../components/Popup/Popup"
import Layout from "../components/layouts"
import SEO from "../components/SEO/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Beach Tours`, `Beach Hop`]} />
    <About />
    <Features />
    <Tours />
    <Testimonials />
    <Booking />
    <Popup />
  </Layout>
)

export default IndexPage
