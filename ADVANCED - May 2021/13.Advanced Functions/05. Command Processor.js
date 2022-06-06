function solution() {
  let text = ``;

  function append(string) {
    text += string;
  }
  function removeStart(number) {
    text = text.slice(number);
  }
  function removeEnd(number) {
    text = text.slice(0, -number)
  }
  function print() {
    console.log(text);
  }

  return {
    append,
    removeStart,
    removeEnd,
    print
  }
}

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
