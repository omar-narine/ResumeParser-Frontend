import axios, { post, get } from "axios";
import { ChangeEvent, useState } from "react";

import React from "react";

function FileUpload() {
  const [file, setFile] = useState(" ");
  function handleFileUpload(e) {
    console.log(e.target.files);
    setFile(e.target.files[0]);
  }

  function handleAPICall() {
    const formData = new FormData();
    formData.append("file", file);

    // NEED TO INSERT API ENDPOINT URL
    axios.post("url", formData).then((res) => {
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
