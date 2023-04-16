import React from "react";
import { data } from "./data.js";
import Accordion from "./Accordion_fir";

const FIR_filing = () => {
    return (
        <>
            <div className="fircontainer">
                <h1 className="firtitle text-center my-2">Filing of a FIR ( First Information Report )</h1>
                <div className="fircontain">
                    {data.map((fir) => {
                        return (
                            <Accordion  heading={fir.heading}
                            answer={fir.answer}
                            uid={fir.uid}
                            // isTrue={fir.isTrue}
                        />
                           
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default FIR_filing;
