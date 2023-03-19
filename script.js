/* eslint-disable no-unused-vars */
// let number = 5;
// const leftBorderWidth = 1;

// number = 90;
// console.log(number);



//Объекты

// const erlanKusain = {
//     name: 'erlan',
//     age: 25,
//     city: 'Pavlodar',
//     isMarried: true,
//     child: false
// };

// const object = {
//     свойство: значение,
//     property: value,
//     property: value,
//     property: value
// }




//Массивы:

//             пор. номер:  property: property: property:
//                   0        1         2        3
// const array = ["значение", "value", "value", "value"]



//Объекты:

// const erlanKusain = {
//     name: 'erlan',
//     firstName: 'kusain',
//     age: 24
// }
// const elamanKusain = {
//     name: 'elaman',
//     firstName: 'kusain',
//     age: 23
// }



//Добавление свойств в обьекты через точку и скобки:

// erlanKusain.city = 'Pavlodar';
// elamanKusain.city = 'Pavlodar';
// console.log(elamanKusain)


//Всплывающие окна(Три брата акрабата)

// alert('Allahu Akbar');

// confirm('Are you ready?')

// prompt("Вам есть 18?")



const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", " ");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat:false
};

const 
	lastViewedFilm = prompt("Один из последних просмотренных фильмов?", " "),
	gradeFilm = prompt("На сколько оцените его?", ""),
	lastViewFilm = prompt("Один из последних просмотренных фильмов?", " "),
	ratingFilm = prompt("На сколько оцените его?", "");

personalMovieDB.movies[lastViewedFilm] = gradeFilm;
personalMovieDB.movies[lastViewFilm] = ratingFilm;

console.log(personalMovieDB);
    
      

      



