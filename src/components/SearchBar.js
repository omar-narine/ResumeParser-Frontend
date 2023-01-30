import React from "react";
import JSONDATA from "/Users/omarmacbook/ResumeBuilder/ResumeParser-Frontend/src/MOCK_DATA.json";
import { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="Search-Bar">
      <input
        className="SearchBarInput"
        type="text"
        placeholder="Enter Your Query Word"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {JSONDATA.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if (
          val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div className="DataList" key="key">
            <p>{val.first_name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SearchBar;
