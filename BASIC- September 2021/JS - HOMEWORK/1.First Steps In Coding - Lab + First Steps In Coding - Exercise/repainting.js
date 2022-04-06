function repainting(input){
    let nailon = Number(input[0]);
    let boya = Number(input[1]);
    let razreditel = Number(input[2]);
    let chasove = Number(input[3]);
    
    let nailonTotal = (nailon + 2) * 1.50;
    let boyaTotal = (boya + boya*0.1) * 14.50;
    let razreditelTotal = razreditel * 5;
    let materiali = nailonTotal + boyaTotal + razreditelTotal + 0.40;
    let rabotnici = materiali * 0.3;
    let zaplati = rabotnici * chasove;
    let final = materiali + zaplati;

    console.log(final);


}


repainting(["10 ","11 ","4 ","8 "]);
