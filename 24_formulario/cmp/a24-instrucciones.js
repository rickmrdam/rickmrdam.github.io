import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class A24Instrucciones extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. Instrucciones</h1>
    <div class="horizontal">
     <figure>
      <img src="/24_formulario/img/vista.png" alt="Vista de Formulario">
     </figure>
     <figure>
      <img src="/24_formulario/img/vista2.png" alt="Formulario con datos">
     </figure>
     <figure>
      <img src="/24_formulario/img/vista3.png"
        alt="Formulario muestra resultados">
     </figure>
    </div>
    <div class="lectura">
     <ul>
      <li>
       <p>En esta lección se muestra como crear un formulario y ejecutarlo.</p>
      </li>
      <li>
       <p>
        Son los mismos pasos que en las instrucciones para el ejemplo de Android
        Studio.
       </p>
      </li>
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
        Modifica el proyecto con el contenido de los archivos que se muestran en
        esta lección.
       </p>
      </li>
      <li>
       <p>
        Ejecuta el proyecto sobre el emulador de teléfono o el dispositivo real.
        <a class="noPrint"
          href="https://drive.google.com/file/d/1bczuHcSEFmlq_f4K8LpewkbzayPNbf9f/view?usp=sharing"
          target="_blank" >Video sobre como ejecutar el proyecto.</a>
       </p>
      </li>
     </ul>
    </div>`;
 }
}

customElements.define("a24-instrucciones", A24Instrucciones);