import React from "react";
import axios, { post, get } from "axios";
import { useState } from "react";
import Button from "./Button";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [file, setFile] = useState(" ");
  function handleFileUpload(e) {
    console.log(e.target.files);
    setFile(e.target.files[0]);
  }

  var hitNumber = 0;

  function handleAPICall() {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("keyword", searchTerm);

    // NEED TO INSERT API ENDPOINT URL
    axios
      .get("http://127.0.0.1:5000/resume-parse", formData)
      .then((response) => {
        hitNumber = response.data;
        console.log(response.data);
      });
  }

  return (
    <div className="Search-Bar">
      <input
        className="FileField"
        type="file"
        name="file"
        onChange={handleFileUpload}
      />

      <input
        className="SearchBarInput"
        type="text"
        placeholder="Enter Your Query Word"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <Button onClick={handleAPICall} />

      <p>
        {" "}
        {searchTerm} : {hitNumber}{" "}
      </p>
    </div>
  );
};

export default SearchBar;
