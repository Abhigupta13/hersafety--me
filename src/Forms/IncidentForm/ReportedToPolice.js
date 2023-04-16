import React from "react";

function ReportedToPolice({ formData, setFormData }) {
  const handleChange = (event) => {
    setFormData({ ...formData, reportToPolice: event.target.value });
  };

  return (
    <>
     <div className="police-container">
  <div className="btn-group-vertical " role="group"  value={formData.typeOfViolence} onChange={handleChange} sx={{ gap: 2 }}
        color="info" aria-label="Vertical radio toggle button group" style={{
            
            right: '138px',

          }}>
    <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio1" autocomplete="off"/>
    <label className="btn btn-outline-primary my-3" for="vbtn-radio1"   value="Yes I did"
          aria-label="list"
          style={{
            outlineColor: "#0047ab",
            outlineWidth: "1px",
            outlineStyle: "solid", width: "250%",
          }}
        >
          Yes I did</label>
    <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio2" autocomplete="off"/>
    <label className="btn btn-outline-primary my-3" for="vbtn-radio2"  value="I will, in the future"
          aria-label="module"
          style={{
            outlineColor: "#0047ab",
            outlineWidth: "1px",
            outlineStyle: "solid", width: "250%",
          }}
        >
          I will, in the future</label>
    <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio3" autocomplete="off"/>
    <label className="btn btn-outline-primary my-3" for="vbtn-radio3"  value="I am not sure if I want to"
          aria-label="quilt"
          style={{
            outlineColor: "#0047ab",
            outlineWidth: "1px",
            outlineStyle: "solid", width: "250%",
          }}
        >
          I am not sure if I want to</label>
    <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio4" autocomplete="off"/>
    <label className="btn btn-outline-primary my-3" for="vbtn-radio4"  value="No"
          aria-label="no"
          style={{
            outlineColor: "#0047ab",
            outlineWidth: "1px",
            outlineStyle: "solid", width: "250%",
          }}
        >
          No</label>
    <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio5" autocomplete="off"/>
    <label className="btn btn-outline-primary my-3" for="vbtn-radio5" value="I tried"
          aria-label="it"
          style={{
            outlineColor: "#0047ab",
            outlineWidth: "1px",
            outlineStyle: "solid", width: "250%",
          }}
        >
          I tried</label>
    </div>
    </div>
     
    </>
  );
}

export default ReportedToPolice;
