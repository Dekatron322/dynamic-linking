// api/redirect.js
export default function handler(req, res) {
	const { link } = req.query;

	if (!link) {
		return res.status(400).send("Missing link parameter");
	}

	const decodedLink = decodeURIComponent(link);

	// Ensure the link is properly formatted
	const formattedLink = decodedLink.includes("make-payment")
		? decodedLink
		: decodedLink.replace("collect", "make-payment");

	res.setHeader("Content-Type", "text/html");
	res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta http-equiv="refresh" content="0; url=${formattedLink}" />
      </head>
      <body>
        Redirecting to payment...
      </body>
    </html>
  `);
}
