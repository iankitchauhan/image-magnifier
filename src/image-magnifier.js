class ImageMagnifier extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      this.shadowRoot.innerHTML = `
        <style>
          .container { position: relative; display: inline-block; }
          img { width: 100%; cursor: crosshair; }
          .zoom-box {
            position: fixed;
            width: 200px;
            height: 200px;
            border: 2px solid #ccc;
            background-repeat: no-repeat;
            background-size: 400% 400%;
            pointer-events: none;
            display: none;
          }
        </style>
        <div class="container">
          <img id="image" />
          <div id="zoom" class="zoom-box"></div>
        </div>
      `;
  
      this.img = this.shadowRoot.querySelector('#image');
      this.zoomBox = this.shadowRoot.querySelector('#zoom');
  
      this.img.addEventListener('mouseenter', () => this.zoomBox.style.display = 'block');
      this.img.addEventListener('mouseleave', () => this.zoomBox.style.display = 'none');
      this.img.addEventListener('mousemove', (e) => {
        const rect = this.img.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
  
        this.zoomBox.style.left = `${e.pageX + 20}px`;
        this.zoomBox.style.top = `${e.pageY - 100}px`;
        this.zoomBox.style.backgroundPosition = `${x}% ${y}%`;
      });
    }
  
    static get observedAttributes() {
      return ['src'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'src') {
        this.img.src = newValue;
        this.zoomBox.style.backgroundImage = `url(${newValue})`;
      }
    }
  
    connectedCallback() {
      const src = this.getAttribute('src');
      if (src) {
        this.img.src = src;
        this.zoomBox.style.backgroundImage = `url(${src})`;
      }
    }
  }
  
  customElements.define('image-magnifier', ImageMagnifier);
  
