function solve(arr) {
  let songs = [];
  class Song {
    constructor(typeList, name, time) {
      (this.typeList = typeList), (this.name = name), (this.time = time);
    }
  }

  let numberOfSongs = arr.shift();
  let typeList = arr.pop();
  for (let i = 0; i < numberOfSongs; i++) {
    let currentSongInfo = arr[i].split(`_`);
    let song = new Song(
      currentSongInfo[0],
      currentSongInfo[1],
      currentSongInfo[2]
    );
   
    songs.push(song);
  }

  if (typeList === "all") {
    songs.forEach((el) => console.log(el.name));
  } else {
    songs.filter((el) => {
      if (typeList == el.typeList) {
        console.log(el.name);
      }
    });
  }
}
solve([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
console.log(`-----`);
solve([
  4,
  "favourite_DownTown_3:14",
  "listenLater_Andalouse_3:24",
  "favourite_In To The Night_3:58",
  "favourite_Live It Up_3:48",
  "listenLater",
]);
console.log(`-----`);
solve([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
