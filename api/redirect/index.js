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
    <html prefix="og: https://ogp.me/ns#">
      <head>
        <meta charset="UTF-8">
        <title>Otech MFB - Secure Payment</title>
        
        <!-- Standard Meta Tags -->
        <meta name="description" content="Discover a new experience in the payment market with Otech MFB's secure payment solutions.">
        <link rel="icon" href="https://github.com/Dekatron322/dynamic-linking/blob/main/otech%20logo.png?raw=true" type="image/svg+xml">
        
        <!-- Open Graph Meta Tags (for social media sharing) -->
        <meta property="og:title" content="Otech MFB Payment">
        <meta property="og:description" content="Discover a new experience in the payment market with Otech MFB's secure payment solutions.">
        <meta property="og:image" content="https://github.com/Dekatron322/dynamic-linking/blob/main/otech%20logo.png?raw=true">
        <meta property="og:url" content="${formattedLink}">
        <meta property="og:type" content="website">
        
        <!-- Twitter Card Meta Tags -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="Otech MFB Payment">
        <meta name="twitter:description" content="Discover a new experience in the payment market with Otech MFB's secure payment solutions.">
        <meta name="twitter:image" content="https://github.com/Dekatron322/dynamic-linking/blob/main/otech%20logo.png?raw=true">
        
        <!-- Redirect -->
        <meta http-equiv="refresh" content="0; url=${formattedLink}" />
      </head>
      <body>
        <p>Redirecting to payment...</p>
      </body>
    </html>
  `);
}
