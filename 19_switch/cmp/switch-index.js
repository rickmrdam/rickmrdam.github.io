import { Diapositiva } from "../../lib/Diapositiva.js";
import "./switch-contenido.js";

export class SwitchIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <switch-contenido></switch-contenido>
    </div>`;
 }
}

customElements.define("switch-index", SwitchIndex);