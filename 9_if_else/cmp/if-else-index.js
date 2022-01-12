import { Diapositiva } from "../../lib/Diapositiva.js";
import "./if-else-contenido.js";

export class IfElseIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <if-else-contenido></if-else-contenido>
    </div>`;
 }
}

customElements.define("if-else-index", IfElseIndex);