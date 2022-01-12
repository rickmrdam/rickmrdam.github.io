import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class BVariables extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. Variables</h1>
   <div class="lectura">
    <p>
     Una
     <dfn>variable</dfn>
     es un lugar en donde se almacena un datoque puede cambiar durante la
     ejecución de un programa.
    </p>
    <h2>Declaración</h2>
    <p>
     Para usar una variable, primero hay que declararla con una instrucción como
     la siguiente:
    </p>
    <pre><code class="language-kotlin"><span
    style="color: #0000ff;">var</span>&nbsp;miNombre&nbsp;=&nbsp;<span
    style="color: #a31515;">"pp"</span>;</code></pre>
    <ul>
     <li>
      <p>
       Se declaran con
       <code class="language-kotlin" style="color: #0000ff;">var</code>.
      </p>
     </li>
     <li>
      <p>
       Tienen asociado un
       <dfn>nombre</dfn>,
       con la estructura de un identificador y normalmente empieza con minúscula.
       En este caso, la variable se llama
       <code><span style="color: #001080;">miNombre</span></code>.
      </p>
     </li>
     <li>
      <p>
       Tienen asociado un <dfn>valor</dfn>, que es un dato, el cual puede
       cambiar durante la ejecución del programa. En este caso el valor es
       <code><span style="color: #a31515;">"pp"</span></code>.
      </p>
     </li>
     <li>
      <p>
       El
       <dfn>
        operador de asignación
        (<code class="language-kotlin" style="color: #0000ff;">=</code>)
       </dfn>
       sirve para cambiar el valor de una variable, perdiendo el valor anterior.
       El operando del lado izquierdo siempre debe ser una variable.
      </p>
     </li>
     <li>
      <p>
       Cuando el nombre de una variable no aparece a la izquierda del operador de
       asignación, se usa su valor.
      </p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
   <div class="horizontal">
    <div>
     <h2>Salida</h2>
     <pre><samp>pp
tt
miNombre
bb
bb</samp></pre>
     <p class="noPrint">
      <a target="_blank"
      href="https://play.kotlinlang.org/#eyJ2ZXJzaW9uIjoiMS41LjMwIiwicGxhdGZvcm0iOiJqYXZhIiwiYXJncyI6IiIsIm5vbmVNYXJrZXJzIjp0cnVlLCJ0aGVtZSI6ImlkZWEiLCJjb2RlIjoiZnVuIG1haW4oKSB7XG4gdmFyIG1pTm9tYnJlID0gXCJwcFwiXG4gdmFyIHN1Tm9tYnJlID0gXCJ0dFwiXG4gcHJpbnRsbihtaU5vbWJyZSlcbiBwcmludGxuKHN1Tm9tYnJlKVxuIHByaW50bG4oXCJtaU5vbWJyZVwiKTtcbiBtaU5vbWJyZSA9IFwiYmJcIjtcbiBwcmludGxuKG1pTm9tYnJlKTtcbiBzdU5vbWJyZSA9IG1pTm9tYnJlO1xuIHByaW50KHN1Tm9tYnJlKTtcbn0ifQ==">
      Revísalo en Kotlin play.</a>
     </p>
    </div>
    <muestra-codigo>
     <div>
      <div><span style="color: #0000ff;">fun</span>&nbsp;<span
         style="color: #795e26;">main</span>()&nbsp;{</div>
      <div>&nbsp;<span
         style="color: #0000ff;">var</span>&nbsp;miNombre&nbsp;=&nbsp;<span
         style="color: #a31515;">"pp"</span></div>
      <div>&nbsp;<span
         style="color: #0000ff;">var</span>&nbsp;suNombre&nbsp;=&nbsp;<span
         style="color: #a31515;">"tt"</span></div>
      <div>&nbsp;<span style="color: #795e26;">println</span>(miNombre)</div>
      <div>&nbsp;<span style="color: #795e26;">println</span>(suNombre)</div>
      <div>&nbsp;<span style="color: #795e26;">println</span>(<span
         style="color: #a31515;">"miNombre"</span>);</div>
      <div>&nbsp;miNombre&nbsp;=&nbsp;<span style="color: #a31515;">"bb"</span>;
      </div>
      <div>&nbsp;<span style="color: #795e26;">println</span>(miNombre);</div>
      <div>&nbsp;suNombre&nbsp;=&nbsp;miNombre;</div>
      <div>&nbsp;<span style="color: #795e26;">print</span>(suNombre);</div>
      <div>}</div>
     </div>
     </muestra-codigo>
   </div>`;
 }
}

customElements.define("b-variables", BVariables);