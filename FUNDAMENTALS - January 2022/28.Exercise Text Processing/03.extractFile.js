function solve(input) {
  input = input.split(`\\`);
  let fileName = input.pop();

  fileName = fileName.split(`.`);

  let fileExtension = fileName.pop();
  fileName = fileName.join(`.`);

  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${fileExtension}`);
}
solve("C:\\Projects\\Data-Structures\\Template.pptx");
