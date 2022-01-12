import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a-17-codigo-switch.js";
import "./b-17-codigo-switch-default.js";
import "./switch-index.js";

export class SwitchPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <switch-index></switch-index>
    </section>
    <section>
     <a-17-codigo-switch></a-17-codigo-switch>
    </section>
    <section>
     <b-17-codigo-switch-default></b-17-codigo-switch-default>
    </section>`;
 }
}

customElements.define("switch-print", SwitchPrint);