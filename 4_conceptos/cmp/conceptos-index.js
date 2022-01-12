import { Diapositiva } from "../../lib/Diapositiva.js";
import "./conceptos-contenido.js"

export class ConceposIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <conceptos-contenido></conceptos-contenido>
    </div>`;
 }
}

customElements.define("conceptos-index", ConceposIndex);