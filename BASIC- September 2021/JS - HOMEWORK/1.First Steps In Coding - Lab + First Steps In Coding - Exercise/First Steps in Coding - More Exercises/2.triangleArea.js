function triangleArea(input){
    let a = Number(input[0]);
    let h =Number(input[1]);

    let ta = a*h /2

    let taFixed=ta.toFixed(2);

    console.log(taFixed);

}
triangleArea([`20`,`30`])