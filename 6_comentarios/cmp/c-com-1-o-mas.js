import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class CCom1OMas extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>C. Comentarios de una o más líneas</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Los
       <dfn>comentarios de una o más líneas</dfn>
       empiezan con el texto
       <code class="language-kotlin" style="color: #008000;">/*</code>
       y terminan con
       <code class="language-kotlin" style="color: #008000;">*/</code>.
      </p>
     </li>
     <li>
      <p>Usan una o más líneas.</p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
   <div class="horizontal">
   <div>
   <h2>Salida</h2>
   <pre><samp>Hola
t
bb</samp></pre>
   <p class="noPrint">
    <a target="_blank"
    href="https://play.kotlinlang.org/#eyJ2ZXJzaW9uIjoiMS41LjMwIiwicGxhdGZvcm0iOiJqYXZhIiwiYXJncyI6IiIsIm5vbmVNYXJrZXJzIjp0cnVlLCJ0aGVtZSI6ImlkZWEiLCJjb2RlIjoiZnVuIG1haW4oKSB7XG4gLyogTXVlc3RyYSBIb2xhLiAqL1xuIHByaW50bG4oXCJIb2xhXCIpO1xuIHByaW50bG4oXCJ0XCIpOyAvKk11ZXN0cmEgdC4qL1xuIC8qIE11ZXN0cmFcbiAgKiBiYi4gKi9cbiBwcmludGxuKFwiYmJcIik7XG59In0=">
    Revísalo en Kotlin play.</a>
    </a>
   </p>
  </div>
  <muestra-codigo>
     <div>
      <div><span style="color: #0000ff;">fun</span>&nbsp;<span
         style="color: #795e26;">main</span>()&nbsp;{</div>
      <div>&nbsp;<span
         style="color: #008000;">/*&nbsp;Muestra&nbsp;Hola.&nbsp;*/</span></div>
      <div>&nbsp;<span style="color: #795e26;">println</span>(<span
         style="color: #a31515;">"Hola"</span>);</div>
      <div>&nbsp;<span style="color: #795e26;">println</span>(<span
         style="color: #a31515;">"t"</span>);&nbsp;<span
         style="color: #008000;">/*Muestra&nbsp;t.*/</span></div>
      <div>&nbsp;<span style="color: #008000;">/*&nbsp;Muestra</span></div>
      <div><span style="color: #008000;">&nbsp;&nbsp;*&nbsp;bb.&nbsp;*/</span></div>
      <div>&nbsp;<span style="color: #795e26;">println</span>(<span
         style="color: #a31515;">"bb"</span>);</div>
      <div>}</div>
     </div>
    </muestra-codigo>
   </div>`;
 }
}

customElements.define("c-com-1-o-mas", CCom1OMas);