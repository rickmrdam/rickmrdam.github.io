import { Diapositiva } from "../../lib/Diapositiva.js";

export class MasNumerosContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
    <li>
     <p><a href="/16_mas_numeros/a_enteros.html">Tipos enteros</a></p>
    </li>
    <li>
     <p><a href="/16_mas_numeros/b_recta.html">Tipos de punto flotante</a></p>
    </li>
    <li>
     <p>
      <a href="/16_mas_numeros/c_ops_num.html">Operadores numéricos</a>
     </p>
    </li>
    <li>
     <p>
      <a href="/16_mas_numeros/d_asignacion.html">Operadores con
        asignación</a>
     </p>
    </li>
    <li>
     <p>
       <a href="/16_mas_numeros/e_incr_y_decr.html">Incremento y
         decremento</a>
     </p>
    </li>
    <li>
     <p>
       <a href="/16_mas_numeros/f_igualdad.html">Operadores de
         igualdad</a>
     </p>
    </li>
    <li>
      <p><a href="/16_mas_numeros/g_orden.html">Operadores de orden</a></p>
    </li>
    <li>
     <p>
       <a href="/16_mas_numeros/h_orden_igualdad.html">Operadores
         combinados de orden e igualdad</a>
     </p>
    </li>
    <li>
     <p><a href="/16_mas_numeros/i_precedencia.html">Precedencia de Operadores</a></p>
    </li>
    <li>
     <p><a href="/16_mas_numeros/j_expresiones.html">Expresiones</a></p>
    </li>
    <li><p><a href="/16_mas_numeros/k_resumen.html">Resumen</a></p></li>
   </ol>`;
 }
}

customElements.define("mas-numeros-contenido", MasNumerosContenido);