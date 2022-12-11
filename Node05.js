//Theory Question answer is as follows

//Que==> What does destructuring do exactly. When would you use it.

// Destructuring is a convenient way of extracting multiple values from data stored in
//  (possibly nested) objects and Arrays. It can be used in locations that receive data 
// (such as the left-hand side of an assignment). How to extract the values is specified
//  via patterns (read on for examples).


// 1) Q.1 Output
// const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

// 	const { key1, key3}  = { ...obj1}

	

// 	console.log(key1, key3);

    //2) Q.2 Output as follows

    // const arr1 = ['value1', 'value2']

	// const [ val1, val2 ] = arr1;



	// console.log(val1);

	// console.log(val2);

    //3) Q.3 Output as follows
    const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

	let { key1, key3}  = obj1;

    console.log(key1,key3);	

	key1 = 20;

	key3 = 123;

	console.log(obj1.key1, obj1.key3);
    console.log(key1,key3);
    



