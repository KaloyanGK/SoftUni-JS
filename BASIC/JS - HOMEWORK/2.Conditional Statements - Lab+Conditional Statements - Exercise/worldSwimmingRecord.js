function worldSwimmingRecord(input) {
  let record = Number(input[0]);
  let distanceInM = Number(input[1]);
  let timeInSec = Number(input[2]);

  let time = distanceInM * timeInSec;
  let delay = Math.floor(distanceInM / 15) * 12.5;
  let totalTime = (time + delay).toFixed(2);
  let razlika = Math.abs(totalTime - record).toFixed(2);

  if (totalTime < record) {
    console.log(
      `Yes, he succeeded! The new world record is ${totalTime} seconds.`
    );
  } else if (totalTime >= record) {
    console.log(`No, he failed! He was ${razlika} seconds slower.`);
  }
}
worldSwimmingRecord(["10464", "1500", "20"]);
