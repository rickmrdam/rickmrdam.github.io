import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class B21Setters extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. Setters y Getters</h1>
  <div class="horizontal">
  <div>
  <h2>Salida</h2>
  <pre><samp>pp
pp juega</samp></pre>
  <p class="noPrint">
   <a target="_blank"
     href="https://play.kotlinlang.org/#eyJ2ZXJzaW9uIjoiMS41LjMwIiwicGxhdGZvcm0iOiJqYXZhIiwiYXJncyI6IiIsIm5vbmVNYXJrZXJzIjp0cnVlLCJ0aGVtZSI6ImlkZWEiLCJjb2RlIjoiY2xhc3MgQ2xYIHtcbiB2YXIgbm9tYnJlID0gXCJcIlxuICBnZXQoKSA9IGZpZWxkXG4gIHNldCAobm9tYnJlKSB7XG4gICBmaWVsZCA9IG5vbWJyZVxuICB9XG4gIHZhbCBqdWVnYVxuICAgZ2V0KCkgPSBcIiR7dGhpcy5ub21icmV9IGp1ZWdhXCJcbn1cblxuZnVuIG1haW4oKSB7XG4gdmFsIHR0MSA9IENsWCgpXG4gdHQxLm5vbWJyZSA9IFwicHBcIlxuIHByaW50bG4odHQxLm5vbWJyZSlcbiBwcmludGxuKHR0MS5qdWVnYSlcbn0ifQ==">
    Revísalo en Kotlin play.</a>
  </p>
 </div>
 <muestra-codigo>
 <div>
 <div><span style="color: #0000ff;">class</span>&nbsp;<span
    style="color: #267f99;">ClX</span>&nbsp;{</div>
 <div>&nbsp;<span
    style="color: #0000ff;">var</span>&nbsp;nombre&nbsp;=&nbsp;<span
    style="color: #a31515;">""</span></div>
 <div>&nbsp;&nbsp;get()&nbsp;=&nbsp;field</div>
 <div>&nbsp;&nbsp;set&nbsp;(nombre)&nbsp;{</div>
 <div>&nbsp;&nbsp;&nbsp;field&nbsp;=&nbsp;nombre</div>
 <div>&nbsp;&nbsp;}</div>
 <div>&nbsp;&nbsp;<span style="color: #0000ff;">val</span>&nbsp;juega</div>
 <div>&nbsp;&nbsp;&nbsp;get()&nbsp;=&nbsp;<span
    style="color: #a31515;">"&dollar;{</span><span
    style="color: #0000ff;">this</span><span
    style="color: #a31515;">.nombre}&nbsp;juega"</span></div>
 <div>}</div><br>
 <div><span style="color: #0000ff;">fun</span>&nbsp;<span
    style="color: #795e26;">main</span>()&nbsp;{</div>
 <div>&nbsp;<span
    style="color: #0000ff;">val</span>&nbsp;tt1&nbsp;=&nbsp;<span
    style="color: #267f99;">ClX</span>()</div>
 <div>&nbsp;tt1.nombre&nbsp;=&nbsp;<span style="color: #a31515;">"pp"</span>
 </div>
 <div>&nbsp;<span style="color: #795e26;">println</span>(tt1.nombre)</div>
 <div>&nbsp;<span style="color: #795e26;">println</span>(tt1.juega)</div>
 <div>}</div>
</div>
 </muestra-codigo>
  </div>`;
 }
}

customElements.define("b21-setters", B21Setters);