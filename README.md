# TodoList con React

Vamos a realizar una alicación muy básica en React. Se trata de una lista de tareas en la que podemos añadir y borrar elementos y marcarlos como completados. Es la típica App de Hola mundo para aprender cómo funciona el flujo de una App de React.

## Creación del proyecto.

Este proyecto se ha creado usando el comando npx del gestor de paquetes de Node.JS

```bash
$ npx create-react-app
```

Toda la estructura, incluido el repo por defecto o el package.json, se crea automáticamente sin hacer más. Para más información sonre esto ver los [Apuntes de desarrollo](develnotes.md).

## Conceptos 

Una de las cosas importantes de React es que 

* Las **propiedades** descienden desde el componente más alto al más pequeño.
* Los **eventos** van desde el componente más abajo al componente superior.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

El package.json viene con los siguietes scripts:

### `npm start`

Lanza la App en modo de desarrollo en un servidor propio con autoreload cuando varían cosas.\
Podemos verlo en [http://localhost:3000](http://localhost:3000) con el *browser*.

La página se recarga con los cambios.\
Podemos comprobar los errores por consola.

### `npm run build`

Realiza un *build* de la App para producción en la carpeta `build` folder.\
Para más información, consultar [deployment](https://facebook.github.io/create-react-app/docs/deployment).

Importante: este programa despliega la aplicación asumiendo que la aplicación se sirve desde el raíz del servidor. Por ejemplo, la aplicación colgaría directamente de

```html
http://localhost/
https://projects.develmap.com/
```

Si esto no es lo que queremos y hace falta que cuelgue de un directorio, es necesario especificar en el **package.json** el *homepage* relativo del que colgará. Por ejemplo:

```json
{
  "name": "arquetipo",
  "version": "0.1.0",
  "private": true,
  "homepage":"/e2molin/cursos/react/arquetipo/build",
  "dependencies": {
(...)
```

Además es necesario que en el directorio exista un fichero .htaccess con las siguientes cláusulas:

```Apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```


## Fuentes

* [Extensiones de Visual Studio Code para trabajar con React](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial)



### `npm run eject`

create-react-app encapsula todos los módulos npm que está usando internamente, por lo que su package.json será muy limpio y simple sin que tenga que preocuparse por ello.

Sin embargo, si desea comenzar a hacer cosas más complejas e instalar módulos que puedan interactuar con los módulos que create-react-app está usando bajo el capó, esos nuevos módulos necesitan saber qué está disponible y qué no, lo que significa que debe tener create-react -app anular el resumen de ellos.

Eso, en esencia, es lo que react-scripts ejecthace. Dejará de ocultar lo que tiene instalado debajo del capó y en su lugar expulsará esas cosas en el package.json de su proyecto para que todos lo vean.

**Note: esta es una operación sin vueta atrás. Una vez ejecutemos `eject`, no hay marcha atrás.

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
