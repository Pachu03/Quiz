const BODY = document.body;

const TEXTELEMENT = [
  "Quiz Question",
  "What is the capital of France?",
  "What is the longest river in the world?",
  "Who wrote Romeo and Juliet?",
  "How many planets are there in our solar system?",
];

const TEXTBUTTOM = ["London", "Berlin", "Paris", "Madrid", "Previous", "Next"];

let btns = [];

let cont = 1;

let iniciarElementos = () => {
  let divContainer = document.createElement("div");
  divContainer.className = "container";
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  p.id = "p";
  let ul = document.createElement("ul");
  ul.className = "container-answers";
  let li = document.createElement("li");
  let btn = document.createElement("input");

  h2.textContent = TEXTELEMENT[0];
  p.textContent = TEXTELEMENT[1];

  btn.type = "button";
  btn.textContent = TEXTBUTTOM[0];

  for (let i = 0; i < 4; i++) {
    let li = document.createElement("li");
    li.className = "answer";
    let btn = document.createElement("input");
    btn.type = "button";
    btn.value = TEXTBUTTOM[i];
    btn.className = "answer-btn";
    btns.push(btn);
    li.append(btn);
    ul.append(li);
  }

  let div = document.createElement("div");
  div.className = "container-footer";

  let prevBtn = document.createElement("input");
  prevBtn.type = "button";
  prevBtn.value = TEXTBUTTOM[4];
  prevBtn.disabled = true;
  prevBtn.className = "footer-btn:disabled";
  prevBtn.id = "prev";

  let nextBtn = document.createElement("input");
  nextBtn.type = "button";
  nextBtn.value = TEXTBUTTOM[5];
  nextBtn.className = "footer-btn";
  nextBtn.id = "next";

  div.append(prevBtn, nextBtn);

  divContainer.append(h2, p, ul, div);

  BODY.append(divContainer);

  nextBtn.addEventListener("click", accionNext);
  prevBtn.addEventListener("click", accionPrev);
};

let accionNext = () => {
  let p = document.getElementById("p");

  let prevBtn = document.getElementById("prev");
  prevBtn.className = "footer-btn";
  prevBtn.disabled = false;
  let nextBtn = document.getElementById("next");

  switch (cont) {
    case 1:
      console.log(1);
      activarBtn(prevBtn)
      p.textContent = TEXTELEMENT[cont + 1];
      cont++;
      break;
    case 2:
      console.log(2);
      p.textContent = TEXTELEMENT[cont + 1];
      activarBtn(prevBtn)
      cont++;
      break;
    case 3:
      console.log(3);
      p.textContent = TEXTELEMENT[cont + 1];
      activarBtn(prevBtn);
      desactivarBtn(nextBtn);
      cont++;
      break;
    case 4:
      console.log(4);
      p.textContent = TEXTELEMENT[cont + 1];
      desactivarBtn(nextBtn);
      accionNext(prevBtn)
      break;
  }
};

let accionPrev = () => {
  let p = document.getElementById("p");

  let prevBtn = document.getElementById("prev");
  let nextBtn = document.getElementById("next");

  switch (cont) {
    case 1:
      console.log(1);
      desactivarBtn(prevBtn)
      break;
    case 2:
      console.log(2);
      p.textContent = TEXTELEMENT[cont - 1];
      desactivarBtn(prevBtn)
      cont--;
      break;
    case 3:
      console.log(3);
      p.textContent = TEXTELEMENT[cont - 1];
      activarBtn(prevBtn)
      cont--;
      break;
    case 4:
      console.log(4);
      p.textContent = TEXTELEMENT[cont - 1];
      activarBtn(nextBtn)
      cont--;
      break;
  }
};

let activarBtn = (btn) => {
  btn.className = "footer-btn";
  btn.disabled = false;
};

let desactivarBtn = (btn) => {
  btn.className = "footer-btn:disabled";
  btn.disabled = true;
};

document.addEventListener("DOMContentLoaded", iniciarElementos);