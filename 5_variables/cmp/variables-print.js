import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a-identificadores.js";
import "./b-variables.js";
import "./c-constantes.js";
import "./d-duplicadas.js";
import "./e-no-encontradas.js";
import "./f-prompt.js";
import "./g-resumen-3.js";
import "./variables-index.js";

export class VariablesPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <variables-index></variables-index>
    </section>
    <section>
     <a-identificadores></a-identificadores>
    </section>
    <section>
     <b-variables></b-variables>
    </section>
    <section>
     <c-constantes></c-constantes>
    </section>
    <section>
     <d-duplicadas></d-duplicadas>
    </section>
    <section>
     <e-no-encontradas></e-no-encontradas>
    </section>
    <section>
     <f-prompt noprint></f-prompt>
    </section>
    <section>
     <g-resumen-3></g-resumen-3>
    </section>`;
 }
}

customElements.define("variables-print", VariablesPrint);