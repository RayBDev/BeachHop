import React from "react"

import Testimonial from "./Testimonial/Testimonial"
import Button from "../../UI/Button/Button"
import BgVideo from "../../UI/BgVideo/BgVideo"
import testimonial1 from "../../../assets/img/nat-8.jpg"
import testimonial2 from "../../../assets/img/nat-9.jpg"
import bgmp4Video from "../../../assets/img/video.mp4"
import bgwebmVideo from "../../../assets/img/video.webm"

const testimonials = {
  testimonial1: {
    image: testimonial1,
    imageAlt: "Person on a tour",
    imageCaption: "Alyssa Fox",
    heading: "An experience of a lifetime",
    testimonial:
      "After speaking with a Beach Hop representative I chose the Jungle Explorer tour. The hike took about 30 minutes before we arrived at the most beautiful sands and water I've ever seen. We were given the option to see more beaches but I stayed put. I would definitely do this tour again to see the other beaches.",
  },
  testimonial2: {
    image: testimonial2,
    imageAlt: "Person on a tour",
    imageCaption: "Brian Tom",
    heading: "Perfect surfing without the crowds",
    testimonial:
      "The one thing that bothers me about surfing in public areas is fighting 20 other surfers to catch the same wave. The Beach Hop crew showed me the perfect spot where me and 2 other people could surf all day. The conditions were excellent! I would do this again to see what other spots they can show me.",
  },
}

const Testimonials = () => {
  let testimonialList = []
  for (let key in testimonials) {
    testimonialList.push(
      <Testimonial
        key={key}
        image={testimonials[key].image}
        alt={testimonials[key].imageAlt}
        imageCaption={testimonials[key].imageCaption}
        heading={testimonials[key].heading}
        testimonial={testimonials[key].testimonial}
      />
    )
  }
  return (
    <section className="section-testimonials" id="section-testimonials">
      <BgVideo mp4Video={bgmp4Video} webmVideo={bgwebmVideo} />
      <div className="u-center-text u-margin-bottom-large">
        <h2 className="heading-secondary">What our customers say about us</h2>
      </div>
      {testimonialList}
      <div className="u-center-text u-margin-bottom-extraLarge">
        <Button btnType="text">Read all testimonials &rarr;</Button>
      </div>
    </section>
  )
}

export default Testimonials
