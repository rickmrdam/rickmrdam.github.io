import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a12-enteros.js";
import "./b12-flotantes.js";
import "./c12-concatenacion.js";
import "./d12-asignacion.js";
import "./e12-plantillas.js";
import "./f12-orden.js";
import "./g12-orden-igualdad.js";
import "./h12-resumen.js";
import "./textos-index.js";

export class TextosPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <textos-index></textos-index>
    </section>
    <section>
     <a12-enteros></a12-enteros>
    </section>
    <section>
     <b12-flotantes></b12-flotantes>
    </section>
    <section>
     <c12-concatenacion></c12-concatenacion>
    </section>
    <section>
     <d12-asignacion></d12-asignacion>
    </section>
    <section>
     <e12-plantillas></e12-plantillas>
    </section>
    <section>
     <f12-orden></f12-orden>
    </section>
    <section>
     <g12-orden-igualdad></g12-orden-igualdad>
    </section>
    <section>
     <h12-resumen></h12-resumen>
    </section>`;
 }
}

customElements.define("textos-print", TextosPrint);