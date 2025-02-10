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
			colors: {
				"error-red": "#d42d0d",
				"light-grey": "rgba(67, 67, 70, 0.1)",
				"primary-color": "#1E73BE",
				"secondary-color": "#0e4c82",
			},
		},
		container: {
			center: true,
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
			},
		},
	},
	plugins: [],
};
