import React from "react"

const Resources = () => {
  return (
    <section className="page-wrapper">
      <h1 className="section-title">Resources:</h1>
      <br /><hr /><br />
      <div>
        <h2>Things to do:</h2>
        <br />
        <strong style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Layout</strong>
        <ul>
          <li style={{ textDecoration: 'line-through' }}>Menu icon re-alignment</li>
          <li style={{ color: 'orange' }}>Update the header to Name or Page Title -- to decide later</li>
          <li>React Routing</li>
          <li style={{ textDecoration: 'line-through' }}>Add social icons</li>
          <li style={{ color: 'orange' }}>Add background colour / design (marble/off-white)</li>
          <li style={{ color: 'orange' }}>Maybe add an aboriginal 'support' flags or something.</li>
        </ul>
        <br />
        <strong style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Home</strong>
        <ul>
          <li style={{ color: 'orange' }}>Format page - waiting for info (JESS: to write a paragraph about my life philosophy/moral purpose)</li>
          <li></li>
        </ul>
        <br />
        <strong style={{ fontWeight: 'bold', fontSize: '1.2em' }}>About</strong>
        <ul>
          <li style={{textDecoration: 'line-through'}}>Update new info</li>
          <li>Change photo?</li>
          <li></li>
        </ul>
        <br />
        <strong style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Research</strong>
        <ul>
          <li>Add info similar to events page</li>
          <li style={{ textDecoration: 'line-through' }}>Add AASE newsletter</li>
          <li></li>
        </ul>
        <br />
        <strong style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Events</strong>
        <ul>
          <li></li>
          <li></li>
        </ul>
        <br />
        <strong style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Consulting</strong>
        <ul>
          <li style={{ color: 'orange' }}>Waiting for info</li>
          <li></li>
        </ul>
        <br />
        <strong style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Resources</strong>
        <ul>
          <li style={{ color: 'orange' }}>Waiting for info</li>
          <li></li>
        </ul>
        <br />
        <strong style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Contact</strong>
        <ul>
          <li>Update form with validation</li>
          <li>Add posting form logic</li>
          <li>Form should go to : jessica.colleut@gmail.com</li>
          <li></li>
        </ul>
        <br />
        <strong style={{ fontWeight: 'bold', fontSize: '1.2em' }}>All</strong>
        <ul>
          <li>Add animations</li>
          <li></li>
        </ul>
      </div>
    </section>
  )
}

export default Resources
