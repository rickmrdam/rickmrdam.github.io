import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class A21Clases extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. Clases</h1>
   <div class="lectura">
    <figure>
     <img src="/21_clases/img/hormiga1.svg"
      alt="Referencia y objeto inicialmente">
     <img src="/21_clases/img/hormiga2.svg" alt="Agregamos manita a">
     <img src="/21_clases/img/hormiga3.svg" alt="Agregamos manita b">
     <img src="/21_clases/img/hormiga4.svg" alt="Aprende a saludar">
    </figure>
   </div>
   <div class="horizontal">
    <div>
    <h2>Salida</h2>
    <pre><samp>Hola. Soy pp - marrón
pp
qk
verde
marrón
Hola. Soy qk - verde</samp></pre>
    <p class="noPrint">
     <a target="_blank"
       href="https://play.kotlinlang.org/#eyJ2ZXJzaW9uIjoiMS41LjMwIiwicGxhdGZvcm0iOiJqYXZhIiwiYXJncyI6IiIsIm5vbmVNYXJrZXJzIjp0cnVlLCJ0aGVtZSI6ImlkZWEiLCJjb2RlIjoiY2xhc3MgQ2wwMSh2YWwgbm9tYnJlOiBTdHJpbmcsXG4gIHZhbCBjb2xvcjpTdHJpbmcpIHtcbiBmdW4gc2FsdWRhKCkge1xuICBwcmludGxuKFxuICAgXCJIb2xhLiBTb3kgJG5vbWJyZSAtICRjb2xvclwiKVxuIH1cbn1cbmZ1biBtYWluKCkge1xuIHZhbCB0ZWwxID0gQ2wwMShcInBwXCIsIFwibWFycsOzblwiKVxuIHZhbCB0ZWwyID0gQ2wwMShcInFrXCIsIFwidmVyZGVcIilcbiB0ZWwxLnNhbHVkYSgpXG4gcHJpbnRsbih0ZWwxLm5vbWJyZSlcbiBwcmludGxuKHRlbDIubm9tYnJlKVxuIHByaW50bG4odGVsMi5jb2xvcilcbiBwcmludGxuKHRlbDEuY29sb3IpXG4gdGVsMi5zYWx1ZGEoKVxufSJ9">
      Revísalo en Kotlin play.</a>
    </p>
   </div>
   <muestra-codigo>
   <div>
   <div><span style="color: #0000ff;">class</span>&nbsp;<span
      style="color: #267f99;">Cl01</span>(<span
      style="color: #0000ff;">val</span>&nbsp;<span
      style="color: #001080;">nombre</span>:&nbsp;<span
      style="color: #267f99;">String</span>,</div>
   <div>&nbsp;&nbsp;<span style="color: #0000ff;">val</span>&nbsp;<span
      style="color: #001080;">color</span>:<span
      style="color: #267f99;">String</span>)&nbsp;{</div>
   <div>&nbsp;<span style="color: #0000ff;">fun</span>&nbsp;<span
      style="color: #795e26;">saluda</span>()&nbsp;{</div>
   <div>&nbsp;&nbsp;<span style="color: #795e26;">println</span>(</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #a31515;">"Hola.&nbsp;Soy&nbsp;$nombre&nbsp;-&nbsp;$color"</span>)
   </div>
   <div>&nbsp;}</div>
   <div>}</div>
   <div><span style="color: #0000ff;">fun</span>&nbsp;<span
      style="color: #795e26;">main</span>()&nbsp;{</div>
   <div>&nbsp;<span
      style="color: #0000ff;">val</span>&nbsp;tel1&nbsp;=&nbsp;<span
      style="color: #267f99;">Cl01</span>(<span
      style="color: #a31515;">"pp"</span>,&nbsp;<span
      style="color: #a31515;">"marrón"</span>)</div>
   <div>&nbsp;<span
      style="color: #0000ff;">val</span>&nbsp;tel2&nbsp;=&nbsp;<span
      style="color: #267f99;">Cl01</span>(<span
      style="color: #a31515;">"qk"</span>,&nbsp;<span
      style="color: #a31515;">"verde"</span>)</div>
   <div>&nbsp;tel1.saluda()</div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(tel1.nombre)</div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(tel2.nombre)</div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(tel2.color)</div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(tel1.color)</div>
   <div>&nbsp;tel2.saluda()</div>
   <div>}</div>
  </div>
   </muestra-codigo>
  </div>`;
 }
}

customElements.define("a21-clases", A21Clases);