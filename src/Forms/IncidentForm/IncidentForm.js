import React, { useState } from 'react'
import ProgressBar from "../ProgressBar/Progress";
import './incidentForm.css'
import IncidentDescription from "./IncidentDescription";
import Places from "./Places";
import Gender from "./Gender";
import Identity from "./Identity";
import Age from "./Age";
import Time from "./Time";
import TypeOfViolence from "./TypeOfViolence";
import ReportedToPolice from "./ReportedToPolice";
import Consent from './Consent';
import { useNavigate } from 'react-router-dom';

import axios from "axios";


function IncidentForm() {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const curDT = new Date().toLocaleString();
  const [consent, setConsent] = useState(false);
  const [formData, setFormData] = useState({
    age: "",
    identity: "",
    gender: "",
    title: "",
    message: "",
    time: curDT,
    typeOfViolence: "",
    reportToPolice: "",
    address: {
      country: "",
      state: "",
      city: "",
      lat: "",
      lng: "",
    },
  });
  
  const FormTitles = [
    "Consent Form",
    "For Whom You are Sharing For?",
    "Please tell us the gender",
    "Please Share the Age of the victim ?",
    "Please share Incident Time Here",
    "Can you tell us what happened?",
    "Select type of violence experienced",
    "Have the incident been reported to police?",
    "Please tell us where the incident took place",
  ];
  const pageDisplay =()=>{
    if (page === 0) {
      return <Consent consent={consent} setConsent={setConsent} />;
    } else if (page === 1) {
      return <Identity formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Gender formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <Age formData={formData} setFormData={setFormData} />;
    } else if (page === 4) {
      return <Time formData={formData} setFormData={setFormData} />;
    } else if (page === 5) {
      return (
        <IncidentDescription formData={formData} setFormData={setFormData} />
        );
      } else if (page === 6) {
        return <TypeOfViolence formData={formData} setFormData={setFormData} />;
      } else if (page === 7) {
        return <ReportedToPolice formData={formData} setFormData={setFormData} />;
      } else {
        return <Places formData={formData} setFormData={setFormData} />;
      }
    };
    const handleclick = () => {
      if (page === 0) {
        if (consent === false)
          alert("Please accept the Consent Form to continue!");
        else setPage((currPage) => currPage + 1);
        console.log(formData.consent);
      } else if (page === 1) {
        if (formData.identity === "") alert("Please Enter Your Identity");
        else setPage((currPage) => currPage + 1);
      } else if (page === 2) {
        if (formData.gender === "") alert("Please Enter Your Gender");
        else setPage((currPage) => currPage + 1);
      } else if (page === 3) {
        if (formData.age === "") alert("Please Enter Your Age");
        else if (formData.age < 15) alert("Please Enter a valid Age");
        else setPage((currPage) => currPage + 1);
      } else if (page === 4) {
        setPage((currPage) => currPage + 1);
      } else if (page === 5) {
        if (formData.title === "" || formData.message === "")
          alert("Please Enter the Valid Description or Title");
        else if (formData.message.length < 20)
          alert(
            `Please enter ${
              20 - formData.message.length
            } more Characters in Description!`
          );
        else if (formData.title.length < 6)
          alert(
            `Please enter ${6 - formData.title.length} more Characters in Title!`
          );
        else setPage((currPage) => currPage + 1);
      } else if (page === 6) {
        if (formData.typeOfViolence === "")
          alert("Please Enter Type Of Violence");
        else setPage((currPage) => currPage + 1);
      } else if (page === 7) {
        if (formData.reportToPolice === "")
          alert("Please Enter a Valid Choice!!");
        else setPage((currPage) => currPage + 1);
      }
    };
    const handleSubmit = async (e) => {
      setConsent(false);
      e.preventDefault();
  
      console.log(JSON.stringify(formData));
      await axios
        .post(
          "https://hercare-0nh9.onrender.com/incident",
          JSON.stringify(formData),
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((result) => {
          navigate("/");
        });
    };
    const checkPage = () => {
    if (page === FormTitles.length - 1) {
      return (
        <button className="btn btn-primary"
        onClick={handleSubmit}
      > Submit&nbsp;
      </button>
      
      );
    } else {
      return (
        <button className="btn btn-primary"
          onClick={handleclick}
        > Next&nbsp;
        </button>
        
      );
    }
  };
  

  return (
    <>
   <div className="Form">
    <div className='mt-3'>
            {" "}
            <ProgressBar done={parseInt(11.6 * page)} />
          </div>
      <div className="form-container text-center">
        <div className="formTitles">
          <h1><b>{FormTitles[page]}</b></h1>
        </div>
        <div className="body">{pageDisplay()}</div>
        <div className="IncidentFormBtns">
            <button className="btn btn-primary"
              //   className="prevBtn navigateBtn"
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
                setConsent(false);
              }}
            >
              &nbsp;Prev
            </button>
            {checkPage()}
            </div>
       
      </div>
    </div>
   
   </>
  )
}

export default IncidentForm