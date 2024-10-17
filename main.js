const BODY = document.body;

const TEXTS = [
  {
    pregunta: "What is the capital of France?",
    respuesta: ["London", "Berlin", "Paris", "Madrid"],
    pintado: null,
    correpta: "Paris",
  },
  {
    pregunta: "What is the longest river in the world?",
    respuesta: ["Amazonas", "Nilo", "Yangtsé", "Miño"],
    pintado: null,
    correpta: "Nilo",
  },
  {
    pregunta: "Who wrote Romeo and Juliet?",
    respuesta: [
      "Jane Austen",
      "Cervantes",
      "William Shakespeare",
      "Charles Dickens",
    ],
    pintado: null,
    correpta: "William Shakespeare",
  },
  {
    pregunta: "How many planets are there in our solar system?",
    respuesta: ["7", "8", "9", "10"],
    pintado: null,
    correpta: "8",
  },
];

const TEXTELEMENT = "Quiz Question";

const TEXTBUTTOM = ["Previous", "Check", "Next"];

let indexPregunta = 0;

let btns = [];

let color = "#3CB371";

let iniciarElementos = () => {
  let divContainer = document.createElement("div");
  divContainer.className = "container";

  let h2 = document.createElement("h2");
  h2.textContent = TEXTELEMENT;

  let p = document.createElement("p");
  p.id = "p";
  p.textContent = TEXTS[indexPregunta].pregunta;

  let ul = document.createElement("ul");
  ul.className = "container-answers";

  crearPreguntas(indexPregunta, ul);

  let div = document.createElement("div");
  div.className = "container-footer";

  let prevBtn = document.createElement("input");
  prevBtn.type = "button";
  prevBtn.value = TEXTBUTTOM[0];
  prevBtn.disabled = true;
  prevBtn.className = "footer-btn";
  prevBtn.id = "prev";
  prevBtn.addEventListener("click", () =>
    accionPrev(p, ul, prevBtn, nextBtn, checkBtn)
  );

  let checkBtn = document.createElement("input");
  checkBtn.type = "button";
  checkBtn.value = TEXTBUTTOM[1];
  checkBtn.disabled = true;
  checkBtn.className = "footer-btn";
  checkBtn.id = "check";
  checkBtn.addEventListener("click", () =>
    accionCheck(p, ul, prevBtn, nextBtn)
  );

  let nextBtn = document.createElement("input");
  nextBtn.type = "button";
  nextBtn.value = TEXTBUTTOM[2];
  nextBtn.className = "footer-btn";
  nextBtn.id = "next";
  nextBtn.addEventListener("click", () =>
    accionNext(p, ul, prevBtn, nextBtn, checkBtn)
  );

  div.append(prevBtn, checkBtn, nextBtn);

  divContainer.append(h2, p, ul, div);

  BODY.append(divContainer);
};

let crearPreguntas = (numPregunta, contenedor) => {
  contenedor.innerHTML = "";

  TEXTS[numPregunta].respuesta.forEach((respuesta) => {
    let li = document.createElement("li");
    li.className = "answer";
    let btn = document.createElement("input");
    btn.type = "button";
    btn.value = respuesta;
    btn.className = "answer-btn";
    btns.push(btn);

    if (TEXTS[numPregunta].pintado === respuesta) {
      btn.style.backgroundColor = color;
    }

    btn.addEventListener("click", () => pintarPregunta(btn, numPregunta));
    li.append(btn);
    contenedor.append(li);
  });
};

let accionNext = (p, ulContenedor, prevBtn, nextBtn) => {
  indexPregunta++;
  actualizarPreguntas(p, ulContenedor, prevBtn, nextBtn);
};

let accionPrev = (p, ulContenedor, prevBtn, nextBtn) => {
  indexPregunta--;
  actualizarPreguntas(p, ulContenedor, prevBtn, nextBtn);
};

let actualizarPreguntas = (p, ulContenedor, prevBtn, nextBtn) => {
  p.textContent = TEXTS[indexPregunta].pregunta;
  crearPreguntas(indexPregunta, ulContenedor);

  prevBtn.disabled = indexPregunta === 0;
  nextBtn.disabled = indexPregunta === TEXTS.length - 1;
};

let pintarPregunta = (btn, numPregunta) => {
  btns.forEach((button) => {
    button.style.backgroundColor = "";
  });

  btn.style.backgroundColor = color;

  TEXTS[numPregunta].pintado = btn.value;

  comprobarRespuestas();
};

let comprobarRespuestas = () => {
  let pintada = 0;

  TEXTS.forEach((elemento) => {
    console.log(elemento.pintado);
    if (elemento.pintado != null) {
      pintada++;
    }
  });

  if (pintada === TEXTS.length) {
    document.getElementById("check").disabled = false;
  }
};

let accionCheck = () => {
  let correptas = 0;
  for (let i = 0; i < TEXTS.length; i++) {
    if (TEXTS[i].pintado === TEXTS[i].correpta) {
      correptas++;
    }
  }
  alert(correptas + " correct answers from " + TEXTS.length);
};

document.addEventListener("DOMContentLoaded", iniciarElementos);
