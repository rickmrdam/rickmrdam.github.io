import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "./formulario-contenido.js";

export class FormularioIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <formulario-contenido></formulario-contenido>
    </div>`;
 }
}

customElements.define("formulario-index", FormularioIndex);