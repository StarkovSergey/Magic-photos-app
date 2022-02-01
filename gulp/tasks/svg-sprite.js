import svgSprite from 'gulp-svg-sprite';

export const sprite = () => app.gulp.src(`${app.path.src.icons}`, {})
  .pipe(app.plugins.plumber(
    // app.plugins.notify.onError({
    //   title: 'SVG',
    //   message: 'Error: <%= error.message %>',
    // }),
  ))
  .pipe(svgSprite({
    mode: {
      symbol: {
        sprite: '../icons/sprite.svg',
      },
    },
  }))
  .pipe(app.gulp.dest(`${app.path.src.imgFolder}`)); // app.path.build.images
