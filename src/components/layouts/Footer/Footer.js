import React from "react"

import FooterLink from "./FooterLink/FooterLink"
import logo1x from "../../../assets/img/logo-blue-1x.png"
import logo2x from "../../../assets/img/logo-blue-2x.png"
import logo1xSmall from "../../../assets/img/logo-blue-small-1x.png"
import logo2xSmall from "../../../assets/img/logo-blue-small-2x.png"

const menuLinkDetails = {
  first: {
    name: "Company",
    address: "#",
  },
  second: {
    name: "Contact us",
    address: "#",
  },
  third: {
    name: "Careers",
    address: "#",
  },
  fourth: {
    name: "Privacy",
    address: "#",
  },
  fifth: {
    name: "Terms",
    address: "#",
  },
}

const Footer = () => {
  let menuLinks = []
  for (let key in menuLinkDetails) {
    menuLinks.push(
      <FooterLink
        key={key}
        linkName={menuLinkDetails[key].name}
        linkAddress={menuLinkDetails[key].address}
      />
    )
  }
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <picture className="footer__logo">
          <source
            srcSet={`${logo1xSmall} 1x, ${logo2xSmall} 2x`}
            media="(max-width: 37.5em)"
          />
          <img
            srcSet={`${logo1x} 1x, ${logo2x} 2x`}
            alt="Full logo"
            src={logo2x}
          />
        </picture>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">{menuLinks}</ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Copyright &copy; 2021 Beach Hop. All rights reserved. <br />
            Developed by Tactic Apps and designed by Jonas Schmedtmann.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
