class compiler {
	constructor() {
		this.components = {
			"meta": "head",
			"content": "body",
			"title": "title",
			"#": "h1",
			"##": "h2",
			"h3": "h3",
			"h4": "h4",
			"h5": "h5",
			"h6": "h6",
			"p": "p",
			"break": "br",
			"divider": "hr"
		};
	}

	compile(data) {
		return replaceAll("a b a b a", "a", "c");
	}
}

function escapeRegExp(string) {
	return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function replaceAll(string, find, replace) {
    return string.replace(new RegExp(escapeRegExp(find), 'g'), escapeRegExp(replace));
}

module.exports = exports = compiler;
