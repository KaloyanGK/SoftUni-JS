function dictionary(input) {
  let dict = {};
  for (let element of input) {
    let obj = JSON.parse(element);
    //маха JSON формата
    dict = Object.assign(dict, obj);
    //в един нов  ОБЩ обкет добавя съществуващите обект?
  }
  for (let el in dict) {
    console.log(el);
  }
  // let sortedKeys = Object.keys(dict);
  // //как разбира кое е ключа?

  // sortedKeys.sort((a, b) => a.localeCompare(b));

  // for (let el of sortedKeys) {
  //   let definition = dict[el];
  //   console.log(`Term: ${el} => Definition: ${definition}`);
  // }
}

dictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
