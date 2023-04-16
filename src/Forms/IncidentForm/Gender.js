import React from 'react'

function Gender({formData, setFormData}) {

  const handleChange = (event) => {
    setFormData({...formData, gender: event.target.value});
  };

  return (
    <>
    <div className="identity-container">
  <div className="btn-group-vertical " role="group"  value={formData.gender} onChange={handleChange} sx={{ gap: 2 }}
        color="info" aria-label="Vertical radio toggle button group" style={{
            
            right: '68px',

          }}>
    <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio1" autocomplete="off"/>
    <label className="btn btn-outline-primary my-3" for="vbtn-radio1" value="Male" aria-label="list" style={{
          outlineColor: "#0047ab",
          outlineWidth: "1px",
          outlineStyle: "solid",
          width: '300%',
        }}>Male</label>
    <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio2" autocomplete="off"/>
    <label className="btn btn-outline-primary my-3" for="vbtn-radio2"  value="Female" aria-label="module" style={{
          outlineColor: "#0047ab",
          outlineWidth: "1px",
          outlineStyle: "solid",
          width: '300%',
        }}>Female</label>
    <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio3" autocomplete="off"/>
    <label className="btn btn-outline-primary my-3" for="vbtn-radio3"  value="Other" aria-label="quilt" style={{
            outlineColor: "#0047ab",
            outlineWidth: "1px",
            outlineStyle: "solid",
            width: '300%',
          }}>Other</label>
  </div>
</div>
   
    </>
  )
}

export default Gender
