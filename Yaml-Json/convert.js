yaml = require("js-yaml");
fs = require("fs");

const inputFile = "input.yaml";
const outputFile = "output.json";

const json = yaml.load(fs.readFileSync(inputFile, "utf8"));
if(json == null) {
    console.log("Error converting YAML to JSON , Reason Input File Data: " + yaml.error);
    process.exit(1);
}
fs.writeFileSync(outputFile, JSON.stringify(json, null, 2));