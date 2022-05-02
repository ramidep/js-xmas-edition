/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

//Declarar constantes de pregunta inicial, boton enviar, boton calcular, boton reiniciar y el body
const texto = document.querySelector("#texto")
const botonEnviar = document.querySelector("#boton-enviar");
const botonCalcular = document.querySelector("#boton-calcular");
const botonReiniciar = document.querySelector("#boton-reiniciar");
const Formulario = document.querySelector("form");
//Declarar variable cantidad de gente
let cantidadGente;
//Accion del boton enviar
botonEnviar.onclick = function(){
    cantidadGente = document.querySelector("#cantidad-gente");
    //Si el label vale mas que 0 se crean varios label e input para cada miembro
    if (cantidadGente.value > 0){
       for (let i = 0; i < cantidadGente.value; i++){
            let crearInput = document.createElement("input");
            let crearLabel= document.createElement("label");
            let crearTexto = document.createTextNode("Edad persona " + String(i));
            crearInput.setAttribute("id", "input-" + String(i));
            crearLabel.appendChild(crearTexto);
            Formulario.appendChild(crearLabel);
            Formulario.appendChild(crearInput); 
        };
        //Se desactivan los elementos innecesarios
        cantidadGente.disabled = true;
        botonEnviar.disabled = true;
        //Se activan los botones necesarios
        botonCalcular.disabled = false;
        botonReiniciar.disabled = false;
        //Se cambia el texto
        texto.textContent = "";
    };
    return false;
};
//Accion del boton calcular 
botonCalcular.onclick = function(){
    edades = [];
    edadesTotal = 0;
    mayorEdad = 0;
    menorEdad = 0;
    promedioEdad = 0;
    for (let i = 0; i < cantidadGente.value; i++){
        let input = document.querySelector("#input-" + String(i));
        edades.push(input.value);
    };
    for (let i = 0; i < cantidadGente.value; i++){
        if (edades[i] > mayorEdad){
            mayorEdad = edades[i];
        };
    };
    for (let i = 0; i < cantidadGente.value; i++){
        if (edades[i] < menorEdad){
            menorEdad = edades[i];
        };
    };
    for (let i = 0; i < cantidadGente.value; i++){
        edadesTotal = edades[i] + edades[i++];
    };
    promedioEdad = edadesTotal / cantidadGente.value;
    texto.textContent = String("Mayor edad: " + mayorEdad + ", Menor edad: " + menorEdad + ", Promedio edad: " + promedioEdad);
    return false;
};

