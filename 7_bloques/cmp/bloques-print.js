import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a-bloques.js";
import "./b-pres-bloque.js";
import "./c-pres-bloque-v-d.js";
import "./bloques-index.js";
import "./d-resumen.js";

export class BloquesPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <bloques-index></bloques-index>
    </section>
    <section>
     <a-bloques></a-bloques>
    </section>
    <section>
     <b-pres-bloque></b-pres-bloque>
    </section>
    <section>
     <c-pres-bloque-v-d></c-pres-bloque-v-d>
    </section>
    <section>
     <d-resumen></d-resumen>
    </section>`;
 }
}

customElements.define("bloques-print", BloquesPrint);