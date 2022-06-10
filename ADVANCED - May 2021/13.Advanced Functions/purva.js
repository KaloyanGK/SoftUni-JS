function area() {
    return Math.abs(this.x * this.y);
};
function vol() {
    return Math.abs(this.x * this.y * this.z);
};


function solve(area, vol, input) {

    let parsed = JSON.parse(input);
    let result = []
    for (let el of parsed) {
        result.push({
            areaFunc: area.call(el),
            volumeFunc: vol.call(el),

        })
    }
    
}



solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
)