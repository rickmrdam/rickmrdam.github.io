import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class BCodigo extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. Código con <strong>do-while</strong></h1>
   <muestra-codigo>
   <div>
   <div><span style="color: #0000ff;">fun</span>&nbsp;<span
      style="color: #795e26;">main</span>()&nbsp;{</div>
   <div>&nbsp;<span
      style="color: #0000ff;">var</span>&nbsp;respuesta:&nbsp;<span
      style="color: #267f99;">String?</span></div>
   <div>&nbsp;<span style="color: #af00db;">do</span>&nbsp;{</div>
   <div>&nbsp;&nbsp;<span style="color: #795e26;">print</span>(</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #a31515;">"""Selecciona&nbsp;un&nbsp;género&nbsp;musical</span>
   </div>
   <div><span style="color: #a31515;">&nbsp;1&nbsp;-&nbsp;Pop</span></div>
   <div><span style="color: #a31515;">&nbsp;2&nbsp;-&nbsp;Reguetón</span></div>
   <div><span style="color: #a31515;">&nbsp;Opción:&nbsp;"""</span>)</div>
   <div>&nbsp;&nbsp;respuesta&nbsp;=&nbsp;readLine()</div>
   <div>&nbsp;}&nbsp;<span
      style="color: #af00db;">while</span>&nbsp;(respuesta&nbsp;!=&nbsp;<span
      style="color: #a31515;">"1"</span></div>
   <div>&nbsp;&nbsp;&amp;&amp;&nbsp;respuesta&nbsp;!=&nbsp;<span
      style="color: #a31515;">"2"</span>)</div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #a31515;">"Adios."</span>)</div>
   <div>}</div>
  </div>
   </muestra-codigo>
   <div class="lectura noPrint">
    <p class="noPrint">
     <a target="_blank"
       href="https://replit.com/@GilbertoPacheco/DoWhileKt?v=1">
      Revísalo en Replit
      .
     </a>
    </p>
   </div>`;
 }
}

customElements.define("b-codigo-12", BCodigo);