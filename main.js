const BODY = document.body;

const TEXTS = [
  {
    pregunta: "What is the capital of France?",
    respuesta: ["London", "Berlin", "Paris", "Madrid"],
  },
  {
    pregunta: "What is the longest river in the world?",
    respuesta: ["Amazonas", "Nilo", "Yangtsé", "Miño"],
  },
  {
    pregunta: "What is the longest river in the world?",
    respuesta: ["Amazonas", "Nilo", "Yangtsé", "Miño"],
  },
  {
    pregunta: "Who wrote Romeo and Juliet?",
    respuesta: [
      "ane Austen",
      "Cervantes",
      "William Shakerpeare",
      "Charles Dickens",
    ],
  },
  {
    pregunta: "How many planets are there in our solar system?",
    respuesta: ["7", "8", "9", "10"],
  },
];

const TEXTELEMENT = "Quiz Question";

const TEXTBUTTOM = ["Previous", "Next"];

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

  h2.textContent = TEXTELEMENT;
  p.textContent = TEXTS[0].pregunta;

  btn.type = "button";
  btn.textContent = TEXTBUTTOM[0];

  for (let i = 0; i < 4; i++) {
    let li = document.createElement("li");
    li.className = "answer";
    let btn = document.createElement("input");
    btn.type = "button";
    btn.value = TEXTS[0].respuesta[i];
    btn.className = "answer-btn";
    btns.push(btn);
    li.append(btn);
    ul.append(li);
  }

  let div = document.createElement("div");
  div.className = "container-footer";

  let prevBtn = document.createElement("input");
  prevBtn.type = "button";
  prevBtn.value = TEXTBUTTOM[0];
  prevBtn.disabled = true;
  prevBtn.className = "footer-btn:disabled";
  prevBtn.id = "prev";

  let nextBtn = document.createElement("input");
  nextBtn.type = "button";
  nextBtn.value = TEXTBUTTOM[1];
  nextBtn.className = "footer-btn";
  nextBtn.id = "next";

  div.append(prevBtn, nextBtn);

  divContainer.append(h2, p, ul, div);

  BODY.append(divContainer);

  nextBtn.addEventListener("click", accionNext);
  prevBtn.addEventListener("click", accionPrev);
};

let accionNext = () => {
  actualizarEstado(1);
};

let accionPrev = () => {
  actualizarEstado(-1);
};

let actualizarEstado = (incremento) => {
  let p = document.getElementById("p");
  let prevBtn = document.getElementById("prev");
  let nextBtn = document.getElementById("next");

  cont += incremento;

  p.textContent = TEXTS[cont].pregunta;

  if (cont === 1) {
    desactivarBtn(prevBtn);
    activarBtn(nextBtn);
  } else if (cont === 4) {
    activarBtn(prevBtn);
    desactivarBtn(nextBtn);
  } else {
    activarBtn(prevBtn);
    activarBtn(nextBtn);
  }

  cambiarPregunta();
};

let cambiarPregunta = () => {
  let btns = document.querySelectorAll(".answer-btn");
  let startIndex = (cont - 1) * btns.length;

  for (let i = 0; i < btns.length; i++) {
    btns[i].value = TEXTS[cont].respuesta[i];
  }
};

let activarBtn = (btn) => {
  btn.classList.remove("footer-btn:disabled");
  btn.classList.add("footer-btn");
  btn.disabled = false;
};

let desactivarBtn = (btn) => {
  btn.classList.remove("footer-btn");
  btn.classList.add("footer-btn:disabled");
  btn.disabled = true;
};

document.addEventListener("DOMContentLoaded", iniciarElementos);
