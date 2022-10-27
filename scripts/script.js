// pág recuperção-de-senha

const btn = document.querySelector("#btn-recup-senha")
const email = document.querySelector("exampleInputEmail1")
const form = document.querySelector(".form-recup-senha")

form.addEventListener("submit", (e)=>{
    if(email.value == ""){
        textForm.textContent = "Você precisa preencher todos os campos"
    } else {
    console.log(email.value)
    }
    e.preventDefault()
})




// //se o email for validado, ao clicar no botao será enviada essa mensagem:
// btn.addEventListener("click", ()=>{
//     alert("Uma nova senha foi enviada para o e-mail indicado!")
// })

// if (email == true) {
//     btn.addEventListener("click", ()=>{
//         alert("Uma nova senha foi enviada para o e-mail indicado!")
//     })
// } else 
// var emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;





// email.addEventListener("keyup", ()=>{
//     if(validaEmail(email.value) !== true) {
//         textEmail.textContent = "O formato do e-mail deve ser abc@algumacoisa.com"
//     } else {
//         textEmail.textContent = ""
//     }
// })

// //a função vai receber um parâmetro e ele vai fazer a validação

// function validaEmail(email){
//    let emailPattern =  /\S+@\S+\.\S+/  //pattern = padrão
//     return emailPattern.test(email)
// }
