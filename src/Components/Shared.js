import React, { useState } from 'react'

function Shared() {
    const [color1, setColor1] = useState("lightgray");
    const [color2, setColor2] = useState("lightgray");
    const shared_incidents=()=>{
        setColor1("blue");
    }
    const shared_tips=()=>{
        setColor2("blue");
    }
  return (
  <>
  <div className="container my-3" style={{backgroundColor: 'lightgray',border: '3px solid black'}}>
    <div className="row text-center">
        <div className="col-6" style={{backgroundColor: {color1}}}><button className="btn btn-lightgray my-2 mx-5" onClick={shared_incidents}>
            <h3>Shared Incidents</h3>
            </button></div>
        <div className="col-6" style={{backgroundColor: {color2}}}><button className="btn btn-lightgray my-2 mx-5" onClick={shared_tips}><h3>Shared Tips</h3></button>
</div>
    </div>
</div>
<div class="container text-center">
  <div class="row align-items-start">
    <div class="col-4"><div class="card" style={{width: "20rem"}}>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
    </div>
    <div class="col-4"><div class="card" style={{width: "20rem"}}>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
    </div>
    <div class="col-4"><div class="card" style={{width: "20rem"}}>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
    </div>
  </div>
</div>


  </>
  )
}

export default Shared