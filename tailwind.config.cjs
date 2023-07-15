/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			boxShadow: {
				'top': '0 -20px 60px -15px rgba(0, 0, 0, 0.3)',
			  }
		}
	},

	plugins: []
};

module.exports = config;
