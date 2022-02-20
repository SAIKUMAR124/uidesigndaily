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
    let oldData = data.map((d) => {
      console.log(d.job_name.toLowerCase());
      return {
        job_name: d.job_name.toLowerCase(),
        id: d.id,
        job_image: d.job_image,
      };
    });

    if (e.target.value !== "") {
      let newList = [];
      newList = oldData.filter((p) =>
        p.job_name.includes(search.toLowerCase())
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
