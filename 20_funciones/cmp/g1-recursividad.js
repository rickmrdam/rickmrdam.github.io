import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class G1Recursividad extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>G. Recursividad</h1>
  <div class="horizontal">
  <div>
  <h2>Salida</h2>
  <pre><samp>Invoca: 2, 3
Invoca: 1, 3
Invoca: 0, 3
Devuelve 3
Devuelve: 4
Devuelve: 5
5</samp></pre>
  <p class="noPrint">
   <a target="_blank"
     href="https://play.kotlinlang.org/#eyJ2ZXJzaW9uIjoiMS41LjMwIiwicGxhdGZvcm0iOiJqYXZhIiwiYXJncyI6IiIsIm5vbmVNYXJrZXJzIjp0cnVlLCJ0aGVtZSI6ImlkZWEiLCJjb2RlIjoiZnVuIGZucyhhOiBVSW50LCBiOiBVSW50KTogVUludCB7XG4gcmV0dXJuIGlmIChhID09IDBVKSB7XG4gIHByaW50bG4oXCJEZXZ1ZWx2ZSAkYlwiKVxuICBiXG4gfSBlbHNlIHtcbiAgcHJpbnRsbihcIkludm9jYTogJHthIC0gMVV9LCAkYlwiKVxuICB2YWwgYW50ID0gZm5zKGEgLSAxVSwgYilcbiAgcHJpbnRsbihcIkRldnVlbHZlOiAke2FudCArIDFVfVwiKVxuICBhbnQgKyAxVVxuIH1cbn1cblxuZnVuIG1haW4oKSB7XG4gcHJpbnRsbihcIkludm9jYTogMiwgM1wiKVxuIHByaW50bG4oZm5zKDJVLCAzVSkpXG59In0=">
    Revísalo en Kotlin play.</a>
  </p>
 </div>
<muestra-codigo>
   <div>
   <div><span style="color: #0000ff;">fun</span>&nbsp;<span
      style="color: #795e26;">fns</span>(<span
      style="color: #001080;">a</span>:&nbsp;<span
      style="color: #267f99;">UInt</span>,&nbsp;<span
      style="color: #001080;">b</span>:&nbsp;<span
      style="color: #267f99;">UInt</span>):&nbsp;<span
      style="color: #267f99;">UInt</span>&nbsp;{</div>
   <div>&nbsp;<span style="color: #af00db;">return</span>&nbsp;<span
      style="color: #af00db;">if</span>&nbsp;(a&nbsp;==&nbsp;0U)&nbsp;{</div>
   <div>&nbsp;&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #a31515;">"Devuelve&nbsp;$b"</span>)</div>
   <div>&nbsp;&nbsp;b</div>
   <div>&nbsp;}&nbsp;<span style="color: #af00db;">else</span>&nbsp;{</div>
   <div>&nbsp;&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #a31515;">"Invoca:&nbsp;&dollar;{a&nbsp;</span>-<span
      style="color: #a31515;">&nbsp;1U},&nbsp;&dollar;b"</span>)</div>
   <div>&nbsp;&nbsp;<span
      style="color: #0000ff;">val</span>&nbsp;ant&nbsp;=&nbsp;fns(a&nbsp;-&nbsp;1U,&nbsp;b)
   </div>
   <div>&nbsp;&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #a31515;">"Devuelve:&nbsp;&dollar;{ant&nbsp;</span>+<span
      style="color: #a31515;">&nbsp;1U}"</span>)</div>
   <div>&nbsp;&nbsp;ant&nbsp;+&nbsp;1U</div>
   <div>&nbsp;}</div>
   <div>}</div><br>
   <div><span style="color: #0000ff;">fun</span>&nbsp;<span
      style="color: #795e26;">main</span>()&nbsp;{</div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #a31515;">"Invoca:&nbsp;2,&nbsp;3"</span>)</div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(fns(2U,&nbsp;3U))
   </div>
   <div>}</div>
  </div>
    </muestra-codigo>
  </div>`;
 }
}

customElements.define("g1-recursividad", G1Recursividad);