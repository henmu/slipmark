export function extract(tab) {
	return {
		title: tab.title ?? "",
		url: tab.url ?? "",
		image: tab.favIconUrl ?? ""
	};
}