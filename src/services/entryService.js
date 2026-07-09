import {createEntry} from "../models/Entry.js";
import * as entries from "../storage/entries.js";

export async function create(data) {
	const entry = createEntry(data);

	return await entries.addEntry(entry);
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