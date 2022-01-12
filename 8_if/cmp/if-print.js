import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a-boolean.js";
import "./b-txt-igualdad.js";
import "./c-txt-diferente.js";
import "./d-if.js";
import "./e8-codigo.js";
// import "./e8-codigo.js";
// import "./f-if-false.js";
import "./h-resumen.js";
import "./if-index.js";
// import "../g_if_programa/cmp/g-if-programa-index.js";
// import "../g_if_programa/cmp/g1-problema.js";
// import "../g_if_programa/cmp/g2-escenarios.js";
// import "../g_if_programa/cmp/g3-diseno.js";
// import "../g_if_programa/cmp/g4-codigo.js";

export class IfPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <if-index></if-index>
    </section>
    <section>
     <a-boolean></a-boolean>
    </section>
    <section>
     <b-txt-igualdad></b-txt-igualdad>
    </section>
    <section>
     <c-txt-diferente></c-txt-diferente>
    </section>
    <section>
     <d-if></d-if>
    </section>
    <section>
     <e8-codigo></e8-codigo>
    </section>
<!--    <section>
     <f-if-false></f-if-false>
    </section>
    <section>
     <h1>G. Programa con <strong>if</strong></h1>
     <section>
      <g-if-programa-index></g-if-programa-index>
     </section>
     <section>
      <g1-problema></g1-problema>
     </section>
     <section>
      <g2-escenarios></g2-escenarios>
     </section>
     <section>
      <g3-diseno></g3-diseno>
     </section>
     <section>
      <g4-codigo></g4-codigo>
     </section>
    </section>-->
    <section>
     <h-resumen></h-resumen>
    </section>`;
 }
}

customElements.define("if-print", IfPrint);