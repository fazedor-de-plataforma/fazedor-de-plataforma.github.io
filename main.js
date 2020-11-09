function carregando() {
  document.getElementById("status").innerHTML = "Fazendo a plataforma...";
}
function deuCerto() {
  document.getElementById("status").innerHTML = "A plataforma foi resolvida!";
}
function deuErrado() {
  document.getElementById("status").innerHTML = "Ocorreu um erro em resolver a plataforma";
}

async function fazerPlataforma() {
  carregando();
  const user = document.querySelector("input[name=\"user\"]").value;
  const password = document.querySelector("input[name=\"password\"]").value;

  const subject = document.querySelector("select[name=\"subject\"]").value;
  const platform = document.querySelector("input[name=\"platform\"]").value;

  const codeFirstQuestion = document.querySelector("input[name=\"code-1\"]").value;
  const answerFirstQuestion = document.querySelector("input[name=\"answer-1\"]").value;

  const codeSecondQuestion = document.querySelector("input[name='code-2']").value;
  const answerSecondQuestion = document.querySelector("input[name='answer-2']").value;

  const codeThirdQuestion = document.querySelector("input[name=\"code-3\"]").value;
  const answerThirdQuestion = document.querySelector("input[name=\"answer-3\"]").value;

  const codeFourthQuestion = document.querySelector("input[name=\"code-4\"]").value;
  const answerFourthQuestion = document.querySelector("input[name=\"answer-4\"]").value;

  const questions = [
    { code: codeFirstQuestion, answer: answerFirstQuestion },
    { code: codeSecondQuestion, answer: answerSecondQuestion },
    { code: codeThirdQuestion, answer: answerThirdQuestion },
    { code: codeFourthQuestion, answer: answerFourthQuestion }];

  const body = { user, password, subject, platform, questions }
  
  fetch("http://localhost:5000/", {
    body: JSON.stringify(body),
    headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
  }).then((res) => (res.status === 200 ? deuCerto() : deuErrado()));
}
