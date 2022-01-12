import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a-15-while.js";
import "./b-15-pres-while-asc.js";
import "./c-15-pres-while-asc-2.js";
import "./d-15-pres-while-desc.js";
import "./e-15-pres-while-desc-2.js";
import "./f-15-pres-while-no-ejec.js";
import "./g-15-pres-while-desc-mal.js";
import "./h-15-pres-while-asc-mal.js";
import "./i-15-resumen.js";
import "./while-index.js";

export class WhilePrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <while-index></while-index>
    </section>
    <section>
     <a-15-while></a-15-while>
    </section>
    <section>
     <b-15-pres-while-asc></b-15-pres-while-asc>
    </section>
    <section>
     <c-15-pres-while-asc-2></c-15-pres-while-asc-2>
    </section>
    <section>
     <d-15-pres-while-desc></d-15-pres-while-desc>
    </section>
    <section>
     <e-15-pres-while-desc-2></e-15-pres-while-desc-2>
    </section>
    <section>
     <f-15-pres-while-no-ejec></f-15-pres-while-no-ejec>
    </section>
    <section>
     <g-15-pres-while-desc-mal></g-15-pres-while-desc-mal>
    </section>
    <section>
     <h-15-pres-while-asc-mal></h-15-pres-while-asc-mal>
    </section>
    <section>
     <i-15-resumen></i-15-resumen>
    </section>`;
 }
}

customElements.define("while-print", WhilePrint);