import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class E1FuncionesReturn extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>E. Funciones con valor de regreso</h1>
   <div class="horizontal">
   <div>
   <h2>Salida</h2>
   <pre><samp>18
6
33
65</samp></pre>
   <p class="noPrint">
    <a target="_blank"
    href="https://play.kotlinlang.org/#eyJ2ZXJzaW9uIjoiMS41LjMwIiwicGxhdGZvcm0iOiJqYXZhIiwiYXJncyI6IiIsIm5vbmVNYXJrZXJzIjp0cnVlLCJ0aGVtZSI6ImlkZWEiLCJjb2RlIjoiZnVuIG1haW4oKSB7XG4gdmFsIHggPSBmbmEoOCwgNSlcbiBwcmludGxuKGZuYSg0LCAxKSlcbiBwcmludGxuKHgpXG59XG5cbmZ1biBmbmEodDogSW50LCBiYzogSW50KTogSW50IHtcbiBwcmludGxuKHQgKyBiYyAqIDIpXG4gcmV0dXJuIDEgKyB0ICogOFxufSJ9">
    Revísalo en Kotlin play.</a>
   </p>
  </div>
    <muestra-codigo>
    <div>
    <div><span style="color: #0000ff;">fun</span>&nbsp;<span
       style="color: #795e26;">main</span>()&nbsp;{</div>
    <div>&nbsp;<span
       style="color: #0000ff;">val</span>&nbsp;x&nbsp;=&nbsp;fna(<span
       style="color: #098658;">8</span>,&nbsp;<span
       style="color: #098658;">5</span>)</div>
    <div>&nbsp;<span style="color: #795e26;">println</span>(fna(<span
       style="color: #098658;">4</span>,&nbsp;<span
       style="color: #098658;">1</span>))</div>
    <div>&nbsp;<span style="color: #795e26;">println</span>(x)</div>
    <div>}</div><br>
    <div><span style="color: #0000ff;">fun</span>&nbsp;<span
       style="color: #795e26;">fna</span>(<span
       style="color: #001080;">t</span>:&nbsp;<span
       style="color: #267f99;">Int</span>,&nbsp;<span
       style="color: #001080;">bc</span>:&nbsp;<span
       style="color: #267f99;">Int</span>):&nbsp;<span
       style="color: #267f99;">Int</span>&nbsp;{</div>
    <div>&nbsp;<span
       style="color: #795e26;">println</span>(t&nbsp;+&nbsp;bc&nbsp;*&nbsp;<span
       style="color: #098658;">2</span>)</div>
    <div>&nbsp;<span style="color: #af00db;">return</span>&nbsp;<span
       style="color: #098658;">1</span>&nbsp;+&nbsp;t&nbsp;*&nbsp;<span
       style="color: #098658;">8</span></div>
    <div>}</div>
   </div>
      </muestra-codigo>
  </div>`;
 }
}

customElements.define("e1-funciones-return", E1FuncionesReturn);