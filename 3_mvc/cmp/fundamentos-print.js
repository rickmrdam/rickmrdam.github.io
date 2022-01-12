import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a-algoritmo-1.js";
import "./b-proceso-1.js";
import "./c-lenguaje-1.js";
import "./d-pseudocodigo-1.js";
import "./e-diagrama-1.js";
import "./f-resumen-1.js";
import "./fundamentos-index.js";

export class FundamentosPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <fundamentos-index></fundamentos-index>
    </section>
    <section>
     <a-algoritmo-1></a-algoritmo-1>
    </section>
    <section>
     <b-proceso-1></b-proceso-1>
    </section>
    <section>
     <c-lenguaje-1></c-lenguaje-1>
    </section>
    <section>
     <d-pseudocodigo-1></d-pseudocodigo-1>
    </section>
    <section>
     <e-diagrama-1></e-diagrama-1>
    </section>
    <section>
     <f-resumen-1></f-resumen-1>
    </section>`;
 }
}

customElements.define("fundamentos-print", FundamentosPrint);