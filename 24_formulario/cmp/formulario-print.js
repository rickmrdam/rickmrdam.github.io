import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a24-instrucciones.js";
import "./b24-archivos.js";
import "./c24-strings.js";
import "./d24-activity-main.js";
import "./e24-main-activity.js";
import "./f24-android-manifest.js";
import "./formulario-index.js";

export class FormularioPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <formulario-index></formulario-index>
    </section>
    <section>
     <a24-instrucciones></a24-instrucciones>
    </section>
    <section>
     <b24-archivos></b24-archivos>
    </section>
    <section>
     <c24-strings></c24-strings>
    </section>
    <section>
     <d24-activity-main></d24-activity-main>
    </section>
    <section>
     <e24-main-activity></e24-main-activity>
    </section>
    <section>
     <f24-android-manifest></f24-android-manifests>
    </section>`;
 }
}

customElements.define("formulario-print", FormularioPrint);