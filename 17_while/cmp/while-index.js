import { Diapositiva } from "../../lib/Diapositiva.js";
import "./while-contenido.js";

export class WhileIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <while-contenido></while-contenido>
    </div>`;
 }
}

customElements.define("while-index", WhileIndex);