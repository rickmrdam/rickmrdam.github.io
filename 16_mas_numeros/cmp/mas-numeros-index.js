import { Diapositiva } from "../../lib/Diapositiva.js";
import "./mas-numeros-contenido.js";

export class MasNumerosIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <mas-numeros-contenido></mas-numeros-contenido>
    </div>`;
 }
}

customElements.define("mas-numeros-index", MasNumerosIndex);