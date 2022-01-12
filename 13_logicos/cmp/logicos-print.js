import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a-op-y.js";
import "./b-op-o.js";
import "./c-op-no.js";
import "./d-op-ternario.js";
import "./e-resumen-11.js";
import "./logicos-index.js";

export class LogicosPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <logicos-index></logicos-index>
    </section>
    <section>
     <a-op-y></a-op-y>
    </section>
    <section>
     <b-op-o></b-op-o>
    </section>
    <section>
     <c-op-no></c-op-no>
    </section>
    <section>
     <d-op-ternario></d-op-ternario>
    </section>
    <section>
     <e-resumen-11></e-resumen-11>
    </section>`;
 }
}

customElements.define("logicos-print", LogicosPrint);