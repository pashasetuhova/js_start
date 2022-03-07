/* "use strict"; */

const numerOfLilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
    count: numerOfLilms,
    movies: {}, /* пустой объект */
    actors: {},
    genres: [], /* пустой массив */
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Назование один из последних просмотренных фильмов', ''),
          b = prompt('На сколько Вы его оцениваете', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Вы смотрели слишком мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы настоящий киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);