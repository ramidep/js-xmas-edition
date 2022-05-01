/*
* Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
* Escribir pruebas para esas funciones.
*
* Adicional: Escribir pruebas para las funciones de tareas anteriores.
*
* */

//declarar constantes
const formulario = document.querySelector("#carta-a-santa");
const nombreUsuario = formulario.nombre.value;
const ciudad = formulario.ciudad.value;
const comportamiento = formulario.comportamiento.value;
const descripcionRegalo = formulario["descripcion-regalo"].value;
//funcion validar nombre
function validarNombre(nombre){
    if (nombre.length === 0){
        return "Este campo debe tener almenos un caracter";
    }else if (nombre.length >= 50){
        return "Este campo debe tener menos de 50 caracteres";
    }else {
        return "";
    }
};

//funcion validar Ciudad
function validarCiudad(ciudad){
    if (ciudad.length === 0 ){
        return "Este campo no puede estar vacio";
    }else {
        return "";
    };
};
//funcion validar descripcion regalo
function validarDescripcionRegalo(descripcionRegalo){
    if (descripcionRegalo.length >= 100){
        return "Este campo es muy largo";
    }else if (descripcionRegalo.length === 0){
        return "Este campo no puede estar vacio";
    }else {
        return "";
    };
};