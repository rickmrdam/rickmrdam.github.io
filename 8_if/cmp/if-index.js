import { Diapositiva } from "../../lib/Diapositiva.js";
import "./if-contenido.js";

export class IfIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <if-contenido></if-contenido>
    </div>`;
 }
}

customElements.define("if-index", IfIndex);