class compiler {
	constructor() {
		this.components = {
			"title": "title",
			"canvas": "canvas",
			"break": "br",
			"divider": "hr",
			"_": "div",
			"-": "span",
			"content": "body",
			"meta": "head",
			"h6": "h6",
			"h5": "h5",
			"h4": "h4",
			"h3": "h3",
			"##": "h2",
			"#": "h1",
			"p": "p"
		};
	}

	compile(data) {
		return new Promise((out, e) => {
			try {
				let result = data;
	
				Object.keys(this.components).forEach((component) => {
					result = replaceAll(result, `${component}::`, `<${this.components[component]}/>`);
					result = replaceAll(result, `${component}:`, `<${this.components[component]}>`);
					result = replaceAll(result, `:${component}`, `</${this.components[component]}>`);
				});
	
				out(`<html>\n${result}\n</html>`);
			} catch (error) {
				e(error);
			}
		});
	}
}

function escapeRegExp(string) {
	return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function replaceAll(string, find, replace) {
	return string.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

module.exports = exports = compiler;
