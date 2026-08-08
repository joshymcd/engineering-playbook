/** @type {import('prettier').Config} */
export default {
	plugins: ['prettier-plugin-astro'],
	semi: false,
	singleQuote: true,
	trailingComma: 'all',
	useTabs: true,
	overrides: [
		{ files: '*.md', options: { useTabs: false, proseWrap: 'preserve' } },
	],
}
