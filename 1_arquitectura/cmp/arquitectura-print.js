import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a-1-caracteristicas.js";
import "./b-1-uso.js";
import "./c-1-componentes.js";
import "./arquitectura-index.js";

export class ArquitecturaPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <arquitectura-index></arquitectura-index>
    </section>
    <section>
     <a-1-caracteristicas></a-1-caracteristicas>
    </section>
    <section>
     <b-1-uso></b-1-uso>
    </section>
    <section>
     <c-1-componentes></c-1-componentes>
    </section>`;
 }
}

customElements.define("arquitectura-print", ArquitecturaPrint);