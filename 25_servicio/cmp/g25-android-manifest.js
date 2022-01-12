import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class G25AndroidManifest extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>G. app/manifest/AndroidManifest.xml</h1>
   <muestra-codigo>
   <div>
   <div><span style="color: #800000;">&lt;?xml</span><span
      style="color: #ff0000;"> version</span>=<span
      style="color: #0000ff;">"1.0"</span><span style="color: #ff0000;">
     encoding</span>=<span style="color: #0000ff;">"utf-8"</span><span
      style="color: #800000;">?&gt;</span></div>
   <div><span style="color: #800000;">&lt;manifest</span></div>
   <div>&nbsp; <span style="color: #ff0000;">xmlns:android</span>=<span
      style="color: #0000ff;">"http://schemas.android.com/apk/res/android"</span>
   </div>
   <div>&nbsp; <span style="color: #ff0000;">package</span>=<span
      style="color: #0000ff;">"io.github.gilpgdam.servicio"</span><span
      style="color: #800000;">&gt;</span></div><br>
   <div>&nbsp;<span style="color: #800000;">&lt;uses-permission</span> <span
      style="color: #ff0000;">android:name</span>=<span
      style="color: #0000ff;">"android.permission.INTERNET"</span> <span
      style="color: #800000;">/&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;application</span></div>
   <div>&nbsp; &nbsp;<span
      style="color: #ff0000;">android:allowBackup</span>=<span
      style="color: #0000ff;">"true"</span></div>
   <div>&nbsp; &nbsp;<span style="color: #ff0000;">android:icon</span>=<span
      style="color: #0000ff;">"@mipmap/ic_launcher"</span></div>
   <div>&nbsp; &nbsp;<span style="color: #ff0000;">android:label</span>=<span
      style="color: #0000ff;">"@string/app_name"</span></div>
   <div>&nbsp; &nbsp;<span style="color: #ff0000;">android:roundIcon</span>=<span
      style="color: #0000ff;">"@mipmap/ic_launcher_round"</span></div>
   <div>&nbsp; &nbsp;<span
      style="color: #ff0000;">android:supportsRtl</span>=<span
      style="color: #0000ff;">"true"</span></div>
   <div>&nbsp; &nbsp;<span style="color: #ff0000;">android:theme</span>=<span
      style="color: #0000ff;">"@style/Theme.Servicio"</span><span
      style="color: #800000;">&gt;</span></div>
   <div>&nbsp; <span style="color: #800000;">&lt;activity</span></div>
   <div>&nbsp; &nbsp; <span style="color: #ff0000;">android:name</span>=<span
      style="color: #0000ff;">".MainActivity"</span></div>
   <div>&nbsp; &nbsp; <span style="color: #ff0000;">android:exported</span>=<span
      style="color: #0000ff;">"true"</span><span
      style="color: #800000;">&gt;</span></div>
   <div>&nbsp; &nbsp;<span style="color: #800000;">&lt;intent-filter&gt;</span>
   </div>
   <div>&nbsp; &nbsp; <span style="color: #800000;">&lt;action</span> <span
      style="color: #ff0000;">android:name</span>=<span
      style="color: #0000ff;">"android.intent.action.MAIN"</span> <span
      style="color: #800000;">/&gt;</span></div>
   <div>&nbsp; &nbsp; <span style="color: #800000;">&lt;category</span> <span
      style="color: #ff0000;">android:name</span>=<span
      style="color: #0000ff;">"android.intent.category.LAUNCHER"</span> <span
      style="color: #800000;">/&gt;</span></div>
   <div>&nbsp; &nbsp;<span style="color: #800000;">&lt;/intent-filter&gt;</span>
   </div>
   <div>&nbsp; <span style="color: #800000;">&lt;/activity&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;/application&gt;</span></div><br>
   <div><span style="color: #800000;">&lt;/manifest&gt;</span></div>
  </div>
        </muestra-codigo>`;
 }
}

customElements.define("g25-android-manifest", G25AndroidManifest);