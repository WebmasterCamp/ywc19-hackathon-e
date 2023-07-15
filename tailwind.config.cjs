/** @type {import('tailwindcss').Config}*/
const config = {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
	],

	plugins: [
		require('flowbite/plugin')
	],

	theme: {
		extend: {
			boxShadow: {
				'top': '0 -20px 60px -15px rgba(0, 0, 0, 0.3)',
			  }
		}
	},

	
};

module.exports = config;
