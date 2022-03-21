function towns(arr) {
    let array = arr;
    let arrayL = array.length;
    for (let i = 0; i < arrayL; i++) {
        let el = array[i];
        let [town, latitude, longitude] = el.split(` | `);

        let output = {
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2),
        };
        console.log(output);
    }
}
towns(["Plovdiv | 136.45 | 812.575"]);

towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
