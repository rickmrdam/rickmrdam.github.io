import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class FPrompt extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>F. La función <strong>readLine</strong></h1>
   <div class="lectura">
    <p>
     La función <dfn>readLine</dfn> sirve para pedir datos.
    </p>
    <h2>Ejemplo</h2>
   </div>
    <muestra-codigo>
    <div>
    <div><span style="color: #0000ff;">fun</span>&nbsp;<span
       style="color: #795e26;">main</span>()&nbsp;{</div>
    <div>&nbsp;<span style="color: #795e26;">print</span>(<span
       style="color: #a31515;">"Nombre:&nbsp;"</span>);</div>
    <div>&nbsp;<span
       style="color: #0000ff;">val</span>&nbsp;nombre&nbsp;=&nbsp;readLine();
    </div>
    <div>&nbsp;<span style="color: #795e26;">print</span>(<span
       style="color: #a31515;">"Hola&nbsp;"</span>);</div>
    <div>&nbsp;<span style="color: #795e26;">print</span>(nombre);</div>
    <div>&nbsp;<span style="color: #795e26;">println</span>(<span
       style="color: #a31515;">".&nbsp;Saludos."</span>);</div>
    <div>}</div>
   </div>
      </muestra-codigo>
    <div class="lectura noPrint">
     <h2>Ejecución en Replit</h2>
     <ul>
      <li>
       <p>
        <a href="https://drive.google.com/file/d/1ujeNp8TaHjqqRXl_TFT0omUGymmFWTLm/view?usp=sharing"
          target="_blank">Usa o crea una cuenta de Google.</a>
       </p>
      </li>
      <li>
       <p>
        <a href="https://drive.google.com/file/d/1dmifWNqm_gRmQuMEe67HqKBYzzDTwEHt/view?usp=sharing"
          target="_blank">Crea una cuenta de Replit usando la cuenta de
         Google.</a>
       </p>
      </li>
      <li>
       <p>
        <a href="https://drive.google.com/file/d/1XzA_10rCfmwqD0-CUYU45rmVyGbvTgxY/view?usp=sharing"
          target="_blank">Crea un proyecto <em>Kotlin</em> en Replit, edita los
         archivos de este proyecto, pruébalo y crea su página de spotlight.</a>
       </p>
      </li>
      <li>
        <p>
        <a target="_blank"
          href="https://replit.com/@GilbertoPachec3/readline?v=1">
         Revísalo en Replit.
        </a>
       </p>
      </li>
     </ul>
   </div>`;
 }
}

customElements.define("f-prompt", FPrompt);