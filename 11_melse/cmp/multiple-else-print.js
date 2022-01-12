import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a-multiple-else.js";
import "./b-codigo-9.js";
import "./c-resumen-9.js";
import "./multiple-else-index.js";

export class MultipleElsePrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <multiple-else-index></multiple-else-index>
    </section>
    <section>
     <a-multiple-else></a-multiple-else>
    </section>
    <section>
     <b-codigo-9></b-codigo-9>
    </section>
    <section>
     <c-resumen-9></c-resumen-9>
    </section>`;
 }
}

customElements.define("multiple-else-print", MultipleElsePrint);