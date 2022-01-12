import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a-if-else.js";
import "./b-codigo-7.js";
import "./c-resumen-7.js";
import "./if-else-index.js";

export class IfElsePrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <if-else-index></if-else-index>
    </section>
    <section>
     <a-if-else></a-if-else>
    </section>
    <section>
     <b-codigo-7></b-codigo-7>
    </section>
    <section>
     <c-resumen-7></c-resumen-7>
    </section>`;
 }
}

customElements.define("if-else-print", IfElsePrint);