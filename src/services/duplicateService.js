import { getEntries } from "../storage/entries.js";
import { normalizeUrl } from "../utils/normalizeUrl.js";

export async function findDuplicate(entry) {
	const entries = await getEntries();

	const normalizedEntryUrl = normalizeUrl(entry.url);

	return entries.find(existing =>
		normalizeUrl(existing.url) === normalizedEntryUrl
	) ?? null;
}