# Intro

This repo contains the demo files and info as a support for my talk held at [Startit Centar](https://startit.rs/centar/) on [Wednesday, August 23, 2017](https://www.meetup.com/Laravel-Belgrade/events/242613938/):

## A Better Production Workflow with Laravel Mix

### Brief

Many web development teams fail to realize the potentials of good out-of-the box setup of module bundler tools such as webpack. So, worst-case they don't use bundlers at all! Laravel Mix succeeded in taking away the complexity of setting up the webpack bundler, making your CSS and javascript handling a simple task while improving your production workflow and overall app quality.

### About me

My name is Tihomir Opacic, I run development company [Orange Hill Development](https://www.orangehilldev.com/). Currently, I'm engaged in an effort to complete and publish the [Photon CMS](https://photoncms.com/) system. I'm an [IT Serbia Podcast](http://www.itserbiapodcast.com/) co-host and [CMS Podcast](http://cms-podcast.com/) show host.

### Talk Video

[![Tihomir Opacic](https://img.youtube.com/vi/tqiK9Hwzhb4/0.jpg)](https://www.youtube.com/watch?v=tqiK9Hwzhb4)

# What is Laravel Mix?

[Laravel Mix](https://laravel.com/docs/5.4/mix) provides a clean, fluent API for defining basic webpack build steps for your Laravel application. 

Mix supports several common CSS and JavaScript pre-processors.

Laravel Mix ships with Browsersync support out of the box, but if you prefer, you may also use LiveReload.

## What's Webpack?

[Webpack](https://webpack.js.org/) is a module bundler for modern JavaScript applications. When webpack processes your application, it recursively builds a dependency graph that includes every module your application needs, then packages all of those modules into a small number of bundles - often only one - to be loaded by the browser.

## What's Browsersync?

[Browsersync](https://www.browsersync.io) features:

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

So if you don't have [Yarn](https://yarnpkg.com/en/), I recommend that you should [install it](https://yarnpkg.com/en/docs/install) and just run `yarn` to continue.

If you don't want to use Yarn run `npm install` to install needed Node packages.


### Run npm run watch

Now, from the command line, you may run `npm run watch` to watch your files for changes and then recompile.

### Open the dev URL

This setup assumes that you've set-up your local environment to use `laravel-mix-demo.dev` as your testing URL.

If you use [Laravel Valet](https://laravel.com/docs/5.4/valet), all you need to do is clone this repo in a folder named `laravel-mix-demo` which is watched by Valet and you're good to go - no additional configuration needed!

### Run npm run production to compile assets

To compile the code so that your CSS and javascript files are neatly concatenated and minimized run `npm run production`. This will also minify any image assets you have in your `resources/assets/images` folder while copying the images to `public/images`.

### The webpack.mix.js file

Open the `webpack.mix.js file`, and inspect the comments to learn how to use Laravel Mix through examples.

