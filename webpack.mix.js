let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');

mix.styles([
		'public/css/styles.css',
		'public/css/footer.css',
		'public/css/navbar.css',
		'public/css/styles.css'
	], 'public/css/all.css');

mix.styles([
		'public/css/styles.min.css',
		'public/css/footer.min.css',
		'public/css/navbar.min.css',
		'public/css/styles.min.css'
	], 'public/css/all.min.css');