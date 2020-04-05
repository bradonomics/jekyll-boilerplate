# Jekyll Boilerplate
Jekyll boilerplate is a starter kit for Jekyll themes.

## Getting Started

To start your a theme with Jekyll Boilerplate, you can [Download the files from GitHub](https://github.com/bradonomics/jekyll-boilerplate/archive/master.zip) (or clone the repo: `git clone https://github.com/bradonomics/jekyll-boilerplate.git`). Remember this is a starting point for a custom website, if it doesn't make it into 90% of my builds, it isn't in the boilerplate.

## What's in the download?

The download includes dummy content (most of which I swiped from Michael Rose's [unit test repo](https://github.com/mmistakes/jekyll-theme-unit-test)) to to check styles and formatting.

The package.json file included here is only used in the case that I need to concatenate and uglify a boat-load of javascript. I use [NPM scripts in my dot files](https://github.com/bradonomics/dotfiles/blob/master/bash_aliases#L46-L47) to build the site.

## Navigation Menus

By default sub-menus are expanded in mobile view. This allows height calculation without a ton of extraneous Javascript. You can find the default mobile navigation toggler in the `_includes/scripts.html` file.

Collapsible menus are difficult to make accessible. `display: none;` is most often used to get the snazzy slide functions to work. It's best to avoid these if you have any interest in screen readers or keyboard navigators using your site.

Having said that, if you need collapsible sub-menus, you will need to use jQuery. The steps you will need to take are:

1. Install jQuery and uglify-js using `npm install`.
1. Remove the vanilla JS toggle function in `_includes/scripts.html`.
1. Remove `.navigation.open` in `_sass/navigation.scss`.
1. Uncomment `.sub-menu-toggle` in `_sass/navigation.scss`.
1. Uncomment the sub-menu-toggle buttons in the site header.
1. While in development add the uncompressed files in separate script tags at the bottom of the `_layouts/default.html` file.
1. Consiter moving all scripts from `_includes/scripts.html` into their own files for concatination/uglification.
1. Use NPM script to concatenate and uglify all Javascript. Basic usage is set in package.json. Furtur instructions can be found on [npmjs.com](https://www.npmjs.com/package/uglify-js#command-line-usage).
1. Update script tags at the bottom of the `_layouts/default.html` file.

## License

[Jekyll Boilerplate](https://github.com/bradonomics/Jekyll-boilerplate/blob/master/LICENSE.md) is released under the [GPL-2.0 License](http://www.gnu.org/licenses/gpl-2.0.html).

> This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License, version 2, as
published by the Free Software Foundation.

> This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

> You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA
