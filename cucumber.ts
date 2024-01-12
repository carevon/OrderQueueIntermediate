// cucumber.ts
import { defineConfig } from "cucumber";
import path from "path";

export default defineConfig({
	require: [
		path.join(__dirname, "features/**/*.ts"),
	],
	requireModule: ["ts-node/register"],
	tags: "",
});
