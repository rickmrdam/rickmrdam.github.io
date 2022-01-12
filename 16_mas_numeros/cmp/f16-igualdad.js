import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class F16Igualdad extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>F. Operadores de igualdad</h1>
   <muestra-codigo>
   <div>
   <div><span style="color: #0000ff;">fun</span>&nbsp;<span
      style="color: #795e26;">main</span>()&nbsp;{</div>
   <div>&nbsp;<span
      style="color: #008000;">//&nbsp;Igual&nbsp;que&nbsp;(==)</span></div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #098658;">3</span>&nbsp;==&nbsp;<span
      style="color: #098658;">3</span>);&nbsp;&nbsp;<span
      style="color: #008000;">//true</span></div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #098658;">3</span>&nbsp;==&nbsp;-<span
      style="color: #098658;">3</span>);&nbsp;<span
      style="color: #008000;">//false</span></div>
   <div>&nbsp;<span
      style="color: #008000;">//&nbsp;Diferente&nbsp;de&nbsp;(!==)</span></div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #098658;">3</span>&nbsp;!=&nbsp;<span
      style="color: #098658;">3</span>);&nbsp;<span
      style="color: #008000;">//&nbsp;false</span></div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #098658;">3</span>&nbsp;!=&nbsp;<span
      style="color: #098658;">8</span>);&nbsp;<span
      style="color: #008000;">//&nbsp;true</span></div>
   <div>}</div>
  </div>
   </muestra-codigo>`;
 }
}

customElements.define("f16-igualdad", F16Igualdad);