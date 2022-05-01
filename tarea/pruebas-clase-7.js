//prueba de que la funcion validar nombre funciona
function probarValidarNombre(){
    console.assert(validarNombre("") === "Este campo debe tener almenos un caracter", "Validar nombre no valido que este campo sea vacio");
    console.assert(validarNombre("11111111111111111111111111111111111111111111111111") === "Este campo debe tener menos de 50 caracteres", "Validar nombre no valido que este campo sea valido");
};
probarValidarNombre();
//prueba de que la funcion validar ciudad funciona
function probarValidarCiudad(){
    console.assert(validarCiudad("") === "Este campo no puede estar vacio", "Validar ciudad no valido que este campo sea vacio");
};
probarValidarCiudad();
//prueba de que la funcion validar descripcion regalo funciona
function probarValidarDescripcionRegalo(){
    console.assert(validarDescripcionRegalo("") === "Este campo no puede estar vacio", "Validar descripcion regalo no valido que este campo sea vacio");
    console.assert(validarDescripcionRegalo("1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111") === "Este campo es muy largo", "Validar descripcion regalo no valido que este campo sea valido");
};
probarValidarDescripcionRegalo();