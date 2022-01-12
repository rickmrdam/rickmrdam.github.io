import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "./ejemplo-contenido.js";

export class EjemploIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <ejemplo-contenido></ejemplo-contenido>
    </div>`;
 }
}

customElements.define("ejemplo-index", EjemploIndex);