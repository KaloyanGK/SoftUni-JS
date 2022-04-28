function extract(content) {
    let pattern = /\(([A-Z-a-z\s]+)\)/g;
    let element = document.getElementById(content);
    let text = element.textContent;
    let result =[];
    let matches = text.matchAll(pattern);
    for(let match of matches){
        result.push(match[1])
    }
  
   
  return result.join(`; `)
}