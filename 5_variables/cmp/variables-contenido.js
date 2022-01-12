import { Diapositiva } from "../../lib/Diapositiva.js";

export class VariablesContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
    <li>
     <p><a href="/5_variables/a_identificadores.html">Identificadores</a></p>
    </li>
    <li>
     <p><a href="/5_variables/b_variables.html">Variables</a></p>
    </li>
    <li>
     <p><a href="/5_variables/c_constantes.html">Constantes</a></p>
    </li>
    <li>
     <p><a href="/5_variables/d_duplicadas.html">Variables Duplicadas</a></p>
    </li>
    <li>
     <p>
      <a href="/5_variables/e_no_encontradas.html">Variables no encontradas</a>
     </p>
     </li>
     <li>
      <p>
       <a href="/5_variables/f_prompt.html">La función
        <strong>readLine</strong></a>
      </p>
     </li>
     <li>
      <p><a href="/5_variables/g_resumen.html">Resumen</a></p>
     </li>
   </ol>`;
 }
}

customElements.define("variables-contenido", VariablesContenido);