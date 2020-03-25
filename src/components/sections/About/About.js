import React from "react"

import Button from "../../UI/Button/Button"
import photo1 from "../../../assets/img/nat-1.jpg"
import photo2 from "../../../assets/img/nat-3.jpg"
import photo3 from "../../../assets/img/nat-2.jpg"
import photo1Large from "../../../assets/img/nat-1-large.jpg"
import photo2Large from "../../../assets/img/nat-3-large.jpg"
import photo3Large from "../../../assets/img/nat-2-large.jpg"

const About = () => (
  <section className="section-about" id="section-about">
    <div className="u-center-text u-margin-bottom-large">
      <h2 className="heading-secondary">
        Pristine beach tours for any activity
      </h2>
    </div>
    <div className="row">
      <div className="col-1-of-2">
        <h3 className="heading-tertiary u-margin-bottom-small">
          No matter the activity, we've got you covered.
        </h3>
        <p className="paragraph">
          Whether you're looking to relax on a beach chair, snorkel, surf or
          even scuba dive, our tours will help you find the right beach for your
          favorite activity.
        </p>
        <h3 className="heading-tertiary u-margin-bottom-small">
          Hidden beaches with pristine waters
        </h3>
        <p className="paragraph">
          Avoid the crowds and discover a piece of paradise that few have seen.
          Our breathtaking tours will make you fall in love with the ocean all
          over again.
        </p>
        <Button btnType="text">Learn more &rarr;</Button>
      </div>
      <div className="col-1-of-2">
        <div className="composition">
          <img
            srcSet={`${photo1} 300w, ${photo1Large} 1000w`}
            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
            className="composition__photo composition__photo--p1"
            src={photo1}
            alt="Surfers"
          />
          <img
            srcSet={`${photo2} 300w, ${photo2Large} 1000w`}
            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
            className="composition__photo composition__photo--p2"
            src={photo2}
            alt="Ocean waves"
          />
          <img
            srcSet={`${photo3} 300w, ${photo3Large} 1000w`}
            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
            className="composition__photo composition__photo--p3"
            src={photo3}
            alt="Snorkeling"
          />
        </div>
      </div>
    </div>
  </section>
)

export default About
