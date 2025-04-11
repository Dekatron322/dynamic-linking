// dynamic-linking-eight.vercel.app/api/redirect.js
export default function handler(req, res) {
	const { link } = req.query;
	if (!link) return res.status(400).send("Missing link parameter");

	res.setHeader("Content-Type", "text/html");
	res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta http-equiv="refresh" content="0; url=${decodeURIComponent(
					link
				)}" />
      </head>
      <body>
        Redirecting to Otech Plus...
      </body>
      </html>
    `);
}
