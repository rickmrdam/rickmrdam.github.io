import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class PresWhileAscMal extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>
   H. Prueba de escritorio con <strong>while</strong> ascendente mal diseñado
  </h1>
  <muestra-codigo>
  <div><div><span style="color: #0000ff;">fun</span>&nbsp;<span style="color: #795e26;">main</span>()&nbsp;{</div><div>&nbsp;<span style="color: #0000ff;">var</span>&nbsp;i&nbsp;=&nbsp;<span style="color: #098658;">2</span>;</div><div>&nbsp;<span style="color: #af00db;">while</span>&nbsp;(i&nbsp;&gt;&nbsp;<span style="color: #098658;">0</span>)&nbsp;{</div><div>&nbsp;&nbsp;<span style="color: #795e26;">println</span>(i);</div><div>&nbsp;&nbsp;i++;</div><div>&nbsp;}</div><div>&nbsp;<span style="color: #795e26;">println</span>(<span style="color: #a31515;">"Adios."</span>);</div><div>}</div></div>  </muestra-codigo>
  <div class="lectura noPrint">
   <p class="noPrint">
    <a target="_blank"
      href="https://play.kotlinlang.org/#eyJ2ZXJzaW9uIjoiMS41LjMwIiwicGxhdGZvcm0iOiJqYXZhIiwiYXJncyI6IiIsIm5vbmVNYXJrZXJzIjp0cnVlLCJ0aGVtZSI6ImlkZWEiLCJjb2RlIjoiZnVuIG1haW4oKSB7XG4gdmFyIGkgPSAyO1xuIHdoaWxlIChpID4gMCkge1xuICBwcmludGxuKGkpO1xuICBpKys7XG4gfVxuIHByaW50bG4oXCJBZGlvcy5cIik7XG59In0=">
     Revísalo en Kotlin play.
    </a>
   </p>
  </div>`;
 }
}

customElements.define("h-15-pres-while-asc-mal", PresWhileAscMal);