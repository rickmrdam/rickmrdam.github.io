import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class D16Asignacion extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>D. Operadores con asignación</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Aparte del operador de asignación
       (<code class="language-kotlin" style="color: #0000ff;">=</code>),
       hay otros operadores que permiten cambiar el valor de una variable.
      </p>
     </li>
     <li>
      <p>Al declarar una variable, puedes declarar su tipo.</p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
   <muestra-codigo>
   <div>
   <div><span style="color: #0000ff;">fun</span>&nbsp;<span
      style="color: #795e26;">main</span>()&nbsp;{</div>
   <div>&nbsp;<span style="color: #0000ff;">var</span>&nbsp;b:&nbsp;<span
      style="color: #267f99;">Int</span>&nbsp;=&nbsp;<span
      style="color: #098658;">4</span>;</div>
   <div>&nbsp;<span style="color: #0000ff;">val</span>&nbsp;d&nbsp;=&nbsp;<span
      style="color: #098658;">5</span>;</div>
   <div>&nbsp;b&nbsp;=&nbsp;d&nbsp;*&nbsp;<span
      style="color: #098658;">2</span>;&nbsp;<span
      style="color: #008000;">//&nbsp;b&nbsp;===&nbsp;10</span></div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(b);</div>
   <div>&nbsp;b&nbsp;+=&nbsp;d;&nbsp;<span
      style="color: #008000;">//&nbsp;b&nbsp;=&nbsp;b&nbsp;+&nbsp;d;&nbsp;b&nbsp;===&nbsp;15</span>
   </div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(b);</div>
   <div>&nbsp;b&nbsp;-=&nbsp;<span style="color: #098658;">2</span>;&nbsp;<span
      style="color: #008000;">//&nbsp;b&nbsp;=&nbsp;b&nbsp;-&nbsp;2;&nbsp;b&nbsp;===&nbsp;13</span>
   </div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(b);</div>
   <div>&nbsp;b&nbsp;*=&nbsp;<span style="color: #098658;">3</span>;&nbsp;<span
      style="color: #008000;">//&nbsp;b&nbsp;=&nbsp;b&nbsp;*&nbsp;3;&nbsp;b&nbsp;===&nbsp;39</span>
   </div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(b);</div>
   <div>&nbsp;b&nbsp;/=&nbsp;<span style="color: #098658;">3</span>;&nbsp;<span
      style="color: #008000;">//&nbsp;b&nbsp;=&nbsp;b&nbsp;/&nbsp;3;&nbsp;b&nbsp;===&nbsp;13</span>
   </div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(b);</div>
   <div>&nbsp;b&nbsp;%=&nbsp;<span style="color: #098658;">5</span>;&nbsp;<span
      style="color: #008000;">//&nbsp;b&nbsp;=&nbsp;b&nbsp;%&nbsp;5;&nbsp;b&nbsp;===&nbsp;3</span>
   </div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(b);</div>
   <div>}</div>
  </div>
   </muestra-codigo>`;
 }
}

customElements.define("d16-asignacion", D16Asignacion);