import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class D25Strings extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>D. app/res/values/strings.xml</h1>
   <muestra-codigo>
   <div>
   <div><span style="color: #800000;">&lt;resources&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;string</span></div>
   <div>&nbsp; &nbsp;<span style="color: #ff0000;">name</span>=<span
      style="color: #0000ff;">"app_name"</span><span
      style="color: #800000;">&gt;</span>Servicio<span
      style="color: #800000;">&lt;/string&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;string</span> <span
      style="color: #ff0000;">name</span>=<span
      style="color: #0000ff;">"esperando"</span><span
      style="color: #800000;">&gt;</span>Esperando…<span
      style="color: #800000;">&lt;/string&gt;</span></div>
   <div><span style="color: #800000;">&lt;/resources&gt;</span></div>
  </div>
      </muestra-codigo>`;
 }
}

customElements.define("d25-strings", D25Strings);