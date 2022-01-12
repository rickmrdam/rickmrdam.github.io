import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a16-enteros.js";
import "./b16-recta.js";
import "./c16-ops-num.js";
import "./d16-asignacion.js";
import "./e16-incr-y-decr.js";
import "./f16-igualdad.js";
import "./g16-orden.js";
import "./h16-orden-igualdad.js";
import "./i16-precedencia.js";
import "./j16-expresiones.js";
import "./k16-resumen.js";
import "./mas-numeros-index.js";

export class MasNumerosPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <mas-numeros-index></mas-numeros-index>
    </section>
    <section>
     <a16-enteros></a16-enteros>
    </section>
    <section>
     <b16-recta></b16-recta>
    </section>
    <section>
     <c16-ops-num></c16-ops-num>
    </section>
    <section>
     <d16-asignacion></d16-asignacion>
    </section>
    <section>
     <e16-incr-y-decr></e16-incr-y-decr>
    </section>
    <section>
     <f16-igualdad></f16-igualdad>
    </section>
    <section>
     <g16-orden></g16-orden>
    </section>
    <section>
     <h16-orden-igualdad></h16-orden-igualdad>
    </section>
    <section>
     <i16-precedencia></i16-precedencia>
    </section>
    <section>
     <j16-expresiones></j16-expresiones>
    </section>
    <section>
     <k16-resumen></k16-resumen>
    </section>`;
 }
}

customElements.define("mas-numeros-print", MasNumerosPrint);