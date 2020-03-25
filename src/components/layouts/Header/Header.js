import React from "react"

import Button from "../../UI/Button/Button"
import logoWhite from "../../../assets/img/logo-white.png"

const Header = () => (
  <header className="header">
    <div className="header__logo-box">
      <img src={logoWhite} alt="Natours Logo" className="header__logo" />
    </div>
    <div className="header__text-box">
      <h1 className="heading-primary">
        <span className="heading-primary--main">Adventure</span>
        <span className="heading-primary--sub">discover hidden beaches</span>
      </h1>
      <Button
        btnType="main"
        color="white"
        animated={true}
        link="#section-tours"
      >
        See our tours
      </Button>
    </div>
  </header>
)

export default Header
