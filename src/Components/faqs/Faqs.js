import React from "react";
import AccordionCard from "../accordion/AccordionCard";
import "./faqs.css";
import { data } from "./data.js";

const Faqs = () => {
  return (
    <>
      <div className="faqcontainer">
        <h1 className="faqstitle">Frequently Asked Questions</h1>
        <div className="faqscontain">
          {data.map((faq) => {
            return (
              <AccordionCard question={faq.question} answer={faq.answer} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Faqs;
