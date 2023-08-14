let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnersAge = 15;

if (registeredEarly && runnersAge > 19) {
  raceNumber += 1000;
}

if (registeredEarly) {
  console.log(`Race will begin at 9:30 am. Your race number is: ${raceNumber}`);
} else if (!registeredEarly && runnersAge > 19) {
  console.log(`Race will begin at 11:00 am. Your race number is: ${raceNumber}`);
} else if (runnersAge < 20) {
  console.log(`Race will begin at 12:30 pm. Your race number is: ${raceNumber}`);
}
