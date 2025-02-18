# Pruebas-unitarias
Bloque de código para demostrar pruebas unitarias.

Estructura del Proyecto

    calculadora.js: Contiene la función sumar(a, b), que suma dos números y maneja entradas de diferentes tipos.

    calculadora.test.js: Archivo de pruebas unitarias que evalúa la función sumar con distintos casos de prueba.

    package.json: Archivo de configuración de Node.js que define las dependencias necesarias, incluyendo Jest.

    .gitignore: Archivo que especifica qué archivos deben ser ignorados por Git (como node_modules).

    README.md: Documento con información del proyecto.

Requisitos

    Para ejecutar este proyecto, necesitas tener instalado:

    Sistema opeativos Microsoft Windows, MacOS o Cualquier distribuicion de Linux.

    Node.js (versión recomendada: 14+)

    Jest (como dependencia de desarrollo)

Instalación y Uso

    Clonar el repositorio en tu carpeta asignada:

    git clone https://github.com/apurgua/Pruebas-unitarias.git
   

Instalar las dependencias:

    npm install

Ejecutar los tests:

    npm test

Casos de Prueba

    Los tests verifican:

    Suma de números positivos y negativos.

    Suma de ceros y números grandes.

    Manejo de valores en formato de cadena.

    Precisión con decimales.

    Manejo de valores no numéricos.
