const gulp = require("gulp");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const css = gulp.task("css", function() {
  const plugins = [
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

