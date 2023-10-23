//const PromptSync = require("prompt-sync");

function checkLeapYear(year) {

  //three conditions to find out the leap year
  if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
      console.log(year + ' is a leap year');
  } else {
      console.log(year + ' is not a leap year');
  }
}

// take input


checkLeapYear(2022);
checkLeapYear(2021);
checkLeapYear(2024);
checkLeapYear(1992);





//  var leap = function(year){
//    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//     console.log(year + ' is a leap year');
// } else {
//     console.log(year + ' is not a leap year');

//    }
//  }
// leap(year)
