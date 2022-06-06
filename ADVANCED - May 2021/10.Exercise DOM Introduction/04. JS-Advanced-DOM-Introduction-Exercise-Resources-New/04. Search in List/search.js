function search() {
   let useWord = document.getElementById(`searchText`).value;
   let towsnArr = Array.from(document.querySelectorAll(`#towns li`));

   let match = document.getElementById(`result`);
   let counter = 0;
   for (let town of towsnArr) {
      if (town.textContent.includes(useWord) && useWord !== ``) {
         counter++;
         town.style.fontWeight = `bold`;
         town.style.textDecoration = `underline`;
      } else {
         town.style.fontWeight = `normal`;
         town.style.textDecoration = `none`;
      }
   }
   match.textContent = `${counter} matches found`;
}
