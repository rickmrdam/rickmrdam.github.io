import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class BTxtIgualdad extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. Operador de igualdad de textos</h1>
   <div class="lectura">
    <dl>
     <dt><dfn><code class="language-kotlin">a == b</code></dfn></dt>
     <dt><dfn>Igual que</dfn></dt>
     <dd>
      <p>
       Devuelve
       <code class="language-kotlin">true</code>
       si los dos operandos representan el mismo texto, considerando
       mayúsculas y minúsculas; en otro caso, devuelve
       <code class="language-kotlin">false</code>.
      </p>
     </dd>
    </dl>
    <h2>Ejemplo</h2>
   </div>
   <muestra-codigo>
   <div>
   <div><span style="color: #0000ff;">fun</span>&nbsp;<span
      style="color: #795e26;">main</span>()&nbsp;{</div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #a31515;">"h"</span>&nbsp;==&nbsp;<span
      style="color: #a31515;">"gh"</span>);&nbsp;<span
      style="color: #008000;">//&nbsp;false</span></div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #a31515;">"h"</span>&nbsp;==&nbsp;<span
      style="color: #a31515;">"H"</span>);&nbsp;&nbsp;<span
      style="color: #008000;">//&nbsp;false</span></div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #a31515;">"h"</span>&nbsp;==&nbsp;<span
      style="color: #a31515;">"h"</span>);&nbsp;&nbsp;<span
      style="color: #008000;">//&nbsp;true&nbsp;</span></div>
   <div>}</div>
  </div>
    </muestra-codigo>`;
 }
}

customElements.define("b-txt-igualdad", BTxtIgualdad);