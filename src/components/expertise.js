import * as React from "react"
import "../styles/modules/expertise.module.css"
import construction from "../images/construction.jpg"
import commercial from "../images/commercial.jpg"
import residential from "../images/residential.jpg"
import workspaces from "../images/workspaces.jpg"
import Indicators from "./indicators"

const Expertise = () => (
  <section>
    <>
      <h2>Top Rated Services</h2>
      <h1>Our Expertise</h1>
    </>
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
    <h1>{title}</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam.
    </p>
  </service>
)
export default Expertise
