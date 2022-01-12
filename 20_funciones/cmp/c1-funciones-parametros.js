import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class C1FuncionesParametros extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>C. Funciones con parámetros</h1>
   <div class="horizontal">
   <div>
   <h2>Salida</h2>
   <pre><samp>m1
1
3</samp></pre>
   <p class="noPrint">
    <a target="_blank"
    href="https://play.kotlinlang.org/#eyJ2ZXJzaW9uIjoiMS41LjMwIiwicGxhdGZvcm0iOiJqYXZhIiwiYXJncyI6IiIsIm5vbmVNYXJrZXJzIjp0cnVlLCJ0aGVtZSI6ImlkZWEiLCJjb2RlIjoiZnVuIG1haW4oKSB7XG4gcHJpbnRsbihcIm0xXCIpXG4gZm4oMywgLTIpXG4gcHJpbnRsbihcIjNcIilcbn1cblxuZnVuIGZuKGE6IEludCwgYjogSW50KSB7XG4gcHJpbnRsbihhICsgYilcbn0ifQ==">
    Revísalo en Kotlin play.</a>
   </p>
  </div>
    <muestra-codigo>
    <div>
    <div><span style="color: #0000ff;">fun</span>&nbsp;<span
       style="color: #795e26;">main</span>()&nbsp;{</div>
    <div>&nbsp;<span style="color: #795e26;">println</span>(<span
       style="color: #a31515;">"m1"</span>)</div>
    <div>&nbsp;fn(<span style="color: #098658;">3</span>,&nbsp;-<span
       style="color: #098658;">2</span>)</div>
    <div>&nbsp;<span style="color: #795e26;">println</span>(<span
       style="color: #a31515;">"3"</span>)</div>
    <div>}</div><br>
    <div><span style="color: #0000ff;">fun</span>&nbsp;<span
       style="color: #795e26;">fn</span>(<span
       style="color: #001080;">a</span>:&nbsp;<span
       style="color: #267f99;">Int</span>,&nbsp;<span
       style="color: #001080;">b</span>:&nbsp;<span
       style="color: #267f99;">Int</span>)&nbsp;{</div>
    <div>&nbsp;<span style="color: #795e26;">println</span>(a&nbsp;+&nbsp;b)</div>
    <div>}</div>
   </div>
     </muestra-codigo>
  </div>`;
 }
}

customElements.define("c1-funciones-parametros", C1FuncionesParametros);