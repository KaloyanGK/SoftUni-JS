function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let input = document.getElementById(`searchField`);
   let rows = document.querySelectorAll(`tbody tr`);

   function onClick() {
      for (let row of rows) {
         if (row.textContent.includes(input.value) && input.value !== ``) {
            row.classList.add("select");
         } else {
            row.classList.remove("select")
         }
      }
      input.value = ``;
   }
}