import React from 'react'

function SafetyTipDescription({ formData, setFormData }) {
  return (
    <div
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{
        position: 'relative',
            left:'80px',
          }}>
        <textarea
          id="filled-error"
          label="Title"
          value={formData.title} onChange={(event) => setFormData({ ...formData, title: event.target.value })}
          variant="filled"
          fullWidth={true}
          rows={2}
          cols={50}
          placeholder='Title'
          inputProps={{
            maxLength: 30,
            
          }}
          ></textarea>
        <div className='incidenttitleanddesc'>
          {formData.title.length}/30
        </div>
      </div>
      <div style={{
        position: 'relative',
            left:'80px',
          }}>
        <textarea
          id="filled-multiline-static"
          label="Description"
          multiline
          value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })}
          rows={4}
          cols={50}
          placeholder='Description'
          defaultValue="Default Value"
          variant="filled"
          inputProps={{
            maxLength: 300,
            minLength:10
          }}
          ></textarea>
         <div className='incidenttitleanddesc'>
        {formData.message.length}/300
      </div>  
      </div>
    </div>

  )
}

export default SafetyTipDescription
