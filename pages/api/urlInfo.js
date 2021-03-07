const ytdl = require("ytdl-core");

export default async function urlInfo(req, res) {
  let url = req.query.url;
  console.log(req.query);
  try {
    let info = await ytdl.getBasicInfo(url);
    res.status(200).json(info);
  } catch (err) {
    console.log("err", err);
    res.status(404).json(err);
  }
}
