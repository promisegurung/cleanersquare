import * as React from "react"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <div
    style={{
      height: "0.5rem",
      maxWidth: 960,
      background: `linear-gradient(90deg, #1E3F75 0%, #33B8BB 54.69%, #29A5A8 100%)`,
    }}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
