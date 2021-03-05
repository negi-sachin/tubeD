const ytdl = require("ytdl-core");

export default async function urlInfo(req, res) {
  let url = req.query.url;
  console.log(req.query);
  let info = await ytdl.getInfo(url);
  res.status(200).json(info);
}
