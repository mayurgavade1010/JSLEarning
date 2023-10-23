var displayDay = function (dayNum) {
    switch (dayNum) {
      case 1:
        console.log(`Monday`);
        break;
      case 2:
        console.log(`Tuesday`);
        break;
      case 3:
        console.log(`Wed`);
        break;
      case 4:
        console.log(`Thur`);
        break;
      case 5:
        console.log(`Fri`);
        break;
      case 6:
        console.log(`Saturday`);
        break;
      case 7:
        console.log(`Sunday`);
        break;
      default:
          console.log(`Invalid data: ${dayNum}`);
        break;
    }
  };
  displayDay(2);
  displayDay(7);
  displayDay(9);
  displayDay(null);
  displayDay(undefined);
  displayDay(-11);