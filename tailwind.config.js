/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
		'./app/**/*.{js,jsx}',
		'./src/**/*.{js,jsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				border: '#f9a8d4', // pastel pink
				input: '#f9a8d4', // pastel pink
				ring: '#f9a8d4', // pastel pink
				background: '#fff0f6', // very light pastel pink
				foreground: '#2d3748',
				primary: {
					DEFAULT: '#f9a8d4', // pastel pink
					foreground: '#2d3748',
				},
				secondary: {
					DEFAULT: '#fde4ec', // lighter pastel pink
					foreground: '#2d3748',
				},
				destructive: {
					DEFAULT: '#f472b6', // pastel pink
					foreground: '#fff',
				},
				muted: {
					DEFAULT: '#fde4ec', // lighter pastel pink
					foreground: '#2d3748',
				},
				accent: {
					DEFAULT: '#f9a8d4', // pastel pink
					foreground: '#2d3748',
				},
				popover: {
					DEFAULT: '#fde4ec',
					foreground: '#2d3748',
				},
				card: {
					DEFAULT: '#fde4ec',
					foreground: '#2d3748',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
