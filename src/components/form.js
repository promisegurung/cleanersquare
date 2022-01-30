import * as React from "react"
import "../styles/form.module.css"

const Form = () => (
  <section>
    <div>
      <h2>Pleased to meet you</h2>
      <p>
        Reach us anytime via <em>cleanersquare@gmail.com</em>
      </p>
    </div>
    <form>
      <field>
        <h3>Name</h3>
        <input placeholder="Your name"></input>
      </field>
      <field>
        <h3>Email</h3>
        <input placeholder="you@company.com"></input>
      </field>
      <field>
        <h3>Phone number</h3>
        <input placeholder="0800 323 4040"></input>
      </field>
      <field>
        <h3>How can we help?</h3>
        <textarea placeholder="Tell us a little about your enquiry"></textarea>
      </field>
      <button>Leave a message</button>
    </form>
  </section>
)

export default Form
