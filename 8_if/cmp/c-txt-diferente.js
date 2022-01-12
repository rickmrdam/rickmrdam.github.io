import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class CTxtDiferente extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>C. Operador diferente de para textos</h1>
   <div class="lectura">
    <dl>
     <dt><dfn><code class="language-kotlin">a != b</code></dfn></dt>
     <dt><dfn>Diferente de</dfn></dt>
     <dd>
      <p>
       Devuelve
       <code class="language-kotlin">true</code>
       si los dos operandos representan textos diferentes, considerando
       mayúsculas y minúsculas; en otro caso, devuelve
       <code class="language-kotlin">false</code>.
      </p>
     </dd>
     <h2>Ejemplo</h2>
    </dl>
   </div>
   <muestra-codigo>
   <div>
   <div><span style="color: #0000ff;">fun</span>&nbsp;<span
      style="color: #795e26;">main</span>()&nbsp;{</div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #a31515;">"h"</span>&nbsp;!=&nbsp;<span
      style="color: #a31515;">"gh"</span>);&nbsp;<span
      style="color: #008000;">//&nbsp;true</span></div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #a31515;">"h"</span>&nbsp;!=&nbsp;<span
      style="color: #a31515;">"H"</span>);&nbsp;&nbsp;<span
      style="color: #008000;">//&nbsp;true</span></div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #a31515;">"h"</span>&nbsp;!=&nbsp;<span
      style="color: #a31515;">"h"</span>);&nbsp;&nbsp;<span
      style="color: #008000;">//&nbsp;false</span></div>
   <div>}</div>
  </div>
    </muestra-codigo>`;
 }
}

customElements.define("c-txt-diferente", CTxtDiferente);