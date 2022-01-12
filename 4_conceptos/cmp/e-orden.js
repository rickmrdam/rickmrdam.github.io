import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class EOrden extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>E. Orden de ejecución</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Primero se ejecuta el contenido de
       <code class="language-kotlin"><span
         style="color: #0000ff;">fun</span>&nbsp;<span
         style="color: #795e26;">main</span>()</code>.</p>
     </li>
     <li>
      <p>Los renglones de instrucciones se ejecutan de arriba para abajo.</p>
     </li>
     <li>
      <p>
       En cada renglón, las instrucciones se ejecutan de izquierda a derecha.
      </p>
     </li>
     <li>
      <p>
       Cada instrucción
       <code
        class="language-kotlin"><span
         style="color: #001080;">println</span></code>
       es un renglón.
      </p>
     <li>
      <p>
       Una <dfn>prueba de escritorio</dfn> es la ejecución detallada y
       paso a paso de un programa.
      </p>
     </li>
     <li>
      <p>
       <dfn>Depurar</dfn> es controlar la realización de una prueba de
       escritorio usando una herramienta de desarrollo.
      </p>
     </li>
     <li>
      <p>
       Usaremos la herramienta
       <a href="https://www.jetbrains.com/es-es/idea/"
        target="_blank">IntelliJ IDEA Community</a>
       para depurar los programas.
      </p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
   <div class="horizontal">
    <div>
     <h2>Salida.</h2>
     <pre><samp>p
au</samp></pre>
     <p class="noPrint">
      <a target="_blank"
        href="https://play.kotlinlang.org/#eyJ2ZXJzaW9uIjoiMS41LjMwIiwicGxhdGZvcm0iOiJqYXZhIiwiYXJncyI6IiIsIm5vbmVNYXJrZXJzIjp0cnVlLCJ0aGVtZSI6ImlkZWEiLCJjb2RlIjoiZnVuIG1haW4oKSB7XG4gcHJpbnRsbihcInBcIik7IHByaW50KFwiYVwiKVxuIHByaW50KFwidVwiKVxufSJ9">
       Revísalo en Kotlin play.
      </a>
     </p>
    </div>
    <muestra-codigo>
     <div>
      <div><span style="color: #0000ff;">fun</span>&nbsp;<span
         style="color: #795e26;">main</span>()&nbsp;{</div>
      <div>&nbsp;<span style="color: #795e26;">println</span>(<span
         style="color: #a31515;">"p"</span>);&nbsp;<span
         style="color: #795e26;">print</span>(<span
         style="color: #a31515;">"a"</span>)</div>
      <div>&nbsp;<span style="color: #795e26;">print</span>(<span
         style="color: #a31515;">"u"</span>)</div>
      <div>}</div>
     </div>
    </muestra-codigo>
   </div>`;
 }
}

customElements.define("e-orden", EOrden);