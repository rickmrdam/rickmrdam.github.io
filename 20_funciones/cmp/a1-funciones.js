import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class A1Funciones extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. Funciones</h1>
   <div class="lectura">
   <ul>
    <li>
     <p>
      Las
      <dfn>funciones</dfn>
      son secuencias de instrucciones que tienen asociado un nombre.
     </p>
    </li>
    <li>
     <p>El <dfn>nombre</dfn> de una función es un identificador.</p>
    </li>
    <li>
     <p>
      Una función no se ejecuta ella misma; debe usarse el nombre de la
      función seguida de paréntesis para que se ejecute. Por ejemplo, si una
      función se llama
      <code class="language-javascript">saluda</code>,
      para hacer que se ejecute hay que ejecutar la instrucción
      <code class="language-javascript">saluda()</code>
     </p>
    </li>
    <li>
     <p>
      A la instrucción que solicita la ejecución de una función, se le llama
      <dfn>invocación de función</dfn>.
     </p>
     <p>
      Antes de que una función se ejecute, se suspende lo que se estaba
      haciendo y se marca el punto donde se invocó la función.
      Posteriormente se ejecuta la función y al terminar, se regresa al
      punto de invocación y se continúa con la siguiente instrucción.
     </p>
    </li>
   </ul>
   <h2>Ejemplo</h2>
  </div>
  <div class="horizontal">
  <div>
  <h2>Salida</h2>
  <pre><samp>Main 1
Hola
Main 2
Hola
Adios</samp></pre>
  <p class="noPrint">
   <a target="_blank"
   href="https://play.kotlinlang.org/#eyJ2ZXJzaW9uIjoiMS41LjMwIiwicGxhdGZvcm0iOiJqYXZhIiwiYXJncyI6IiIsIm5vbmVNYXJrZXJzIjp0cnVlLCJ0aGVtZSI6ImlkZWEiLCJjb2RlIjoiZnVuIG1haW4oKSB7XG4gcHJpbnRsbihcIk1haW4gMVwiKVxuIHNhbHVkYSgpIC8vIGludm9jYSBhIHNhbHVkYS5cbiAvKiBBbCB0ZXJtaW5hciBsYSBwcmltZXJhXG4gICogaW52b2NhY2nDs24gY29udGluw7phIGFxdcOtLiAqL1xuIHByaW50bG4oXCJNYWluIDJcIilcbiBzYWx1ZGEoKSAvLyBpbnZvY2EgYSBzYWx1ZGEuXG4gLyogQWwgdGVybWluYXIgbGEgc2VndW5kYVxuICAqIGludm9jYWNpw7NuIGNvbnRpbsO6YSBhcXXDrS4gKi9cbiBwcmludGxuKFwiQWRpb3NcIilcbn1cblxuLyogRGVjbGFyYWNpw7NuIGRlIGZ1bmN0aW9uIHNhbHVkYS5cbiAqIFByaW1lcm8gdmEgbGEgcGFsYWJyYSBmdW4uXG4gKiBTaWd1ZSBlbCBub21icmUgZGUgbGEgZnVuY2nDs24uXG4gKiBTaWd1ZW4gbG9zIHBhcsOpbnRlc2lzLlxuICogRmluYWxtZW50ZSwgZW50cmUgbGxhdmVzICh7fSlcbiAqIHZhbiBsYXMgaW5zdHJ1Y2Npb25lcy4gKi9cbmZ1biBzYWx1ZGEoKSB7XG4gcHJpbnRsbihcIkhvbGFcIilcbn0ifQ==">
   Revísalo en Kotlin play.</a>
  </p>
 </div>
<muestra-codigo>
<div>
<div><span style="color: #0000ff;">fun</span>&nbsp;<span
   style="color: #795e26;">main</span>()&nbsp;{</div>
<div>&nbsp;<span style="color: #795e26;">println</span>(<span
   style="color: #a31515;">"Main&nbsp;1"</span>)</div>
<div>&nbsp;saluda()&nbsp;<span
   style="color: #008000;">//&nbsp;invoca&nbsp;a&nbsp;saluda.</span></div>
<div>&nbsp;<span
   style="color: #008000;">/*&nbsp;Al&nbsp;terminar&nbsp;la&nbsp;primera</span>
</div>
<div><span
   style="color: #008000;">&nbsp;&nbsp;*&nbsp;invocación&nbsp;continúa&nbsp;aquí.&nbsp;*/</span>
</div>
<div>&nbsp;<span style="color: #795e26;">println</span>(<span
   style="color: #a31515;">"Main&nbsp;2"</span>)</div>
<div>&nbsp;saluda()&nbsp;<span
   style="color: #008000;">//&nbsp;invoca&nbsp;a&nbsp;saluda.</span></div>
<div>&nbsp;<span
   style="color: #008000;">/*&nbsp;Al&nbsp;terminar&nbsp;la&nbsp;segunda</span>
</div>
<div><span
   style="color: #008000;">&nbsp;&nbsp;*&nbsp;invocación&nbsp;continúa&nbsp;aquí.&nbsp;*/</span>
</div>
<div>&nbsp;<span style="color: #795e26;">println</span>(<span
   style="color: #a31515;">"Adios"</span>)</div>
<div>}</div><br>
<div><span
   style="color: #008000;">/*&nbsp;Declaración&nbsp;de&nbsp;function&nbsp;saluda.</span>
</div>
<div><span
   style="color: #008000;">&nbsp;*&nbsp;Primero&nbsp;va&nbsp;la&nbsp;palabra&nbsp;fun.</span>
</div>
<div><span
   style="color: #008000;">&nbsp;*&nbsp;Sigue&nbsp;el&nbsp;nombre&nbsp;de&nbsp;la&nbsp;función.</span>
</div>
<div><span
   style="color: #008000;">&nbsp;*&nbsp;Siguen&nbsp;los&nbsp;paréntesis.</span>
</div>
<div><span
   style="color: #008000;">&nbsp;*&nbsp;Finalmente,&nbsp;entre&nbsp;llaves&nbsp;({})</span>
</div>
<div><span
   style="color: #008000;">&nbsp;*&nbsp;van&nbsp;las&nbsp;instrucciones.&nbsp;*/</span>
</div>
<div><span style="color: #0000ff;">fun</span>&nbsp;<span
   style="color: #795e26;">saluda</span>()&nbsp;{</div>
<div>&nbsp;<span style="color: #795e26;">println</span>(<span
   style="color: #a31515;">"Hola"</span>)</div>
<div>}</div>
</div>
 </muestra-codigo>
  </div>`;
 }
}

customElements.define("a1-funciones", A1Funciones);