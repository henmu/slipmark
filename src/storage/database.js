const DEFAULT_DATABASE = {
	version: 1,
	entries: [],
	labels: [],
};

export async function getDatabase() {
	const { database } = await browser.storage.local.get("database");

	if (!database) {
		await saveDatabase(DEFAULT_DATABASE);
		return structuredClone(DEFAULT_DATABASE);
	}

	return database;
}

export async function saveDatabase(db) {
	await browser.storage.local.set({
		database: db
	});
}