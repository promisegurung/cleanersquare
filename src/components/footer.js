import * as React from "react"

const Footer = () => (
  <footer style={footerStyles}>
    <span style={{ marginBottom: "0.5rem" }}>
      © {new Date().getFullYear()} Cleaner Square Limited
    </span>
    <span>
      Built with &#9829;
      {` by `}
      <a href="https://www.gatsbyjs.com">Promise</a>
    </span>
  </footer>
)

const footerStyles = {
  backgroundColor: "black",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: `10rem -1.0875rem 0 -1.45rem`,
  padding: `1.45rem`,
  width: "100vw",
  fontSize: "0.5rem",
}

export default Footer
