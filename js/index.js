let form = document.querySelector("#form")
let btn = document.querySelector("#botonEnviar")

function habilitarBotonForumulario(){
    let desabilitar = false;

    if(form.formularioCorreo.value === ""){
        desabilitar = true;
    }

    if(form.formularioNombre.value === ""){
        desabilitar = true;
    }

    if(form.formularioAsunto.value === ""){
        desabilitar = true;
    }

    if(form.formularioMensaje.value === ""){
        desabilitar = true;
    }

    if(desabilitar === true){
        btn.disabled = true;
    }else{
        btn.disabled = false;
        btn.style.backgroundColor='#1B6282';
        btn.style.color='#ffff';
    }
}

form.addEventListener("keyup", habilitarBotonForumulario);