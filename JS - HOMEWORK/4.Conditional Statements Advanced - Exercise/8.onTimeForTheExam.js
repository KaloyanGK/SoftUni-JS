function onTimeForExam(input) {
    let hourExam = Number(input[0]);
    let minExam = Number(input[1]);
    let hourArrive = Number(input[2]);
    let minArrive = Number(input[3]);

    let examTimeInMin = hourExam * 60 + minExam;
    let arriveTimeInMin = hourArrive * 60 + minArrive;


    if (arriveTimeInMin > examTimeInMin) {
        console.log(`Late`);

        let diff = arriveTimeInMin - examTimeInMin;


        if (diff >= 60) {
            let h = Math.floor(diff / 60);
            let min = diff % 60;

            if (min < 10) {
                console.log(`${h}:0${min} hours after  the start`);
            } else {
                console.log(`${h}:${min} hours after  the start`);
            }

        } else {
            let min = diff % 60;
            console.log(`${min} minutes after the start`);
        }
    } else if (examTimeInMin - arriveTimeInMin <= 30) {
        console.log(`On time`);

        let diff = examTimeInMin - arriveTimeInMin;

        if (diff !== 0) {
            let min = diff % 60;
            console.log(`${min} minutes before the start`);
        
        }
    
} else {
    console.log(`Early`);
    let diff = examTimeInMin - arriveTimeInMin;
    if( diff >= 60){
        let h = Math.floor(diff / 60);
        let min = diff % 60;
        if ( min < 10){
            console.log(`${h}:0${min} hours before the start`);
        }else {
            console.log(`${h}:${min} hours before the start`)
        }
    }else {
        let min = diff % 60;
        console.log(`${min} minutes before the start`);
    }
}


} onTimeForExam(["10",
    "00",
    "10",
    "00"])
