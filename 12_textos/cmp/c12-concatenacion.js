import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class C12Concatenacion extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>
   C. Operador de concatenación
   <em>a</em> <strong>+</strong> <em>b</em>
  </h1>
  <div class="lectura">
   <p>
    Cuando el primero de los 2 operandos del operador
    <code class="language-kotlin">+</code>
    es
    <code class="language-kotlin">string</code>,
    se realiza una
    <dfn>concatenación</dfn>,
    que consiste en convertir los 2 operandos en texto y juntarlos.
   </p>
  </div>
   <muestra-codigo>
   <div>
   <div><span style="color: #0000ff;">fun</span>&nbsp;<span
      style="color: #795e26;">main</span>()&nbsp;{</div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #a31515;">"ab"</span>&nbsp;+&nbsp;<span
      style="color: #a31515;">"&amp;&nbsp;h"</span>)&nbsp;<span
      style="color: #008000;">//ab&amp;&nbsp;h</span></div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #a31515;">"gg"</span>&nbsp;+&nbsp;<span
      style="color: #098658;">2</span>)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
      style="color: #008000;">//gg2</span></div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #a31515;">"gg"</span>&nbsp;+&nbsp;<span
      style="color: #0000ff;">true</span>)&nbsp;&nbsp;<span
      style="color: #008000;">//ggtrue</span></div>
   <div>}</div>
  </div>
   </muestra-codigo>`;
 }
}

customElements.define("c12-concatenacion", C12Concatenacion);