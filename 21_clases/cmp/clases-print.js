import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a21-clases.js";
import "./b21-setters.js";
import "./clases-index.js";

export class ClasesPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <clases-index></clases-index>
    </section>
    <section>
     <a21-clases></a21-clases>
    </section>
    <section>
     <b21-setters></b21-setters>
    </section>`;
 }
}

customElements.define("clases-print", ClasesPrint);