import { Diapositiva } from "../../lib/Diapositiva.js";
import "./bloques-contenido.js";

export class BloquesIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <bloques-contenido></bloques-contenido>
    </div>`;
 }
}

customElements.define("bloques-index", BloquesIndex);