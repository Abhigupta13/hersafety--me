import React, { useState } from "react";
import { data } from "../Sexual_Violence_Laws/data.js";
import "./sexual_violence_laws.css";
import NestedCard from "../nested card/NestedCard";

import Spinner from "../../Spinner.js";

const Sexual_Violence_Laws = () => {
  const [loading, setLoading] = useState(true)
  return (
    <div>
      {/* {loading && <Spinner />} */}
      <div className="lrcontainer">
        <h1 className="lrtitle">Sexual Violence Laws under IPC</h1>
        <div className="lrcontain">
          {data.map((lr) => {
            return (
              <NestedCard
                heading={lr.heading}
                sections={lr.sections}
                punishment={lr.punishment}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sexual_Violence_Laws;
