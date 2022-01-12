import { Diapositiva } from "../../lib/Diapositiva.js";
import "./arquitectura-contenido.js"

export class ArquitecturaIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <arquitectura-contenido></arquitectura-contenido>
    </div>`;
 }
}

customElements.define("arquitectura-index", ArquitecturaIndex);