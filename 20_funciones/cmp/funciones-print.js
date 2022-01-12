import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a1-funciones.js";
import "./b1-funciones-funciones.js";
import "./c1-funciones-parametros.js";
import "./d1-funciones-parametros-expresiones.js";
import "./e1-funciones-return.js";
import "./f1-flecha.js";
import "./g1-recursividad.js";
import "./funciones-index.js";

export class FuncionesPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <funciones-index></funciones-index>
    </section>
    <section>
     <a1-funciones></a1-funciones>
    </section>
    <section>
     <b1-funciones-funciones></b1-funciones-funciones>
    </section>
    <section>
     <c1-funciones-parametros></c1-funciones-parametros>
    </section>
    <section>
     <d1-funciones-parametros-expresiones></d1-funciones-parametros-expresiones>
    </section>
    <section>
     <e1-funciones-return></e1-funciones-return>
    </section>
    <section>
     <f1-flecha></f1-flecha>
    </section>
    <section>
     <g1-recursividad></g1-recursividad>
    </section>`;
 }
}

customElements.define("funciones-print", FuncionesPrint);