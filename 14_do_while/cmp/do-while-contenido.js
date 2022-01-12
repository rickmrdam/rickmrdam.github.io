import { Diapositiva } from "../../lib/Diapositiva.js";

export class DoWhileContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
     <li>
      <p><a href="/14_do_while/a_do_while.html">do-while</a></p>
     </li>
     <li>
      <p>
       <a href="/14_do_while/b_codigo.html">Código con
        <strong>do-while</strong></a>
      </p>
     </li>
     <li><p><a href="/14_do_while/c_resumen.html">Resumen</a></p></li>
    </ol>`;
 }
}

customElements.define("do-while-contenido", DoWhileContenido);