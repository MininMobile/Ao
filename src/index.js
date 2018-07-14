const fs = require("fs");

const version = "1.0.0";

if (process.argv[0].includes("node")) {
	process.argv.shift();
	process.argv.shift();
}

switch (process.argv[0]) {
	case "-h":case "--help":
		console.log("Ao Compiler");
		break;

	case "-v":case "--version":
		console.log(`v${version}`);
		break;

	default:
		console.log(`Invalid argument '${process.argv[0]}'`);
}
