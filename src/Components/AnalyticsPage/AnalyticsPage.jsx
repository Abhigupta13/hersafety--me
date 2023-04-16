import React from "react";
import StateWiseChart from "../chart/ViolenceWiseChart";
import "./AnalyticsPage.css"
import XYChart from "../chart/XYChart";

const AnalyticsPage = () => {
    return (
        <>
                <StateWiseChart />
                <div className="chartspacer"></div>
                <XYChart />
            
        </>
    );
};

export default AnalyticsPage;