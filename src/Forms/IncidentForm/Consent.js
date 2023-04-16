import React, { useState } from "react";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Consent = ({ consent, setConsent }) => {
  return (
    <div className="consentcontainer">
      <div className="conditions text-start" >
        <p>
          We understand it is difficult to recall one's traumatic experiences.
          If you feel uncomfortable at any time, know that you can exit. If you
          have not hit the submit button, your data will not be saved.
        </p>
        <p>
          Even though you are sharing your experience anonymously, we need your
          consent to include your experience in our database of crowdsourced
          data.
        </p>
      </div>

      <div className="consentBox text-start">
        <input type="checkbox" 
        className="checkbox" 
              {...label}
              onClick={() => {
            setConsent(!consent);
          }}/>
        <span className="consent ms-4">       I consent</span>
      </div>
    </div>
  );
};

export default Consent;
