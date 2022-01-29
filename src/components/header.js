import * as React from "react"
import PropTypes from "prop-types"
import logo from "../icons/logo1.svg"

const Header = ({ siteTitle }) => (
  <div
    style={{
      display: `flex`,
      alignItems: `center`,
      maxWidth: 960,
      paddingTop: `1.5rem`,
      paddingLeft: `1rem`,
      // borderTop: `10px solid linear-gradient(90deg, #1E3F75 0%, #33B8BB 54.69%, #29A5A8 100%)`,
      background: `linear-gradient(var(--color-bg), var(--color-bg)) padding-box,
      linear-gradient(to right, darkblue, darkorchid) border-box`,
      borderRadius: "50em",
      border: "4px solid transparent",
    }}
  >
    <img src={logo} alt="logo" style={{ width: "190px" }} />
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
