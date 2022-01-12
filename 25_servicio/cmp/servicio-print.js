import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a25-instrucciones.js";
import "./b25-archivos.js";
import "./c25-index.js";
import "./d25-strings.js";
import "./e25-activity-main.js";
import "./f25-main-activity.js";
import "./g25-android-manifest.js";
import "./servicio-index.js";

export class ServicioPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <servicio-index></servicio-index>
    </section>
    <section>
     <a25-instrucciones></a25-instrucciones>
    </section>
    <section>
     <b25-archivos></b25-archivos>
    </section>
    <section>
     <c25-index></c25-index>
    </section>
    <section>
     <d25-strings></d25-strings>
    </section>
    <section>
     <e25-activity-main></e25-activity-main>
    </section>
    <section>
     <f25-main-activity></f25-main-activity>
    </section>
    <section>
     <g25-android-manifest></g25-android-manifests>
    </section>`;
 }
}

customElements.define("servicio-print", ServicioPrint);