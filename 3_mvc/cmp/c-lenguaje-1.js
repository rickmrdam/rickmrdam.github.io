import { Diapositiva } from "../../lib/Diapositiva.js";

export class CLenguaje extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>C. Lenguaje de programación</h1>
    <div class="lectura">
     <ul>
      <li>
       <p>
        Un
        <dfn>lenguaje de programación</dfn>
        es un conjunto de reglas precisas que se pueden usar para indicar a una
        computadora como realizar un algoritmo.
       </p>
      </li>
      <li>
       <p>
        Un
        <dfn>programa</dfn>
        o
        <dfn>código</dfn>
        es la representación de un algoritmo usando un lenguaje de programación.
       </p>
      </li>
      <li>
       <p>
        Las aplicaciones de cómputo normalmente se construyen usando uno o más
        lenguajes de programación.
       </p>
      </li>
     </ul>
    </div>`;
 }
}

customElements.define("c-lenguaje-1", CLenguaje);