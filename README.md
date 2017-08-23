# What is Laravel Mix?

Laravel Mix provides a clean, fluent API for defining basic webpack build steps for your Laravel application. 

Mix supports several common CSS and JavaScript pre-processors.

Laravel Mix ships with Browsersync support out of the box, but if you prefer, you may also use LiveReload.

## What's Webpack?

Webpack is a module bundler for modern JavaScript applications. When webpack processes your application, it recursively builds a dependency graph that includes every module your application needs, then packages all of those modules into a small number of bundles - often only one - to be loaded by the browser.

## What's Browsersync?

Browsersync features:

* Install and run anywhere
* Free to run and reuse
* Build-tool compatible
* Network Throttle
* Interaction sync
* File sync
* UI or CLI control
* Sync customisation
* URL history

**Notable feature - File sync**: Browsers are automatically updated as you change HTML, CSS, images and other project files.

# Installation

Pull the code and run `composer install`

### Yarn or NPM Install?

When installing node modules, most people go with `npm install`, but doing `yarn` is much more efficient.

For this example installation `yarn` completed in just *28 seconds*, while `npm install` took *2 minutes and 43 seconds*!

So if you don't have yarn, I recommend that you should install it and just run `yarn` to continue.

If you don't want to use Yarn run `npm install` to install needed Node packages.


### Run npm run watch

Now, from the command line, you may run `npm run watch` to watch your files for changes, and then recompile.

### Run npm run production

To compile the code so that your css and javascript files are neatly concatenated and minimized run `npm run production`. This will also minify any image assets you have in your `resources/assets/images` folder while copying the images to `public/images`.

### The webpack.mix.js file

Open the `webpack.mix.js file`, and inspect the comments to learn how to use Laravel Mix through examples.

