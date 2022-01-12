import { Diapositiva } from "../../lib/Diapositiva.js";
import "./do-while-contenido.js";

export class DoWhileIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <do-while-contenido></do-while-contenido>
    </div>`;
 }
}

customElements.define("do-while-index", DoWhileIndex);