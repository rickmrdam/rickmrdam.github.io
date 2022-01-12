import { Diapositiva } from "../../lib/Diapositiva.js";

export class LogicosContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
     <li>
       <p><a href="/13_logicos/a_op_y.html">Operador lógico Y</a></p>
     </li>
     <li>
       <p><a href="/13_logicos/b_op_o.html">Operador lógico O</a></p>
     </li>
     <li>
       <p><a href="/13_logicos/c_op_no.html">Operador lógico NO</a></p>
     </li>
     <li>
       <p>
         <a href="/13_logicos/d_op_ternario.html">Condicional múltiple con
          <strong>else</strong>
          como operador lógico</a>
       </p>
     </li>
     <li><p><a href="/13_logicos/e_resumen.html">Resumen</a></p></li>
    </ol>`;
 }
}

customElements.define("logicos-contenido", LogicosContenido);