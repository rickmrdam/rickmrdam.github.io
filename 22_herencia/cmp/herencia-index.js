import { Diapositiva } from "../../lib/Diapositiva.js";
import "./herencia-contenido.js"

export class HerenciaIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <herencia-contenido></herencia-contenido>
    </div>`;
 }
}

customElements.define("herencia-index", HerenciaIndex);