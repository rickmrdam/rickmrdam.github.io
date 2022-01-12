import { Diapositiva } from "../../lib/Diapositiva.js";
import "./variables-contenido.js"

export class VariablesIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <variables-contenido></variables-contenido>
    </div>`;
 }
}

customElements.define("variables-index", VariablesIndex);