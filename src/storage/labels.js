import { getDatabase, saveDatabase } from "./database.js";

export async function getLabels() {
	const db = await getDatabase();
	return db.labels;
}

export async function getLabel(id) {
	const db = await getDatabase();
	return db.labels.find(label => label.id === id);
}

export async function addLabel(label) {
	const db = await getDatabase();
	db.labels.push(label);

	await saveDatabase(db);
	return label;
}

export async function updateLabel(updatedLabel) {
	const db = await getDatabase();

	const index = db.labels.findIndex(label => label.id === updatedLabel.id);

	if (index === -1) {
		throw new Error(`Label with id ${updatedLabel.id} not found`);
	}

	db.labels[index] = updatedLabel;

	await saveDatabase(db);
	return updatedLabel;
}

export async function deleteLabel(id) {
	const db = await getDatabase();

	db.labels = db.labels.filter(label => label.id !== id);

	await saveDatabase(db);
}