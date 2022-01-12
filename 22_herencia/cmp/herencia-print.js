import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a22-constructores.js";
import "./b22-sobreescritura.js";
import "./herencia-index.js";

export class HerenciaPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <herencia-index></herencia-index>
    </section>
    <section>
     <a22-constructores></a22-constructores>
    </section>
    <section>
     <b22-sobreescritura></b22-sobreescritura>
    </section>`;
 }
}

customElements.define("herencia-print", HerenciaPrint);