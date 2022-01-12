import { Diapositiva } from "../../lib/Diapositiva.js";
import "./numeros-contenido.js";

export class NumerosIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <numeros-contenido></numeros-contenido>
    </div>`;
 }
}

customElements.define("numeros-index", NumerosIndex);