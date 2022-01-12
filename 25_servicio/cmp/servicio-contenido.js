import { Diapositiva } from "../../lib/Diapositiva.js";

export class ServicioContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
    <li>
     <p>
      <a href="/25_servicio/a_instrucciones.html">Instrucciones</a>
     </p>
    </li>
    <li>
     <p>
      <a href="/25_servicio/b_archivos.html">Archivos</a>
     </p>
    </li>
    <li>
     <p>
      <a href="/25_servicio/c_index.html">index.php</a>
     </p>
    </li>
    <li>
     <p>
      <a href="/25_servicio/d_strings.html">app/res/layout/strings.xml</a>
     </p>
    </li>
    <li>
     <p>
      <a href="/25_servicio/e_activity_main.html">app/res/layout/activity_main.xml</a>
     </p>
    </li>
    <li>
     <p>
      <a href="/25_servicio/f_MainActivity.html">app/java/io.github.gilpgdm/MainActivity.kt</a>
     </p>
    </li>
    <li>
     <p>
      <a href="/25_servicio/g_AndroidManifest.html">app/manifest/AndroidManifest.xml</a>
     </p>
    </li>
   </ol>`;
 }
}

customElements.define("servicio-contenido", ServicioContenido);