function petShop(input){

    let dogFood=Number(input[0]);
    let catFood=Number(input[1]);
    
    let dogSum= dogFood * 2.50;
    let catSum= catFood * 4;

    let total=dogSum + catSum;

    console.log(` ${total} lv.`);
}
petShop([`5`, `4`])