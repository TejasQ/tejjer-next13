import { NextApiHandler } from "next";
import "node-fetch"
import cookie from "cookie"

const handler: NextApiHandler = async (req, res) => {
    const { text } = req.body;

    const twitterRes = await fetch("https://api.twitter.com/2/tweets", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${JSON.parse(decodeURIComponent(cookie.parse(req.headers.cookie).token)).value}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            text,
        }),
    }).then(r => r.json())

    res.json(twitterRes);
};

export default handler;