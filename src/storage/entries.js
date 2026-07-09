import { getDatabase, saveDatabase } from "./database.js";

export async function getEntries() {
	const db = await getDatabase();
	return db.entries;
}

export async function getEntry(id) {
	const db = await getDatabase();
	return db.entries.find(entry => entry.id === id);
}

export async function addEntry(entry) {
	const db = await getDatabase();
	db.entries.push(entry);

	await saveDatabase(db);
	return entry;
}

export async function updateEntry(updatedEntry) {
	const db = await getDatabase();

	const index = db.entries.findIndex(entry => entry.id === updatedEntry.id);

	if (index === -1) {
		throw new Error(`Entry with id ${updatedEntry.id} not found`);
	}

	db.entries[index] = updatedEntry;

	await saveDatabase(db);
	return updatedEntry;
}

export async function deleteEntry(id) {
	const db = await getDatabase();

	db.entries = db.entries.filter(entry => entry.id !== id);

	await saveDatabase(db);
}