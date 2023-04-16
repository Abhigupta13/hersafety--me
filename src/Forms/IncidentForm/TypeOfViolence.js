import React from "react";

function TypeOfViolence({ formData, setFormData }) {
  const handleChange = (event) => {
    setFormData({ ...formData, typeOfViolence: event.target.value });
  };

  return (
      <>
       <div className="voilence-container">
  <div className="btn-group-vertical " role="group"  value={formData.typeOfViolence} onChange={handleChange} sx={{ gap: 2 }}
        color="info" aria-label="Vertical radio toggle button group" style={{
            
            right: '68px',

          }}>
    <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio1" autocomplete="off"/>
    <label className="btn btn-outline-primary my-3" for="vbtn-radio1"  value="Rape/Sexual Assault"
            aria-label="Rape/Sexual Assault"
            style={{
              outlineColor: "#0047ab",
              outlineWidth: "1px",
              outlineStyle: "solid",
            }}
            >
            Rape/Sexual Assault</label>
    <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio2" autocomplete="off"/>
    <label className="btn btn-outline-primary my-3" for="vbtn-radio2"  value="Chain Snatching/Robbery"
            aria-label="Chain Snatching/Robbery"
            style={{
              outlineColor: "#0047ab",
              outlineWidth: "1px",
              outlineStyle: "solid",
            }}
            >
            Chain Snatching/Robbery</label>
    <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio3" autocomplete="off"/>
    <label className="btn btn-outline-primary my-3" for="vbtn-radio3"  value="Domestic Violence"
            aria-label="Domestic Violence"
            style={{
              outlineColor: "#0047ab",
              outlineWidth: "1px",
              outlineStyle: "solid",
            }}
            >
            Domestic Violence</label>
    <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio4" autocomplete="off"/>
    <label className="btn btn-outline-primary my-3" for="vbtn-radio4"  value="Physical Assault"
            aria-label="Physical Assault"
            style={{
              outlineColor: "#0047ab",
              outlineWidth: "1px",
              outlineStyle: "solid",
            }}
            >
            Physical Assault</label>
    <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio5" autocomplete="off"/>
    <label className="btn btn-outline-primary my-3" for="vbtn-radio5"  value="Stalking"
            aria-label="Stalking"
            style={{
              outlineColor: "#0047ab",
              outlineWidth: "1px",
              outlineStyle: "solid",
            }}
            >
            Stalking</label>
    <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio6" autocomplete="off"/>
    <label className="btn btn-outline-primary my-3" for="vbtn-radio6"  value="Online Harrasment"
            aria-label="Online Harrasment"
            style={{
              outlineColor: "#0047ab",
              outlineWidth: "1px",
              outlineStyle: "solid",
            }}
            >
            Online Harrasment</label>
  </div>
  <div className="btn-group-vertical " role="group"  value={formData.typeOfViolence} onChange={handleChange} sx={{ gap: 2 }}
        color="info" aria-label="Vertical radio toggle button group" style={{
            
            right: '0px',

          }}>
    <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio7" autocomplete="off"/>
    <label className="btn btn-outline-primary my-3" for="vbtn-radio7"   value="Ogling/Facial Expressions/Staring"
            aria-label="Ogling/Facial Expressions/Staring"
            style={{
              outlineColor: "#0047ab",
              outlineWidth: "1px",
              outlineStyle: "solid",
            }}
            >
            Ogling/Facial Expressions/Staring</label>
    <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio8" autocomplete="off"/>
    <label className="btn btn-outline-primary my-3" for="vbtn-radio8"  value="Taking photos without permission"
            aria-label="Taking photos without permission"
            style={{
              outlineColor: "#0047ab",
              outlineWidth: "1px",
              outlineStyle: "solid",
            }}
            >
            Taking photos without permission</label>
    <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio9" autocomplete="off"/>
    <label className="btn btn-outline-primary my-3" for="vbtn-radio9"  value="Indecent Exposure/Masturbation in public"
            aria-label="Indecent Exposure/Masturbation in public"
            style={{
              outlineColor: "#0047ab",
              outlineWidth: "1px",
              outlineStyle: "solid",
            }}
            >
            Indecent Exposure/Masturbation in public</label>
    <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio10" autocomplete="off"/>
    <label className="btn btn-outline-primary my-3" for="vbtn-radio10"  value="Touching /Groping"
            aria-label="Touching /Groping"
            style={{
              outlineColor: "#0047ab",
              outlineWidth: "1px",
              outlineStyle: "solid",
            }}
            >
            Touching /Groping</label>
    <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio11" autocomplete="off"/>
    <label className="btn btn-outline-primary my-3" for="vbtn-radio11"  value="Showing Pornography without consent"
            aria-label="Showing Pornography without consent"
            style={{
              outlineColor: "#0047ab",
              outlineWidth: "1px",
              outlineStyle: "solid",
            }}
            >
            Showing Pornography without consent</label>
    <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio12" autocomplete="off"/>
    <label className="btn btn-outline-primary my-3" for="vbtn-radio12"  value="Commenting/Sexual Invites"
            aria-label="Commenting/Sexual Invites"
            style={{
              outlineColor: "#0047ab",
              outlineWidth: "1px",
              outlineStyle: "solid",
            }}
            >
            Commenting/Sexual Invites</label>
  </div>
</div>
     
            </>
    
  );
}

export default TypeOfViolence;
