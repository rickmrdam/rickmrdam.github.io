import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class F12Orden extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>F. Operadores de Orden</h1>
   <div class="lectura">
   <ul>
   <li>
    <p>
     El operador binario
     <code class="language-kotlin">&lt;</code>
     representa el orden natural de los datos. Si el valor a la izquierda
     va antes que el de la derecha, el resultado es
     <code class="language-kotlin">true</code>;
     en otro caso es
     <code class="language-kotlin">false</code>.
    </p>
    </li>
    <li>
    <p>
     El operador binario
     <code class="language-kotlin">&gt;</code>
     representa el orden invertido de los datos. Si el valor a la izquierda
     va después que el de la derecha, el resultado es
     <code class="language-kotlin">true</code>;
     en otro caso es
     <code class="language-kotlin">false</code>.
    </p>
    </li>
    <li>
    <p>
     Entre 2 caracteres, el que tenga el menor código
     <a href="https://home.unicode.org/" target="_blank">Unicode</a>
     es el menor.
    </p>
    </li>
    <li>
    <p>
     Entre 2 textos, el que aparezca primero en el diccionario es el menor.
    </p>
    </li>
    <li>
    <p>En el ejemplo que sigue, el orden natural es:</p>
    <p>
     "0" &lt; "A" &lt; "a" &lt; "aa" &lt; "ah" &lt; "ai" &lt; "b"
    </p>
    </li>
    </ul>
   </div>
   <muestra-codigo>
   <div>
   <div><span style="color: #0000ff;">fun</span>&nbsp;<span
      style="color: #795e26;">main</span>()&nbsp;{</div>
   <div>&nbsp;<span
      style="color: #008000;">//&nbsp;Menor&nbsp;que&nbsp;(&lt;)</span></div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #a31515;">"0"</span>&nbsp;&lt;&nbsp;<span
      style="color: #a31515;">"A"</span>);&nbsp;&nbsp;&nbsp;<span
      style="color: #008000;">//T</span></div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #a31515;">"A"</span>&nbsp;&lt;&nbsp;<span
      style="color: #a31515;">"a"</span>);&nbsp;&nbsp;&nbsp;<span
      style="color: #008000;">//T</span></div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #a31515;">"a"</span>&nbsp;&lt;&nbsp;<span
      style="color: #a31515;">"b"</span>);&nbsp;&nbsp;&nbsp;<span
      style="color: #008000;">//T</span></div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #a31515;">"ah"</span>&nbsp;&lt;&nbsp;<span
      style="color: #a31515;">"aa"</span>);&nbsp;<span
      style="color: #008000;">//F</span></div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #a31515;">"ah"</span>&nbsp;&lt;&nbsp;<span
      style="color: #a31515;">"ah"</span>);&nbsp;<span
      style="color: #008000;">//F</span></div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #a31515;">"ah"</span>&nbsp;&lt;&nbsp;<span
      style="color: #a31515;">"ai"</span>);&nbsp;<span
      style="color: #008000;">//T</span></div>
   <div>&nbsp;<span
      style="color: #008000;">//&nbsp;Mayor&nbsp;que&nbsp;(&gt;)</span></div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #a31515;">"ah"</span>&nbsp;&gt;&nbsp;<span
      style="color: #a31515;">"aa"</span>);&nbsp;<span
      style="color: #008000;">//T</span></div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #a31515;">"ah"</span>&nbsp;&gt;&nbsp;<span
      style="color: #a31515;">"ah"</span>);&nbsp;<span
      style="color: #008000;">//F</span></div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #a31515;">"ah"</span>&nbsp;&gt;&nbsp;<span
      style="color: #a31515;">"ai"</span>);&nbsp;<span
      style="color: #008000;">//F</span></div>
   <div>}</div>
  </div>
    </muestra-codigo>`;
 }
}

customElements.define("f12-orden", F12Orden);