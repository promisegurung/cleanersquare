import * as React from "react"
import "../styles/modules/contact.module.css"
import phone from "../icons/phone.svg"
import mail from "../icons/mail.svg"
import location from "../icons/location.svg"

import logographics from "../icons/logographics.svg"

const Contact = () => (
  <section>
    <h2>Contact Information</h2>
    <contacts>
      <contact>
        <img src={phone} alt="phone" />
        <span>0800 323 4040</span>
      </contact>
      <contact>
        <img src={mail} alt="mail" />
        <span>cleanersquare@gmail.com</span>
      </contact>
      <contact>
        <img src={location} alt="location" />
        <span>102 London Road</span>
      </contact>
    </contacts>
    <graphics>
      <img src={logographics} alt="logographics" />
    </graphics>
  </section>
)

export default Contact
