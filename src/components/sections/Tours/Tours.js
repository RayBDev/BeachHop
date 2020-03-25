import React from "react"

import Tour from "./Tour/Tour"
import Button from "../../UI/Button/Button"

const cardData = {
  card1: {
    id: 1,
    front: {
      heading: "The Activity Seeker",
      features: {
        first: "Beach tours for activity seekers",
        second: "Snorkel, Scuba, or Surf",
        third: "Up to 10 people",
        fourth: "Lessons optional",
        fifth: "Difficulty: Easy",
      },
    },
    back: {
      price: "$127",
      link: "#popup",
    },
  },
  card2: {
    id: 2,
    front: {
      heading: "The Mountain Climber",
      features: {
        first: "Discover beaches adorned by incredible cliffs",
        second: "Requires base level fitness",
        third: "Up to 20 people",
        fourth: "Food provided",
        fifth: "Difficulty: Medium",
      },
    },
    back: {
      price: "$207",
      link: "#popup",
    },
  },
  card3: {
    id: 3,
    front: {
      heading: "The Jungle Explorer",
      features: {
        first: "Hidden beaches framed by the jungle",
        second: "Requires base level fitness",
        third: "Up to 16 people",
        fourth: "Food provided",
        fifth: "Difficulty: Medium",
      },
    },
    back: {
      price: "$247",
      link: "#popup",
    },
  },
}

let cards = []
for (let card in cardData) {
  cards.push(
    <Tour
      key={cardData[card].id}
      cardNumber={cardData[card].id}
      heading={cardData[card].front.heading}
      features={cardData[card].front.features}
      price={cardData[card].back.price}
      link={cardData[card].back.link}
    />
  )
}

const Tours = () => (
  <section className="section-tours" id="section-tours">
    <div className="u-center-text u-margin-bottom-large">
      <h2 className="heading-secondary">Most popular tours</h2>
    </div>
    <div className="row">{cards}</div>
    <div className="u-center-text u-margin-top-extraLarge">
      <Button btnType="main" color="green" animated={true}>
        Discover all tours
      </Button>
    </div>
  </section>
)

export default Tours
