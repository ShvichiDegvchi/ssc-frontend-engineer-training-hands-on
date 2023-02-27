const tinify = require('tinify');
tinify.key = 'qqF2QpQxRVwly8SgQybGXKdYgjbwpywx'; // https://tinypng.com/developers (Account: s.deguchi)

// // Hero Image
// tinify.fromFile('./dist/docs/img/hero/original/hero.jpg').toFile('./dist/docs/img/hero/hero.jpg');

// // Repeat Section Photos
// for (let i = 1; i <= 5; i++) {
//   tinify.fromFile(`./dist/docs/img/photo/original/photo-${i.toString().padStart(2, '0')}--primary.jpg`).toFile(`./dist/docs/img/photo/photo-${i.toString().padStart(2, '0')}--primary.jpg`);
//   tinify.fromFile(`./dist/docs/img/photo/original/photo-${i.toString().padStart(2, '0')}--secondary.jpg`).toFile(`./dist/docs/img/photo/photo-${i.toString().padStart(2, '0')}--secondary.jpg`);
// }

// // Repeat Guest Room Photos
// for (let i = 1; i <= 1; i++) {
//   tinify.fromFile(`./dist/docs/img/guest-room/original/guest-room-${i.toString().padStart(2, '0')}--primary.jpg`).toFile(`./dist/docs/img/guest-room/guest-room-${i.toString().padStart(2, '0')}--primary.jpg`);
//   tinify.fromFile(`./dist/docs/img/guest-room/original/guest-room-${i.toString().padStart(2, '0')}--secondary.jpg`).toFile(`./dist/docs/img/guest-room/guest-room-${i.toString().padStart(2, '0')}--secondary.jpg`);
// }

// // Map figure
// tinify.fromFile('./dist/docs/img/figure/original/map--desktop.png').toFile('./dist/docs/img/figure/map--desktop.png');
// tinify.fromFile('./dist/docs/img/figure/original/map--mobile.png').toFile('./dist/docs/img/figure/map--mobile.png');

// // Inquiry Background Image
// tinify.fromFile('./dist/docs/img/inquiry/original/bg.jpg').toFile('./dist/docs/img/inquiry/bg.jpg');
