import { saveCurrentTab } from "../services/entryService.js";

import { getDatabase } from "../storage/database.js";

const button = document.querySelector("#save-current");

button.addEventListener("click", async () => {
	const [tab] = await browser.tabs.query({
		active: true,
		currentWindow: true,
	});

	const entry = await saveCurrentTab(tab);

	console.log("Saved entry:", entry);
	console.log(await getDatabase());
});