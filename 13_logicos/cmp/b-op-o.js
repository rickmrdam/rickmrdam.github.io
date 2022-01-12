import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class OpY extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. Operador lógico O</h1>
   <div class="lectura">
    <p>
     <code class="language-kotlin">x || y</code>
     es el operador O en corto circuito.
    </p>
    <p>
     Si
     <code class="language-kotlin">x</code>
     se evalúa a
     <code class="language-kotlin">true</code>,
     el resultado es
     <code class="language-kotlin">x</code>
     y no se evalúa
     <code class="language-kotlin">y</code>;
     de lo contrario, el resultado es
     <code class="language-kotlin">y</code>.
    </p>
   </div>
   <muestra-codigo>
   <div>
   <div><span style="color: #0000ff;">fun</span>&nbsp;<span
      style="color: #795e26;">main</span>()&nbsp;{</div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #0000ff;">true</span>&nbsp;||&nbsp;<span
      style="color: #0000ff;">true</span>);&nbsp;&nbsp;<span
      style="color: #008000;">//T</span></div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #0000ff;">true</span>&nbsp;||&nbsp;<span
      style="color: #0000ff;">false</span>);&nbsp;<span
      style="color: #008000;">//T</span></div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #0000ff;">false</span>&nbsp;||&nbsp;<span
      style="color: #0000ff;">true</span>);&nbsp;<span
      style="color: #008000;">//T</span></div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #0000ff;">false</span>&nbsp;||&nbsp;<span
      style="color: #0000ff;">false</span>);<span
      style="color: #008000;">//F</span></div>
   <div>}</div>
  </div>
    </muestra-codigo>`;
 }
}

customElements.define("b-op-o", OpY);