import React from "react";
import axios, { post, get } from "axios";
import { useState } from "react";
import Button from "./Button";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [file, setFile] = useState(" ");
  const [hitNumber, setHitNumber] = useState(0);

  const handleFileUpload = (event) => {
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
  };

  const handleAPICall = () => {
    const formData = new FormData();
    formData.append("resume", file);
    formData.append("keyword", searchTerm);

    // NEED TO INSERT API ENDPOINT URL
    axios
      .post("http://127.0.0.1:5000/parser/resume-parse", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        setHitNumber(response.data.message);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
      <Button onClick={handleAPICall} text="Search" />

      <p>
        {" "}
        {searchTerm} : {hitNumber}{" "}
      </p>
    </div>
  );
};

export default SearchBar;
