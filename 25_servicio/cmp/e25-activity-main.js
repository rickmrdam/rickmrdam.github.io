import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class E25ActivityMain extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>E. app/res/layout/activity_main.xml</h1>
   <div class="horizontal">
   <figure>
   <img src="/25_servicio/img/dis.png" alt="Diseño de vista de Formulario">
   <figcaption>
    Diseño de vista de Formulario
   </figcaption>
  </figure>
   <muestra-codigo>
   <div>
   <div><span style="color: #800000;">&lt;?xml</span><span
      style="color: #ff0000;"> version</span>=<span
      style="color: #0000ff;">"1.0"</span><span style="color: #ff0000;">
     encoding</span>=<span style="color: #0000ff;">"utf-8"</span><span
      style="color: #800000;">?&gt;</span></div>
   <div><span
      style="color: #800000;">&lt;androidx.constraintlayout.widget.ConstraintLayout</span>
   </div>
   <div>&nbsp; <span style="color: #ff0000;">xmlns:android</span>=<span
      style="color: #0000ff;">"http://schemas.android.com/apk/res/android"</span>
   </div>
   <div>&nbsp; <span style="color: #ff0000;">xmlns:app</span>=<span
      style="color: #0000ff;">"http://schemas.android.com/apk/res-auto"</span>
   </div>
   <div>&nbsp; <span style="color: #ff0000;">xmlns:tools</span>=<span
      style="color: #0000ff;">"http://schemas.android.com/tools"</span></div>
   <div>&nbsp; <span style="color: #ff0000;">android:layout_width</span>=<span
      style="color: #0000ff;">"match_parent"</span></div>
   <div>&nbsp; <span style="color: #ff0000;">android:layout_height</span>=<span
      style="color: #0000ff;">"match_parent"</span></div>
   <div>&nbsp; <span style="color: #ff0000;">tools:context</span>=<span
      style="color: #0000ff;">".MainActivity"</span><span
      style="color: #800000;">&gt;</span></div><br>
   <div>&nbsp;<span style="color: #800000;">&lt;TextView</span></div>
   <div>&nbsp; &nbsp;<span style="color: #ff0000;">android:id</span>=<span
      style="color: #0000ff;">"@+id/mensaje"</span></div>
   <div>&nbsp; &nbsp;<span
      style="color: #ff0000;">android:layout_width</span>=<span
      style="color: #0000ff;">"wrap_content"</span></div>
   <div>&nbsp; &nbsp;<span
      style="color: #ff0000;">android:layout_height</span>=<span
      style="color: #0000ff;">"wrap_content"</span></div>
   <div>&nbsp; &nbsp;<span style="color: #ff0000;">android:text</span>=<span
      style="color: #0000ff;">"@string/esperando"</span></div>
   <div>&nbsp; &nbsp;<span
      style="color: #ff0000;">app:layout_constraintBottom_toBottomOf</span>=<span
      style="color: #0000ff;">"parent"</span></div>
   <div>&nbsp; &nbsp;<span
      style="color: #ff0000;">app:layout_constraintLeft_toLeftOf</span>=<span
      style="color: #0000ff;">"parent"</span></div>
   <div>&nbsp; &nbsp;<span
      style="color: #ff0000;">app:layout_constraintRight_toRightOf</span>=<span
      style="color: #0000ff;">"parent"</span></div>
   <div>&nbsp; &nbsp;<span
      style="color: #ff0000;">app:layout_constraintTop_toTopOf</span>=<span
      style="color: #0000ff;">"parent"</span> <span
      style="color: #800000;">/&gt;</span></div><br>
   <div><span
      style="color: #800000;">&lt;/androidx.constraintlayout.widget.ConstraintLayout&gt;</span>
   </div>
  </div>
     </muestra-codigo>
     </div>`;
 }
}

customElements.define("e25-activity-main", E25ActivityMain);