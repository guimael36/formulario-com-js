const nome = document.getElementById("nome")
const email = document.getElementById("email")
const telefone = document.getElementById("telefone")
const mensagem = document.getElementById("mensagem")
const enviar = document.getElementById("button")
const span = document.querySelectorAll(".erro")


enviar.addEventListener("click", () => {
        if(nome.value.length < 3 || nome.value.length == ''){
            nome.style.border = '2px solid #e63636'
            span[0].style.display = 'block'
        }else{
            nome.style.border = '2px solid #00c22b'
            span[0].style.display = 'none'
        }

        if(email.value.length == ''){
            email.style.border = '2px solid #e63636'
            span[1].style.display = 'block'
        }else{
            email.style.border = '2px solid #00c22b'
            span[1].style.display = 'none'
        }

        if(telefone.value.length == ''){
            telefone.style.border = '2px solid #e63636'
            span[2].style.display = 'block'
        }else{
            telefone.style.border = '2px solid #00c22b'
            span[2].style.display = 'none'
        }

        if(mensagem.value.length == ''){
            mensagem.style.border = '2px solid #e63636'
            span[3].style.display = 'block'
        }else{
            mensagem.style.border = '2px solid #00c22b'
            span[3].style.display = 'none'
        }
    
})