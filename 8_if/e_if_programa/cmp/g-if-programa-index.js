import { Diapositiva } from "../../../lib/Diapositiva.js";
import "./g-if-programa-contenido.js";

export class GIfProgramaIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <p>
      Esta presentación te enseña como construir y ejecutar un programa que
      pida datos y en base a ellos muestre mensajes usando la estructura de
      control <code class="language-kotlin">if</code>.
     </p>
     <h2>Contenido</h2>
     <g-if-programa-contenido></g-if-programa-contenido>
    </div>`;
 }
}

customElements.define("g-if-programa-index", GIfProgramaIndex);