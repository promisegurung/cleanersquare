import * as React from "react"
import "../styles/modules/reviews.module.css"
import reviewer1 from "../images/reviewer1.png"
import stars from "../icons/5stars.svg"

const Reviews = () => (
  <section>
    <header>
      <h2>Top Rated Solution</h2>
      <h1>Customer Reviews</h1>
    </header>
    <reviews>
      <Review />
      <Review />
      <Review />
    </reviews>
  </section>
)

const Review = () => (
  <review>
    <top>
      <img src={reviewer1} alt="a reviewer" />
      <reviewer>
        <name>Amy Smith</name>
        <occupation>Mother</occupation>
      </reviewer>
    </top>
    <middle>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam.
    </middle>
    <bottom>
      <date>Jan 16 2022</date>
      <img src={stars} alt="5 stars" />
    </bottom>
  </review>
)
export default Reviews
