export default function validarContato() {
  function validacao(e) {
    e.preventDefault();

    tirarErro()
    let temErro = false
    let [nome, email, texto] = e.target;

    if (!nome.value.includes(" ")) {
      erroMensagem("Insira um nome!");
      temErro = true
      nome.classList.add("erro");
    }
    if (!email.value.includes("@")) {
      erroMensagem("Insira um email!");
      temErro = true
      email.classList.add("erro");
    }
    if (!texto.value.includes(" ")) {
      erroMensagem("Escreva mais!");
      temErro = true
      texto.classList.add("erro");
    }
    setTimeout(()=>{
      if(!temErro){
        erroMensagem("Enviado, em 24 horas vamos te responder", true)
      }
    },1000)
  }

  function erroMensagem(mesagem, status = false) {
    let liErro = document.createElement("li");
    liErro.classList.add(status ? "liCertoMensagem" : "liErroMensagem");
    liErro.append(mesagem);
    document.querySelector("#liArea").appendChild(liErro);
  }

  function tirarErro(){
    document.querySelectorAll('.erro').forEach((inputs)=>{
      inputs.classList.remove('erro')
    })
    document.querySelector('#liArea').innerHTML = ''
  }

  addEventListener("submit", validacao);
}
