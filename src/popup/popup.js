import { saveFromTab, getAll } from "../services/entryService.js";

import { createEntryElement } from "./components/entryItem.js";

const button = document.querySelector("#save-current");
const entriesContainer = document.querySelector("#entries");

button.addEventListener("click", async () => {
	const [tab] = await browser.tabs.query({
		active: true,
		currentWindow: true,
	});


	const result = await saveFromTab(tab);
	console.log(result);


	//TODO: Remove this when we have a proper UI for duplicates
	if (result.isDuplicate) {
		console.log("This entry already exists!");
	} else {
		console.log("Entry saved successfully!");
	}

	await renderEntries();
});

async function renderEntries() {
	const entries = await getAll();

	entriesContainer.innerHTML = "";

	entries.forEach(entry => {
		entriesContainer.appendChild(createEntryElement(entry));
	});
}

await renderEntries();