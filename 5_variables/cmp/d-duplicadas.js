import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class DDuplicadas extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>D. Variables Duplicadas</h1>
   <div class="lectura">
    <p>
     Las variables o constantes declaradas en el mismo espacio no pueden
     tener el mismo nombre.
    </p>
    <h2>Ejemplo</h2>
   </div>
   <div class="horizontal">
    <div>
     <h3>Salida</h3>
     <pre><samp><span style="color: red;">Conflicting declarations: var a: String, val a: String
Conflicting declarations: var a: String, val a: String</span></samp></pre>
     <p class="noPrint">
      <a target="_blank"
        href="https://play.kotlinlang.org/#eyJ2ZXJzaW9uIjoiMS41LjMwIiwicGxhdGZvcm0iOiJqYXZhIiwiYXJncyI6IiIsIm5vbmVNYXJrZXJzIjp0cnVlLCJ0aGVtZSI6ImlkZWEiLCJjb2RlIjoiZnVuIG1haW4oKSB7XG4gdmFyIGEgPSBcIlExXCJcbiBwcmludChhKVxuIHZhbCBhID0gXCJRMlwiXG4gcHJpbnQoYSlcbn0ifQ==">
       Revísalo en Kotlin play.
      </a>
     </p>
    </div>
    <muestra-codigo>
    <div>
    <div><span style="color: #0000ff;">fun</span>&nbsp;<span
       style="color: #795e26;">main</span>()&nbsp;{</div>
    <div>&nbsp;<span style="color: #0000ff;">var</span>&nbsp;a&nbsp;=&nbsp;<span
       style="color: #a31515;">"Q1"</span></div>
    <div>&nbsp;<span style="color: #795e26;">print</span>(a)</div>
    <div>&nbsp;<span style="color: #0000ff;">val</span>&nbsp;a&nbsp;=&nbsp;<span
       style="color: #a31515;">"Q2"</span></div>
    <div>&nbsp;<span style="color: #795e26;">print</span>(a)</div>
    <div>}</div>
   </div>
    </muestra-codigo>
   </div>`;
 }
}

customElements.define("d-duplicadas", DDuplicadas);