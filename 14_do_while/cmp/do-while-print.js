import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a-do-while.js";
import "./b-codigo-12.js";
import "./c-resumen-12.js";
import "./do-while-index.js";

export class DoWhilePrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <do-while-index></do-while-index>
    </section>
    <section>
     <a-do-while></a-do-while>
    </section>
    <section>
     <b-codigo-12></b-codigo-12>
    </section>
    <section>
     <c-resumen-12></c-resumen-12>
    </section>`;
 }
}

customElements.define("do-while-print", DoWhilePrint);