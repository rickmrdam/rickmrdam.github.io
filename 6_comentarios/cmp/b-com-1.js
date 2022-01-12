import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class BCom1 extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. Comentarios de una línea</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Los
       <dfn>comentarios de una línea</dfn>
       empiezan con el texto
       <code
         class="language-kotlin"><span style="color: #008000;">//</span></code>
       y terminan con el final de la línea.
      </p>
     </li>
     <li>
      <p>Usan una sola línea hasta su final.</p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
   <div class="horizontal">
    <div>
     <h2>Salida</h2>
     <pre><samp>Hola
t</samp></pre>
     <p class="noPrint">
      <a target="_blank"
      href="https://play.kotlinlang.org/#eyJ2ZXJzaW9uIjoiMS41LjMwIiwicGxhdGZvcm0iOiJqYXZhIiwiYXJncyI6IiIsIm5vbmVNYXJrZXJzIjp0cnVlLCJ0aGVtZSI6ImlkZWEiLCJjb2RlIjoiZnVuIG1haW4oKSB7XG4gLy8gTXVlc3RyYSBIb2xhLlxuIHByaW50bG4oXCJIb2xhXCIpO1xuIHByaW50bG4oXCJ0XCIpOyAvL011ZXN0cmEgdC5cbn0ifQ==">
      Revísalo en Kotlin play.</a>
      </a>
     </p>
    </div>
    <muestra-codigo>
     <div>
      <div><span style="color: #0000ff;">fun</span>&nbsp;<span
         style="color: #795e26;">main</span>()&nbsp;{</div>
      <div>&nbsp;<span style="color: #008000;">//&nbsp;Muestra&nbsp;Hola.</span>
      </div>
      <div>&nbsp;<span style="color: #795e26;">println</span>(<span
         style="color: #a31515;">"Hola"</span>);</div>
      <div>&nbsp;<span style="color: #795e26;">println</span>(<span
         style="color: #a31515;">"t"</span>);&nbsp;<span
         style="color: #008000;">//Muestra&nbsp;t.</span></div>
      <div>}</div>
     </div>
    </muestra-codigo>
   </div>`;
 }
}

customElements.define("b-com-1", BCom1);