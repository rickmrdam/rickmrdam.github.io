import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class E16IncrYDecr extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>E. Incremento y decremento</h1>
   <div class="lectura">
    <p>
     También hay operadores de incremento y decremento en 1, pero son algo
     truculentos; es mejor usarlos solos, sin combinarlos con otros
     operadores.
    </p>
    <h2>Ejemplo</h2>
   </div>
   <muestra-codigo>
   <div>
   <div><span style="color: #0000ff;">fun</span>&nbsp;<span
      style="color: #795e26;">main</span>()&nbsp;{</div>
   <div>&nbsp;<span style="color: #0000ff;">var</span>&nbsp;z&nbsp;=&nbsp;<span
      style="color: #098658;">0</span>;</div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(z);&nbsp;<span
      style="color: #008000;">//&nbsp;0</span></div>
   <div>&nbsp;<span
      style="color: #008000;">//&nbsp;Incremento.&nbsp;Aumenta&nbsp;z&nbsp;en&nbsp;1.</span>
   </div>
   <div>&nbsp;z++;</div>
   <div>&nbsp;<span style="color: #008000;">//&nbsp;z&nbsp;===&nbsp;1</span>
   </div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(z);&nbsp;<span
      style="color: #008000;">//&nbsp;1</span></div>
   <div>&nbsp;<span
      style="color: #008000;">//&nbsp;Decremento.&nbsp;Disminuye&nbsp;z&nbsp;en&nbsp;1.</span>
   </div>
   <div>&nbsp;z--;</div>
   <div>&nbsp;<span style="color: #008000;">//&nbsp;z&nbsp;===&nbsp;0</span>
   </div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(z);&nbsp;<span
      style="color: #008000;">//&nbsp;0</span></div>
   <div>}</div>
  </div>
   </muestra-codigo>`;
 }
}

customElements.define("e16-incr-y-decr", E16IncrYDecr);