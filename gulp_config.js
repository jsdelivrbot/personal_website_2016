var gulpConfig = function() {
  var src = './src/';
  var build = './build/';
  var assets = build + 'assets';

  var config = {
    /**
    *   native files
    */
    src: {
        js: src + 'js/**/*.js',
        allJade: src + '**/*.jade',
        pageJade: src + '*.jade',
        sass: src + 'sass/application.sass'
    },
    /**
    *   build folders
    */
    build: {
        js: build + 'js/',
        css:  build + 'css/',
        html: build
    }
  }

  return config;

};

module.exports = gulpConfig();
