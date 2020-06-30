const { src, dest, series } = require('gulp'),
	clean = require('gulp-clean'),
	usemin = require('gulp-usemin'),
	cssmin = require('gulp-cssmin'),
	cleancss = require('gulp-clean-css'),
	uglify = require('gulp-uglify'),
	htmlmin = require('gulp-htmlmin');

function cleanDist() {
	return src('dist/', { read: false, allowEmpty: true }).pipe(clean());
}

function copyDist() {
	return src(['src/**/*', '!src/assets/css/**']).pipe(dest('dist/'));
}

function buildHtml() {
	return src('src/**/*.html')
		.pipe(
			usemin({
				css: [cssmin],
				inlinecss: [cleancss, 'concat'],
				inlinejs: [uglify],
			})
		)
		.pipe(dest('dist/'));
}

function minifyHtml() {
	return src('dist/**/*.html')
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(dest('dist/'));
}

exports.default = series(cleanDist, copyDist, buildHtml, minifyHtml);
