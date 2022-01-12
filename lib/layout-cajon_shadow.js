/* This work by Ricardo Armando Machorro Reyes is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

export const SHADOW_HTML = /* html */
  `<style>
    @import "/lib/css/material-icons.css";
    :host {
      display: block;
    }
    #abre {
      position: fixed;
      top: 0.5rem;
      left: 0.5rem;
    }
    #nav {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      color: var(--colLetra, black);
      background-color: var(--colFondoNav);
      transition: transform 0.7s ease-in-out;
    }
    #nav>button {
      position: absolute;
      top: 0.5rem;
      right: 1rem;
    }
    #nav>div {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: auto;
      padding: var(--padMiNav);
      box-sizing: border-box;
      scrollbar-width: thin;
      scrollbar-color: var(--colThumb) var(--colScrollbar);
    }
    #nav>div::-webkit-scrollbar {
      width: var(--anchoThumb);
      height: var(--anchoThumb);
    }
    #nav>div::-webkit-scrollbar-track {
      background: var(--colScrollbar);
    }
    #nav>div::-webkit-scrollbar-thumb {
      background-color: var(--colThumb) ;
      border-radius: var(--borderRadiusThumb);
    }
    #nav>div::-webkit-scrollbar-thumb:active {
      background-color: var(--colThumbActivo);
    }
    #principal {
      box-sizing: border-box;
      background-color: var(--colBk, white);
      padding-top: var(--padDiapositivaTop)
    }
    :host(:not(.pres)) #principal {
      animation-timing-function: var(--introFuncion, ease-out);
      animation-duration: var(--introDuracion, 3s);
      animation-name: desplaza;
    }
    
    #anterior.bye {
      display: none;
    }
    #anterior, #siguiente {
      position: fixed;
      top: 0.5rem;
      background-color: var(--colAnclaToolbarFondo);
    }

    #anterior {
      transition: left 0.7s ease-in-out;
      left: 2.7rem;
    }

    #siguiente {
      left: calc(100vw - 2.5rem);
    }

    @media screen and (max-width: 999px) {
      #cierra {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: var(--colSombra);
        transform: translateX(-150%);
        transition: transform 0.7s ease-out;
      }
      :host>#nav {
        width: min(var(--anchoNav), 70%);
        box-shadow: 0.5rem 0 0.5rem var(--colSombra);
      }
      :host(.xmenu)>#nav {
        transform: translateX(-150%);
      }
      :host(.menu)>#nav,
      :host(.menu)>#cierra {
        transform: translateX(0);
      }
    }
    @media screen and (min-width: 1000px) {
      #cierra {
        display: none;
      }
      #nav {
        width: var(--anchoNav, 200px);
      }
      :host(.menu)>#nav {
        transform: translateX(-150%);
      }
      #anterior {
        left: calc(var(--anchoNav, 200px) + 0.5rem);
      }
      :host(.menu)>#anterior {
        left: 2.7rem;
      }
      #principal {
        transition: margin-left 0.7s ease-in-out;
      }
      :host(.xmenu)>#principal {
        margin-left: calc(var(--anchoNav, 200px) + 0.5rem);
      }
      :host(.menu)>#principal {
        margin-left: 0.5rem;
      }
    }
    @keyframes desplaza {
      from {
        transform: translateX(150%);
      }
      to {
        transform: translateX(0);
      }
    }
    @media print {
      #abre, #cierra, #nav, #siguientes {
        display: none;
      }
    }
  </style>
  <div id=principal>
    <slot id=contenido></slot>
  </div>
  <button id="abre" type="button" title="Menú" class="cambiaMenú">
    &#x2630;
  </button>
  <a id=anterior title="Página Anterior"><span class="material-icons">
    arrow_back
  </span></a>
  <a id=siguiente title="Página Siguiente"><span class="material-icons">
    arrow_forward
  </span></a>
  <div id="cierra" class="cambiaMenú"></div>
  <nav id="nav">
    <div>
      <slot id=slotNav name=nav></slot>
    </div>
    <button type="button" title="Cierra" class="cambiaMenú">
      &#x2715;
    </button>
  </nav>
  `;