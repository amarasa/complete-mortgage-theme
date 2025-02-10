const mix = require("laravel-mix");
require("mix-tailwindcss");
require("laravel-mix-polyfill");

mix.js("src/js/core.js", "js").sourceMaps();
mix.sass("src/style.scss", "").sourceMaps();

mix.tailwind();

mix.polyfill({
	enabled: true,
	useBuiltIns: "usage",
	targets: false,
});

mix.options({
	processCssUrls: false,
	postcss: {
		plugins: {
			autoprefixer: {},
		},
	},
});

if (!mix.inProduction()) {
	mix.webpackConfig({ devtool: "inline-source-map" });
}

mix.webpackConfig({
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/, // Ensure node_modules is excluded
				use: {
					loader: "babel-loader",
				},
			},
		],
	},
	plugins: [],
});
