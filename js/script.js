/*no me duermo hasta validad este formulario.mañana carrousel y 
las columnas de flexbox*/
//globales
let nombre=document.getElementById("nombre");
let email= document.getElementById ("email");
let telefono= document.getElementById ("telefono");
let asunto= document.getElementById("asunto");
let error= document.getElementById("error");
let success = document.getElementById("exito");
error.style.color= "white";


function DatosEnviados(){
    console.log("Procesando");
//local de funtion

let msjError=[];
if (!nombre.value){
    msjError.push("Ingrese su nombre");

}
if (!email.value) {
    msjError.push("Ingrese un email");
} else if (!/\S+@\S+\.\S+/.test(email.value)) {
    msjError.push("Ingrese un email válido");
}
if (!telefono.value ) {
    msjError.push("Ingrese un teléfono");
}else if (!/^\d{9,15}$/.test(telefono.value)) {
    msjError.push("Ingrese un teléfono válido");
}
if (!asunto.value.trim()) {
    msjError.push("Ingrese un asunto");
} else if (!/\S/.test(asunto.value)) {
    msjError.push("El asunto debe contener al menos una letra");
}
if (msjError.length > 0) {
    error.innerHTML = msjError.join("; ");
return false;
}

error.innerHTML = "";
 // Crear y mostrar los datos enviados
 let successMessage = document.createElement("div");
 successMessage.style.color = "green"; 
 
 let nombrePara = document.createElement("p");
 nombrePara.textContent = "Nombre: " + nombre.value;
 
 let emailPara = document.createElement("p");
 emailPara.textContent = "Email: " + email.value;
 
 let telefonoPara = document.createElement("p");
 telefonoPara.textContent = "Teléfono: " + telefono.value;
 
 let asuntoPara = document.createElement("p");
 asuntoPara.textContent = "Asunto: " + asunto.value;

 
 success.innerHTML = "";
 successMessage.appendChild(nombrePara);
 successMessage.appendChild(emailPara);
 successMessage.appendChild(telefonoPara);
 successMessage.appendChild(asuntoPara);
 
 success.appendChild(successMessage);
 return false;

    return true;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


