import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a-naturales.js";
import "./b-cero.js";
import "./c-suma.js";
import "./d-multiplicacion.js";
import "./e-enteros.js";
import "./f-racionales.js";
import "./g-irracionales.js";
import "./h-rarezas.js";
import "./i-godel.js";
import "./j-resumen-13.js";
import "./numeros-index.js";

export class NumerosPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <numeros-index></numeros-index>
    </section>
    <section>
     <a-naturales></a-naturales>
    </section>
    <section>
     <b-cero></b-cero>
    </section>
    <section>
     <c-suma></c-suma>
    </section>
    <section>
     <d-multiplicacion></d-multiplicacion>
    </section>
    <section>
     <e-enteros></e-enteros>
    </section>
    <section>
     <f-racionales></f-racionales>
    </section>
    <section>
     <g-irracionales></g-irracionales>
    </section>
    <section>
     <h-rarezas></h-rarezas>
    </section>
    <section>
     <i-godel></i-godel>
    </section>
    <section>
     <j-resumen-13></j-resumen-13>
    </section>`;
 }
}

customElements.define("numeros-print", NumerosPrint);