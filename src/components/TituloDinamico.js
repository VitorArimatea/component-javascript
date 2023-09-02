class TituloDinamico extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    //Base do component
    const ComponentRoot = document.createElement("h1");
    ComponentRoot.textContent = this.getAttribute("titulo");

    //Estilizar o component
    const style = document.createElement("style");  
    style.textContent = `
      h1{
        color: orange;
      }
    `

    //Enviar para a shadow
    shadow.appendChild(ComponentRoot);
    shadow.appendChild(style);

  }
}

customElements.define("titulo-dinamico", TituloDinamico);