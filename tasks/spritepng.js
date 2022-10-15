// TODO[sgkuksov] Сборка png-спрайта

// ЗАДАЧА: сшивка PNG-спрайта
// gulp.task('png:sprite', function() {
//   const fileName = `sprite-${Math.random()
//     .toString()
//     .replace(/[^0-9]/g, '')}.png`;
//
//   const spriteData = gulp
//     .src('src/img/png-sprite/*.png')
//     .pipe(plumber({ errorHandler: onError }))
//     .pipe(
//       spritesmith({
//         imgName: fileName,
//         cssName: 'sprite.sass',
//         cssFormat: 'sass',
//         padding: 4,
//         imgPath: `../img/${fileName}`
//       })
//     );
//
//   const imgStream = spriteData.img
//     .pipe(buffer())
//     .pipe(imagemin())
//     .pipe(gulp.dest('build/img'));
//
//   const cssStream = spriteData.css.pipe(gulp.dest(`${dirs.source}/sass/`));
//
//   return merge(imgStream, cssStream);
// });
