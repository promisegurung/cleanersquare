import * as React from "react"
import "../styles/expertise.module.css"
import construction from "../images/construction.jpg"
import commercial from "../images/commercial.jpg"
import residential from "../images/residential.jpg"
import workspaces from "../images/workspaces.jpg"
import Indicators from "./indicators"

const Expertise = () => (
  <section>
    <div>
      <h4>Top Rated Services</h4>
      <h2>Our Expertise</h2>
    </div>
    <services>
      <Service image={construction} title="Construction Sites" />
      <Service image={commercial} title="Commercial Sites" />
      <Service image={residential} title="Residential Sites" />
      <Service image={workspaces} title="Workspaces" />
    </services>
    <Indicators />
  </section>
)

const Service = ({ image, title }) => (
  <service>
    <img src={image} alt="a reviewer" />
    <h3>{title}</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam.
    </p>
  </service>
)
export default Expertise
