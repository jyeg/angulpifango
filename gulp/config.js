global.SRC_FOLDER = 'src';
global.BUILD_FOLDER = 'build';
global.TMP_FOLDER = 'tmp';

global.config = {
  paths: {
    src: {
      index: SRC_FOLDER + '/index.html',
      assets: [SRC_FOLDER + '/assets/**/*', '!' + SRC_FOLDER + '/assets/images/**/*'],
      images: SRC_FOLDER + '/assets/images/**/*',
      scripts: SRC_FOLDER + '/js/**/*.js',
      styles: SRC_FOLDER + '/styles/app.scss',
      stylesGlob: SRC_FOLDER + '/styles/**/*.scss',
      templates: SRC_FOLDER + '/partials/**/*.html',
      templatesHTML: SRC_FOLDER + '/partials/**/*.html',
      templatesCompiled: TMP_FOLDER,
      livereload: [BUILD_FOLDER + '/**/*', '!' + BUILD_FOLDER + '/assets/**/*'],
      modules: './' + SRC_FOLDER + '/main.js'
    },
    dest: {
      build: {
        styles: BUILD_FOLDER,
        scripts: BUILD_FOLDER,
        images: BUILD_FOLDER + '/assets/images',
        assets: BUILD_FOLDER + '/assets',
        index: BUILD_FOLDER,
        server: BUILD_FOLDER
      }
    }
  },
  filenames: {
    build: {
      styles: 'bundle.css',
      scripts: 'bundle.js',
      scriptsMin: 'bundle.min.js'
    },
    templates: {
      compiled: 'partials.js',
      angular: {
        moduleName: 'app.templates',
        prefix: '',
        stripPrefix: 'app/'
      }
    }
  },
  ports: {
    staticServer: 8080,
    livereloadServer: 35729
  }
};
