const brandConfig = {
	colors: {
		primary: "rgb(45, 23, 110)", // Branding Option #1 - Primary Color
		secondary: "rgb(100,47,209)", // Branding Option #1 - Secondary Color
		tertiary: "rgb(206, 183, 246)", // Branding Option #1 - Tertiary Color
		grey: "#ededed",
		topGradient: "rgba(206,183,246,0.3)",
		bottomGradient: "rgba(255,255,255,0)",
		topFooter: "rgb(45, 23, 110)",
		bottomFooter: "rgb(45, 23, 110)",
	},
	fontFamily: {
		heading: ["Poppins", "sans-serif"],
		body: ["Poppins", "sans-serif"],
	},
};

const screenSizes = {
	xs: "480px",
	sm: "640px",
	md: "768px",
	lg: "1024px",
	xl: "1280px",
};

module.exports = {
	content: [
		"./**/*.php",
		"./src/**/*.{js,css,html}",
		"./js/**/*.js",
		"./*.php",
		"../../plugins/kal-social-share/**/*.{php,js,css,html}",
		"../../plugins/complete-mortgage-blocks-and-post-types/**/*.{php,js,css,html}",
		"../../plugins/kaleidico-custom-calculators/**/*.{php,js,css,html}",
		"../../plugins/kal_testimonials_for_loan_officers/**/*.{php,js,css,html}",
		"../../plugins/querycraft/**/*.{php,js,css,html}",
	],

	theme: {
		extend: {
			colors: brandConfig.colors,
			fontFamily: brandConfig.fontFamily,
		},
		screens: screenSizes,
		container: {
			center: true,
		},
	},

	plugins: [
		require("tailwindcss-animate"),
		require("tailwindcss-elevation")(["responsive"]),
		require("equalize-heights"),
		require("postcss-import")(),
		require("postcss-import-ext-glob")(),
		require("tailwindcss"),
		require("autoprefixer"),

		// 🔹 Plugin to Inject CSS Variables
		function ({ addBase, theme }) {
			addBase({
				":root": {
					"--color-primary": theme("colors.primary"),
				},
			});
		},
	],
};
