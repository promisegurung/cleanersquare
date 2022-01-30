import * as React from "react"
import "../styles/modules/footer.module.css"

const Footer = () => (
  <footer>
    © {new Date().getFullYear()} Cleaner Square Limited. Built with &#9829;
    {` by `}
    <a href="https://www.gatsbyjs.com">Promise</a>
  </footer>
)

export default Footer
