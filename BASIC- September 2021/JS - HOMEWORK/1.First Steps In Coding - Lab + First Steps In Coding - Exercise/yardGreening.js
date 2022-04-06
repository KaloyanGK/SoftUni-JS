function yardGreening(input){

    let land=(input[0]);
    let totalPrice= land * 7.61;
    let discount= totalPrice * 0.18;
    let discountPrice= totalPrice - discount;

    console.log(`The final price is: ${discountPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`)
    
    


}
yardGreening([`550`]);