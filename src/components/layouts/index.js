import React from "react"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

import "../../assets/fonts/icon-font.css"
import "../../assets/sass/main.scss"

import Navigation from "./Navigation/Navigation"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Navigation />
        <Header />
        {children}
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
