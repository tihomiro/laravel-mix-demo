let mix = require('laravel-mix');

const ImageminPlugin = require('imagemin-webpack-plugin').default;

const CopyWebpackPlugin = require('copy-webpack-plugin');

const imageminMozjpeg = require('imagemin-mozjpeg');

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

/**
 * With this single line of code, you may now take advantage of:
 * ES2015 syntax.
 * Modules
 * Compilation of .vue files.
 * Minification for production environments.
 */
mix.js('resources/assets/js/app.js', 'public/js')
    /**
     * The extract method accepts an array of all libraries or modules that you wish to extract into a  vendor.js file.
     * Using the below snippet as an example, Mix will generate the following files:
     *
     * public/js/manifest.js: The Webpack manifest runtime
     * public/js/vendor.js: Your vendor libraries
     * public/js/app.js: Your application code
     */
    .extract(['Vue'])

    /**
     * The less method may be used to compile Less into CSS.
     * Let's compile our primary bootstrap.less file to  public/css/bootstrap.css.
     */
    .less('resources/assets/less/bootstrap.less', 'public/css')

    /**
     * The copy method may be used to copy files and directories to new locations.
     * To maintain the directory's original structure, you should use the copyDirectory method instead:
     */
    // .copyDirectory('resources/assets/images', 'public/images')

    /**
     * The version method will automatically append a unique hash to the filenames of all compiled files,
     * allowing for more convenient cache busting
     */
    .version()

    /**
     * BrowserSync can automatically monitor your files for changes,
     * and inject your changes into the browser without requiring a manual refresh.
     */
    .browserSync({
        /**
         * You may pass either a string (proxy) or object (BrowserSync settings) to this method.
         * Next, start Webpack's dev server using the npm run watch command.
         * Now, when you modify a script or PHP file, watch as the browser instantly refreshes the page
         * to reflect your changes.
         */
        proxy: 'laravel-mix-demo.dev'
    });

/**
 * While, of course, you're free to edit the provided webpack.config.js file, in certain settings,
 * it's easier to modify or override the default settings directly from your webpack.mix.js file.
 * This example sets the alias to the 'resources/assets/js' directory.
 */
mix.webpackConfig({
    resolve: {
        alias: {
            '_': path.resolve(__dirname, 'resources/assets/js'),
        }
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: 'resources/assets/images',
            to: 'images',
        }]),
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            plugins: [
                imageminMozjpeg({
                    quality: 80,
                })
            ]
        })
    ]
});

