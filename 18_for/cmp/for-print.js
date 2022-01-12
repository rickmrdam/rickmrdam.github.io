import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a-16-for.js";
import "./b-16-codigo.js";
import "./c-16-resumen.js";
import "./for-index.js";

export class ForPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <for-index></for-index>
    </section>
    <section>
     <b-16-codigo></b-16-codigo>
    </section>`;
 }
}

customElements.define("for-print", ForPrint);