import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class C23Strings extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>C. app/res/values/strings.xml</h1>
   <muestra-codigo>
   <div>
   <div><span style="color: #800000;">&lt;resources&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;string</span></div>
   <div>&nbsp; &nbsp;<span style="color: #ff0000;">name</span>=<span
      style="color: #0000ff;">"app_name"</span><span
      style="color: #800000;">&gt;</span>Ejemplo<span
      style="color: #800000;">&lt;/string&gt;</span></div>
   <div><span style="color: #800000;">&lt;/resources&gt;</span></div>
  </div>
      </muestra-codigo>`;
 }
}

customElements.define("c23-strings", C23Strings);