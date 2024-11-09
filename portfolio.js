let name = prompt("what's your name?");
let p = document.getElementById('p1');
p.innerText = ` Hello ${name ?? "there"}😊!`
