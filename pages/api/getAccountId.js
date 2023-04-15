import nextConnect from "next-connect";
import cors from "cors";

const handler = nextConnect()
  .use(cors())
  .post(async (req, res) => {
    const response = await fetch(remoteServerUrl, config);
    res.json(response);
  });

export default handler;