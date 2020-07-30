import React from "react"

const Resources = () => {
  return (
    <section className="page-wrapper">
      <h1 className="section-title">Resources:</h1>
      <br />
      <hr />
      <br />
      <div>
        <h2>Things to do:</h2>
        <br />
        <strong style={{ fontWeight: "bold", fontSize: "1.2em" }}>
          Layout
        </strong>
        <ul>
          <li style={{ textDecoration: "line-through" }}>
            Menu icon re-alignment
          </li>
          <li style={{ color: "orange" }}>
            Update the header to Name or Page Title -- to decide later
          </li>
          <li>React Routing</li>
          <li style={{ textDecoration: "line-through" }}>Add social icons</li>
          <li style={{ color: "orange" }}>
            Add background colour / design (marble/off-white) -- Jess to choose
          </li>
          <li style={{ color: "orange" }}>
            Maybe add an aboriginal 'support' flags or something. -- Leave for Now
          </li>
        </ul>
        <br />
        <strong style={{ fontWeight: "bold", fontSize: "1.2em", color: 'orange' }}>Home</strong>
        <ul>
          <li style={{ color: "orange" }}>
            Format page - waiting for info ("JESS: to write a paragraph about my
            life philosophy/moral purpose")
          </li>
        </ul>
        <br />
        <strong
          style={{ fontWeight: "bold", fontSize: "1.2em", color: "green" }}
        >
          About
        </strong>
        <ul>
          <li style={{ textDecoration: "line-through" }}>Update new info</li>
          <li style={{ textDecoration: "line-through" }}>Change photo</li>
        </ul>
        <br />
        <strong style={{ fontWeight: "bold", fontSize: "1.2em", color: 'orange' }}>
          Research
        </strong>
        <ul>
          <li style={{ color: "orange" }}>
            Add info similar to events page -- waiting for Jess' clarification
            on projects
          </li>
          <li style={{ textDecoration: "line-through" }}>
            Add AASE newsletter
          </li>
        </ul>
        <br />
        <strong style={{ fontWeight: "bold", fontSize: "1.2em", color: 'orange' }}>
          Events
        </strong>
        <ul>
          <li style={{ textDecoration: "line-through" }}>Add new events</li>
          <li style={{ color: "orange" }}>
            Add old events -- waiting on Jess to update form
          </li>
        </ul>
        <br />
        <strong
          style={{ fontWeight: "bold", fontSize: "1.2em", color: "orange" }}
        >
          Consulting
        </strong>
        <ul>
          <li style={{ color: "orange" }}>Waiting for info</li>
          <li style={{ color: "orange" }}>
            Probably merge/delete this page with the contact page for first release -- waiting on Jess' thoughts
          </li>
          <li style={{ color: "orange" }}>
            Add booking functionality at a later date.
          </li>
        </ul>
        <br />
        <strong
          style={{ fontWeight: "bold", fontSize: "1.2em", color: "orange" }}
        >
          Resources
        </strong>
        <ul>
          <li style={{ color: "orange" }}>Waiting for info</li>
          <li style={{ color: "orange" }}>
            We can remove this section for the first update if you want --
            waiting on Jess' thoughts
          </li>
        </ul>
        <br />
        <strong
          style={{ fontWeight: "bold", fontSize: "1.2em", color: "orange" }}
        >
          Contact
        </strong>
        <ul>
          <li style={{ color: 'orange' }}>Jess to write a "contact me" descrition</li>
          <li style={{ color: "orange" }}>
            Update form with validation -- waiting on Jess's thoughts
          </li>
          <li style={{ color: "orange" }}>
            Form should go to : jessica.colleut@gmail.com -- waiting on domain
          </li>
          <li style={{ color: "orange" }}>
            Add a reCapture https://www.npmjs.com/package/react-recaptcha --
            waiting on domain
          </li>
          <li style={{ color: "orange" }}>
            Need a domain first. -- waiting on Jess' thoughts
          </li>
        </ul>
        <br />
        <strong
          style={{ fontWeight: "bold", fontSize: "1.2em", color: "green" }}
        >
          All
        </strong>
        <ul>
          <li style={{ textDecoration: "line-through" }}>Add animations</li>
        </ul>
      </div>
    </section>
  )
}

export default Resources
