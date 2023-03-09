

function validarMatricula(e){
  e.preventDefault();

  limparErro()

  let [nome,email,cpf,endereco,estado,cep,cidade,credito,boleto,nomeCartao,validadeMes,validadeAno,numeroCartao,codigoSeguranca,botao,infantil,adulto,profissional] = e.target

  let valido = false

  if(!nome.value.includes(" ") || nome.value.length < 10){
    mostrarMensagem( nome ,'Digite seu nome corretamente')
    nome.classList.add("erro")
    valido = true
  }
  if(!email.value.includes("@") || email.value.length < 10){
    mostrarMensagem( email ,'Digite um email valido')
    email.classList.add("erro")
    valido = true
  }
  
  if(cpf.value.length != 14){
    cpf.classList.add("erro")
    mostrarMensagem(cpf ,'CPF incorreto')
    valido = true
  }
  if(!endereco.value.includes(" ") || endereco.value.length < 10){
    mostrarMensagem(endereco ,'Endereço incorreto')
    endereco.classList.add("erro")
    valido = true
  }
  if(estado.value == 0){
  mostrarMensagem(estado ,'Selecione uma estado')
    estado.classList.add("erro")
    valido = true
  }
  if(cep.value.length != 9){
    mostrarMensagem(cep ,'Erro no cep')
    cep.classList.add("erro")
    valido = true
  }
 if(cidade.value == 0){
  mostrarMensagem(cidade ,'Selecione uma cidade')
  cidade.classList.add("erro")
  valido = true
 }
 if((!nomeCartao.value.includes(" ") || nomeCartao.value.length < 10) && cartao.checked){
  mostrarMensagem(nomeCartao ,'Nome do cartão incorreto')
  nomeCartao.classList.add("erro")
  valido = true
 }
 if(validadeMes.value == 0 && cartao.checked){
  mostrarMensagem(validadeMes ,'Selecione um mês')
  validadeMes.classList.add("erro")
  valido = true

 }
 if(validadeAno.value == 0 && cartao.checked){
  mostrarMensagem(validadeAno ,'Selecione um ano')
  validadeAno.classList.add("erro")
  valido = true
 }
 if(numeroCartao.value.length != 19 && cartao.checked){
  mostrarMensagem(numeroCartao ,'Erro, numero do cartao invalido')
  numeroCartao.classList.add("erro")
  valido = true

 }
 if(codigoSeguranca.value.length != 3 && cartao.checked){
  mostrarMensagem(codigoSeguranca ,'Codigo de segurança invalido')
  codigoSeguranca.classList.add("erro")
  valido = true
 }



 function limparErro(){
  document.querySelectorAll('.erro').forEach((inputs)=>{
    inputs.classList.remove('erro')
  })
  document.querySelectorAll('.inputErrado').forEach((msg)=>{
    msg.remove()
  })
 }

 function mostrarMensagem(input,qualErro){
  let erro = document.createElement('div')
  erro.classList.add('inputErrado')
  erro.append(qualErro)
  input.parentElement.insertBefore(erro, input.ElementSibling)

 }

 if(!valido){
  window.open('resp.html', '_blank')
  // window.location.href = 'http://127.0.0.1:5501/resp.html'
 }

}



let cartao = document.querySelector('#cartao');
let campoCredito = document.querySelector('.cartao-credito-campo')
let boletoMsg = document.querySelector('.boleto-msg')
function formaPagamento(){
 if(cartao.checked){
  document.querySelector('.cartao-credito').classList.add('selecionado')
  document.querySelector('.boleto').classList.remove('selecionado')
  campoCredito.classList.remove('d-none')
  boletoMsg.classList.add('d-none')
 }else{
  document.querySelector('.cartao-credito').classList.remove('selecionado')
  document.querySelector('.boleto').classList.add('selecionado')
  campoCredito.classList.add('d-none')
  boletoMsg.classList.remove('d-none')
 }
 
}



function selecionePlano(){
  let infantil = document.querySelector('#infa')
  let adulto = document.querySelector('#adult')
  let profissional = document.querySelector('#prof')
  if(infantil.checked){
    document.querySelector('.opcao-forma-1').classList.add('selecionado')
    document.querySelector('.opcao-forma-2').classList.remove('selecionado')
    document.querySelector('.opcao-forma-3').classList.remove('selecionado')

    document.querySelector('.plano1').classList.remove('d-none')
    document.querySelector('.plano2').classList.add('d-none')
    document.querySelector('.plano3').classList.add('d-none')
  }else if(adulto.checked){
    document.querySelector('.opcao-forma-1').classList.remove('selecionado')
    document.querySelector('.opcao-forma-2').classList.add('selecionado')
    document.querySelector('.opcao-forma-3').classList.remove('selecionado')

    document.querySelector('.plano1').classList.add('d-none')
    document.querySelector('.plano2').classList.remove('d-none')
    document.querySelector('.plano3').classList.add('d-none')
  }else if(profissional.checked){
    document.querySelector('.opcao-forma-1').classList.remove('selecionado')
    document.querySelector('.opcao-forma-2').classList.remove('selecionado')
    document.querySelector('.opcao-forma-3').classList.add('selecionado')

    document.querySelector('.plano1').classList.add('d-none')
    document.querySelector('.plano2').classList.add('d-none')
    document.querySelector('.plano3').classList.remove('d-none')
  }
  
}

function enterCpf(){
  let cpf = document.querySelector('#cpf')
  cpf.value = cpf.value.replace(/\D/g,"")        
  cpf.value = cpf.value.replace(/(\d{3})(\d)/,"$1.$2")     
  cpf.value = cpf.value.replace(/(\d{3})(\d)/,"$1.$2")    
  cpf.value = cpf.value.replace(/(\d{3})(\d{1,2})$/,"$1-$2")   
}
function enterCep(){
  let cep = document.querySelector('#cep')
  cep.value = cep.value.replace(/\D/g,"")
  cep.value = cep.value.replace(/^(\d{5})(\d)/,"$1-$2")
}
function enterSeguranca(){
  let codSeguranca = document.querySelector('#codseguranca')
  codSeguranca.value = codSeguranca.value.replace(/\D/g,"")
}
function enterCartao(){
  let numberCartao = document.querySelector('#numberCartao')
  numberCartao.value = numberCartao.value.replace(/\D/g,"")
  numberCartao.value = numberCartao.value.replace(/(\d{4})(\d)/,"$1 $2")  
  numberCartao.value = numberCartao.value.replace(/(\d{4})(\d)/,"$1 $2")  
  numberCartao.value = numberCartao.value.replace(/(\d{4})(\d)/,"$1 $2")  
  numberCartao.value = numberCartao.value.replace(/(\d{4})(\d)/,"$1 $2")  
}
