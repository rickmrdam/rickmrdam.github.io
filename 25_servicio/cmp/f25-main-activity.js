import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class F25MainActivity extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>F. app/java/io.github.gilpgdm/MainActivity.kt</h1>
   <muestra-codigo>
   <div>
   <div><span style="color: #0000ff;">package</span> io.github.gilpgdam.servicio
   </div><br>
   <div><span style="color: #0000ff;">import</span> android.os.Bundle</div>
   <div><span style="color: #0000ff;">import</span> android.widget.TextView
   </div>
   <div><span style="color: #0000ff;">import</span>
    androidx.appcompat.app.AppCompatActivity</div>
   <div><span style="color: #0000ff;">import</span> java.net.HttpURLConnection
   </div>
   <div><span style="color: #0000ff;">import</span> java.net.URL</div><br>
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
   <div>&nbsp; <span style="color: #0000ff;">val</span> mensaje =</div>
   <div>&nbsp; &nbsp;findViewById&lt;<span
      style="color: #267f99;">TextView</span>&gt;(<span
      style="color: #267f99;">R</span>.id.mensaje)</div>
   <div>&nbsp; <span style="color: #267f99;">Thread</span> {</div>
   <div>&nbsp; &nbsp;<span style="color: #0000ff;">val</span> connection =</div>
   <div>&nbsp; &nbsp; <span style="color: #267f99;">URL</span>(<span
      style="color: #a31515;">"https://holaphp.gilbertopachec3.repl.co/"</span>)
   </div>
   <div>&nbsp; &nbsp; &nbsp;.openConnection()</div>
   <div>&nbsp; &nbsp; &nbsp; as <span
      style="color: #267f99;">HttpURLConnection</span></div>
   <div>&nbsp; &nbsp;connection.connect()</div>
   <div>&nbsp; &nbsp;<span style="color: #0000ff;">val</span> code =</div>
   <div>&nbsp; &nbsp; connection.responseCode;</div>
   <div>&nbsp; &nbsp;<span style="color: #af00db;">if</span> (<span
      style="color: #098658;">200</span> &lt;= code &amp;&amp; code &lt; <span
      style="color: #098658;">300</span>) {</div>
   <div>&nbsp; &nbsp; <span style="color: #0000ff;">val</span> text =</div>
   <div>&nbsp; &nbsp; &nbsp;connection.inputStream.use {</div>
   <div>&nbsp; &nbsp; &nbsp; it.reader()</div>
   <div>&nbsp; &nbsp; &nbsp; &nbsp;.use { reader -&gt; reader.readText() }</div>
   <div>&nbsp; &nbsp; &nbsp;}</div>
   <div>&nbsp; &nbsp; mensaje.post {</div>
   <div>&nbsp; &nbsp; &nbsp;mensaje.text = text</div>
   <div>&nbsp; &nbsp; }</div>
   <div>&nbsp; &nbsp;} <span style="color: #af00db;">else</span> {</div>
   <div>&nbsp; &nbsp; mensaje.post {</div>
   <div>&nbsp; &nbsp; &nbsp;mensaje.text =</div>
   <div>&nbsp; &nbsp; &nbsp; connection.responseMessage</div>
   <div>&nbsp; &nbsp; }</div>
   <div>&nbsp; &nbsp;}</div>
   <div>&nbsp; &nbsp;connection.disconnect()</div>
   <div>&nbsp; }.start()</div>
   <div>&nbsp;}</div>
   <div>}</div>
  </div>
      </muestra-codigo>`;
 }
}

customElements.define("f25-main-activity", F25MainActivity);