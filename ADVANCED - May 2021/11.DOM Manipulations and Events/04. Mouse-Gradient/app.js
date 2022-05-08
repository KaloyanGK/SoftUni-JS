function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    
    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);
 
    function gradientMove(event) {
        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        document.getElementById('result').textContent = power + "%";
    }
 
    function gradientOut(event) {
        document.getElementById('result').textContent = "";
    }
};

//judge ми дава 100% но в моя браузър не се изпълнява задачата. За да излязат процентите трябва да кликна в/у обекта, вместо да го само да го посоча,както е eventa(`mouseover`)