const brandConfig = {
	colors: {
		primary: "#1E40AF", // Branding Option #1 - Primary Color
		secondary: "#0F172A", // Branding Option #1 - Secondary Color
		tertiary: "#EAB308", // Branding Option #1 - Tertiary Color
	},
	fontFamily: {
		heading: ["Poppins", "sans-serif"],
		body: ["Inter", "sans-serif"],
	},
};

const screenSizes = {
	sm: "640px",
	md: "768px",
	lg: "1024px",
	xl: "1280px",
};

module.exports = {
	content: [
		"./**/*.php", // Scan all PHP files in the theme
		"./src/**/*.{js,css,html}", // Scan source folder for scripts and styles
		"./js/**/*.js", // Scan JavaScript files in the JS folder
		"./*.php", // Scan root PHP files (index.php, functions.php, etc.)

		// Scan specific custom plugins
		"../../plugins/kal-social-share/**/*.php",
		"../../plugins/kal-social-share/**/*.{js,css,html}",

		"../../plugins/compete-mortgage-blocks/**/*.php",
		"../../plugins/compete-mortgage-blocks/**/*.{js,css,html}",

		"../../plugins/kaleidico-custom-calculators/**/*.php",
		"../../plugins/kaleidico-custom-calculators/**/*.{js,css,html}",

		"../../plugins/kal_testimonials_for_loan_officers/**/*.php",
		"../../plugins/kal_testimonials_for_loan_officers/**/*.{js,css,html}",
	],
	theme: {
		extend: {
			colors: brandConfig.colors,
			fontFamily: brandConfig.fontFamily,
		},
		screens: screenSizes, // ✅ Correct way to define screens
		container: {
			center: true, // ✅ Uses `theme.screens` automatically
		},
	},
	plugins: [
		require("@tailwindcss/line-clamp"),
		require("tailwindcss-animate"),
		require("tailwindcss-elevation")(["responsive"]),
	],
	/*
		Docs: 

		Animate: https://github.com/jamiebuilds/tailwindcss-animate
		Elevation: https://github.com/jonaskay/tailwindcss-elevation
		Line Clamp: https://tailwindcss.com/docs/line-clamp
	*/
};
