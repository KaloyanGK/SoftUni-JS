function solve(input) {
  let numOfPieces = Number(input.shift());
  let object = {};
  for (let i = 0; i < numOfPieces; i++) {
    let [piece, author, lock] = input[i].split(`|`);

    object[piece] = {
      composer: author,
      key: lock,
    };
  }

  input.splice(0, numOfPieces);
  let element = input.shift();
  while (element !== `Stop`) {
    let [command] = element.split(`|`);
    if (command == `Add`) {
      let [command, currtPiece, currAuthor, lock] = element.split(`|`);
      if (object.hasOwnProperty(currtPiece)) {
        console.log(`${currtPiece} is already in the collection!`);
      } else {
        object[currtPiece] = {
          composer: currAuthor,
          key: lock,
        };
        console.log(
          `${currtPiece} by ${currAuthor} in ${lock} added to the collection!`
        );
      }
    } else if (command == `Remove`) {
      let [command, currtPiece] = element.split(`|`);
      if (object.hasOwnProperty(currtPiece)) {
        delete object[currtPiece];
        console.log(`Successfully removed ${currtPiece}!`);
      } else {
        console.log(
          `Invalid operation! ${currtPiece} does not exist in the collection.`
        );
      }
    } else if (command == `ChangeKey`) {
      let [command, currtPiece, newLock] = element.split(`|`);
      if (object.hasOwnProperty(currtPiece)) {
        object[currtPiece].key = newLock;
        console.log(`Changed the key of ${currtPiece} to ${newLock}!`);
      } else {
        console.log(
          `Invalid operation! ${currtPiece} does not exist in the collection.`
        );
      }
    }
    element = input.shift();
  }
  for (let el in object) {
    console.log(
      `${el} -> Composer: ${object[el].composer}, Key: ${object[el].key}`
    );
  }
}
solve([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
