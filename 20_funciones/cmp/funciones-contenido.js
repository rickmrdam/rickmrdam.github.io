import { Diapositiva } from "../../lib/Diapositiva.js";

export class FuncionesContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
     <li>
      <p>
       <a href="/20_funciones/a_funciones.html">Funciones</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/20_funciones/b_funciones_funciones.html">Funciones
        que invocan funciones</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/20_funciones/c_funciones_parametros.html">Funciones
        con parámetros</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/20_funciones/d_funciones_parametros_expresiones.html">Funciones
        con expresiones en los parámetros</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/20_funciones/e_funciones_return.html">Funciones con
        valor de regreso</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/20_funciones/f_flecha.html">Lambdas</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/20_funciones/g_recursividad.html">Recursividad</a>
      </p>
     </li>
    </ol>`;
 }
}

customElements.define("funciones-contenido", FuncionesContenido);