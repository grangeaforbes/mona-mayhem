import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import astro from 'eslint-plugin-astro';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	{
		ignores: ['.astro/', 'dist/', 'node_modules/'],
	},
	js.configs.recommended,
	...tseslint.configs.recommended,
	...astro.configs['flat/recommended'],
	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		plugins: {
			'@stylistic': stylistic,
		},
		rules: {
			'@stylistic/comma-dangle': ['error', 'always-multiline'],
			'@stylistic/eol-last': ['error', 'always'],
			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/no-trailing-spaces': 'error',
			'@stylistic/object-curly-spacing': ['error', 'always'],
			'@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
			'@stylistic/semi': ['error', 'always'],
			curly: ['error', 'all'],
			eqeqeq: ['error', 'always'],
		},
	},
	{
		files: ['**/*.{js,mjs,cjs}'],
		rules: {
			'no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
		},
	},
	{
		files: ['**/*.{ts,mts,cts}'],
		rules: {
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
		},
	},
);
