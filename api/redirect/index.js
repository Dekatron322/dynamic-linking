export default function handler(req, res) {
	const { link } = req.query;

	if (!link) {
		return res.status(400).send("Missing link parameter");
	}

	const decodedLink = decodeURIComponent(link);

	// Normalize the link format for both Expo and production
	let redirectUrl = decodedLink
		.replace(/exp:\/\/(.*?)\/--\//, "otechplus://") // Fix Expo dev links
		.replace(/collect\?/, "make-payment/") // Convert collect to make-payment
		.replace(/payId=/, ""); // Remove payId param name

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
