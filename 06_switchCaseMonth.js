var monthofYear = function (month) {
    switch (month) {
      case 1:
        console.log(`January`);
        break;
      case 2:
        console.log(`Feburay`);
        break;
      case 3:
        console.log(`march`);
        break;
      case 4:
        console.log(`April`);
        break;
      case 5:
        console.log(` number 5 is May`);
        break;
      case 6:
        console.log(`Jun`);
        break;
      case 7:
        console.log(`Jully`);
        break;
      case 8:
        console.log(`August`);
        break;
      case 9:
         console.log(`september`);
        break; 
        case 10:
        console.log(`octomber`);
        break;
        case 11:
        console.log(`november`);
        break;
        case 12:
        console.log(`number 12 is December`);
        break; 
      default:
          console.log(`Invalid Month: ${month}`);
        break;
    }
  };
  monthofYear(0);
  monthofYear(5);
  monthofYear(12);
  monthofYear(15);
  monthofYear(100);
  monthofYear(null);
  monthofYear(undefined);