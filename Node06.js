//Q.1) Output
// console.log('a');

// console.log('b');

// setTimeout(() => console.log('c'), 3000);

// console.log('d');

//Q.2) Output

// console.log('a');

// console.log('b');

// setTimeout(() => console.log('c'), 3000);

// setTimeout(() => console.log('d'), 0);

// console.log('e');

// Solution of 3 Question

async function solution(){
    console.log('a');

    console.log('b');
 
    const first= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(console.log('c'));    
        },3000)
    });
    await first;


    const second= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(console.log('d'));    
        },0)
    });
    await second;

     console.log('e');
}

solution();