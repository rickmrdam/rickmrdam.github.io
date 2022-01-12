import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class D1FuncionesParametrosExpresiones extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>D. Funciones con expresiones en los parámetros</h1>
   <div class="horizontal">
   <div>
   <h2>Salida</h2>
   <pre><samp>13
ggg</samp></pre>
   <p class="noPrint">
    <a target="_blank"
    href="https://play.kotlinlang.org/#eyJ2ZXJzaW9uIjoiMS41LjMwIiwicGxhdGZvcm0iOiJqYXZhIiwiYXJncyI6IiIsIm5vbmVNYXJrZXJzIjp0cnVlLCJ0aGVtZSI6ImlkZWEiLCJjb2RlIjoiZnVuIGZuKGE6IEludCwgYjogSW50LCBjOiBJbnQpIHtcbiBwcmludGxuKGEgKyBiICogYylcbn1cblxuZnVuIG1haW4oKSB7XG4gdmFsIGEgPSAzXG4gZm4oMyAtIDgsIGEsIGEgKiAyKVxuIHByaW50bG4oXCJnZ2dcIilcbn0ifQ==">
    Revísalo en Kotlin play.</a>
   </p>
  </div>
    <muestra-codigo>
    <div>
    <div><span style="color: #0000ff;">fun</span>&nbsp;<span
       style="color: #795e26;">fn</span>(<span
       style="color: #001080;">a</span>:&nbsp;<span
       style="color: #267f99;">Int</span>,&nbsp;<span
       style="color: #001080;">b</span>:&nbsp;<span
       style="color: #267f99;">Int</span>,&nbsp;<span
       style="color: #001080;">c</span>:&nbsp;<span
       style="color: #267f99;">Int</span>)&nbsp;{</div>
    <div>&nbsp;<span
       style="color: #795e26;">println</span>(a&nbsp;+&nbsp;b&nbsp;*&nbsp;c)</div>
    <div>}</div><br>
    <div><span style="color: #0000ff;">fun</span>&nbsp;<span
       style="color: #795e26;">main</span>()&nbsp;{</div>
    <div>&nbsp;<span style="color: #0000ff;">val</span>&nbsp;a&nbsp;=&nbsp;<span
       style="color: #098658;">3</span></div>
    <div>&nbsp;fn(<span style="color: #098658;">3</span>&nbsp;-&nbsp;<span
       style="color: #098658;">8</span>,&nbsp;a,&nbsp;a&nbsp;*&nbsp;<span
       style="color: #098658;">2</span>)</div>
    <div>&nbsp;<span style="color: #795e26;">println</span>(<span
       style="color: #a31515;">"ggg"</span>)</div>
    <div>}</div>
   </div>
     </muestra-codigo>
  </div>`;
 }
}

customElements.define("d1-funciones-parametros-expresiones",
 D1FuncionesParametrosExpresiones);