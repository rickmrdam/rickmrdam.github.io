import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class DJsDoc extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>D. KDoc</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Los
       <dfn>comentarios de documentación</dfn>
       o
       <dfn>KDoc</dfn>,
       son comentarios de una o más líneas que empiezan con
       <code class="language-kotlin" style="color: #008000;">/**</code>
       y explican la definición de un elemento del código.
      </p>
     </li>
     <li>
      <p>
       Se colocan en la línea inmediatamente antes del texto que
       explican.
      </p>
     </li>
     <li>
      <p>
       El contendo de este tipo de comentarios debe seguir las reglas de
       <a href="https://kotlinlang.org/docs/kotlin-doc.html"
        target="_blank">https://kotlinlang.org/docs/kotlin-doc.html</a>.
      </p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
   <muestra-codigo>
    <div>
     <div><span style="color: #0000ff;">fun</span>&nbsp;<span
        style="color: #795e26;">main</span>()&nbsp;{</div>
     <div>&nbsp;<span style="color: #008000;">/**</span></div>
     <div><span
        style="color: #008000;">&nbsp;&nbsp;*&nbsp;Número&nbsp;de&nbsp;veces&nbsp;que&nbsp;aparece</span>
     </div>
     <div><span
        style="color: #008000;">&nbsp;&nbsp;*&nbsp;la&nbsp;palabra&nbsp;sapo.</span>
     </div>
     <div><span style="color: #008000;">&nbsp;&nbsp;*/</span></div>
     <div>&nbsp;<span
        style="color: #0000ff;">var</span>&nbsp;sapos&nbsp;=&nbsp;<span
        style="color: #098658;">0</span>;</div>
     <div>}</div>
    </div>
   </muestra-codigo>`;
 }
}

customElements.define("d-jsdoc", DJsDoc);