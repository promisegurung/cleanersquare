import * as React from "react"
import "../styles/modules/form.module.css"

const Form = () => (
  <section>
    <>
      <h2>Pleased to meet you</h2>
      <p>
        Reach us anytime via <em>cleanersquare@gmail.com</em>
      </p>
    </>
    <form>
      <field>
        <fieldTag>Name</fieldTag>
        <input placeholder="Your name"></input>
      </field>
      <field>
        <fieldTag>Email</fieldTag>
        <input placeholder="you@company.com"></input>
      </field>
      <field>
        <fieldTag>Phone number</fieldTag>
        <input placeholder="0800 323 4040"></input>
      </field>
      <field>
        <fieldTag>How can we help?</fieldTag>
        <textarea placeholder="Tell us a little about your enquiry"></textarea>
      </field>
      <button>Leave a message</button>
    </form>
  </section>
)

export default Form
