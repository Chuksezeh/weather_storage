
//store data in local storage

localStorage.setItem('name', 'chuks');
localStorage.setItem('age', '100');

//get data in localStorage

// let art = localStorage.getItem('name');
// let age = localStorage.getItem('age');

// //update data

// localStorage.setItem('name', 'chuks');
// localStorage.name = 'emeka'

// name = localStorage.getItem('name')
// localStorage.age = '80';

// console.log(name, age)

// //delete data from localStorage

// localStorage.removeItem('name');
// localStorage.removeItem('age');

// name = localStorage.getItem('name');
// age = localStorage.getItem('age');

// console.log(name, age);

// localStorage.clear();


// const bucket = [
//     {"name": "ebuka obi", "text": "looking for money", "forward": "kind gestures always pays"},
//     {"name": "ifeanyi akabo", "text": "seeing the old", "forward": "eye contact tells me to go"},
//     {"name": "contact the whole people", "text": "looking for the way out", "forward": "the situation under display"}
// ]

// localStorage.setItem('bucket', JSON.stringify('bucket'));

// const savedItems = localStorage.getItem('bucket');

// console.log(JSON.parse(savedItems));



//creating multiple user object

class user {
constructor(username, email){
   this.username = username;
   this.email = email;
   this.score = 0;
    }

    login(){
  console.log(`${this.username} just logged in`);
  return this;
    }
    logout(){
        console.log(`${this.username} just logged out`)
        return this;
    }
    incScore(){
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`);
        return this;
    }
}

class Admin extends user{
    constructor(username, email, title){
        super(username,email);
        this.title = title;
    }
    deleteUser(){
        users = users.filter( (u) =>{
            return u.username !== user.username
        })                                                                                                                                                                                                                                   

    }
};


const userOne = new user('chuks', 'chuksintellectual@gmail.com');
const userTwo = new user('Paul', 'membert@gmail.com');
const userThree = new Admin('emeka','peoplething@gmail.com', 'broken bone');

console.log(userOne, userTwo, userThree);

// userOne.login().incScore().incScore().logout()
let users =[userOne, userTwo, userThree];

//console.log(user)

userThree.deleteUser(userTwo);

console.log(user);

//userone.deleteUser(userThree);




//rest parameter  

const double = (...nums) =>{ 
    console.log(nums);
    return nums.map(nums => nums*4)
}
const result = double(2,34,5,6,7,8,9,1)

console.log(result);

//spread syntax

const people = ['mike', 'emeka', 'iguu'];

console.log(people)

const members = ['thing', 'ken', 'okoli', ...people];

console.log(members)


//spread syntax

const person ={name: 'papa', age: 30, job: 'market'};

const personLife = {...person, location:'Abuja'};
console.log(personLife)

//sets
const men = ['mike', 'emeka', 'iguu', 'menu', 'moon', 'peter'];

const nameSet = new Set(men);

const unique = [...new Set(men)];
console.log(men);

const ages = new Set();
ages.add(20);
ages.add(76).add(30);
ages.add(25);
ages.delete(25);
console.log(ages.has(30), ages.has(25));

//ages.clear();
console.log(ages);


const local = new Set([ {nikName:'chyboy', age: '40'},
                       {nikName:'fineboy', age: '54'},
                       {nikName:'ken', age: '78'},
                       {nikName:'kenne', age: '49'},
                       {nikName:'joe', age: '56'},
                       {nikName:'jack', age: '98'},
                       {nikName:'unique', age: '78'},
                       {nikName:'gudu', age: '34'},
                       {nikName:'game', age: '65',}

]);

local.forEach(loc =>{
  
  console.log(loc);
});
