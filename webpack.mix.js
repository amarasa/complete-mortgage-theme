const mix = require("laravel-mix");
const sassGlobImporter = require("sass-glob-importer"); // Glob importer for Sass/SCSS
const glob = require("glob");
const path = require("path");
const fs = require("fs");

require("mix-tailwindcss");
// require("laravel-mix-polyfill");

// Main theme assets
mix.js("src/js/core.js", "js").sourceMaps();
mix.sass("src/style.scss", "", {
	sassOptions: {
		importer: sassGlobImporter(),
	},
}).sourceMaps();
mix.tailwind();
// mix.polyfill({
// 	enabled: true,
// 	useBuiltIns: "usage",
// 	targets: false,
// });
mix.options({
	processCssUrls: false,
	postcss: {
		plugins: {
			autoprefixer: {},
		},
	},
}).disableNotifications();
if (!mix.inProduction()) {
	mix.webpackConfig({ devtool: "inline-source-map" });
}
mix.webpackConfig({
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
		],
	},
	plugins: [],
	stats: {
		// Reduce console output
		children: false,
		modules: false,
	},
});

// Define plugin builds for all 5 plugins
const pluginBuilds = [
	{
		name: "social-share",
		dir: "../../plugins/social-share",
		pattern: "**/*.css",
		output: "dist-custom-plugins/social-share.css",
	},
	{
		name: "complete-mortgage-blocks-and-post-types",
		dir: "../../plugins/complete-mortgage-blocks-and-post-types",
		pattern: "**/*.css",
		output: "dist-custom-plugins/complete-mortgage-blocks-and-post-types.css",
	},
	{
		name: "kaleidico-custom-calculators",
		dir: "../../plugins/kaleidico-custom-calculators",
		pattern: "**/*.css",
		output: "dist-custom-plugins/kaleidico-custom-calculators.css",
	},
	{
		name: "kal_testimonials_for_loan_officers",
		dir: "../../plugins/kal_testimonials_for_loan_officers",
		pattern: "**/*.css",
		output: "dist-custom-plugins/kal_testimonials_for_loan_officers.css",
	},
	{
		name: "querycraft",
		dir: "../../plugins/querycraft",
		pattern: "**/*.css",
		output: "dist-custom-plugins/querycraft.css",
	},
];

// Array to hold paths of temporary files so we can delete them later.
const tempFiles = [];

// For each plugin, generate a temporary import file and compile it.
pluginBuilds.forEach((plugin) => {
	// Use glob to find all .css files within the plugin directory matching the pattern.
	const files = glob.sync(path.join(plugin.dir, plugin.pattern));
	if (files.length) {
		// Create import statements for each CSS file.
		const importContent = files
			.map((file) => {
				// Get a path relative to the project root.
				const relativePath = path
					.relative(__dirname, file)
					.replace(/\\/g, "/");
				return `@import "${relativePath}";`;
			})
			.join("\n");
		// Create a temporary file for the plugin imports.
		const tempFile = path.join(__dirname, `temp-${plugin.name}.css`);
		fs.writeFileSync(tempFile, importContent, "utf8");
		// Store the temp file path for later deletion.
		tempFiles.push(tempFile);
		// Compile the temporary file with Tailwind and Autoprefixer.
		mix.postCss(tempFile, plugin.output, [
			require("tailwindcss")("./tailwind.config.js"),
			require("autoprefixer"),
		]);
	}
});

// Only delete temp files if not in watch/hot mode
if (!process.argv.includes("--watch") && !process.argv.includes("--hot")) {
	mix.then(() => {
		tempFiles.forEach((tempFile) => {
			fs.unlink(tempFile, (err) => {
				if (err) {
					if (err.code === "ENOENT") {
						console.log(
							`Temp file ${tempFile} not found, skipping deletion.`
						);
					} else {
						console.error(
							`Error deleting temp file ${tempFile}:`,
							err
						);
					}
				} else {
					console.log(`Temp file ${tempFile} deleted.`);
				}
			});
		});
	});
}
