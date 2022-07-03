module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {

				// theme
				'theme-accent': {
					DEFAULT: '#3296FF',
					100: '#E5F2FF',
					200: '#B2D7FF',
					300: '#7FBDFF',
					400: '#4CA3FF',
					500: '#3296FF',
					600: '#1989FF',
					700: '#007CFF',
					800: '#1C89E2',
					900: '#0058AA',
				  },
			}
		},
		borderWidth: {
			DEFAULT: '1px',
			'0': '0',
			'2': '2px',
			'3': '3px',
			'4': '4px',
			'6': '6px',
			'8': '8px',
			'9': '9px',
			'10': '10px'
		},
	},
	plugins: [
		require('autoprefixer')
	]
}
