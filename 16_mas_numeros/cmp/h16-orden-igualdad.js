import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class H16OrdenIgualdad extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>H. Operadores combinados de orden e Igualdad</h1>
   <div class="lectura">
    <p>En el ejemplo que sigue, el orden natural es:</p>
    <p>0 &lt; 3 &lt; 8</p>
   </div>
   <muestra-codigo>
   <div>
   <div><span style="color: #0000ff;">fun</span>&nbsp;<span
      style="color: #795e26;">main</span>()&nbsp;{</div>
   <div>&nbsp;<span
      style="color: #008000;">//&nbsp;Menor&nbsp;o&nbsp;igual&nbsp;que&nbsp;(&lt;=)</span>
   </div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #098658;">3</span>&nbsp;&lt;=&nbsp;<span
      style="color: #098658;">0</span>);&nbsp;<span
      style="color: #008000;">//&nbsp;false</span></div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #098658;">3</span>&nbsp;&lt;=&nbsp;<span
      style="color: #098658;">3</span>);&nbsp;<span
      style="color: #008000;">//&nbsp;true</span></div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #098658;">3</span>&nbsp;&lt;=&nbsp;<span
      style="color: #098658;">8</span>);&nbsp;<span
      style="color: #008000;">//&nbsp;true</span></div>
   <div>&nbsp;<span
      style="color: #008000;">//&nbsp;Mayor&nbsp;o&nbsp;igual&nbsp;que&nbsp;(&gt;=)</span>
   </div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #098658;">3</span>&nbsp;&gt;=&nbsp;<span
      style="color: #098658;">0</span>);&nbsp;<span
      style="color: #008000;">//&nbsp;true</span></div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #098658;">3</span>&nbsp;&gt;=&nbsp;<span
      style="color: #098658;">3</span>);&nbsp;<span
      style="color: #008000;">//&nbsp;true</span></div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #098658;">3</span>&nbsp;&gt;=&nbsp;<span
      style="color: #098658;">8</span>);&nbsp;<span
      style="color: #008000;">//&nbsp;false</span></div>
   <div>}</div>
  </div>
   </muestra-codigo>`;
 }
}

customElements.define("h16-orden-igualdad", H16OrdenIgualdad);