import { Diapositiva } from "../../lib/Diapositiva.js";

export class FormularioContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
    <li>
     <p>
      <a href="/24_formulario/a_instrucciones.html">Instrucciones</a>
     </p>
    </li>
    <li>
     <p>
      <a href="/24_formulario/b_archivos.html">Archivos</a>
     </p>
    </li>
    <li>
     <p>
      <a href="/24_formulario/c_strings.html">app/res/layout/strings.xml</a>
     </p>
    </li>
    <li>
     <p>
      <a href="/24_formulario/d_activity_main.html">app/res/layout/activity_main.xml</a>
     </p>
    </li>
    <li>
     <p>
      <a href="/24_formulario/e_MainActivity.html">app/java/io.github.gilpgdm/MainActivity.kt</a>
     </p>
    </li>
    <li>
     <p>
      <a href="/24_formulario/f_AndroidManifest.html">app/manifest/AndroidManifest.xml</a>
     </p>
    </li>
   </ol>`;
 }
}

customElements.define("formulario-contenido", FormularioContenido);