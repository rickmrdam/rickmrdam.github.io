import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class BPresBloque extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. Depura bloques</h1>
   <div class="horizontal">
    <div>
     <h2>Salida</h2>
     <pre><samp>p
z
gg
z
z
a</samp></pre>
     <p class="noPrint">
      <a target="_blank"
      href="https://play.kotlinlang.org/#eyJ2ZXJzaW9uIjoiMS41LjMwIiwicGxhdGZvcm0iOiJqYXZhIiwiYXJncyI6IiIsIm5vbmVNYXJrZXJzIjp0cnVlLCJ0aGVtZSI6ImlkZWEiLCJjb2RlIjoiZnVuIG1haW4oKSB7XG4gdmFsIHkgPSBcInpcIjtcbiBwcmludGxuKFwicFwiKTtcbiBwcmludGxuKHkpO1xuIHJ1biB7XG4gIHZhbCB4ID0gXCJnZ1wiO1xuICBwcmludGxuKHgpO1xuICBwcmludGxuKHkpO1xuIH1cbiBwcmludGxuKHkpO1xuIHByaW50bG4oXCJhXCIpO1xufSJ9">
      Revísalo en Kotlin play.</a>
      </a>
     </p>
    </div>
      <muestra-codigo>
      <div>
      <div><span style="color: #0000ff;">fun</span>&nbsp;<span
         style="color: #795e26;">main</span>()&nbsp;{</div>
      <div>&nbsp;<span style="color: #0000ff;">val</span>&nbsp;y&nbsp;=&nbsp;<span
         style="color: #a31515;">"z"</span>;</div>
      <div>&nbsp;<span style="color: #795e26;">println</span>(<span
         style="color: #a31515;">"p"</span>);</div>
      <div>&nbsp;<span style="color: #795e26;">println</span>(y);</div>
      <div>&nbsp;<span style="color: #795e26;">run</span>&nbsp;{</div>
      <div>&nbsp;&nbsp;<span
         style="color: #0000ff;">val</span>&nbsp;x&nbsp;=&nbsp;<span
         style="color: #a31515;">"gg"</span>;</div>
      <div>&nbsp;&nbsp;<span style="color: #795e26;">println</span>(x);</div>
      <div>&nbsp;&nbsp;<span style="color: #795e26;">println</span>(y);</div>
      <div>&nbsp;}</div>
      <div>&nbsp;<span style="color: #795e26;">println</span>(y);</div>
      <div>&nbsp;<span style="color: #795e26;">println</span>(<span
         style="color: #a31515;">"a"</span>);</div>
      <div>}</div>
     </div>
       </muestra-codigo>
   </div>`;
 }
}

customElements.define("b-pres-bloque", BPresBloque);