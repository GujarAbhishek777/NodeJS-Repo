const fruit = ['apple','oranges',' ','mango',' ','lemon'];

console.log(fruit.map(addvalue));

function addvalue(item){
   if(item===' '){
    return "empty string";
   }
   else{
    return item;
   }
}

// const hobbies=['sports','cooking'];
// console.log(hobbies.map(hobby=>'Hobby:'+hobby));
// const obj1 = {'key1': 1}

// const obj2 = { ...obj1}

// if(obj2 === obj1){

// console.log('same objects')

// }

// else{

// console.log('different objects')

// }


// const obj1 = {'key1': 1 , 'key2' : 2}

// const obj2 = { ...obj1, key1: 1000}



// console.log(obj1)

// console.log(obj2)

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2

//Answers of the questions written inside the task 3 of Kickstarting nodeJS

// 2)

// const fruit = ['apple','oranges',' ','mango',' ','lemon'];



// console.log(fruit.map(addvalue));



// function addvalue(item){

//    if(item===' '){

//     return "empty string";

//    }

//    else{

//     return item;

//    }

// }



// 3)

// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

// The fundamental idea of the object spread operator is to create a new plain object using the own properties of an existing object





// 5)

// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:





// output 1)

// different objects



// output 2)

// { key1: 1, key2: 2 }

// { key1: 1000, key2: 2 }