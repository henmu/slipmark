import * as defaultParser from "./defaultParser.js";

const parsers = [
	defaultParser
];

export function getParser(url) {
	return (
		parsers.find(parser => parser.matches(url))
		?? defaultParser
	);
}