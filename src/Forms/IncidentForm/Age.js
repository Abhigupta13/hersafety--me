import React from "react";

function Age({ formData, setFormData }) {
  return (
    <div className="age">
        <label>
            <h3 className="age_head">Your Age</h3>
            <textarea name="" cols="8" rows="1"
             id="standard-basic"
             fullWidth
             label="Age"
             variant="standard"
             min={18}
             placeholder={'Age'}
             value={formData.age}
             onChange={(event) =>
               setFormData({ ...formData, age: event.target.value })
             }></textarea>
        </label>
      
      
    </div>
  );
}

export default Age;
