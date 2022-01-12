import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class CConstantes extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>C. Constantes</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Una
       <dfn>constante</dfn>
       es similar a una variable, pero su valor no puede cambiar una vez asignado.
      </p>
     </li>
     <li>
      <p>
       Normalmente el nombre se escribe en mayúsculas, usando guión bajo
       (<code class="language-kotlin">_</code>)
       para separar palabras.
      </p>
     </li>
     <li>
       <p>
       Se declaran con
       <code class="language-kotlin">val</code>
      </p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
   <div class="horizontal">
    <div>
     <h3>Salida</h3>
     <pre><samp><span style="color: red;">Val cannot be reassigned</span></span></samp></pre>
     <p class="noPrint">
      <a target="_blank"
        href="https://play.kotlinlang.org/#eyJ2ZXJzaW9uIjoiMS41LjMwIiwicGxhdGZvcm0iOiJqYXZhIiwiYXJncyI6IiIsIm5vbmVNYXJrZXJzIjp0cnVlLCJ0aGVtZSI6ImlkZWEiLCJjb2RlIjoiZnVuIG1haW4oKSB7XG4gdmFsIFBJX1JFRE9OREVBRE8gPSAzLjE0XG4gcHJpbnRsbihQSV9SRURPTkRFQURPKVxuIHByaW50bG4oXCJQSV9SRURPTkRFQURPXCIpXG4gUElfUkVET05ERUFETyA9IDkuMFxuIHByaW50KFBJX1JFRE9OREVBRE8pXG59In0=">
       Revísalo en Kotlin play.
      </a>
     </p>
    </div>
    <muestra-codigo>
     <div>
      <div><span style="color: #0000ff;">fun</span>&nbsp;<span
         style="color: #795e26;">main</span>()&nbsp;{</div>
      <div>&nbsp;<span style="color: #0000ff;">val</span>&nbsp;<span
         style="color: #267f99;">PI_REDONDEADO</span>&nbsp;=&nbsp;<span
         style="color: #098658;">3.14</span></div>
      <div>&nbsp;<span style="color: #795e26;">println</span>(<span
         style="color: #267f99;">PI_REDONDEADO</span>)</div>
      <div>&nbsp;<span style="color: #795e26;">println</span>(<span
         style="color: #a31515;">"PI_REDONDEADO"</span>)</div>
      <div>&nbsp;<span
         style="color: #267f99;">PI_REDONDEADO</span>&nbsp;=&nbsp;<span
         style="color: #098658;">9.0</span></div>
      <div>&nbsp;<span style="color: #795e26;">print</span>(<span
         style="color: #267f99;">PI_REDONDEADO</span>)</div>
      <div>}</div>
     </div>
    </muestra-codigo>
   </div>`;
 }
}

customElements.define("c-constantes", CConstantes);