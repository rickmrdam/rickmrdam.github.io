import { Diapositiva } from "../../lib/Diapositiva.js";

export class AAlgoritmo extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. Algoritmo</h1>
    <div class="lectura">
     <p>
      Un
      <dfn>algoritmo</dfn>
      es un conjunto ordenado de intrucciones que se ejecutan una tras otra para
      realizar una tarea.
     </p>
    </div>`;
 }
}

customElements.define("a-algoritmo-1", AAlgoritmo);