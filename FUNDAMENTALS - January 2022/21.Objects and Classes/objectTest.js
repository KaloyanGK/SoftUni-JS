function obj() {
  let person = {
    name: `Kaloyan`,
    city: `Varna`,
    age: 31,
    hobby: `books`,
  };

  let personWife = {
    name: `Yoanna`,
    city: `Varna`,
    age: 26,
    hobby: `swimming`,
  };

  let personChild = {
    name: `Vladimir`,
    city: `Varna`,
    age: 1,
    hobby: `cry`,
  };
  Object.seal(
    personChild
  ); /*<--- можеш да променяш стойнстта на даден ключ, но не можеш да добавящ нов ключ*/
  personChild.city = `Varna,Chayka`;
  personChild.hairColor = `blonde`;

  Object.freeze(
    personWife
  ); /*<---  замръзява обекта. не можем да го променяме */
  personWife.name = `Nikolchova`;

  if (person.hasOwnProperty(`test`)) {
    /*<--- търси дали даден ключ го има/съществува в обетка */
    // console.log(person.hobby);
  } else {
    person.test = `testDrive`;
  }

  let keys =
    Object.keys(
      person
    ); /*<--- връща масив от всички ключове в обекта, зададен в скобите */

  let values =
    Object.values(
      person
    ); /*<--- връща масив от всички стойности на ключа в обекта, зададен в скобите */

  let newObj = Object.assign(
    {},
    person
  ); /*<-- така копираме обкет. При него, ако има вложени обкети или масиви- те могат да бъдат променени */

  let brandNewObj = JSON.parse(
    JSON.stringify(person)
  ); /*<-- дълбоко копие, което не може да се променя ни никакъв начин */
  console.log(brandNewObj);
}

obj();
