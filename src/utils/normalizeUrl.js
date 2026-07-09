export function normalizeUrl(url) {
	const parsed = new URL(url);

	parsed.hash = "";
	parsed.search = "";

	return parsed.toString().replace(/\/$/, "");
}