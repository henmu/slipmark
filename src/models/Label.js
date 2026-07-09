import { generateId } from "../utils/ids.js";

export function createLabel(data = {}) {
	return {
		id: generateId(),
		name: "",
		url: "",
		color: "",
		isPrimary: false,
		...data,
	};
}