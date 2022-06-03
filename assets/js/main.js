// const user = {
//     firstname: 'Agil',
//     lastname: 'Ata',
//     age: 22,
//     placeOfBirth: 'Kurdamir',
//     favoriteMovies: ['Interstellar'],
//     location: {
//         city: 'Baku',
//         district: 'Khatai',
//         street: 'M. Hadi'
//     },
//     getFullName: () => {
//         // If we have some `global` variables which names are 'firstname' and 'lastname' declared with `var` keyword then this function will return 'Samir Dadash'
//         // Else this function will return `undefined undefined`
//         return `${this.firstname} ${this.lastname}`;
//     },
//     getFullName2: function () {
//         return `${this.firstname} ${this.lastname}` // 'Agil Ata'
//     }
// };

// const key = "lastname";

// const user2 = {
//     key: 'Ferejullayev'
// }

// console.log(user2);

// console.log(user.firstname);
// console.log(user[key]);
// console.log(user.getFullName());
// user['getFullName']()

// Copying object 1st way
// const userCopy2 = { firstname: 'Aqil', firstname: 'Ilham' };
// const userCopy = { ...user, firstname: 'Ilham' };
// userCopy.lastname = 'Binyetov';
// user.firstname = 'Samir';


// Copying object 2nd way
// const stringifiedObject = JSON.stringify(user);
// const copiedObject = JSON.parse(stringifiedObject);
// console.log(copiedObject);

// Copying object 3rd way
// const movie = {
//     name: 'Interstellar',
//     createdAt: '2014',
//     director: 'Cristopher Nolan',
//     writers: ['Cristopher Nolan', 'Johnatan Nolan']
// };

// const staffOfInterstellar = {
//     artDirector: 'Filankes',
//     colorist: 'Behmenkes',
//     director: 'Cristopher Nolan2',
// };

// const resultObject = { ...movie, ...staffOfInterstellar };

// const resultObject = Object.assign({}, user);
// user.firstname = 'Ilham'
// console.log(resultObject);




// Object.values(user).forEach(userValue => console.log(userValue));
// Object.keys(user).forEach(userKey => console.log(userKey));
// Object.entries(user).forEach((entry) => console.log(entry));
// [['firstname', 'Agil'], ['lastname', 'Ata']]

// const numbers = [1, 2, 3, 4, 5];
// const otherNumbers = [6, 7, 8, 9, 10];

// function customConcat() {
//     console.log(arguments);
//     const result = [];
//     for (let i = 0; i < arguments.length; i++) {
//         if (typeof arguments[i] === 'object') {
//             for (let j = 0; j < arguments[i].length; j++) {
//                 result.push(arguments[i][j]);
//             }
//         } else {
//             result.push(arguments[i]);
//         }
//     }
//     return result
// }

// console.log(customConcat(numbers, otherNumbers)); // [1,2,3,4,5,6,7,8,9,10]
// console.log(customConcat(numbers, 6, 7, 8, 9, 10)); // [1,2,3,4,5,6,7,8,9,10]
// console.log(customConcat(1, 2, 3, 4, 5, otherNumbers)); // [1,2,3,4,5,6,7,8,9,10]
// console.log(customConcat(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // [1,2,3,4,5,6,7,8,9,10]

// const user1 = {
//     firstname: 'Agil',
//     lastname: 'Ata',
//     age: 22,
//     placeOfBirth: 'Kurdamir',
//     favoriteMovies: ['Interstellar'],
//     location: {
//         city: 'Baku',
//         district: 'Khatai',
//         street: 'M. Hadi'
//     },
//     getFullName: () => {
//         // If we have some `global` variables which names are 'firstname' and 'lastname' declared with `var` keyword then this function will return 'Samir Dadash'
//         // Else this function will return `undefined undefined`
//         return `${this.firstname} ${this.lastname}`;
//     },
//     getFullName2: function () {
//         return `${this.firstname} ${this.lastname}` // 'Agil Ata'
//     }
// };

// function User(fname = "", lname = "", age = 0, placeOfBirth = "", favoriteMovies, location) {
//     this.firstname = fname;
//     this.lastname = lname;
//     this.age = age;
//     this.placeOfBirth = placeOfBirth;
//     this.favoriteMovies = favoriteMovies;
//     this.location = location;
//     this.getFullname = function () {
//         return `${this.firstname} ${this.lastname}`
//     }
//     // return this; // { firstname: 'Agil', lastname: 'Ata' }
// }

// const user1 = new User(
//     'Aqil',
//     'Ata',
//     22,
//     'Kurdamir',
//     ['Interstellar'],
//     {
//         city: 'Baku',
//         district: 'Khatai',
//         street: 'M. Hadi'
//     }
// );

// const user2 = new User(
//     'Mahammad',
//     'Taghizade',
//     19,
//     'Baki',
//     ['Cedric'],
//     {
//         city: 'Baku',
//         district: 'Khalqlar',
//         street: 'Bahruz Nuriyev'
//     }
// );

