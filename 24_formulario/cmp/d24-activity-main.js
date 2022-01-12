import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class D24ActivityMain extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>D. app/res/layout/activity_main.xml</h1>
   <div class="horizontal">
   <figure>
   <img src="/24_formulario/img/dis.png" alt="Diseño de vista de Formulario">
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
   <div>&nbsp;<span style="color: #800000;">&lt;Button</span></div>
   <div>&nbsp; &nbsp;<span style="color: #ff0000;">android:id</span>=<span
      style="color: #0000ff;">"@+id/button"</span></div>
   <div>&nbsp; &nbsp;<span
      style="color: #ff0000;">android:layout_width</span>=<span
      style="color: #0000ff;">"wrap_content"</span></div>
   <div>&nbsp; &nbsp;<span
      style="color: #ff0000;">android:layout_height</span>=<span
      style="color: #0000ff;">"wrap_content"</span></div>
   <div>&nbsp; &nbsp;<span
      style="color: #ff0000;">android:layout_marginTop</span>=<span
      style="color: #0000ff;">"16dp"</span></div>
   <div>&nbsp; &nbsp;<span style="color: #ff0000;">android:text</span>=<span
      style="color: #0000ff;">"@string/saludar"</span></div>
   <div>&nbsp; &nbsp;<span
      style="color: #ff0000;">app:layout_constraintEnd_toEndOf</span>=<span
      style="color: #0000ff;">"parent"</span></div>
   <div>&nbsp; &nbsp;<span
      style="color: #ff0000;">app:layout_constraintHorizontal_bias</span>=<span
      style="color: #0000ff;">"0.535"</span></div>
   <div>&nbsp; &nbsp;<span
      style="color: #ff0000;">app:layout_constraintStart_toStartOf</span>=<span
      style="color: #0000ff;">"parent"</span></div>
   <div>&nbsp; &nbsp;<span
      style="color: #ff0000;">app:layout_constraintTop_toBottomOf</span>=<span
      style="color: #0000ff;">"@+id/textInputLayout"</span> <span
      style="color: #800000;">/&gt;</span></div><br>
   <div>&nbsp;<span
      style="color: #800000;">&lt;com.google.android.material.textfield.TextInputLayout</span>
   </div>
   <div>&nbsp; &nbsp;<span style="color: #ff0000;">android:id</span>=<span
      style="color: #0000ff;">"@+id/textInputLayout"</span></div>
   <div>&nbsp; &nbsp;<span
      style="color: #ff0000;">android:layout_width</span>=<span
      style="color: #0000ff;">"0dp"</span></div>
   <div>&nbsp; &nbsp;<span
      style="color: #ff0000;">android:layout_height</span>=<span
      style="color: #0000ff;">"wrap_content"</span></div>
   <div>&nbsp; &nbsp;<span
      style="color: #ff0000;">android:layout_marginStart</span>=<span
      style="color: #0000ff;">"16dp"</span></div>
   <div>&nbsp; &nbsp;<span
      style="color: #ff0000;">android:layout_marginTop</span>=<span
      style="color: #0000ff;">"16dp"</span></div>
   <div>&nbsp; &nbsp;<span
      style="color: #ff0000;">android:layout_marginEnd</span>=<span
      style="color: #0000ff;">"16dp"</span></div>
   <div>&nbsp; &nbsp;<span
      style="color: #ff0000;">android:layout_marginBottom</span>=<span
      style="color: #0000ff;">"16dp"</span></div>
   <div>&nbsp; &nbsp;<span
      style="color: #ff0000;">app:layout_constraintBottom_toTopOf</span>=<span
      style="color: #0000ff;">"@+id/button"</span></div>
   <div>&nbsp; &nbsp;<span
      style="color: #ff0000;">app:layout_constraintEnd_toEndOf</span>=<span
      style="color: #0000ff;">"parent"</span></div>
   <div>&nbsp; &nbsp;<span
      style="color: #ff0000;">app:layout_constraintStart_toStartOf</span>=<span
      style="color: #0000ff;">"parent"</span></div>
   <div>&nbsp; &nbsp;<span
      style="color: #ff0000;">app:layout_constraintTop_toTopOf</span>=<span
      style="color: #0000ff;">"parent"</span><span
      style="color: #800000;">&gt;</span></div><br>
   <div>&nbsp; <span
      style="color: #800000;">&lt;com.google.android.material.textfield.TextInputEditText</span>
   </div>
   <div>&nbsp; &nbsp; <span style="color: #ff0000;">android:id</span>=<span
      style="color: #0000ff;">"@+id/nombre"</span></div>
   <div>&nbsp; &nbsp; <span
      style="color: #ff0000;">android:layout_width</span>=<span
      style="color: #0000ff;">"match_parent"</span></div>
   <div>&nbsp; &nbsp; <span
      style="color: #ff0000;">android:layout_height</span>=<span
      style="color: #0000ff;">"wrap_content"</span></div>
   <div>&nbsp; &nbsp; <span style="color: #ff0000;">android:hint</span>=<span
      style="color: #0000ff;">"@string/nombre"</span> <span
      style="color: #800000;">/&gt;</span></div>
   <div>&nbsp;<span
      style="color: #800000;">&lt;/com.google.android.material.textfield.TextInputLayout&gt;</span>
   </div><br>
   <div><span
      style="color: #800000;">&lt;/androidx.constraintlayout.widget.ConstraintLayout&gt;</span>
   </div>
  </div>
     </muestra-codigo>
     </div>`;
 }
}

customElements.define("d24-activity-main", D24ActivityMain);