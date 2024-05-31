# Prueba tecnica

## Ejercicio 1: Consumo de APIs
En esta prueba plazme 2 soluciones para solucionar el primer insiso donde una se realiza por medio de la github api y el otro usando web scrapping, si bien la segunda es mas rapida se puede notar que con la api de github la informacion es mas exacta y detalllada

para correr estas soluciones solamente se requiere digitar. case1(scrapping solution) case2(githubApi solucion)
```shell
npm run <case>
```


## Ejercicio 2: Nomenclatura

### Función original

function f(x, y, z) {
  let a = x + y;
  let b = a * z;
  let c = Math.sin(b);
  return c;
}

### Función corregida

function CalculateSineOfTheSumOfTwoNumbersdNTimes(number1, number2, multiplier) {
const sum = number1 + number2;
const product = sum * multiplier;
const sine = Math.sin(product);
return sine;
}

## Ejercicio 3: Pensamiento lógico

const oddNumbers = (number)=>{
  const oddNumbersList = []
  for(let i=0;i<=number;i++){
    if(i%2!==0)oddNumbersList.push(i)
  }
  console.log(oddNumbersList)
}

## Ejercicio 4: Modelado de bases de datos

![image info](./modelo de base de datos.png)

en este modelo se puede reflejar las diferentes tablas y sus relaciones donde empezamos por un usuario que puede ser un autor o un colaborador y realizar tanto reviews como comentarios, seguido por los autores que son usuarios que hacen videos, luego tenemos a los videos que son realizados por autores y pueden tener varios comentarios y reviews adicionalmente se entrelaza con la tabla de colaboradores que manifiesta que un video puede tener varios colaboradores y que en la tabla de colaboradores se tiene que un colaborador puede colaborar a varios videos. Finalmente  comentarios y reviews son tratadas de la misma forma, ya que ambas estan relacionadas a 1 solo video aunque pueden ser muchas la unica diferencia es que en la tabla de comentarios hay un campo llamado parent comment para permitirle al usuario responder comentarios.

## Ejercicio 5: Arquitectura del backend

Utilizaría Node.js como framework debido a su naturaleza basada en JavaScript, que permite el desarrollo tanto del frontend como del backend con el mismo lenguaje, lo que simplifica la sincronización de código y la colaboración en el equipo, otra razon seria la familiaridad que tengo con el y si se quiere ser mas riguroso lo tipamos com typescript. Además, MongoDB sería la opción de base de datos ideal debido a su flexibilidad en el almacenamiento de datos no estructurados, lo cual se adapta bien a la variedad de información en un sistema de comercio electrónico. Para la organización de archivos, seguiría los Principios LIFT (Locating, Identify, Flat, and Try to stay DRY) para estructurar las carpetas y ficheros de manera que sea fácil de localizar, identificar, mantener plana y evitar repeticiones. En cuanto a los Principios SOLID, los aplicaría para garantizar una arquitectura de software robusta y escalable, asegurando la cohesión y la mínima dependencia entre componentes. Para el patrón de diseño, utilizaría el Patrón Observador para el manejo de transacciones en tiempo real, permitiendo a los diferentes componentes de la aplicación suscribirse y recibir actualizaciones en tiempo real sobre cambios en las transacciones, lo que facilita la sincronización y la respuesta rápida a eventos relevantes en el sistema de comercio electrónico.

## Ejercicio 6: Nomenclatura

Como se puede notar en esta prueba, usualmente se usa un estandar para codificacion y asi mismo para nombramiento de variables ya que esto hace mas facil trabajos de sostenibilidad, mantenimiento y mejora. A la hora del nombramiento de variables se usa todo en ingles y singular ya que me baso mucho en los principios LIFT, DRY, SOLID Y KISS que nos permiten tener tanto el codigo limpio, escalable y de facil soporte. Con respeto a git se usa mucho lo que se conoce como convenctional commits que tratan de hacer commits especificos y explicativos para ahorrar el mayor tiempo posible no teniendo que revisar el codigo ya que el nombre es tan descriptivo que te explica el objetivo del commit. Con el fin de mantener estas reglas y estandares se recomienda usar un linter, con prettier y husky.