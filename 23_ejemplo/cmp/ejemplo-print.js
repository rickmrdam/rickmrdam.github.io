import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a23-instrucciones.js";
import "./b23-archivos.js";
import "./c23-strings.js";
import "./d23-activity-main.js";
import "./e23-main-activity.js";
import "./ejemplo-index.js";
import "./f23-android-manifest.js";

export class EjemploPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <ejemplo-index></ejemplo-index>
    </section>
    <section>
     <a23-instrucciones></a23-instrucciones>
    </section>
    <section>
     <b23-archivos></b23-archivos>
    </section>
    <section>
     <c23-strings></c23-strings>
    </section>
    <section>
     <d23-activity-main></d23-activity-main>
    </section>
    <section>
     <e23-main-activity></e23-main-activity>
    </section>
    <section>
     <f23-android-manifest></f23-android-manifests>
    </section>`;
 }
}

customElements.define("ejemplo-print", EjemploPrint);