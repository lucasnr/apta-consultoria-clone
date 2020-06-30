const { src, dest, series, parallel } = require('gulp'),
	clean = require('gulp-clean'),
	cleancss = require('gulp-clean-css'),
	uglify = require('gulp-uglify'),
	htmlmin = require('gulp-htmlmin');

function cleanDist() {
	return src('dist/', { read: false, allowEmpty: true }).pipe(clean());
}

function copyDist() {
	return src(['src/**/*', '!src/assets/css/**', '!src/assets/js/**']).pipe(
		dest('dist/')
	);
}

function minifyCss() {
	return src('src/assets/css/**')
		.pipe(cleancss({ compatibility: 'ie10' }))
		.pipe(dest('dist/assets/css/'));
}

function minifyJs() {
	return src('src/assets/js/**').pipe(uglify()).pipe(dest('dist/assets/js/'));
}

function minifyHtml() {
	return src('dist/**/*.html')
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(dest('dist/'));
}

exports.default = series(
	cleanDist,
	copyDist,
	parallel(minifyCss, minifyJs, minifyHtml),
	minifyHtml
);
