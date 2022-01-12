import { Diapositiva } from "../../lib/Diapositiva.js";

export class ClasesContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
    <li><p><a href="/21_clases/a_clases.html">Clases</a></p></li>
    <li><p><a href="/21_clases/b_setters.html">Setters y Getters</a></p></li>
   </ol>`;
 }
}

customElements.define("clases-contenido", ClasesContenido);