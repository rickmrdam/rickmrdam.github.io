import { Diapositiva } from "../../lib/Diapositiva.js";
import "./funciones-contenido.js"

export class FuncionesIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <funciones-contenido></funciones-contenido>
    </div>`;
 }
}

customElements.define("funciones-index", FuncionesIndex);