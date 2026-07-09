import { getParser } from "./parserRegistery.js";

export async function extractMetadata(tab) {
	const parser = getParser(tab.url);

	return await parser.extract(tab);
}