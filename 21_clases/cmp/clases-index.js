import { Diapositiva } from "../../lib/Diapositiva.js";
import "./clases-contenido.js"

export class ClasesIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <clases-contenido></clases-contenido>
    </div>`;
 }
}

customElements.define("clases-index", ClasesIndex);