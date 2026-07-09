import { createLabel } from "./Label.js";
import * as labels from "../storage/labels.js";

export async function create(data) {
	const label = createLabel(data);

	return await labels.addLabel(label);
}

export async function getAll() {
	return await labels.getLabels();
}

export async function get(id) {
	return await labels.getLabel(id);
}

export async function remove(id) {
	return await labels.deleteLabel(id);
}