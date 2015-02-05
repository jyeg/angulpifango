ACTIVITY STUFF
===============

INSTALL
--------

Run `npm install` from the directory where this Readme is located. Wait for half the Internet to be downloaded.

DEVELOP
--------
This project uses [Gulp.js](http://gulpjs.com/). To start the dev server, just run the `gulp` command.

BUILD
------
When you're ready to build the JS file for Django, run `gulp build:django` which will run various tasks and put the resulting JS file into the `static/js` directory.

NOTES
------
This project uses gulp-angular-templatecache. Read more about it [here](http://jsg.azurewebsites.net/angular-template-caching-with-templatecache-and-gulp/). 

It also uses angular mocks for simulating data. This is really useful during development (and for the nonexistent tests I may never create)