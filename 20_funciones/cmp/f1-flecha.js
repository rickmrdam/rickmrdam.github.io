import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class F1Flecha extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>F. Lambdas</h1>
   <div class="horizontal">
    <div>
     <h2>Salida</h2>
     <pre><samp>hola
-11
-60
mx
4</samp></pre>
     <p class="noPrint">
      <a target="_blank"
        href="https://play.kotlinlang.org/#eyJ2ZXJzaW9uIjoiMS41LjMwIiwicGxhdGZvcm0iOiJqYXZhIiwiYXJncyI6IiIsIm5vbmVNYXJrZXJzIjp0cnVlLCJ0aGVtZSI6ImlkZWEiLCJjb2RlIjoiZnVuIG1haW4oKSB7XG4gdmFsIGZ4ID0geyBwcmludGxuKFwiaG9sYVwiKSB9XG4gdmFsIGZ5ID1cbiAgeyBmOiBTdHJpbmcgLT4gcHJpbnRsbihmKSB9XG4gdmFsIGZ6ID0geyBhOiBJbnQsIGI6IEludCAtPlxuICBwcmludGxuKGEgKyBiKVxuICBhICogYlxuIH1cbiB2YWwgZncgPSB7IGc6IEludCAtPiBnICsgMSB9XG4gZngoKVxuIHByaW50bG4oZnooNCwgLTE1KSlcbiBmeShcIm14XCIpXG4gcHJpbnRsbihmdygzKSlcbn0ifQ==">
       Revísalo en Kotlin play.</a>
     </p>
    </div>
    <muestra-codigo>
    <div>
    <div><span style="color: #0000ff;">fun</span>&nbsp;<span
       style="color: #795e26;">main</span>()&nbsp;{</div>
    <div>&nbsp;<span
       style="color: #0000ff;">val</span>&nbsp;fx&nbsp;=&nbsp;{&nbsp;<span
       style="color: #795e26;">println</span>(<span
       style="color: #a31515;">"hola"</span>)&nbsp;}</div>
    <div>&nbsp;<span style="color: #0000ff;">val</span>&nbsp;fy&nbsp;=</div>
    <div>&nbsp;&nbsp;{&nbsp;f:&nbsp;<span
       style="color: #267f99;">String</span>&nbsp;-&gt;&nbsp;<span
       style="color: #795e26;">println</span>(f)&nbsp;}</div>
    <div>&nbsp;<span
       style="color: #0000ff;">val</span>&nbsp;fz&nbsp;=&nbsp;{&nbsp;a:&nbsp;<span
       style="color: #267f99;">Int</span>,&nbsp;b:&nbsp;<span
       style="color: #267f99;">Int</span>&nbsp;-&gt;</div>
    <div>&nbsp;&nbsp;<span
       style="color: #795e26;">println</span>(a&nbsp;+&nbsp;b)</div>
    <div>&nbsp;&nbsp;a&nbsp;*&nbsp;b</div>
    <div>&nbsp;}</div>
    <div>&nbsp;<span
       style="color: #0000ff;">val</span>&nbsp;fw&nbsp;=&nbsp;{&nbsp;g:&nbsp;<span
       style="color: #267f99;">Int</span>&nbsp;-&gt;&nbsp;g&nbsp;+&nbsp;<span
       style="color: #098658;">1</span>&nbsp;}</div>
    <div>&nbsp;fx()</div>
    <div>&nbsp;<span style="color: #795e26;">println</span>(fz(<span
       style="color: #098658;">4</span>,&nbsp;-<span
       style="color: #098658;">15</span>))</div>
    <div>&nbsp;fy(<span style="color: #a31515;">"mx"</span>)</div>
    <div>&nbsp;<span style="color: #795e26;">println</span>(fw(<span
       style="color: #098658;">3</span>))</div>
    <div>}</div>
   </div>
  </muestra-codigo>
  </div>`;
 }
}

customElements.define("f1-flecha", F1Flecha);