import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class D12Asignacion extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>
   D. Operador de concatenación con asignación
   <em>a</em> <strong>+=</strong> <em>x</em>
  </h1>
  <div class="lectura">
   <ul>
    <li>
     <p>Equivale a</p>
     <pre><code class="language-kotlin">a = a + x;</code></pre>
     <p>pero se ejecuta más rápido.</p>
    </li>
    <li>
     <p>Nota que el primer operando debe ser una variable.</p>
    </li>
   </ul>
   <h2>Ejemplo</h2>
  </div>
  <muestra-codigo>
  <div>
  <div><span style="color: #0000ff;">fun</span>&nbsp;<span
     style="color: #795e26;">main</span>()&nbsp;{</div>
  <div>&nbsp;<span style="color: #0000ff;">var</span>&nbsp;c&nbsp;=&nbsp;<span
     style="color: #a31515;">"h"</span>;</div>
  <div>&nbsp;<span style="color: #0000ff;">val</span>&nbsp;<span
     style="color: #267f99;">D</span>&nbsp;=&nbsp;<span
     style="color: #a31515;">"."</span>;</div>
  <div>&nbsp;c&nbsp;+=&nbsp;<span style="color: #a31515;">"gg"</span>;<span
     style="color: #008000;">//&nbsp;c&nbsp;➝&nbsp;"hgg"</span></div>
  <div>&nbsp;<span style="color: #795e26;">println</span>(c);</div>
  <div>&nbsp;c&nbsp;+=&nbsp;<span
     style="color: #098658;">2</span>;&nbsp;&nbsp;&nbsp;<span
     style="color: #008000;">//&nbsp;c&nbsp;➝&nbsp;"hgg2"</span></div>
  <div>&nbsp;<span style="color: #795e26;">println</span>(c);</div>
  <div>&nbsp;c&nbsp;+=&nbsp;<span
     style="color: #267f99;">D</span>;&nbsp;&nbsp;&nbsp;<span
     style="color: #008000;">//&nbsp;c&nbsp;➝&nbsp;"hgg2."</span></div>
  <div>&nbsp;<span style="color: #795e26;">println</span>(c);</div>
  <div>}</div>
 </div>
   </muestra-codigo>
   <div class="lectura">
   <p class="noPrint">
    <a target="_blank"
      href="https://play.kotlinlang.org/#eyJ2ZXJzaW9uIjoiMS41LjMwIiwicGxhdGZvcm0iOiJqYXZhIiwiYXJncyI6IiIsIm5vbmVNYXJrZXJzIjp0cnVlLCJ0aGVtZSI6ImlkZWEiLCJjb2RlIjoiZnVuIG1haW4oKSB7XG4gdmFyIGMgPSBcImhcIjtcbiB2YWwgRCA9IFwiLlwiO1xuIGMgKz0gXCJnZ1wiOy8vIGMg4p6dIFwiaGdnXCJcbiBwcmludGxuKGMpO1xuIGMgKz0gMjsgICAvLyBjIOKenSBcImhnZzJcIlxuIHByaW50bG4oYyk7XG4gYyArPSBEOyAgIC8vIGMg4p6dIFwiaGdnMi5cIlxuIHByaW50bG4oYyk7XG59In0=">
     Revísalo en Kotlin play.
    </a>
   </p>
  </div>`;
 }
}

customElements.define("d12-asignacion", D12Asignacion);