const ELEMENTS_CONTENT_WRAP_ALLOWED = ["pre", "textarea", "p", "b", "i", "a"]

module.exports = {
	extends: ["eslint:recommended", "plugin:vue/recommended", "prettier/vue"],
	root: true,
	env: {
		node: true,
	},
	rules: {
		indent: [
			"error",
			"tab",
			{
				SwitchCase: 1,
			},
		],
		quotes: [
			"error",
			"double",
			{
				avoidEscape: true,
			},
		],
		"no-console": "warn",
		"comma-dangle": [
			"error",
			{
				arrays: "ignore",
				objects: "always-multiline",
				imports: "ignore",
				exports: "never",
				functions: "ignore",
			},
		],
		"vue/no-v-html": "off",
		"vue/html-indent": ["warn", "tab"],
		"vue/max-attributes-per-line": "off",
		"vue/html-closing-bracket-newline": "never",
		"vue/singleline-html-element-content-newline": [
			"warning",
			{
				ignoreWhenNoAttributes: true,
				ignoreWhenEmpty: true,
				ignores: ELEMENTS_CONTENT_WRAP_ALLOWED,
			},
		],
		"vue/multiline-html-element-content-newline": [
			"warning",
			{
				ignoreWhenEmpty: true,
				ignores: ELEMENTS_CONTENT_WRAP_ALLOWED,
				allowEmptyLines: false,
			},
		],
	},
	parserOptions: {
		parser: "babel-eslint",
	},
}
