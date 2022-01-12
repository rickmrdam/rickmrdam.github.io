import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class CPresBloqueVD extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>C. Depura bloques con variables duplicadas</h1>
   <div class="lectura">
    <p>
     Las variables declaradas con
     <code class="language-kotlin">const</code>
     o con
     <code class="language-kotlin">let</code>
     dentro de un bloque ocultan a otras con el mismo nombre que estén
     declaradas fuera del bloque.
    </p>
    <h2>Ejemplo</h2>
   </div>
   <div class="horizontal">
   <div>
   <h2>Salida</h2>
   <pre><samp>p
gg
p</samp></pre>
   <p class="noPrint">
    <a target="_blank"
    href="https://play.kotlinlang.org/#eyJ2ZXJzaW9uIjoiMS41LjMwIiwicGxhdGZvcm0iOiJqYXZhIiwiYXJncyI6IiIsIm5vbmVNYXJrZXJzIjp0cnVlLCJ0aGVtZSI6ImlkZWEiLCJjb2RlIjoiZnVuIG1haW4oKSB7XG4gdmFsIHggPSBcInBcIjtcbiBwcmludGxuKHgpO1xuIHJ1biB7XG4gIHZhciB4ID0gXCJnZ1wiO1xuICBwcmludGxuKHgpO1xuIH1cbiBwcmludGxuKHgpO1xufSJ9">
    Revísalo en Kotlin play.</a>
    </a>
   </p>
  </div>
  <muestra-codigo>
    <div>
    <div><span style="color: #0000ff;">fun</span>&nbsp;<span
       style="color: #795e26;">main</span>()&nbsp;{</div>
    <div>&nbsp;<span style="color: #0000ff;">val</span>&nbsp;x&nbsp;=&nbsp;<span
       style="color: #a31515;">"p"</span>;</div>
    <div>&nbsp;<span style="color: #795e26;">println</span>(x);</div>
    <div>&nbsp;<span style="color: #795e26;">run</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;<span
       style="color: #0000ff;">var</span>&nbsp;x&nbsp;=&nbsp;<span
       style="color: #a31515;">"gg"</span>;</div>
    <div>&nbsp;&nbsp;<span style="color: #795e26;">println</span>(x);</div>
    <div>&nbsp;}</div>
    <div>&nbsp;<span style="color: #795e26;">println</span>(x);</div>
    <div>}</div>
   </div>
      </muestra-codigo>
   </div>`;
 }
}

customElements.define("c-pres-bloque-v-d", CPresBloqueVD);