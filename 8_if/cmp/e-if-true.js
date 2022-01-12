import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class EIfTrue extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>E. Prueba de escritorio cuando la condición de <strong>if</strong>
    evalúa a <strong>true</strong>
  </h1>
  <div class="horizontal">
   <div>
    <h2>Salida</h2>
    <iframe src="/6_if/src/3_if_true.html"></iframe>
    <p class="noPrint">
     <a target="_blank" href="/6_if/src/3_if_true.html">Ábrelo en otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%3B%0A%20const%20fruta%20%3D%20%22pera%22%3B%0A%20if%20(fruta%20%3D%3D%3D%20%22pera%22)%20%7B%0A%20%20document.write(%0A%20%20%20%22El%20que%20es%20%F0%9F%8D%90%2C%20desespera.%22)%3B%0A%20%7D%0A%20document.write(%22Tu%20fruta%3A%20%22)%0A%20document.write(fruta)%3B%0A%3C%2Fscript%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;<span style="color: #0000ff;">debugger</span>;</div>
     <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">fruta</span>&nbsp;=&nbsp;<span
        style="color: #a31515;">"pera"</span>;</div>
     <div>&nbsp;<span style="color: #af00db;">if</span>&nbsp;(<span
        style="color: #0070c1;">fruta</span>&nbsp;===&nbsp;<span
        style="color: #a31515;">"pera"</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(</div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #a31515;">"El&nbsp;que&nbsp;es&nbsp;🍐,&nbsp;desespera."</span>);
     </div>
     <div>&nbsp;}</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Tu&nbsp;fruta:&nbsp;"</span>)</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #0070c1;">fruta</span>);</div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>
  </div>`;
 }
}

customElements.define("e-if-true", EIfTrue);