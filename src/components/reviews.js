import * as React from "react"
import "../styles/modules/reviews.module.css"
import reviewer1 from "../images/reviewer1.png"
import reviewer2 from "../images/reviewer2.png"
import reviewer3 from "../images/reviewer3.png"
import stars from "../icons/5stars.svg"
import Indicators from "./indicators"
const Reviews = () => (
  <section>
    <>
      <h2>Top Rated Solution</h2>
      <h1>Customer Reviews</h1>
    </>
    <reviews>
      <Review
        image={reviewer1}
        name="Amy Smith"
        occupation="Mother"
        date="Jan 16 2022"
      />
      <Review
        image={reviewer2}
        name="Thomas Darian"
        occupation="Contractor"
        date="Jan 9 2022"
      />
      <Review
        image={reviewer3}
        name="Adriana Porter"
        occupation="Business Owner"
        date="Dec 10 2021"
      />
    </reviews>
    <Indicators />
  </section>
)

const Review = ({ image, name, occupation, date }) => (
  <review>
    <top>
      <img src={image} alt="a reviewer" />
      <reviewer>
        <name>{name}</name>
        <occupation>{occupation}</occupation>
      </reviewer>
    </top>
    <middle>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam.
    </middle>
    <bottom>
      <date>{date}</date>
      <img src={stars} alt="5 stars" />
    </bottom>
  </review>
)
export default Reviews
