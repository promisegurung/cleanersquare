import * as React from "react"
import PropTypes from "prop-types"
import logo from "../icons/logo.svg"

const Header = ({ siteTitle }) => (
  <header>
    <img src={logo} alt="logo" style={{ width: "190px" }} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
