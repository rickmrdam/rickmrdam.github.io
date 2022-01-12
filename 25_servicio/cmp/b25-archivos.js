import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class B25Archivos extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. Archivos</h1>
   <div class="lectura">
    <h2>Servidor PHP</h2>
    <ul>
     <li>
      <a href="/25_servicio/c_index.html">index.php</a>
     </li>
    </ul>
    <h2>Proyecto Android</h2>
     <ul>
      <li>
       app
       <ul>
        <li>
         manifest
         <ul>
          <li>
           <a href="/25_servicio/g_AndroidManifest.html">
            AndroidManifest.xml
           </a>
          </li>
         </Ul>
        </li>
        <li>
         java
         <ul>
          <li>
           io.github.gilpgdam
           <ul>
            <li>
             <a href="/25_servicio/f_MainActivity.html">
              MainActivity.kt
             </a>
            </li>
           </ul>
         </ul>
        </li>
        <li>
         res
         <ul>
          <li>
           drawable
           <ul>
            <li>ic_launcher_background.xml</li>
            <li>ic_launcher_foreground.xml</li>
           </ul>
          </li>
          <li>
           layout
           <ul>
            <li>
             <a href="/25_servicio/e_activity_main.html">
              activity_main.xml
             </a>
            </li>
           </ul>
          </li>
          <li>
           mipmap
           <ul>
            <li>ic_launcher</li>
            <li>ic_launcher_round</li>
           </ul>
          </li>
          <li>
           values
           <ul>
            <li>colors.xml</li>
            <li>
             <a href="/25_servicio/d_strings.html">
              strings.xml
             </a>
            </li>
            <li>themes</li>
           </ul>
          </li>
         </ul>
        </li>
       </ul>
      </li>
     </ul>
    </div>`;
 }
}

customElements.define("b25-archivos", B25Archivos);