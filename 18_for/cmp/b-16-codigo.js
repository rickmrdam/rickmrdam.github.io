import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class BCodigo extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. Código con <strong>for</strong></h1>
   <muestra-codigo>
   <div><div><span style="color: #0000ff;">fun</span>&nbsp;<span style="color: #795e26;">main</span>()&nbsp;{</div><div>&nbsp;<span style="color: #795e26;">println</span>(<span style="color: #a31515;">"Hola."</span>);</div><div>&nbsp;<span style="color: #af00db;">for</span>&nbsp;(i&nbsp;in&nbsp;<span style="color: #098658;">1</span>..<span style="color: #098658;">3</span>)&nbsp;{</div><div>&nbsp;&nbsp;<span style="color: #795e26;">println</span>(i);</div><div>&nbsp;}</div><div>&nbsp;<span style="color: #795e26;">println</span>(<span style="color: #a31515;">"Segundo&nbsp;for."</span>);</div><div>&nbsp;<span style="color: #af00db;">for</span>&nbsp;(i&nbsp;in&nbsp;<span style="color: #098658;">6</span>&nbsp;downTo&nbsp;<span style="color: #098658;">0</span>&nbsp;step&nbsp;<span style="color: #098658;">2</span>)&nbsp;{</div><div>&nbsp;&nbsp;<span style="color: #795e26;">println</span>(i);</div><div>&nbsp;}</div><div>&nbsp;<span style="color: #795e26;">println</span>(<span style="color: #a31515;">"Adios."</span>);</div><div>}</div></div>   </muestra-codigo>
   <div class="lectura noPrint">
    <p class="noPrint">
     <a target="_blank"
       href="https://play.kotlinlang.org/#eyJ2ZXJzaW9uIjoiMS41LjMwIiwicGxhdGZvcm0iOiJqYXZhIiwiYXJncyI6IiIsIm5vbmVNYXJrZXJzIjp0cnVlLCJ0aGVtZSI6ImlkZWEiLCJjb2RlIjoiZnVuIG1haW4oKSB7XG4gcHJpbnRsbihcIkhvbGEuXCIpO1xuIGZvciAoaSBpbiAxLi4zKSB7XG4gIHByaW50bG4oaSk7XG4gfVxuIHByaW50bG4oXCJTZWd1bmRvIGZvci5cIik7XG4gZm9yIChpIGluIDYgZG93blRvIDAgc3RlcCAyKSB7XG4gIHByaW50bG4oaSk7XG4gfVxuIHByaW50bG4oXCJBZGlvcy5cIik7XG59In0=">
      Revísalo en Kotllin play.
     </a>
    </p>
   </div>`;
 }
}

customElements.define("b-16-codigo", BCodigo);