import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a-comentarios.js";
import "./b-com-1.js";
import "./c-com-1-o-mas.js";
import "./comentarios-index.js";
import "./d-jsdoc.js";
import "./e-resumen-4.js";

export class ComentariosPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <comentarios-index></comentarios-index>
    </section>
    <section>
     <a-comentarios></a-comentarios>
    </section>
    <section>
     <b-com-1></b-com-1>
    </section>
    <section>
     <c-com-1-o-mas></c-com-1-o-mas>
    </section>
    <section>
     <d-jsdoc></d-jsdoc>
    </section>
    <section>
     <e-resumen-4></e-resumen-4>
    </section>`;
 }
}

customElements.define("comentarios-print", ComentariosPrint);