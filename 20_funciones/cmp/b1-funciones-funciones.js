import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class B1FuncionesFunciones extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. Funciones que invocan funciones</h1>
   <div class="horizontal">
   <div>
   <h2>Salida</h2>
   <pre><samp>main-1
c2
main-2
c1-1
c2
c1-2
main-3</samp></pre>
   <p class="noPrint">
    <a target="_blank"
    href="https://play.kotlinlang.org/#eyJ2ZXJzaW9uIjoiMS41LjMwIiwicGxhdGZvcm0iOiJqYXZhIiwiYXJncyI6IiIsIm5vbmVNYXJrZXJzIjp0cnVlLCJ0aGVtZSI6ImlkZWEiLCJjb2RlIjoiZnVuIG1haW4oKSB7XG4gcHJpbnRsbihcIm1haW4tMVwiKVxuIGMyKClcbiBwcmludGxuKFwibWFpbi0yXCIpXG4gYzEoKVxuIHByaW50bG4oXCJtYWluLTNcIilcbn1cblxuZnVuIGMxKCkge1xuIHByaW50bG4oXCJjMS0xXCIpXG4gYzIoKVxuIHByaW50bG4oXCJjMS0yXCIpXG59XG5cbmZ1biBjMigpIHtcbiBwcmludGxuKFwiYzJcIilcbn1cbiJ9">
    Revísalo en Kotlin play.</a>
   </p>
  </div>
    <muestra-codigo>
    <div>
    <div><span style="color: #0000ff;">fun</span>&nbsp;<span
       style="color: #795e26;">main</span>()&nbsp;{</div>
    <div>&nbsp;<span style="color: #795e26;">println</span>(<span
       style="color: #a31515;">"main-1"</span>)</div>
    <div>&nbsp;c2()</div>
    <div>&nbsp;<span style="color: #795e26;">println</span>(<span
       style="color: #a31515;">"main-2"</span>)</div>
    <div>&nbsp;c1()</div>
    <div>&nbsp;<span style="color: #795e26;">println</span>(<span
       style="color: #a31515;">"main-3"</span>)</div>
    <div>}</div><br>
    <div><span style="color: #0000ff;">fun</span>&nbsp;<span
       style="color: #795e26;">c1</span>()&nbsp;{</div>
    <div>&nbsp;<span style="color: #795e26;">println</span>(<span
       style="color: #a31515;">"c1-1"</span>)</div>
    <div>&nbsp;c2()</div>
    <div>&nbsp;<span style="color: #795e26;">println</span>(<span
       style="color: #a31515;">"c1-2"</span>)</div>
    <div>}</div><br>
    <div><span style="color: #0000ff;">fun</span>&nbsp;<span
       style="color: #795e26;">c2</span>()&nbsp;{</div>
    <div>&nbsp;<span style="color: #795e26;">println</span>(<span
       style="color: #a31515;">"c2"</span>)</div>
    <div>}</div>
   </div>
     </muestra-codigo>
  </div>`;
 }
}

customElements.define("b1-funciones-funciones", B1FuncionesFunciones);