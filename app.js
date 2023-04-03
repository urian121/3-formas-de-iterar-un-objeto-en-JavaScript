divRespuesta = document.querySelector("#respuesta");
/**
 * 1). Usando el Método (bucle) for ...in
 * este te permite iterar sobre todas las propiedades enumerables de un objeto.
 */

//Declarando mi objeto
let persona = {
  Nombre: "Urian",
  Profesion: "Ing. de Sistemas",
  Color: "red",
  Carro: false,
  Hijos: true,
  //Declarando un array
  Hobbies: [
    "Ver peliculas, Viajar, Compartir en Familia, Ama el Backend & Frontend",
  ],
};

// Iterar sobre el objeto persona y construir una cadena de texto con la información
let infoPersona = "";

for (let inforPersona in persona) {
  /**
   * La variable inforPersona es una variable temporal que se utiliza para
   * representar el nombre de cada propiedad en cada iteración del bucle.
   */
  console.log(inforPersona);

  /**
   * Entonces, persona[inforPersona] es una forma de acceder al valor de una propiedad
   * del objeto persona utilizando el nombre de la propiedad como una cadena de texto.
   * Por ejemplo, si inforPersona tiene el valor "Nombre" en una iteración,
   * entonces persona[inforPersona] sería equivalente a persona["Nombre"]
   * y devolvería el valor de la propiedad 'Nombre' del objeto persona.
   */
  console.log(persona[inforPersona]);

  /*
  infoPersona += `
      <strong>${inforPersona}:</strong> 
      ${persona[inforPersona]}<br>
      `;
  */
}

// Estableciendo el contenido del elemento HTML con la cadena de texto construida
divRespuesta.innerHTML = infoPersona;

/**
 * 2). Usando el método Object.keys()
 * Este devuelve un array con todas las claves de un objeto.
 * Puedes usar este array en un bucle, ya sea  for...of
 * para iterar sobre las claves y acceder a los valores del objeto
 */
const llavesPersona = Object.keys(persona);

for (let llave of llavesPersona) {
  console.log(`persona.${llave} = ${persona[llave]}`);
}

/**
 * 3). Usando el método Object.entries()
 * Este es un método que se puede utilizar para iterar sobre un objeto en JavaScript.
 * Devuelve un array de arrays, donde cada sub-array contiene dos elementos:
 * la clave y el valor del objeto.
 */

/**
 * Lo que estás haciendo es convertir el objeto en un array de pares [clave, valor]
 * utilizando el método Object.entries(), y luego poderlo iterar, ejemplo ya sea con el
 * método forEach o for...of
 */
const transformacion = Object.entries(persona);

//Iterando sobre ese array con el método forEach().
transformacion.forEach(([key, value]) => {
  console.log(key, value);
});

/**Iterando con el método for ...of */
for (let [key, value] of transformacion) {
  console.log(`persona.${key} = ${value}`);
}
