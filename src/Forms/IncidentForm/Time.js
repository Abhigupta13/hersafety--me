import React,{useState} from "react"

function Time({ formData, setFormData }) {

  const [value, setValue] = useState("2018-06-12T19:30");

  const handleChange = (newValue) => {
    setValue(newValue);
    setFormData({ ...formData, time: newValue });
  };



  return (
    <>
    <label for="incident-time"></label>

<input type="datetime-local" id="incident-time"
    //   value={formData.time}
      value={"2023-04-17T06:30"}
       name="incident-time"
       onChange={handleChange}
       min="1900-01-01T00:00" max="2023-04-17T00:00"/>

  {/* <label>
    <input type="datetime" name="" id="" label="Date&Time picker"
    //  value={formData.time}
    //  onChange={handleChange}
    //  renderInput={(params) =><Textarea {...params}/>} 
    />
  </label>
      */}
       
    </>
    
  );
}

export default Time;
