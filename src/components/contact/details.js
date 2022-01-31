import * as React from "react"
import "../../styles/contact.module.css"
import phone from "../../icons/phone.svg"
import mail from "../../icons/mail.svg"
import location from "../../icons/location.svg"

import logographics from "../../icons/logographics.svg"

const Contact = () => (
  <div>
    <h2>Contact Information</h2>
    <contacts>
      <contact>
        <img src={phone} alt="phone" />
        <p2>0800 323 4040</p2>
      </contact>
      <contact>
        <img src={mail} alt="mail" />
        <p2>cleanersquare@gmail.com</p2>
      </contact>
      <contact>
        <img src={location} alt="location" />
        <p2>102 London Road</p2>
      </contact>
    </contacts>
    <graphics>
      <img src={logographics} alt="logographics" />
    </graphics>
  </div>
)

export default Contact
