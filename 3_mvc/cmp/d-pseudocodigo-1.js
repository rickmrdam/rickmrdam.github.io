import { Diapositiva } from "../../lib/Diapositiva.js";

export class DPseudocodigo extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>D. Pseudocódigo</h1>
    <div class="lectura">
     <ul>
      <li>
       <p>
        Un
        <dfn>pseudocódigo</dfn>
        es la especificación de un algoritmo usando texto informal parecido al
        lenguaje humano.
       </p>
      </li>
      <li>
       <p>
        Los pseudocódigos normalmente se usan como apoyo en el desarrollo de
        aplicaciones de cómputo.
       </p>
      </li>
     </ul>
    </div>`;
 }
}

customElements.define("d-pseudocodigo-1", DPseudocodigo);