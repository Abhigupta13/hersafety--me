import React, { useState } from 'react'
import Home_carousel from './Home_carousel'
import MapArea from './mapArea/MapArea';

function Home() {
    const [btnColor, setbtnColor] = useState("primary");
    const [question, setQuestion] = useState("Have you been sexually harassed?");
    const [commonSubmit, setCommonSubmit] = useState("Share Your Incident Anonymously")
    const [descreption, setDescreption] = useState("Join the 40000+ people who have shared their experiences to make public spaces safer. Sharing your experience helps us identify patterns and create safer spaces. Information is analysed to engage our communities to find solutions and hold our civic and police officials accountable to have better policies and infrastructure. Your information remains anonymous.")
    const shareIncident=()=>{
        setQuestion("Have you been sexually harassed?");
        setCommonSubmit("Share Your Incident Anonymously");
        setbtnColor("primary");
        setDescreption("Join the 40000+ people who have shared their experiences to make public spaces safer. Sharing your experience helps us identify patterns and create safer spaces. Information is analysed to engage our communities to find solutions and hold our civic and police officials accountable to have better policies and infrastructure. Your information remains anonymous.");
    }
    const shareTips=()=>{
        setQuestion("How do you navigate public places safely?");
        setCommonSubmit("Share Safety Tip Anonymously");
        setbtnColor("warning");
        setDescreption("Have you found a way out of a potentially traumatic experience? Have you identified ways to commute through your city safely? Tell us what you do for your safety so that others can do the same.");
    }
  return (
    <>
    <Home_carousel/>
    <MapArea/>
    {/* <div className="container text-center justify-content-center my-5">
        <div className="row">
            <div className="col-6 ">
                <h2 className='mb-3'>Map View</h2>
                <img className="position-relative w-100" src="https://scitechdaily.com/images/COVID-19-Coronavirus-Map-March-22.jpg" alt="..."/>
            </div>
            <div className="col-6 ">
                <h2 className='mb-3'>Share Insidents and Tips</h2>
                <button className="btn btn-outline-primary mx-4 my-2" onClick={shareIncident}>Share Insidents</button>
                <button className="btn btn-outline-primary mx-4 my-2" onClick={shareTips}>Share Tips</button>
                <div className="container text-start ms-5 my-2">
                <h4 className='text-primary'>{question}</h4>
                <br/>
                <p>{descreption}</p>
                <button className={`btn btn-${btnColor} mx-4 my-2`}>{commonSubmit}</button>
                </div>
            </div>
        </div>
    </div> */}
    </>
  )
}

export default Home