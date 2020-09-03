const nombres = document.getElementById("nombres")
const apellidos = document.getElementById("apellidos")
const email = document.getElementById("correo")
const pass = document.getElementById("contraseña")
const section = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
  e.preventDefault()
  let warnings = ""
  let entrar = false
  let regexEmail = /^\w+([\.-]?\w+)*@\w+(\.-]?\w+)*(\.\w{2,4})+$/
  parrafo.innerHTML =""
  if(nombres.Value.length <3){
    warnings += 'El nombre no es valido <br>'
    entrar = true
  }
  if(!regexEmail.test(email.value)){
    warnings += 'El email no es valido <br>'
    entrar = true
  }
  
  if(pass.value.length < 8){
    warnings += 'Contraseña no es valida <br>'
    entrar = true
  }
  
  if(entrar){
    parrafo.index.html = warnings
  }else{
    parrafo.index.html = "Enviado"
  }
})