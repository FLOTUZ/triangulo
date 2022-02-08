# TEST-TipoTriangulo

## Requisitos
 - NodeJS Mayor a 16.11
 - Windows 10, Ubuntu 20.04.3 o OSx Monterrey
 - Mínimo 256 GB de RAM
 - Mínimo 1 CPU a 1Ghz

## Instalación
 En la consola ejecute
 
    npm install
Este comando creará la carpeta `NODE_MODULES` la cual contiene las librerías standard en nuestro proyecto

## Ejecución
Con la consola dentro de la carpeta del proyecto ejecute

    npm run test
Este comando hará ejecutar todos los casos de prueba que un usuario podría introducir. Incluyendo los valores inválidos como strings, objects, codigo mal intencionado y ceros.

    npm run test-report
Este comando generará una carpeta llamada **coverage** dentro de ella se mostrará un HTML donde se mostrará la métrica utilizada para conocer en qué porcentaje se ha analizado el código a través de las pruebas unitarias, de ésta manera se prueba cual código no ha sido alcanzado por las pruebas que pudiera traducirse en código no testeado.

## JEST
Jest es un Framework de Testing para JavaScript enfocado en la simplicidad. Usado por grandes empresas como Facebook, Twitter, Spotify, airbnb, Instagram y muchas otras.

Cuenta con una gran aceptación y una gran comunidad, requiere de poca configuración y cuenta con una gran extensibilidad para atender a las necesidades de un proyecto.
https://jestjs.io/


---------
Hecho con amor por **Emmanuel Esquivel Pardo**