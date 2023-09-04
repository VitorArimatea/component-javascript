class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open"});  
    shadow.appendChild(this.build())
    shadow.appendChild(this.styles())
  }

  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "news-card");
    
    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card-left");

    const cardImage = document.createElement("img");
    cardImage.setAttribute("class", "card-image");

    cardLeft.appendChild(cardImage);
    cardImage.src = this.getAttribute("imageLink");
    cardImage.alt = "Wallpaper do red dead 3"

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card-right");

    const type = document.createElement("span");
    type.textContent = this.getAttribute("type");
    type.setAttribute("class", "card-type");

    const text = document.createElement("p");
    text.textContent = this.getAttribute("text");
    text.setAttribute("class", "card-text")

    const cardInfo = document.createElement("div");
    cardInfo.setAttribute("class", "card-info");

    const author = document.createElement("span");
    author.textContent = "By " + (this.getAttribute("author") || "Anonymous");
    author.setAttribute("class", "card-author")

    const date = document.createElement("span");
    date.textContent = this.getAttribute("date");
    date.setAttribute("class", "card-date");

    cardRight.appendChild(type);
    cardRight.appendChild(text);
    cardRight.appendChild(cardInfo);
    
    cardInfo.appendChild(author);
    cardInfo.appendChild(date);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
    .news-card {
      position: relative;
      height: 30vh;
      width: 80vw;
      display: flex;
      background-color: #fffdfd;
      padding: 1rem;
      border-radius: 1rem;
      border: 1px solid #292929;
      box-shadow: 0px 1px 103px -39px;
    }
    
    .card-left {
      width: 40%;
    }
    
    .card-image {
      height: 200px;
      width: 100%;
      max-width: 400px;
      border-radius: 1rem;
    }
    
    .card-right {
      width: 60%;
      padding: 0 0.7rem;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }
    
    .card-type {
      color: #B637FF;
      text-transform: uppercase;
      font-family:monospace;
      font-weight: bold;
    }
    
    .card-text {
      font-size: 1.2rem;
    }
    
    .card-info {
      display: flex;
      justify-content: space-around;
    }
    
    @media (max-width: 1020px) {
      .news-card {
        flex-direction: column;
        align-items: center;
        height: 50%;
        width: auto;  
      }
      .card-left, .card-right {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    
      .card-image {
        height: 200px;
        margin-bottom: 0.7rem;
      }
    
      .card-type, .card-text {
        margin-bottom: 0.7rem;
      }
    
      .card-info {
        width: 100%;
        display: flex;
      }
    }

    @media (max-width: 445px) {
      .card-image {
        height: 170px;
        margin-bottom: 0.5rem;
      }
    }
    `
    return style;
  }
}

customElements.define("card-news", CardNews);