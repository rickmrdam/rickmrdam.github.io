import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../../lib/muestra-codigo.js";

export class E8Codigo extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>E. Código</h1>
   <muestra-codigo>
   <div>
   <div><span style="color: #0000ff;">fun</span>&nbsp;<span
      style="color: #795e26;">main</span>()&nbsp;{</div>
   <div>&nbsp;<span style="color: #795e26;">print</span>(<span
      style="color: #a31515;">"Fruta&nbsp;preferida:&nbsp;"</span>)</div>
   <div>&nbsp;<span
      style="color: #0000ff;">val</span>&nbsp;fruta&nbsp;=&nbsp;readLine()</div>
   <div>&nbsp;<span
      style="color: #af00db;">if</span>&nbsp;(fruta&nbsp;==&nbsp;<span
      style="color: #a31515;">"pera"</span>)&nbsp;{</div>
   <div>&nbsp;&nbsp;<span style="color: #795e26;">println</span>(</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #a31515;">"El&nbsp;que&nbsp;es&nbsp;pera,&nbsp;desespera."</span>)
   </div>
   <div>&nbsp;}</div>
   <div>&nbsp;<span style="color: #795e26;">print</span>(<span
      style="color: #a31515;">"Tu&nbsp;fruta:&nbsp;"</span>)</div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(fruta)</div>
   <div>}</div>
  </div>
   </muestra-codigo>
   <div class="lectura noPrint">
    <p class="noPrint">
     <a target="_blank"
       href="https://replit.com/@GilbertoPacheco/ifkt?v=1">
      Revísalo en Replit.
     </a>
    </p>
   </div>`;
 }
}

customElements.define("e8-codigo", E8Codigo);