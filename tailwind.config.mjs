/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'impact': ['Impact'],
				'montserrat': ['Montserrat'],
				'migko': ['Migko'],
				'beckan': ['Beckan']
			},
			colors: {
				'primary': '#fa6c06',
				'secondary': '#8d78ff',
				'accent': '#ffda74',
				'complementary': '#ffdfc6',
				'background': '#ededed',
				'light': '#ffffff',
				'dark': '#000000'
			}
		},
	},
	plugins: [],
}
