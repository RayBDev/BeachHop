import React from "react"

import Feature from "./Feature/Feature"

const features = {
  feature1: {
    icon: "basic-picture",
    heading: "Picturesque Views",
    content:
      "Our pristine beaches will leave you in awe of their natural beauty. Don't forget to bring your camera!",
  },
  feature2: {
    icon: "basic-compass",
    heading: "off the beaten path",
    content:
      "Get ready for an adventure as we trek through the jungle to find beaches that are untouched by the crowds.",
  },
  feature3: {
    icon: "basic-calendar",
    heading: "Year round tours",
    content:
      "We run tours year round visiting different beaches based on the season and your desired activity.",
  },
  feature4: {
    icon: "basic-life-buoy",
    heading: "Safety guaranteed",
    content:
      "Medical staff are always on call so we can ensure our customers are having a fun and safe experience.",
  },
}

const Features = () => {
  let featureList = []
  for (let feature in features) {
    featureList.push(
      <Feature
        key={feature}
        icon={features[feature].icon}
        heading={features[feature].heading}
        content={features[feature].content}
      />
    )
  }

  return (
    <section className="section-features" id="section-features">
      <div className="row">{featureList}</div>
    </section>
  )
}

export default Features
