import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class A23Instrucciones extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. Instrucciones</h1>
    <div class="lectura">
     <figure>
      <img src="/23_ejemplo/img/vista.png" alt="Vista de Ejemplo">
      <figcaption>
       Vista de Ejemplo
      </figcaption>
     </figure>
     <ul>
      <li>
       <p>
        En esta lección se muestra como crear un proyecto de Android y
        ejecutarlo.
       </p>
      </li>
      <li>
       <p>
        Sigue los mismos pasos que en las instrucciones para instalar Android
        Studio, per posteriormente el proyecto se sube a GitHub.
       </p>
      </li>
      <li>
       <p>
        En el resto de la lección se muestran los archivos destacados.
       </p>
      </li>
     </ul>
     <h2>Pasos a seguir</h2>
     <ol>
      <li>
       <p>
        Crear un proyecto para phone & tablet de tipo Empty Activity.
        <a class="noPrint"
          href="https://drive.google.com/file/d/1F0BmnjcnSNPxiFoiHMV-eNlFVMvel4Dk/view?usp=sharing"
          target="_blank" >Video sobre como crear el proyecto.</a>
       </p>
      </li>
      <li>
       <p>
        Las aplicaciones se pueden correr sobre un dispositivo real habilitado
        para desarrollo o en un emulador dentro de la computadora de desarrollo.
        En este último caso, si no tienes configurado un emulador, hay que
        crearlo.
        <a class="noPrint"
          href="https://drive.google.com/file/d/1IuRdLgxPmCmHZyIgbL7R-jWO_Xqc4410/view?usp=sharing"
          target="_blank" >Video sobre como crear el emulador.</a>
       </p>
      </li>
      <li>
       <p>
        Ejecuta el proyecto sobre el emulador de teléfono o el dispositivo
        real.
        <a class="noPrint"
          href="https://drive.google.com/file/d/1bczuHcSEFmlq_f4K8LpewkbzayPNbf9f/view?usp=sharing"
          target="_blank" >Video sobre como ejecutar el proyecto.</a>
       </p>
      </li>
      <li>
       <p>
        Necesitas una cuenta de email. Si no la tienes, crea una.
        <a class="noPrint"
          href="https://drive.google.com/file/d/1ujeNp8TaHjqqRXl_TFT0omUGymmFWTLm/view?usp=sharing"
          target="_blank">Video sobre como crear una cuenta de Google.</a>
       </p>
      </li>
      <li>
       <p>
        Crea una cuenta en
        <a target="_blank" href="https://github.com">https://github.com</a>.
        <a class="noPrint"
          href="https://drive.google.com/file/d/18csn9i5ruy1M_Q2bfHUPr7sVA04AkpPD/view?usp=sharing"
          target="_blank">Video sobre como crear una cuenta de GitHub.</a>
       </p>
       <p>
        Recuerda que cuando hayas creado tu proyecto, debes configurar Git en tu
        computadora con las instrucciones:
       </p>
       <dl>
        <dt>
         <kbd>git config --global user.name <em>usuario_GitHub</em></kbd>
        </dt>
        <dd>
         <p>
          Donde <em>usuario_GitHub</em> es tu usuario de GitHub.
         </p>
        </dd>
        <dt>
         <kbd>git config --global user.email <em>email_GitHub</em></kbd>
        </dt>
        <dd>
         <p>
          Donde <em>email_GitHub</em> es el email registrado en GitHub.
         </p>
        </dd>
       </dl>
      </li>
      <li>
       <p>
        Sube tu proyecto a GitHub desde Android Studio.
        <a class="noPrint"
          href="https://drive.google.com/file/d/1fIBM6EPWWXBEXxwYHopuLWDCODIwh5kD/view?usp=sharing"
          target="_blank">Video sobre como subir el proyecto a GitHub.</a>
       </p>
      </li>
     </ul>
    </div>`;
 }
}

customElements.define("a23-instrucciones", A23Instrucciones);