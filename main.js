const BODY = document.body;

const TEXTELEMENT = ["Quiz Question", "What is the capital of France?"];

const TEXTBUTTOM = ["London", "Berlin", "Paris", "Madrid", "Previous", "Next"];

let btns = [];

let divContainer = document.createElement("div");
let h2 = document.createElement("h2");
let p = document.createElement("p");
let ul = document.createElement("ul");
let li = document.createElement("li");
let btn = document.createElement("input");

h2.textContent = TEXTELEMENT[0];
p.textContent = TEXTELEMENT[1];

btn.type = "button";
btn.textContent = TEXTBUTTOM[0];

for (let i = 0; i < 4; i++) {
  let li = document.createElement("li");
  let btn = document.createElement("input");
  btn.type = "button";
  btn.value = TEXTBUTTOM[i];
  btns.push(btn);
  li.append(btn);
  ul.append(li);
}

let div = document.createElement("div");

let prevBtn = document.createElement("input");
prevBtn.type = "button";
prevBtn.value = TEXTBUTTOM[4];

let nextBtn = document.createElement("input");
nextBtn.type = "button";
nextBtn.value = TEXTBUTTOM[5];

div.append(prevBtn, nextBtn);

divContainer.append(h2, p, ul, div);

BODY.append(divContainer);