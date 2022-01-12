function demo(input) {
  let password = "User123!";
  if (password === `user123#`) {
    console.log(`wrong result`);
  } else if ((password = `User123!`)) {
    let username = `Kaloyan`;
    console.log(`Hi ${username}! `);
  } else {
    console.log(`bad input`);
  }
}

demo([`5`, `3`]);
