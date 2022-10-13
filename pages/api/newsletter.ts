import axios from "axios";

// @ts-ignore
export default function handler(req, res) {
  if (req.method === "POST") {
    axios
      .get(
        `https://api.mailerlite.com/api/v2/subscribers/search?query=${req.body.email}`,
        {
          headers: {
            "X-MailerLite-ApiKey": process.env.MAILERLITE_KEY,
          },
        }
      )
      .then(({ data }) => {
        if (!data.length) {
          axios
            .post(
              "https://api.mailerlite.com/api/v2/subscribers",
              {
                email: req.query.email,
                fields: {},
              },
              {
                headers: {
                  "X-MailerLite-ApiKey": process.env.MAILERLITE_KEY,
                },
              }
            )
            .then(() => {
              res
                .status(200)
                .json({ message: "Subscription created" });
            })
            .catch(() => {
              res
                .status(500)
                .json({ error: "Internal server error" });
            });
        } else {
          res.status(200).json({ message: "Subscription created" });
        }
      })
      .catch(() => {
        res.status(500).json({ error: "Internal server error" });
      });
  } else {
    res.status(404).json({ message: "Not found" });
  }
}