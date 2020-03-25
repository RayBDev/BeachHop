import React from "react"

import Button from "../UI/Button/Button"

import Tour1 from "../../assets/img/nat-8.jpg"
import Tour2 from "../../assets/img/nat-9.jpg"

const Popup = () => (
  <div className="popup" id="popup">
    <div className="popup__content">
      <div className="popup__left">
        <img src={Tour1} className="popup__img" />
        <img src={Tour2} className="popup__img" />
      </div>
      <div className="popup__right">
        <a href="#section-tours" className="popup__close">
          &times;
        </a>
        <h2 className="heading-secondary u-margin-bottom-small">
          Start booking now
        </h2>
        <h3 className="heading-tertiary u-margin-bottom-small">
          Important &ndash; Please read these terms before booking
        </h3>
        <p className="popup__text">
          Every effort is made to ensure the safety of our customers however, it
          is your responsibility to inform us of any preexisting medical
          conditions that may interfere with you hiking or doing activities. You
          must have a base level of fitness that allows you to hike up to 1 hour
          which includes up to 300 stairs. You are also responsible for
          informing us of any food allergies so we can prepare food that is safe
          for you to eat. Beach Hop and its employees will not be held
          responsible for any undisclosed medical conditions or food allergies
          that causes injury, hospitalization or death on any of our tours.
        </p>
        <div className="popup__button">
          <Button btnType="main" color="green" animated={true}>
            Book Now
          </Button>
        </div>
      </div>
    </div>
  </div>
)

export default Popup
