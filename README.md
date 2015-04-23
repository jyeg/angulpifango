Angulpifango
===============
The point of this is to be a handy front-end template for building apps using:

* AngularJS
* Gulp
* Browserify
* Django

The idea here is to have each mini-angular app (that belongs to a django app) be able to live in isolation but also have access to common libraries. In the following sample django app, this would live in the "app" directory:

```
root
|--node_libs                # put global modules here; these should NOT be .gitignore'd
|--package.json
|--djangoapp_1
| |--app
| | |--bower_components
| | |--gulpfile.js
| | |--node_modules          # standard ignored node_modules dir
| | |--src
| | | |--modules
| | | | |--config
| | | | |--controllers
| | | | |--directives
| | | | |--filters
| | | | |--services
| | | |--partials
| | | |--index.html         # for local testing outside of django
| | | |--main.js			 # entry point for the js
| | |--test
| |--migrations
| |--static
| |--templates
|--djangoapp_n
```


INSTALL
--------

Run `npm install` and then `bower install` from the directory where this Readme is located. Wait for half the Internet to be downloaded.


DEVELOP
--------
This project uses [Gulp.js](http://gulpjs.com/). To start the dev server, just run the `gulp` command.

BUILD
------
When you're ready to build the JS file for Django, run `gulp djangify` which will run various tasks and put the resulting JS file into the `static/js` directory.

NOTES
------
This project uses gulp-angular-templatecache. Read more about it [here](http://jsg.azurewebsites.net/angular-template-caching-with-templatecache-and-gulp/). 

It also uses angular mocks for simulating data. This is really useful during development (and for the nonexistent tests I may never create)