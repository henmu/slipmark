export function validateEntry(entry) {
	if (!entry.title.trim()) {
		throw new Error("Entry title cannot be empty.");
	}
}