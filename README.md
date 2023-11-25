# Markdown Links - Versión PenLogos

## Índice

* [1. ¿Qué es esta librería?](#1-¿Qué-es-esta-librería?)
* [2. Instalación](#2-instalación)
* [3. Implementación](#3-implementación)
* [4. Manejo del módulo desde línea de comandos](#4-manejo-del-módulo-desde-línea-de-comandos)
* [5. Dependencias](#5-dependencias)

***

## 1. ¿Qué es esta librería?

Es una API que permite la validación de links existentes en archivos [Markdown](https://es.wikipedia.org/wiki/Markdown).
Está hecha a partir de cinco módulos que dividen el proyecto: la función principal `mdLinks`,
las funciones auxiliares importadas para la primera 'function.js', un módulo encargado de la
validación 'validate.js', un módulo que da estadísticas sobre la validación 'stats.js' y un 
archivo que permite la implementación de la CLI y el uso global de la función principal
'cli.js'.

## 2. Instalación


npm install Penlogos/DEV011-md-links


Se usa [Node.js](https://nodejs.org/en) como entorno de ejecución. La API está disponible
para instalarse directamente desde Github ejecutando el comando desde la terminal en un 
repositorio local inicializado con un package.json básico. Sólo se requiere la instalación 
previa de Node.js.

## 3. Implementación

  
const mdLinks = require('md-links')
  

La API permite la importación de módulos a través de require. Ejemplo de implementación:
  

const validateFileLinks = require("md-links")

validateFileLinks.mdLinks('./Archivos-de-prueba-copia/Prueba-con-links.md', true, true)  
.then(res => console.log(res))
.catch(error => console.log(error))
  

En este ejemplo, la importación del método y su asignación a la variable validateFileLinks
permiten hacer uso de la función principal. Admite 3 argumentos: el primero, la ruta relativa
o absoluta del archivo markdown a validar, el segundo, indica si se quieren validar los 
links encontrados al interior del archivo, el tercero, si se quieren visualizar las 
estadísticas de la validación en consola. Estos dos últimos arrojan valores boleanos, por 
lo que son parámetros opcionales, que de no llamarse, el módulo toma como false.

Los demás módulos de la librería también pueden importarse haciendo uso de las rutas 
relativas. Ejemplo de importación de otro módulo:
  

const { codeStatus } require('./md-links/src/validate.js')
  

## 4. Manejo del módulo desde línea de comandos

El módulo permite la utilización de la función mdLinks directamente desde la línea de
comandos, desde cualquier ubicación dentro del repositorio local sin necesidad de ninguna 
implementación, sólo con la instalación. Permite el mismo uso de los argumentos, así:


mdLinks 'rutarelativa.md' //arroja los links encontrados, la ruta absoluta del archivo y el texto del link.//
  

mdLinks 'rutarelativa.md' --validate //además añade el estado del link (200, por ejemplo) y el estado 'ok' si funciona 'fail' si está roto.//
  

mdLinks 'rutarelativa.md' --stats //entrega el número total de enlaces análizados, de enalces funcionales y de enlaces rotos.//
  

Admite también ambos argumentos al tiempo, dando toda la información en conjunto.

## 5. Dependencias

El paquete se vale de los [!CommonsJs-Modules](https://nodejs.org/api/path.html) y los [fs-Modules](https://nodejs.org/api/fs.html) de Node para las 
funciones auxiliares del módulo principal. También se usa la librería de parseado 
[!Markdown-it](https://markdown-it.github.io/markdown-it/).
