/* "use strict"; */

const numerOfLilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
    count: numerOfLilms,
    movies: {}, /* пустой объект */
    actors: {},
    genres: [], /* пустой массив */
    privat: false
};

const a = prompt('Назование один из последних просмотренных фильмов', ''),
      b = prompt('На сколько Вы его оцениваете', ''),
      c = prompt('Назование один из последних просмотренных фильмов', ''),
      d = prompt('На сколько Вы его оцениваете', '');

personalMovieDB.movies[a] = b; /* записываем ответы в объект в формате 'фильм': 'оценка' */
personalMovieDB.movies[c] = d; /* можно также использовать синтаксис personalMovieDB.movies.c, но он может работать не во всех браузерах */

console.log(personalMovieDB);