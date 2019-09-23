const gulp = require("gulp");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

var css = gulp.task("css", function() {
  var plugins = [
    autoprefixer(),
    cssnano({
      preset: "default"
    })
  ];
  return gulp
    .src("./src/styles/main.css")
    .pipe(postcss(plugins))
    .pipe(gulp.dest("./public/styles"));
});

// gulp.task("watch", function() {
//   gulp.watch("src/*.css", ["css"]);
// });
