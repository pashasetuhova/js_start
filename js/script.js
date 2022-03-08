/* "use strict"; */

let numberOfLilms;

function start() {
    numberOfLilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

    while (numberOfLilms == '' || numberOfLilms == null || isNaN(numberOfLilms)) {
        numberOfLilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfLilms,
    movies: {}, /* пустой объект */
    actors: {},
    genres: [], /* пустой массив */
    privat: false
};

function rememberMyFilms() {
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
}

/* rememberMyFilms(); */

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Вы смотрели слишком мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы настоящий киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

/* detectPersonalLevel(); */

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre; /* -1 чтобы исключить пустое значение */
    }
}

writeYourGenres();