import axios, { post, get } from "axios";
import { ChangeEvent, useState } from "react";

import React from "react";

function FileUpload({ keyword }) {
  const [file, setFile] = useState(" ");
  function handleFileUpload(e) {
    console.log(e.target.files);
    setFile(e.target.files[0]);
  }

  function handleAPICall() {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("keyword", keyword);

    // NEED TO INSERT API ENDPOINT URL
    axios
      .post("http://127.0.0.1:5000/parser/resume-parse", formData)
      .then((res) => {
        console.log(res);
      });
  }

  return (
    <div className="FileUpload">
      <input type="file" name="file" onChange={handleFileUpload} />
      <button className="Button" onClick={handleAPICall}>
        {" "}
        Submit{" "}
      </button>
    </div>
  );
}

export default FileUpload;
