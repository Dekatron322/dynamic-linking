export default function handler(req, res) {
	const { link } = req.query;

	if (!link) {
		return res.status(400).send("Missing link parameter");
	}

	const decodedLink = decodeURIComponent(link);

	// Ensure proper formatting
	let redirectUrl = decodedLink;
	if (!decodedLink.startsWith("otechplus://make-payment")) {
		redirectUrl = decodedLink.replace(
			"otechplus://collect",
			"otechplus://make-payment"
		);
	}

	res.setHeader("Content-Type", "text/html");
	res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta http-equiv="refresh" content="0; url=${redirectUrl}" />
        <title>Redirecting to Payment</title>
      </head>
      <body>
        <p>Redirecting to payment page...</p>
        <script>
          window.location.href = "${redirectUrl}";
        </script>
      </body>
    </html>
  `);
}
