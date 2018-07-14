const compiler = require("./compiler");
const fs = require("fs");

const version = "1.0.0";

if (process.argv[0].includes("node")) {
	process.argv.shift();
	process.argv.shift();
}

switch (process.argv[0]) {
	case "-h":case "--help":
		console.log("Ao Compiler");
		console.log("");
		console.log("\t-v --version\tget compiler version");
		console.log("\t-h --help\tget compiler help");
		console.log("\t-c --compile\tcompiles target, output file can be specified");
		break;

	case "-v":case "--version":
		console.log(`v${version}`);
		break;

	case "-c":case "--compile":
		fs.readFile(process.argv[1], "utf-8", (err, data) => {
			if (err) return console.error(err);

			let c = new compiler();
			c.compile(data);
		});
		break;

	default:
		console.log(`Invalid argument '${process.argv[0]}'`);
}
