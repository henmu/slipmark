export function createEntry(data = {}) {
	const now = Date.now();

	return {
		id: "",
		title: "",
		url: "",
		image: "",
		notes: "",
		labels: [],
		createdAt: now,
		modifiedAt: now,
		...data,
	};
}