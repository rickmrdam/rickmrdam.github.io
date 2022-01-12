import { Diapositiva } from "../../lib/Diapositiva.js";
import "./multiple-contenido.js";

export class MultipleIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <multiple-contenido></multiple-contenido>
    </div>`;
 }
}

customElements.define("multiple-index", MultipleIndex);