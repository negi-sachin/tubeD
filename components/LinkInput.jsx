import React, { useState } from "react";
import axios from "axios";
import { GoSearch } from "react-icons/go";

let BACKEND_URL = "https://frozen-bastion-63799.herokuapp.com";

function LinkInput() {
  const [url, setUrl] = useState();
  const [audioVideoFormats, setAudioVideoFormats] = useState();
  const [audioFormats, setAudioFormats] = useState();
  const [videoFormats, setVideoFormats] = useState();
  async function handleSubmit(e) {
    e && e.preventDefault();
    if (!url) return alert("Url cannot be empty");
    let res = await axios.get("api/urlInfo?url=" + url);
    res.catch((err) => {
      console.log(err);
    });
    console.log(res);
    if (res.data && res.data.formats) {
      let avFormats = [],
        aFormats = [],
        vFormats = [];
      res.data.formats.forEach((f) => {
        console.log(f);
        if (f.audioQuality && f.qualityLabel) avFormats.push(f);
        else if (f.qualityLabel) vFormats.push(f);
        else if (f.audioQuality) aFormats.push(f);
      });
      console.log({ avFormats, aFormats, vFormats });
      setAudioVideoFormats(avFormats);
      setVideoFormats(vFormats);
      setAudioFormats(aFormats);
    }
    // let vdo = await axios.get(
    //   `${process.env.BACKEND_URL}/download?url=${url}&itag=22`
    // );
    // vdo
    //   .then((data) => {
    //     console.log("data:", data);
    //   })
    //   .catch((err) => {
    //     console.log("err", err);
    //   });
  }

  return (
    <div className="text-center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit">
          <GoSearch />
        </button>
      </form>
      <div className="mt-4">
        {audioVideoFormats &&
          audioVideoFormats.map((i) => (
            <div>
              <a
                href={`${BACKEND_URL}/download?url=${url}&itag=${i.itag}`}
                download="myvideo.mp4"
              >
                Quality: {i.qualityLabel}
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}

export default LinkInput;
