export default function handler(req, res) {
	const { link } = req.query;

	if (!link) {
		return res.status(400).json({ error: "Missing link parameter" });
	}

	try {
		const decodedLink = decodeURIComponent(link);
		const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta http-equiv="refresh" content="0; url=${decodedLink}" />
        <title>Redirecting...</title>
      </head>
      <body>
        <p>Redirecting to Otech Plus...</p>
        <script>
          window.location.href = "${decodedLink}";
        </script>
      </body>
      </html>
    `;

		res.setHeader("Content-Type", "text/html");
		res.status(200).send(html);
	} catch (error) {
		res.status(500).json({ error: "Invalid link parameter" });
	}
}
