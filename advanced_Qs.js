// a basic promise
let myPromise = new Promise(function(myResolve, myReject) {
    let x = 1;
    console.log("hi!")
  
  // this "promise" is a special type of function that's designed with the possiblity of failure.
  // once the promise is activated, all code ahead of its resolve and reject statements is evaluated, 
  // which, for this function, takes very little time. then, the control flow statements get evaluated 
  // and finally the promise.then function runs, resulting in either the function value or the function 
  // error's being returned. 
  
    if (x == 0) {
      myResolve("x is 0 and the world is good");
    } else {
      myReject("something is horribly wrong");
    }
  });

  myPromise.then(
    function(value) {console.log(value);},
    function(error) {console.log(error);}
  );
  console.log("hi!")
  
// a promise that waits before returning a value
let pinkyPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("hi!!"); }, 10*1000);
  });

 pinkyPromise.then(
    function(value) {console.log(value);},
  );

 

 myPromise.then(
    function(value) {console.log("1");},
    function(error) {console.log("error");},
  );

  // a chained promise
 let strung_out_promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(100), 1500); // (*)
  }).then(function (result) { // (**)
    console.log(result); // 2
    return result/2;
  }).then(function (result) { // (***)
    console.log(result); // 4
    return result -3;
  }).then(function (result) {
    console.log(result); // 6
    result= "zippity-do-da";
    console.log(result)
  });

   // a chained promise that calculates part of the fibbonaci sequence.
  let fibbonaci = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1500); // (*)
  }).then(function (result) { // (**)
    console.log(result); // 2
    return 1;
  }).then(function (result) { // (***)
    console.log(result); // 4
    return result+1;
  }).then(function (result) {
    console.log(result); // 6
    result+=1
    console.log(result)
    return result;
  }).then(function (result) {
    result+=2
    console.log(result)
  });


  // an async function, a function that returns a promise
  async function myFunction() {
    return "The Incredibles";
  }
  myFunction().then(
    function(value) {console.log(value);}

  );
  
  //this promise is returned by another function
  function returnPromise(){
  return iteratedPromise = new Promise(function(myResolve) {
    setTimeout(function() { myResolve("the incredibles"); });
  }).then(function (value) { // (**)
    console.log(value); // 2
  })
}


returnPromise();
//a function that returns a promise is basically identical to an async function. Async functions 
// are defined as functions that return promises, and so asking to create a function that returns a promise
// and asking to create an async function are the same thing. =

// an async function using an await keyword
async function emperorAsync(input) {
  let thisPromise = new Promise(function(resolve, reject) {
    if(input==0){
      resolve("I am asynchronous, grovel before me!");
    }
    else{
      reject("I am but a lowly function.")
    }
  });
  let returnedValue = await thisPromise;
  console.log(returnedValue)
}

emperorAsync(0);

// a variable equal to an earlier promise.
let tricky = returnPromise()
