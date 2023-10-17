// IN JS we call function as first class citizen
// 1. FE
// 2. Callback
// 3. Function can return another function

function outer(){
    console.log('Inside outer function');
   return function(){
     console.log('Inside inner function');
   } 
    
}
outer()();