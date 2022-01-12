import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class C16OpsNum extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>C. Operadores numéricos</h1>
   <muestra-codigo>
   <div>
   <div><span style="color: #0000ff;">fun</span>&nbsp;<span
      style="color: #795e26;">main</span>()&nbsp;{</div>
   <div>&nbsp;<span style="color: #008000;">//&nbsp;Suma</span></div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #098658;">5</span>&nbsp;+&nbsp;<span
      style="color: #098658;">2</span>);&nbsp;&nbsp;<span
      style="color: #008000;">//&nbsp;7</span></div>
   <div>&nbsp;<span style="color: #008000;">//&nbsp;Resta</span></div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #098658;">5</span>&nbsp;-&nbsp;<span
      style="color: #098658;">2</span>);&nbsp;&nbsp;<span
      style="color: #008000;">//&nbsp;3</span></div>
   <div>&nbsp;<span style="color: #008000;">//&nbsp;Multiplicación</span></div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #098658;">5</span>&nbsp;*&nbsp;<span
      style="color: #098658;">2</span>);&nbsp;&nbsp;<span
      style="color: #008000;">//10</span></div>
   <div>&nbsp;<span style="color: #008000;">//&nbsp;División&nbsp;entera</span>
   </div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #098658;">5</span>&nbsp;/&nbsp;<span
      style="color: #098658;">2</span>);&nbsp;&nbsp;<span
      style="color: #008000;">//&nbsp;2</span></div>
   <div>&nbsp;<span style="color: #008000;">//&nbsp;División&nbsp;entera</span>
   </div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #098658;">5</span>&nbsp;/&nbsp;<span
      style="color: #098658;">2.0</span>);&nbsp;&nbsp;<span
      style="color: #008000;">//&nbsp;2.5</span></div>
   <div>&nbsp;<span
      style="color: #008000;">//&nbsp;Módulo&nbsp;o&nbsp;residuo</span></div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #098658;">5</span>&nbsp;%&nbsp;<span
      style="color: #098658;">2</span>);&nbsp;<span
      style="color: #008000;">//&nbsp;&nbsp;1</span></div>
   <div>}</div>
  </div>
    </muestra-codigo>`;
 }
}

customElements.define("c16-ops-num", C16OpsNum);