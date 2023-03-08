<template>
  <MainHeader></MainHeader>
  <BestRecomendation></BestRecomendation>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import BestRecomendation from './components/BestRecomendation.vue'
export default {
  name: 'App',
  components: {
    MainHeader,
    BestRecomendation
  }
}
</script>

<style lang="scss">
 @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap');
  :root {
    --white: #fff;
    --primary-color: #043873;
    --blue-2:#4F9CF9;
    --paragraph: hsl(210, 9%, 31%);
    --button2: #FFE492;
    --negro: #393939;
  }
  body {
    font-family: "Inter", Arial, sans-serif;
    box-sizing: border-box;
  }
  /* Las adaptamos al modo oscuro */
  @media (prefers-color-scheme: dark) {
    :root {
      --negro: #ececec;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    * {
      -webkit-animation: none !important;
              animation: none !important;
      -webkit-transition: none !important;
      transition: none !important;
    }
  }
  /* Reseteamos los margin y paddings de todas las etiquetas */
  * {
    margin: 0;
    padding: 0;
    border: 0;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    vertical-align: baseline;
  }
  /* Evitamos problemas con las imagenes */
  img, picture, video, iframe, figure {
    max-width: 100%;
    width: 100%;
    display: block;
  }
  /* Reseteamos los enlaces para funcionar como cajas... */
  a {
    display: block;
    text-decoration: none;
    color: inherit;
    font-size: inherit;
  }
  /* ... excepto los que se encuentran en párrafos */
  p a {
    display: inline;
  }
  /* Quitamos los puntos de los <li> */
  li {
    list-style-type: none;
  }
  /* Configuramos anclas suaves */
  html {
    scroll-behavior: smooth;
  }
  /* Desactivamos estilos por defecto de las principales etiquetas de texto */
  h1, h2, h3, h4, h5, h6, p, span, a, strong, blockquote, i, b, u, em {
    font-size: 1em;
    font-weight: inherit;
    font-style: inherit;
    text-decoration: none;
    color: inherit;
  }
  /* Evitamos problemas con los pseudoelementos de quotes */
  blockquote:before, blockquote:after, q:before, q:after {
    content: "";
    content: none;
  }
  /* Configuramos el texto que seleccionamos */
  ::-moz-selection {
    background-color: var(--negro);
    color: var(--blanco);
  }
  ::selection {
    background-color: var(--negro);
    color: var(--blanco);
  }
  /* Nivelamos problemas de tipografías y colocación de formularios */
  form, input, textarea, select, button, label {
    font-family: inherit;
    font-size: inherit;
    -webkit-hyphens: auto;
        -ms-hyphens: auto;
            hyphens: auto;
    background-color: transparent;
    color: inherit;
    display: block;
  }
  /* Reseteamos las tablas */
  table, tr, td {
    border-collapse: collapse;
    border-spacing: 0;
  }
  /* Evitamos problemas con los SVG */
  svg {
    width: 100%;
    display: block;
    fill: currentColor;
  }
  body {
    min-height: 100vh;
    font-size: 100%;
    font-family: var(--tipo-principal);
    color: var(--negro);
    line-height: 1.4em;
  }
</style>
