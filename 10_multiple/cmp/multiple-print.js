import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a-multiple.js";
import "./b-codigo-8.js";
import "./c-resumen-8.js";
import "./multiple-index.js";

export class MultiplePrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <multiple-index></multiple-index>
    </section>
    <section>
     <a-multiple></a-multiple>
    </section>
    <section>
     <b-codigo-8></b-codigo-8>
    </section>
    <section>
     <c-resumen-8></c-resumen-8>
    </section>`;
 }
}

customElements.define("multiple-print", MultiplePrint);