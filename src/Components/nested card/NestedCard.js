import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./nestedCard.css";

const NestedCard =(props) => {
  return (
    <div>
      <Accordion style={{ margin: "3% 0", color: "#d94234" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h5 fontSize="1.3rem">{props.heading}</h5>
        </AccordionSummary>
        <AccordionDetails>
          <Accordion style={{ margin: "1% 0" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h5 fontSize="1.3rem" color="rgb(110, 94, 254)">
                Sections
              </h5>
            </AccordionSummary>
            <AccordionDetails>
              {props.sections.map((point, i) => {
                return (
                  <h5 fontSize="1.1rem">
                    {i + 1}. {point}
                  </h5>
                );
              })}
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ margin: "1% 0" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h5 fontSize="1.3rem" color="rgb(110, 94, 254)">
                Punishments
              </h5>
            </AccordionSummary>
            <AccordionDetails>
              {props.punishment.map((point, i) => {
                return (
                  <h5 fontSize="1.1rem">
                    {i + 1}. {point}
                  </h5>
                );
              })}
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default NestedCard;
