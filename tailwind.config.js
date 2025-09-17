const brandConfig = {
	colors: {
		primary: "#003b7e", // Branding Option #1 - Primary Color
		secondary: "#0066db", // Branding Option #2 - Secondary Color
		tertiary: "#012c65", // Branding Option #3 - Tertiary Color
		lightGrey: "#e7e7e7", // Light Grey
		muted: "#f5f7fa", // Added so `to-muted` works
		topGradient: "rgba(0,102,219,0.1)",
		bottomGradient: "rgba(255,255,255,0)",
		topFooter: "#515151",
		bottomFooter: "#2d3034",
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
		"../../plugins/complete-mortgage-blocks/**/*.{php,js,css,html}",
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

	safelist: [
		"bg-gradient-to-l",
		"to-muted",
		"from-primary/20",
		"from-secondary/20",
	],
};
