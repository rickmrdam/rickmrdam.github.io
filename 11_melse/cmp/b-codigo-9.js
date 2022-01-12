import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class BCodigo extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. Código con condicional múltiple con <strong>else</strong></a></h1>
   <muestra-codigo>
   <div>
   <div><span style="color: #0000ff;">fun</span>&nbsp;<span
      style="color: #795e26;">main</span>()&nbsp;{</div>
   <div>&nbsp;<span style="color: #795e26;">print</span>(<span
      style="color: #a31515;">"""Recomiendo&nbsp;un&nbsp;artista.</span></div>
   <div><span style="color: #a31515;">&nbsp;1&nbsp;-&nbsp;Pop</span></div>
   <div><span style="color: #a31515;">&nbsp;2&nbsp;-&nbsp;Reguetón</span></div>
   <div><span style="color: #a31515;">&nbsp;Opción:&nbsp;"""</span>);</div>
   <div>&nbsp;<span
      style="color: #0000ff;">val</span>&nbsp;respuesta&nbsp;=&nbsp;readLine();
   </div>
   <div>&nbsp;<span
      style="color: #af00db;">if</span>&nbsp;(respuesta&nbsp;==&nbsp;<span
      style="color: #a31515;">"1"</span>)&nbsp;{</div>
   <div>&nbsp;&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #a31515;">"Ariana&nbsp;Grande."</span>)</div>
   <div>&nbsp;}&nbsp;<span style="color: #af00db;">else</span>&nbsp;<span
      style="color: #af00db;">if</span>&nbsp;(respuesta&nbsp;==&nbsp;<span
      style="color: #a31515;">"2"</span>)&nbsp;{</div>
   <div>&nbsp;&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #a31515;">"Bad&nbsp;Bunny."</span>)</div>
   <div>&nbsp;}&nbsp;<span style="color: #af00db;">else</span>&nbsp;{</div>
   <div>&nbsp;&nbsp;<span style="color: #795e26;">println</span>(</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #a31515;">"Opción&nbsp;incorrecta."</span>)</div>
   <div>&nbsp;}</div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #a31515;">"Adios."</span>)</div>
   <div>}</div>
  </div>
    </muestra-codigo>
   <div class="lectura noPrint">
    <p>
     <a target="_blank"
       href="https://replit.com/@GilbertoPacheco/CondMulKt?v=1">
      Revísalo en Replit.
     </a>
    </p>
   </div>`;
 }
}

customElements.define("b-codigo-9", BCodigo);