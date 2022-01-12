import { Diapositiva } from "../../lib/Diapositiva.js";
import "./multiple-else-contenido.js";

export class MultipleElseIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <multiple-else-contenido></multiple-else-contenido>
    </div>`;
 }
}

customElements.define("multiple-else-index", MultipleElseIndex);