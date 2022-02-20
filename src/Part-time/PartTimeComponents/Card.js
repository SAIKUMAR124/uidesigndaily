import "./Card.css";
import { GoSearch } from "react-icons/go";
import React, { useState } from "react";
import JobsComp from "./JobsComp";
import { jobs } from "../PartTimeData/data";

const Card = () => {
  const [data] = useState(jobs);
  const [search, setSearch] = useState("");

  return (
    <div className="card">
      <div className="card-input">
        <div className="input-search">
          <div className="search-icon">
            <GoSearch />
          </div>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            value={search}
            placeholder="Search for a part-time job"
          />
        </div>
        <div className="use-map">
          <div>Use map</div>
        </div>
      </div>
      <JobsComp search={search} data={data} />
    </div>
  );
};

export default Card;
