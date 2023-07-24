const fs = require('fs');
const path = require('path');

const docs = './publish/';

module.exports = {
	server: {
		baseDir: docs,
		directory: false
	},
	files: [
		docs + '*.html',
		docs + '**/*.html',
		docs + '**/**/*.html',
		docs + '**/**/**/*.html',
		docs + 'common/css/*.css',
		docs + 'common/js/*.js'
	],
	notify: true,
	online: true,
	https: true,
	open: 'external',
	watchTask: true,
	rewriteRules: [
		{
			match: /<!--#include virtual="(.+)" -->/g,
			fn: function (req, res, match, filename) {
				const filePath = path.join(__dirname, docs, filename);
				if (! fs.existsSync(filePath)) {
					return `<p style="color: red">${filename} could not be found</p>`;
				}
				return fs.readFileSync(filePath);
			}
		}
	]
};
