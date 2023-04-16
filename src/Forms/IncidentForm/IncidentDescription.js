import React from "react";

function IncidentDescription({ formData, setFormData }) {
  return (
    <div
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <textarea
          id="filled-error"
          label="Title"
          value={formData.title}
          onChange={(event) =>
            setFormData({ ...formData, title: event.target.value })
          }
          variant="filled"
          rows={2}
          cols={50}
          placeholder="title"
          fullWidth={true}
          inputProps={{
            maxLength: 30,
          }}
        ></textarea>
        <div className="incidenttitleanddesc">{formData.title.length}/30</div>
      </div>
      <div>
        <textarea
          id="filled-multiline-static"
          label="Enter Your Description Here"
          multiline
          value={formData.message}
          onChange={(event) =>
            setFormData({ ...formData, message: event.target.value })
          }
          rows={3}
          cols={50}
          placeholder="description"
          variant="filled"
          inputProps={{
            maxLength: 300,
            minLength: 10,
          }}
        />
      </div>
      <div className="incidenttitleanddesc">{formData.message.length}/300</div>
    </div>
  );
}

export default IncidentDescription;
