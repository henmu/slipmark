import {createEntry} from "../models/Entry.js";
import { addEntry } from "../storage/entries.js";
import { findDuplicate } from "./duplicateService.js";
import { extractMetadata } from "../metadata/index.js";

import * as entries from "../storage/entries.js";

export async function saveFromTab(tab) {
	const metadata = await extractMetadata(tab);
	const entry = createEntry(metadata);

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

