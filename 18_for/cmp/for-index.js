import { Diapositiva } from "../../lib/Diapositiva.js";
import "./for-contenido.js";

export class ForIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <for-contenido></for-contenido>
    </div>`;
 }
}

customElements.define("for-index", ForIndex);