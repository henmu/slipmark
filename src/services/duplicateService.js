
import { getEntries } from "../storage/entries.js";

export async function findDuplicate(entry) {
	const entries = await getEntries();

	return entries.find(existing =>
		existing.url === entry.url
	) ?? null;
}