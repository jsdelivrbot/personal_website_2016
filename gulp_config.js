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
      applicationSass: src + 'sass/application.sass',
      allSass: src + 'sass/**/*.sass'
    },
    /**
    *   build folders
    */
    build: {
      js: build + 'js/',
      css:  build + 'css/',
      html: build,
      VendorJs: build + 'assets/vendor/js/',
      VendorCss: build + 'assets/vendor/css/'
    }
  }

  return config;

};

module.exports = gulpConfig();
