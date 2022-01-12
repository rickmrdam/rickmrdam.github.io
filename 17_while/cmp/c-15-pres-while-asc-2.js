import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class PresWhileAsc2 extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>
   C. Prueba de escritorio con <strong>while</strong> ascendente de 2 en 2
  </h1>
  <muestra-codigo>
  <div><div><span style="color: #0000ff;">fun</span>&nbsp;<span style="color: #795e26;">main</span>()&nbsp;{</div><div>&nbsp;<span style="color: #0000ff;">var</span>&nbsp;i&nbsp;=&nbsp;<span style="color: #098658;">0</span>;</div><div>&nbsp;<span style="color: #af00db;">while</span>&nbsp;(i&nbsp;&lt;&nbsp;<span style="color: #098658;">6</span>)&nbsp;{</div><div>&nbsp;&nbsp;<span style="color: #795e26;">println</span>(i);</div><div>&nbsp;&nbsp;i&nbsp;+=&nbsp;<span style="color: #098658;">2</span>;</div><div>&nbsp;}</div><div>&nbsp;<span style="color: #795e26;">println</span>(<span style="color: #a31515;">"Adios."</span>);</div><div>}</div></div>  </muestra-codigo>
  <div class="lectura noPrint">
   <p class="noPrint">
    <a target="_blank"
      href="https://play.kotlinlang.org/#eyJ2ZXJzaW9uIjoiMS41LjMwIiwicGxhdGZvcm0iOiJqYXZhIiwiYXJncyI6IiIsIm5vbmVNYXJrZXJzIjp0cnVlLCJ0aGVtZSI6ImlkZWEiLCJjb2RlIjoiZnVuIG1haW4oKSB7XG4gdmFyIGkgPSAwO1xuIHdoaWxlIChpIDwgNikge1xuICBwcmludGxuKGkpO1xuICBpICs9IDI7XG4gfVxuIHByaW50bG4oXCJBZGlvcy5cIik7XG59In0=">
     Revísalo en Kotlin play.
    </a>
   </p>
  </div>`;
 }
}

customElements.define("c-15-pres-while-asc-2", PresWhileAsc2);