// console.log(user1.getFullname());
// console.log(user2.getFullname());

// console.log(user1);
// console.log(user2);

// class Human {
//     constructor(fname = "", lname = "", age = 0, placeOfBirth = "", favoriteMovies, location) {
//         this.firstname = fname;
//         this.lastname = lname;
//         this.age = age;
//         this.placeOfBirth = placeOfBirth;
//         this.favoriteMovies = favoriteMovies;
//         this.location = location;
//     }

//     getFullName() {
//         return `${this.firstname} ${this.lastname}`
//     }

//     static sayMyName() {
//         return 'My class name is Human';
//     }
// }

// class Man extends Human {
//     constructor(fname = "", lname = "", age = 0, placeOfBirth = "", favoriteMovies, location, beardType) {
//         super(fname, lname, age, placeOfBirth, favoriteMovies, location);
//         this.gender = 'MALE';
//         this.beardKind = beardType;
//     }

//     static sayMyName() {
//         return 'My class name is Man';
//     }
// }

// const aMan = new Man(
//     'Aqil',
//     'Ata',
//     22,
//     'Kurdamir',
//     ['Interstellar'],
//     {
//         city: 'Baku',
//         district: 'Khatai',
//         street: 'M. Hadi'
//     },
//     'SHORT-BEARD'
// )

// // console.log(User.sayMyName());
// // console.log(aMan.getFullName());

// class CustomMath {
//     constructor(number) {
//         this.number = number;
//     }

//     add(num) {
//         this.number += num;
//     }

//     substract(num) {
//         this.number -= num;
//     }
// }

// const num = new CustomMath(5);
// num.add(100).substract(50).divide(5).multiply(3)  // 33
// num.substract(50).divide(5).multiply(3).add(10)  // -17
// num.add(50); // 55
// num.substract(15) // 40

// (5).add(3).minus(4).divide(100);













// const user = {
//     name: "Mehemmed",
//     surname: "Taghizade",
//     age: 19,
//     location: {
//         city: "Baki",
//         district: "Nizami",
//         street: "Behruz Nuriyev",
//     },
//     getFullname: function () {
//         return `${this.name} ${this.surname}`;
//     }

// };




// console.log(user.name);
// // alert(user.age);
// console.log(user.getFullname());






// function User(firsname = '', surname = '', age = 0, movie, location) {
//     this.firstname = firsname;
//     this.surname = surname;
//     this.age = age;
//     this.movie = movie;
//     this.location = location;
//     this.getFullname = function () {
//         return `${firsname} ${surname}`;
//     }
// }

// // for (let prop in User) {
// //     console.log(prop);
// // }
// console.log(User);


// const user1 = new User(
//     "Mehemmed",
//     "Taghizade",
//     19,
//     "cedric",
//     {
//         city: "Baki",
//         district: "Nizami",
//         street: "Behruz Nuriyev",
//     },


// );

// const user2 = new User(
//     "Eli",
//     "Taghizade",
//     6,
//     "masa&medved",
//     {
//         city: "Baki",
//         district: "Nizami",
//         street: "Behruz Nuriyev",
//     },
// );

// console.log(user1);
// console.log(user2);
// console.log(user1.getFullname());
// console.log(user2.getFullname());


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* HOME WORK */

/*ExerCise 1 */
// const user = {

// };

// user.name = 'John';
// user.surname = 'Smith'
// // nameto = user.name;
// // nameto = 'mea'
// user.name = 'Pete';
// // delete user.name;

// console.log(user);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// /*Exercise 2 */
// let schedule = {
//     // name: "MaGa"
// };

// // alert(isEmpty(schedule)); // true

// // schedule["8:30"] = "get up";

// // alert(isEmpty(schedule)); // false



// function isEmpty() {

//     if (Object.keys(schedule).length == 0) {
//         return true;
//     }
//     else if (Object.keys(schedule).length > 0) {
//         return false;
//     }
// }

// console.log(isEmpty(schedule));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*ExerCise 3 */
// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }


// // if (Object.keys(salaries).length == 0) {
// //     // return sum = 0;
// //     console.log("0")
// // } else {
// //     let sumSalary = salaries.John + salaries.Ann + salaries.Pete;
// //     console.log(`sum: ${sumSalary}`);
// // }




// let sumSalary = 0;

// for (let salary in salaries) {

//     // console.log(salaries[salary])
//     sumSalary += salaries[salary];
//     // console.log(sumSalary)

// }

// console.log(sumSalary)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*ExerCise 4 */


// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// function multiplyNumeric(obj) {
//     for (let numbers in menu) {
//         if (typeof menu[numbers] == 'number') {
//             menu[numbers] *= 2;

//         }

//     }
// }
// console.log(menu);
// // console.log(multiplyNumeric(menu));
// multiplyNumeric(menu);