import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class G16Orden extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>G. Operadores de orden</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       El operador binario
       <code class="language-kotlin">&lt;</code>
       representa el orden natural de los datos. Si el valor a la izquierda
       va antes que el de la derecha, el resultado es
       <code class="language-kotlin">true</code>;
       en otro caso es
       <code class="language-kotlin">false</code>.
      </p>
     </li>
     <li>
      <p>
       El operador binario
       <code class="language-kotlin">&gt;</code>
       representa el orden invertido de los datos. Si el valor a la izquierda
       va después que el de la derecha, el resultado es
       <code class="language-kotlin">true</code>;
       en otro caso es
       <code class="language-kotlin">false</code>.
      </p>
     </li>
     <li>
      <p>En el ejemplo que sigue, el orden natural es:</p>
      <p>0 &lt; 3 &lt; 8</p>
     </li>
    </ul>
   </div>
   <muestra-codigo>
   <div>
   <div><span style="color: #0000ff;">fun</span>&nbsp;<span
      style="color: #795e26;">main</span>()&nbsp;{</div>
   <div>&nbsp;<span
      style="color: #008000;">//&nbsp;Menor&nbsp;que&nbsp;(&lt;)</span></div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #098658;">3</span>&nbsp;&lt;&nbsp;<span
      style="color: #098658;">0</span>);&nbsp;<span
      style="color: #008000;">//&nbsp;false</span></div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #098658;">3</span>&nbsp;&lt;&nbsp;<span
      style="color: #098658;">3</span>);&nbsp;<span
      style="color: #008000;">//&nbsp;false</span></div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #098658;">3</span>&nbsp;&lt;&nbsp;<span
      style="color: #098658;">8</span>);&nbsp;<span
      style="color: #008000;">//&nbsp;true</span></div>
   <div>&nbsp;<span
      style="color: #008000;">//&nbsp;Mayor&nbsp;que&nbsp;(&gt;)</span></div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #098658;">3</span>&nbsp;&gt;&nbsp;<span
      style="color: #098658;">0</span>);&nbsp;<span
      style="color: #008000;">//&nbsp;true</span></div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #098658;">3</span>&nbsp;&gt;&nbsp;<span
      style="color: #098658;">3</span>);&nbsp;<span
      style="color: #008000;">//&nbsp;false</span></div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #098658;">3</span>&nbsp;&gt;&nbsp;<span
      style="color: #098658;">8</span>);&nbsp;<span
      style="color: #008000;">//&nbsp;false</span></div>
   <div>}</div>
  </div>
 </muestra-codigo>`;
 }
}

customElements.define("g16-orden", G16Orden);