const BODY = document.body;

const TEXTELEMENT = ["Quiz Question", "What is the capital of France?"];

const TEXTBUTTOM = ["London", "Berlin", "Paris", "Madrid", "Previous", "Next"];

let btns = [];

let divContainer = document.createElement("div");
divContainer.className="container";
let h2 = document.createElement("h2");
let p = document.createElement("p");
let ul = document.createElement("ul");
ul.className="container-answers";
let li = document.createElement("li");
let btn = document.createElement("input");

h2.textContent = TEXTELEMENT[0];
p.textContent = TEXTELEMENT[1];

btn.type = "button";
btn.textContent = TEXTBUTTOM[0];

for (let i = 0; i < 4; i++) {
  let li = document.createElement("li");
  li.className="answer";
  let btn = document.createElement("input");
  btn.type = "button";
  btn.value = TEXTBUTTOM[i];
  btn.className="answer-btn"
  btns.push(btn);
  li.append(btn);
  ul.append(li);
}

let div = document.createElement("div");
div.className="container-footer"

let prevBtn = document.createElement("input");
prevBtn.type = "button";
prevBtn.value = TEXTBUTTOM[4];
prevBtn.className="footer-btn"

let nextBtn = document.createElement("input");
nextBtn.type = "button";
nextBtn.value = TEXTBUTTOM[5];
nextBtn.className="footer-btn";
div.append(prevBtn, nextBtn);

divContainer.append(h2, p, ul, div);

BODY.append(divContainer);