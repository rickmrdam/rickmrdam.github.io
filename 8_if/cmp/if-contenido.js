import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";
// import "../g_if_programa/cmp/g-if-programa-contenido.js";

export class IfContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
     <li>
      <p>
       <a href="/8_if/a_boolean.html">El tipo <strong>boolean</strong></a>
      </p>
     </li>
     <li>
      <p>
       <a href="/8_if/b_txt_igualdad.html">Operador de igualdad de
         textos</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/8_if/c_txt_diferente.html">Operador diferente de para
         textos</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/8_if/d_if.html">La estructura de control
        <strong>if</strong></a>
      </p>
     </li>
     <li>
      <p>
       <a href="/8_if/e_codigo.html">Código con
       <strong>if</strong></a></a>
      </p>
     </li>
     <li>
      <p><a href="/8_if/h_resumen.html">Resumen</a></p>
     </li>
    </ol>`;
   // const details = this.querySelector("details");
   // if (details && !this.closest("mi-nav")) {
   //  details.open = true;
   // }
 }
}

customElements.define("if-contenido", IfContenido);