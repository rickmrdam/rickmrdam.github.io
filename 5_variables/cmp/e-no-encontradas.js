import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class ENoEncontradas extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>E. Variables no encontradas</h1>
   <div class="lectura">
    <p>
     Cuando tratas de usar una variable o una constante no definida, obtienes
     un mensaje de error y se aborta la ejecución del programa.
    </p>
    <h2>Ejemplo</h2>
   </div>
   <div class="horizontal">
    <div>
     <h3>Salida</h3>
     <pre><samp><span style="color: red;">Unresolved reference: B</span></samp></pre>
     <p class="noPrint">
     <a target="_blank"
     href="https://play.kotlinlang.org/#eyJ2ZXJzaW9uIjoiMS41LjMwIiwicGxhdGZvcm0iOiJqYXZhIiwiYXJncyI6IiIsIm5vbmVNYXJrZXJzIjp0cnVlLCJ0aGVtZSI6ImlkZWEiLCJjb2RlIjoiZnVuIG1haW4oKSB7XG4gdmFyIGIgPSBcIkJCXCI7XG4gcHJpbnQoQik7XG59In0=">
    Revísalo en Kotlin play.
   </a>
  </p>
    </div>
    <muestra-codigo>
    <div>
    <div><span style="color: #0000ff;">fun</span>&nbsp;<span
       style="color: #795e26;">main</span>()&nbsp;{</div>
    <div>&nbsp;<span style="color: #0000ff;">var</span>&nbsp;b&nbsp;=&nbsp;<span
       style="color: #a31515;">"BB"</span>;</div>
    <div>&nbsp;<span style="color: #795e26;">print</span>(<span
       style="color: #267f99;">B</span>);</div>
    <div>}</div>
   </div>
     </muestra-codigo>
   </div>`;
 }
}

customElements.define("e-no-encontradas", ENoEncontradas);