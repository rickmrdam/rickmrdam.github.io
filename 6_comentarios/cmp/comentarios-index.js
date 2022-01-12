import { Diapositiva } from "../../lib/Diapositiva.js";
import "./comentarios-contenido.js";

export class ComentariosIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <comentarios-contenido></comentarios-contenido>
    </div>`;
 }
}

customElements.define("comentarios-index", ComentariosIndex);