import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a2-nativa.js";
import "./b2-multiplataforma.js";
import "./c2-diferencias.js";
import "./d2-ventajas-nativas.js";
import "./e2-desventajas-nativas.js";
import "./f2-ventajas-multi.js";
import "./g2-desventajas-multi.js";
import "./h2-uso-nativas.js";
import "./i2-uso-multi.js";
import "./nativas-index.js";

export class NativasPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <nativas-index></nativas-index>
    </section>
    <section>
     <a2-nativa></a2-nativa>
    </section>
    <section>
     <b2-multiplataforma></b2-multiplataforma>
    </section>
    <section>
     <c2-diferencias></c2-diferencias>
    </section>
    <section>
     <d2-ventajas-nativas></d2-ventajas-nativas>
    </section>
    <section>
     <e2-desventajas-nativas></e2-desventajas-nativas>
    </section>
    <section>
     <f2-ventajas-multi></f2-ventajas-multi>
    </section>
    <section>
     <g2-desventajas-multi></g2-desventajas-multi>
    </section>
    <section>
     <h2-uso-nativas></h2-uso-nativas>
    </section>
    <section>
     <i2-uso-multi></i2-uso-multi>
    </section>`;
 }
}

customElements.define("nativas-print", NativasPrint);