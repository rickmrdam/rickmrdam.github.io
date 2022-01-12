import { Diapositiva } from "../../lib/Diapositiva.js";
import "./fundamentos-contenido.js"

export class FundamentosIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <fundamentos-contenido></fundamentos-contenido>
    </div>`;
 }
}

customElements.define("fundamentos-index", FundamentosIndex);