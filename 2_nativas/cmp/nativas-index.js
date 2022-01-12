import { Diapositiva } from "../../lib/Diapositiva.js";
import "./nativas-contenido.js"

export class NativasIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <nativas-contenido></nativas-contenido>
    </div>`;
 }
}

customElements.define("nativas-index", NativasIndex);