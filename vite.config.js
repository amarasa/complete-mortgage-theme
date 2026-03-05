import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import fs from "fs";
import fg from "fast-glob";
const { globSync } = fg;

const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Plugin directories to compile CSS for
const pluginBuilds = [
	{
		name: "social-share",
		dir: "../../plugins/social-share",
		pattern: "**/*.css",
	},
{
		name: "kaleidico-custom-calculators",
		dir: "../../plugins/kaleidico-custom-calculators",
		pattern: "**/*.css",
	},
	{
		name: "kal_testimonials_for_loan_officers",
		dir: "../../plugins/kal_testimonials_for_loan_officers",
		pattern: "**/*.css",
	},
	{
		name: "querycraft",
		dir: "../../plugins/querycraft",
		pattern: "**/*.css",
	},
];

// Generate plugin CSS entry files
function generatePluginEntries() {
	const entriesDir = path.resolve(__dirname, "src/plugin-entries");
	if (!fs.existsSync(entriesDir)) {
		fs.mkdirSync(entriesDir, { recursive: true });
	}

	const entries = {};

	pluginBuilds.forEach((plugin) => {
		const pluginDir = path.resolve(__dirname, plugin.dir);
		const files = globSync(plugin.pattern, { cwd: pluginDir });

		if (files.length) {
			const imports = files
				.map((file) => {
					const relativePath = path
						.relative(entriesDir, path.join(pluginDir, file))
						.replace(/\\/g, "/");
					return `@import "${relativePath}";`;
				})
				.join("\n");

			const importContent = `@reference "../style.css";\n\n${imports}`;

			const entryFile = path.join(entriesDir, `${plugin.name}.css`);
			fs.writeFileSync(entryFile, importContent, "utf8");
			entries[`dist-custom-plugins/${plugin.name}`] = entryFile;
		}
	});

	return entries;
}

const pluginEntries = generatePluginEntries();

const uploadsDir = path.resolve(__dirname, "../../uploads");

export default defineConfig({
	plugins: [tailwindcss()],
	resolve: {
		alias: {
			"@uploads": uploadsDir,
		},
	},
	server: {
		fs: {
			allow: [__dirname, uploadsDir],
		},
	},
	build: {
		outDir: "dist",
		emptyOutDir: true,
		rollupOptions: {
			input: {
				style: path.resolve(__dirname, "src/style.css"),
				"js/core": path.resolve(__dirname, "src/js/core.js"),
				...pluginEntries,
			},
			external: ["jquery"],
			output: {
				globals: {
					jquery: "jQuery",
				},
				entryFileNames: "[name].js",
				chunkFileNames: "[name].js",
				assetFileNames: "[name].[ext]",
			},
		},
	},
});
