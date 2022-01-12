import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class B24Archivos extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. Archivos</h1>
    <div class="lectura">
     <ul>
      <li>
       app
       <ul>
        <li>
         manifest
         <ul>
          <li>
           <a href="/24_formulario/f_AndroidManifest.html">
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
             <a href="/24_formulario/e_MainActivity.html">
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
             <a href="/24_formulario/d_activity_main.html">
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
             <a href="/24_formulario/c_strings.html">
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

customElements.define("b24-archivos", B24Archivos);