import "./Card.css";
import { GoSearch } from "react-icons/go";
import React, { useState } from "react";
import JobsComp from "./JobsComp";
import { jobs } from "../PartTimeData/data";

const Card = () => {
  const [data, setData] = useState(jobs);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);

    if (e.target.value !== "") {
      let newList = [];
      newList = data.filter((p) =>
        p.job_name.includes(search)
      );
      setData(newList);
    } else {
      setData(jobs);
    }
  };

  return (
    <div className="card">
      <div className="card-input">
        <div className="input-search">
          <div className="search-icon">
            <GoSearch />
          </div>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="Search for a part-time job"
          />
        </div>
        <div className="use-map">
          <div>Use map</div>
        </div>
      </div>
      <JobsComp data={data} />
    </div>
  );
};

export default Card;
