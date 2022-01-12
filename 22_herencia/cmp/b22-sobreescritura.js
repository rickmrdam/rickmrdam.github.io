import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class B22Sobreescritura extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. Sobrescritura de métodos</h1>
   <div class="horizontal">
   <div>
   <h2>Salida</h2>
   <pre><samp>
Hola.
Hola.
Consola.</samp></pre>
   <p class="noPrint">
    <a target="_blank"
      href="https://play.kotlinlang.org/#eyJ2ZXJzaW9uIjoiMS41LjMwIiwicGxhdGZvcm0iOiJqYXZhIiwiYXJncyI6IiIsIm5vbmVNYXJrZXJzIjp0cnVlLCJ0aGVtZSI6ImlkZWEiLCJjb2RlIjoib3BlbiBjbGFzcyBDbE0yIHtcbiBvcGVuIGZ1biBtdWVzdHJhKCkge1xuICBwcmludGxuKFwiSG9sYS5cIilcbiB9XG59XG5jbGFzcyBDbEgyIDogQ2xNMigpIHtcbiBvdmVycmlkZSBmdW4gbXVlc3RyYSgpIHtcbiAgc3VwZXIubXVlc3RyYSgpXG4gIHByaW50bG4oXCJDb25zb2xhLlwiKVxuIH1cbn1cblxuZnVuIG1haW4oKSB7XG4gdmFsIHRtMiA9IENsTTIoKVxuIHRtMi5tdWVzdHJhKClcbiB2YWwgdGgyID0gQ2xIMigpXG4gdGgyLm11ZXN0cmEoKVxufSJ9">
     Revísalo en Kotlin play.</a>
   </p>
  </div>
   <muestra-codigo>
   <div>
   <div><span style="color: #0000ff;">open</span>&nbsp;<span
      style="color: #0000ff;">class</span>&nbsp;<span
      style="color: #267f99;">ClM2</span>&nbsp;{</div>
   <div>&nbsp;<span style="color: #0000ff;">open</span>&nbsp;<span
      style="color: #0000ff;">fun</span>&nbsp;<span
      style="color: #795e26;">muestra</span>()&nbsp;{</div>
   <div>&nbsp;&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #a31515;">"Hola."</span>)</div>
   <div>&nbsp;}</div>
   <div>}</div>
   <div><span style="color: #0000ff;">class</span>&nbsp;<span
      style="color: #267f99;">ClH2</span>&nbsp;:&nbsp;<span
      style="color: #267f99;">ClM2</span>()&nbsp;{</div>
   <div>&nbsp;<span style="color: #0000ff;">override</span>&nbsp;<span
      style="color: #0000ff;">fun</span>&nbsp;<span
      style="color: #795e26;">muestra</span>()&nbsp;{</div>
   <div>&nbsp;&nbsp;<span style="color: #0000ff;">super</span>.muestra()</div>
   <div>&nbsp;&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #a31515;">"Consola."</span>)</div>
   <div>&nbsp;}</div>
   <div>}</div><br>
   <div><span style="color: #0000ff;">fun</span>&nbsp;<span
      style="color: #795e26;">main</span>()&nbsp;{</div>
   <div>&nbsp;<span style="color: #0000ff;">val</span>&nbsp;tm2&nbsp;=&nbsp;<span
      style="color: #267f99;">ClM2</span>()</div>
   <div>&nbsp;tm2.muestra()</div>
   <div>&nbsp;<span style="color: #0000ff;">val</span>&nbsp;th2&nbsp;=&nbsp;<span
      style="color: #267f99;">ClH2</span>()</div>
   <div>&nbsp;th2.muestra()</div>
   <div>}</div>
  </div>
     </muestra-codigo>
  </div>`;
 }
}

customElements.define("b22-sobreescritura", B22Sobreescritura);