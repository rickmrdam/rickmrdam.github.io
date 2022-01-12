import { Diapositiva } from "../../lib/Diapositiva.js";

export class BTextos extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. Textos</h1>
    <div class="lectura">
     <ul>
      <li>
       <p>
        Los
        <dfn>caracteres</dfn>
        son los diferentes símbolos de comunicación escrita; por ejemplo:
        letras (como a, b o C), dígitos (como 1, 2 o 5) o signos de puntuación
        (como %, $ o !). En computación a cada uno de ellos se les considera un
        <dfn>eslabón</dfn>.
       </p>
       <figure>
        <img alt="Imagen de un eslabón" src="/4_conceptos/img/Eslabon.svg"
         height="50">
        <figcaption>Un eslabón.</figcaption>
       </figure>
      </li>
      <li>
       <p>
        Para formar un texto juntamos caracteres. Si consideramos a un caracter
        como un eslabón, al juntarlos obtenemos una
        <dfn>cadena de texto</dfn>.
       </p>
       <figure>
        <img alt="Imagen de una cadena" src="/4_conceptos/img/Cadena.svg"
         height="50">
        <figcaption>Una cadena de eslabones.</figcaption>
       </figure>
      </li>
     </ul>
    </div>`;
 }
}

customElements.define("b-textos", BTextos);