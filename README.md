This is an OPINIONATED set of `package.json` linting and formatting defaults I use for my open-source
and closed-source work.

The following dependencies are assumed:

- eslint (builds on the "eslint:recommended" configuration)
- eslint-plugin-vue (adds Vue-specific rules, install as a Vue-CLI plugin rather than npm install)
- eslint-config-prettier (turns off eslint standard rules that could conflict with Vue)
- stylelint
- stylelint-config-standard

The latest version of the Vetur plugin is also assumed, with the Vetur HTML Formatter option set to
use **prettier**. I've tried pretty-html, it creates ugly wrapping of divs, and js-beautify-html
results in odd formatting as well.

This is SUBJECT TO CHANGE AT ANY TIME. I don't really expect anyone else to use this, as it's highly
subjective to my personal taste n HTML, JS, and CSS formatting. I just did it because I got tired of
having to copy and paste settings among all of my repos. But if you get value from it, great!
