import * as React from "react"
import logographics from "../icons/logographics.svg"

const Hero = () => (
  <section>
    <h1>
      The Best
      <br />
      & Compete Cleaning
      <br />
      in <em>London</em>
    </h1>
    <p style={{ maxWidth: "35ch" }}>
      Our 100% Happiness Guarantee ensures that you receive the best cleaning.
    </p>
    <button>Contact us</button>
    <herographics>
      <img src={logographics} alt="logographics" />
    </herographics>
  </section>
)

export default Hero
