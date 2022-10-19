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



  async function myFunction() {
    return "The Incredibles";
  }
  myFunction().then(
    function(value) {console.log(value);}
  );
  
  