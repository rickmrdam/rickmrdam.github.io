import { Diapositiva } from "../../lib/Diapositiva.js";

export class WhileContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
     <li>
      <p>
       <a href="/17_while/a_while.html">La estructura de control
        <strong>while</strong></a>
      </p>
     </li>
     <li>
      <p>
       <a href="/17_while/b_pres_while_asc.html">Prueba de escritorio
         con <strong>while</strong> ascendente</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/17_while/c_pres_while_asc_2.html">Prueba de
         escritorio con <strong>while</strong> ascendente de 2 en
         2</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/17_while/d_pres_while_desc.html">Prueba de escritorio
         con <strong>while</strong> descendente</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/17_while/e_pres_while_desc_2.html">Prueba de
         escritorio con <strong>while</strong> descendente de 2 en
         2</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/17_while/f_pres_while_no_ejec.html">Prueba de
         escritorio con <strong>while</strong> que no se ejecuta</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/17_while/g_pres_while_desc_mal.html">Prueba de
          escritorio con <strong>while</strong> descendente mal
          diseñado</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/17_while/h_pres_while_asc_mal.html">Prueba de
         escritorio con <strong>while</strong> ascendente mal
         diseñado</a>
      </p>
     </li>
     <li><p><a href="/17_while/i_resumen.html">Resumen</a></p></li>
    </ol>`;
 }
}

customElements.define("while-contenido", WhileContenido);