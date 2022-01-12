import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "./servicio-contenido.js";

export class ServicioIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <servicio-contenido></servicio-contenido>
    </div>`;
 }
}

customElements.define("servicio-index", ServicioIndex);