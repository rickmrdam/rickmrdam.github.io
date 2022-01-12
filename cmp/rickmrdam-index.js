import { Diapositiva } from "../lib/Diapositiva.js";

export class GilPGAMIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
   <h2>por Gilberto Paheco Gallegos</h2>
    <p>Contenido introductorio sobre Aplicaciones Móviles con Android</p>
    <mi-nav open></mi-nav>
   </div>`;
 }
}

customElements.define("gilpgam-index", GilPGAMIndex);