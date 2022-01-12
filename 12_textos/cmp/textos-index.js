import { Diapositiva } from "../../lib/Diapositiva.js";
import "./textos-contenido.js";

export class TextosIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <textos-contenido></textos-contenido>
    </div>`;
 }
}

customElements.define("textos-index", TextosIndex);