export default function handler(req, res) {
	const { link } = req.query;

	if (!link) {
		return res.status(400).send("Missing link parameter");
	}

	const decodedLink = decodeURIComponent(link);
	const formattedLink = decodedLink.includes("MakePayment")
		? decodedLink
		: decodedLink.replace("collect", "MakePayment");

	res.setHeader("Content-Type", "text/html");
	res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="description" content="Discover a new experience in the payment market.">
        <link rel="icon" href="https://raw.githubusercontent.com/Dekatron322/dynamic-linking/2e0bf619e81f007775956126e13335b732e156bd/otech%20logo.svg" type="image/x-icon">
        <meta http-equiv="refresh" content="0; url=${formattedLink}" />
        <title>Otech MFB</title>
      </head>
      <body>
        Redirecting to payment...
      </body>
    </html>
  `);
}
