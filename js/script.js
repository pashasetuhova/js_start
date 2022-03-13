/* "use strict"; */

const personalMovieDB = {
    count: 0,
    movies: {}, 
    actors: {},
    genres: [], 
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Вы смотрели слишком мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы настоящий киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    rememberMyFilms: function() {
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
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) { /* проверяем соответствие значению по умолчанию (false) */
            console.log(personalMovieDB);
        } else {
            console.log('Sorry, this data base is private');
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            const genre = prompt(`Введите любимые жанры через запятую`).toLowerCase();
            if (genre != null || genre != '') {
                personalMovieDB.genres = genre.split(', '); 
                personalMovieDB.genres.sort();
            } else {
                console.log('Вы ввели некорректные данные');
                i--;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    }
};
