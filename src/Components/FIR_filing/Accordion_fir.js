import React from 'react'
import './fir_filing.css'
function Accordion_fir(props) {
  return (
    <div>
        <div className="accordion accordion-flush my-3 mx-5" id="accordionFlushExample">
  <div className="accordion-item">
    <h1 className="accordion-header">
      <button className="accordion-button collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${props.uid}`} aria-expanded="false" aria-controls={`flush-collapse${props.uid}`}>
        <h5> {props.heading}</h5>
       
      </button>
    </h1>
    <div id={`flush-collapse${props.uid}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">{props.answer}</div>
    </div>
  </div>
 
    </div>
    </div>
  )
}

export default Accordion_fir