import React from "react";
function Identity({ formData, setFormData }) {
  const handleChange = (event) => {
    setFormData({ ...formData, identity: event.target.value });
  };

  return (
    <>
    <div className="identity-container">
  <div className="btn-group-vertical " role="group" value={formData.identity} onChange={handleChange} sx={{ gap: 2 }}
        color="info" aria-label="Vertical radio toggle button group" style={{
            
            right: '48px',

          }}>
    <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio1" autocomplete="off"/>
    <label className="btn btn-outline-primary my-3" for="vbtn-radio1" value="Myself"
          aria-label="list"
          style={{
            outlineColor: "#0047ab",
            outlineWidth: "1px",
            outlineStyle: "solid",
            width: '200%',

          }}>Myself</label>
    <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio2" autocomplete="off"/>
    <label className="btn btn-outline-primary my-3" for="vbtn-radio2"  value="Someone Else"
          aria-label="module"
          style={{
            outlineColor: "#0047ab",
            outlineWidth: "1px",
            outlineStyle: "solid",
            width: '200%',
          }}>Someone Else</label>
  </div>
</div>
    </>
  );
}

export default Identity;
