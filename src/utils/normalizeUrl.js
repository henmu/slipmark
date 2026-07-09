export function normalizeUrl(url) {
	try {
		const parsedUrl = new URL(url);

		//Remove fragments
		parsedUrl.hash = "";

		//Remove tracking/query parameters (e.g., utm_source, utm_medium, utm_campaign)
		parsedUrl.search = "";

		// Remove trailing slashes
		return parsedUrl.toString().replace(/\/$/, "");
	} catch {
		return url;
	}
}