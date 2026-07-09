import {createEntry} from "../models/Entry.js";
import { addEntry } from "../storage/entries.js";
import { findDuplicate } from "./duplicateService.js";

import * as entries from "../storage/entries.js";

export async function saveFromTab(tab) {
	const entry = createEntry({
		title: tab.title ?? "",
		url: tab.url ?? "",
		image: tab.favIconUrl ?? ""
	});

	const duplicate = await findDuplicate(entry);

	if (duplicate) {
		return {
			entry: duplicate,
			isDuplicate: true
		};
	}

	await addEntry(entry);

	return {
		entry,
		isDuplicate: false
	};
}

export async function getAll() {
	return await entries.getEntries();
}

export async function get(id) {
	return await entries.getEntry(id);
}

export async function remove(id) {
	return await entries.deleteEntry(id);
}

