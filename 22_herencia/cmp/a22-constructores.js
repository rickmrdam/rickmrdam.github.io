import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class A22Constructores extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. Constructores</h1>
   <div class="horizontal">
   <div>
   <h2>Salida</h2>
   <pre><samp>4
-2
8</samp></pre>
   <p class="noPrint">
    <a target="_blank"
      href="https://play.kotlinlang.org/#eyJ2ZXJzaW9uIjoiMS41LjMwIiwicGxhdGZvcm0iOiJqYXZhIiwiYXJncyI6IiIsIm5vbmVNYXJrZXJzIjp0cnVlLCJ0aGVtZSI6ImlkZWEiLCJjb2RlIjoib3BlbiBjbGFzcyBDbE0xKHZhbCBtOiBJbnQpIHsgfVxuY2xhc3MgQ2xIMSAoYjogSW50LCB2YWwgaDogSW50KSA6XG4gQ2xNMShiKSB7fVxuXG5mdW4gbWFpbigpIHtcbiB2YWwgdGgxID0gQ2xIMSg0LCAtMilcbiBwcmludGxuKHRoMS5tKVxuIHByaW50bG4odGgxLmgpXG4gdmFsIHRtMSA9IENsTTEoOClcbiBwcmludGxuKHRtMS5tKVxufSJ9">
     Revísalo en Kotlin play.</a>
   </p>
  </div>
  <muestra-codigo>
  <div>
  <div><span style="color: #0000ff;">open</span>&nbsp;<span
     style="color: #0000ff;">class</span>&nbsp;<span
     style="color: #267f99;">ClM1</span>(<span
     style="color: #0000ff;">val</span>&nbsp;<span
     style="color: #001080;">m</span>:&nbsp;<span
     style="color: #267f99;">Int</span>)&nbsp;{&nbsp;}</div>
  <div><span style="color: #0000ff;">class</span>&nbsp;<span
     style="color: #267f99;">ClH1</span>&nbsp;(<span
     style="color: #001080;">b</span>:&nbsp;<span
     style="color: #267f99;">Int</span>,&nbsp;<span
     style="color: #0000ff;">val</span>&nbsp;<span
     style="color: #001080;">h</span>:&nbsp;<span
     style="color: #267f99;">Int</span>)&nbsp;:</div>
  <div>&nbsp;<span style="color: #267f99;">ClM1</span>(b)&nbsp;{}</div><br>
  <div><span style="color: #0000ff;">fun</span>&nbsp;<span
     style="color: #795e26;">main</span>()&nbsp;{</div>
  <div>&nbsp;<span style="color: #0000ff;">val</span>&nbsp;th1&nbsp;=&nbsp;<span
     style="color: #267f99;">ClH1</span>(<span
     style="color: #098658;">4</span>,&nbsp;-<span
     style="color: #098658;">2</span>)</div>
  <div>&nbsp;<span style="color: #795e26;">println</span>(th1.m)</div>
  <div>&nbsp;<span style="color: #795e26;">println</span>(th1.h)</div>
  <div>&nbsp;<span style="color: #0000ff;">val</span>&nbsp;tm1&nbsp;=&nbsp;<span
     style="color: #267f99;">ClM1</span>(<span style="color: #098658;">8</span>)
  </div>
  <div>&nbsp;<span style="color: #795e26;">println</span>(tm1.m)</div>
  <div>}</div>
 </div>
   </muestra-codigo>
  </div>`;
 }
}

customElements.define("a22-constructores", A22Constructores);