/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				custom: ['TransformaSans_Trial-Extralight', 'sans-serif'],
			},
			margin: {
				'0-auto': '0 auto',
			},
		},
	},
	plugins: [],
}
