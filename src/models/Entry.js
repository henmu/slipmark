export function createEntry(data = {}) {
	return {
		id: "",
		title: "",
		url: "",
		image: "",
		notes: "",
		labels: [],
		createdAt: Date.now(),
		modifiedAt: Date.now(),
		...data,
	};
}