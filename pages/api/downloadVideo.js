const ytdl = require("ytdl-core");

export default async function downloadVideo(req, res) {
  let url = req.query.url;
  console.log(url);
  let stream = ytdl(url, { filter: (format) => format.itag === 22 });

  stream.on("info", (info, format) => {
    //console.log(info);
    res.setHeader("Content-Type", format.mimeType);
    res.setHeader("Content-Disposition", `attachment; filename="video.mp4"`);
    //res.setHeader("Content-Length", info.size);
    stream.pipe(res);
  });

  //res.status(200).json("Done");
}
