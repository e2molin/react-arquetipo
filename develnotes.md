# Apuntes de desarrollo

## ¿Qué es npx?

Si nos fijamos en los repositorios recientes de Apps de React  que requieren la instalación de una CLI, por ejemplo el proyecto create-react-app, cemos que han cambiado la forma de instalar esa CLI que te montaba el esqueleto del proyecto, pasando de una instrucción:

```bash
$ npm install -g create-react-app
a otra instrucción:
```

a  esta otra

```bash
$ npx create-react-app
```

 ¿Qué es npx? Se trata de un ejecutador de paquetes binarios de npm, es decir, que ejecuta entre otras cosas, una CLI. Si usamos este comando **npx** no tendréis que instalar nunca más un paquete como paquete global para poder ejecutarlo. Muchas veces sucede que necesitamos una herramienta como por ejemplo jest, mocha, jasmine, grunt o gulp en uno de nuestros proyectos  que requiere además una versión muy concreta. Como estas herramientas se instalan en modo global para poder ejecutarlas desde la terminal sin más complicaciones, puede suceder que nuestro proyecto necesite una instalación más reciente que rompa la compatibilidad de nuestros proyectos anteriores. Vamos , que necesitemos un Grunt actual como la 1.4.1 y códigos anteriores funcionen con una 1.2 dejen de hacerlo al actualizar la instalación global. Ya estamos instalando y resinstalando diferentes versiones cuando cambiamos de proyecto, un lío. Pues este problema esta solucionado con **npx** ya que a partir de ahora, no hace falta instalar paquetes globales. Este comando npx está disponible para npm 5.2+. Ahora con npx puedes instalar jest como dependencia local de desarrollo y al ejecutar npx jest en la terminal, funcionará. Eso es por que npx se encarga de buscar el ejecutable de jest dentro de tu carpeta node_modules.


 

