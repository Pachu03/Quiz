const BODY = document.body;

const TEXTS = [
  {
    pregunta: "What is the capital of France?",
    respuesta: ["London", "Berlin", "Paris", "Madrid"],
    pintado: null,
  },
  {
    pregunta: "What is the longest river in the world?",
    respuesta: ["Amazonas", "Nilo", "Yangtsé", "Miño"],
    pintado: null,
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
  },
  {
    pregunta: "How many planets are there in our solar system?",
    respuesta: ["7", "8", "9", "10"],
    pintado: null,
  },
];

const TEXTELEMENT = "Quiz Question";

const TEXTBUTTOM = ["Previous", "Next"];

let currentQuestionIndex = 0;

let btns = [];

let iniciarElementos = () => {
  let divContainer = document.createElement("div");
  divContainer.className = "container";

  let h2 = document.createElement("h2");
  h2.textContent = TEXTELEMENT;

  let p = document.createElement("p");
  p.id = "p";
  p.textContent = TEXTS[currentQuestionIndex].pregunta;

  let ul = document.createElement("ul");
  ul.className = "container-answers";

  crearPreguntas(currentQuestionIndex, ul);

  let div = document.createElement("div");
  div.className = "container-footer";

  let prevBtn = document.createElement("input");
  prevBtn.type = "button";
  prevBtn.value = TEXTBUTTOM[0];
  prevBtn.disabled = true;
  prevBtn.className = "footer-btn";
  prevBtn.id = "prev";
  prevBtn.addEventListener("click", () => accionPrev(p, ul, prevBtn, nextBtn));

  let nextBtn = document.createElement("input");
  nextBtn.type = "button";
  nextBtn.value = TEXTBUTTOM[1];
  nextBtn.className = "footer-btn";
  nextBtn.id = "next";
  nextBtn.addEventListener("click", () => accionNext(p, ul, prevBtn, nextBtn));

  div.append(prevBtn, nextBtn);

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

    // Si ya está pintado, le damos color
    if (TEXTS[numPregunta].pintado === respuesta) {
      btn.style.backgroundColor = "#3CB371";
    }

    btn.addEventListener("click", () => pintarPregunta(btn, numPregunta));
    li.append(btn);
    contenedor.append(li);
  });
};

let accionNext = (p, ulContenedor, prevBtn, nextBtn) => {
  currentQuestionIndex++;
  actualizarPreguntas(p, ulContenedor, prevBtn, nextBtn);
};

let accionPrev = (p, ulContenedor, prevBtn, nextBtn) => {
  currentQuestionIndex--;
  actualizarPreguntas(p, ulContenedor, prevBtn, nextBtn);
};

let actualizarPreguntas = (p, ulContenedor, prevBtn, nextBtn) => {
  p.textContent = TEXTS[currentQuestionIndex].pregunta;
  crearPreguntas(currentQuestionIndex, ulContenedor);

  prevBtn.disabled = currentQuestionIndex === 0;
  nextBtn.disabled = currentQuestionIndex === TEXTS.length - 1;
};

let pintarPregunta = (btn, numPregunta) => {
  btns.forEach((button) => {
    button.style.backgroundColor = ""; 
  });

  btn.style.backgroundColor = "#3CB371";

  TEXTS[numPregunta].pintado = btn.value;
};

document.addEventListener("DOMContentLoaded", iniciarElementos);
