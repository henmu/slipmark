import { generateId } from "../utils/ids.js";

export function createEntry(data = {}) {
	const now = Date.now();

	return {
		id: generateId(),
		title: "",
		url: "",
		image: "",
		notes: "",
		labels: [],
		created: now,
		modified: now,
		...data,
	};
}