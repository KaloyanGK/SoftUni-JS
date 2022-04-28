function extractText() {
    let elements = document.getElementById(`items`);
    let text = elements.textContent;
    let element2 = document.getElementById(`result`)
    element2.innerHTML=text;
    
}