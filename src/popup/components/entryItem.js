export function createEntryElement(entry) {
	const div = document.createElement("div");

	div.className = "entry";
	div.textContent = entry.title;

	return div;
}