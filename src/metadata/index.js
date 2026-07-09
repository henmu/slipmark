import { extract } from "./defaultParser.js";

export async function extractMetadata(tab) {
	return extract(tab);
}