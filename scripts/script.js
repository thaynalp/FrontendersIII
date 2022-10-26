// pág recuperção-de-senha

const btn = document.querySelector("#btn-recup-senha")
const email = document.querySelector("exampleInputEmail1")

//se o email for validado, ao clicar no botao será enviada essa mensagem:
btn.addEventListener("click", ()=>{
    alert("Uma nova senha foi enviada para o e-mail indicado!")
})
