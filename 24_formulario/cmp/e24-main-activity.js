import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class E24MainActivity extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>E. app/java/io.github.gilpgdm/MainActivity.kt</h1>
   <muestra-codigo>
   <div>
   <div><span style="color: #0000ff;">package</span>
    io.github.gilpgdam.formulario</div><br>
   <div><span style="color: #0000ff;">import</span> android.os.Bundle</div>
   <div><span style="color: #0000ff;">import</span> android.widget.Button</div>
   <div><span style="color: #0000ff;">import</span> android.widget.EditText
   </div>
   <div><span style="color: #0000ff;">import</span>
    androidx.appcompat.app.AppCompatActivity</div>
   <div><span style="color: #0000ff;">import</span>
    com.google.android.material.snackbar.Snackbar</div><br>
   <div><span style="color: #0000ff;">class</span> <span
      style="color: #267f99;">MainActivity</span> :</div>
   <div>&nbsp;<span style="color: #267f99;">AppCompatActivity</span>() {</div>
   <div>&nbsp;<span style="color: #0000ff;">override</span> <span
      style="color: #0000ff;">fun</span> <span
      style="color: #795e26;">onCreate</span>(</div>
   <div>&nbsp; <span style="color: #001080;">savedInstanceState</span>: <span
      style="color: #267f99;">Bundle?</span></div>
   <div>&nbsp;) {</div>
   <div>&nbsp; <span
      style="color: #0000ff;">super</span>.onCreate(savedInstanceState)</div>
   <div>&nbsp; setContentView(<span
      style="color: #267f99;">R</span>.layout.activity_main)</div>
   <div>&nbsp; <span style="color: #0000ff;">val</span> txtNombre =</div>
   <div>&nbsp; &nbsp;findViewById&lt;<span
      style="color: #267f99;">EditText</span>&gt;(<span
      style="color: #267f99;">R</span>.id.nombre)</div>
   <div>&nbsp; <span style="color: #0000ff;">val</span> button =</div>
   <div>&nbsp; &nbsp;findViewById&lt;<span
      style="color: #267f99;">Button</span>&gt;(<span
      style="color: #267f99;">R</span>.id.button)</div>
   <div>&nbsp; button.setOnClickListener { view -&gt;</div>
   <div>&nbsp; &nbsp;<span style="color: #0000ff;">val</span> nombre =</div>
   <div>&nbsp; &nbsp; txtNombre.text.toString()</div>
   <div>&nbsp; &nbsp;<span style="color: #267f99;">Snackbar</span>.make(</div>
   <div>&nbsp; &nbsp; view,</div>
   <div>&nbsp; &nbsp; <span style="color: #a31515;">"Hola $nombre."</span>,
   </div>
   <div>&nbsp; &nbsp; <span style="color: #267f99;">Snackbar</span>.<span
      style="color: #267f99;">LENGTH_LONG</span></div>
   <div>&nbsp; &nbsp;).show()</div>
   <div>&nbsp; }</div>
   <div>&nbsp;}</div>
   <div>}</div>
  </div>
      </muestra-codigo>`;
 }
}

customElements.define("e24-main-activity", E24MainActivity);