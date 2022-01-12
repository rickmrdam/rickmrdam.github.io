import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class C25Index extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>C. index.php</h1>
   <muestra-codigo>
   <div>
   <div><span style="color: #800000;">&lt;?php</span> <span
   style="color: #795e26;">echo</span> <span
   style="color: #a31515;">'Hola'</span>; <span
   style="color: #800000;">?</span><span style="color: #800000;">&gt;</span>
</div>
</div>
      </muestra-codigo>`;
 }
}

customElements.define("c25-index", C25Index);