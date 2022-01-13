import { Diapositiva } from "../lib/Diapositiva.js";

export class RICKMRAMIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
   <h2>por Ricardo Armando Machorro Reyes</h2>
    <p>Contenido introductorio sobre Aplicaciones Móviles con Android</p>
    <mi-nav open></mi-nav>
   </div>`;
 }
}

customElements.define("rickmram-index", RICKMRAMIndex);
