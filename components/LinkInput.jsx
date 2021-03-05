import React, { useState } from "react";
import axios from "axios";

function LinkInput() {
  const [url, setUrl] = useState("https://youtu.be/0HYyB8VLJZ0");
  async function handleSubmit(e) {
    e && e.preventDefault();
    // let res = await axios.get("api/urlInfo?url=" + url);
    let vdo = await axios.get("api/downloadVideo?url=" + url);
    vdo
      .then((data) => {
        console.log("data:", data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Url"
          value={url}
          onChange={() => false}
        />
        <button type="submit">Submit</button>
        <div>
          <a href={`api/downloadVideo?url=${url}`} download="myvideo">
            Link
          </a>
        </div>
      </form>
    </div>
  );
}

export default LinkInput;
