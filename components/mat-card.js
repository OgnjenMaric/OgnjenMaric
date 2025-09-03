class MatCard extends HTMLElement {
  constructor() {
    super();

    // Attach a shadow DOM
    this.shadow = this.attachShadow({ mode: 'open' });

    // Create card wrapper
    this.card = document.createElement('div');
    this.card.classList.add('card');

    // Card content (using slot for flexibility)
    this.card.innerHTML = `
      <div class="card-header">
        <h3 class="card-title"><slot name="title"></slot></h3>
        <p class="card-subtitle"><slot name="subtitle"></slot></p>
      </div>
      <div class="card-content">
        <p class="card-role"><slot name="role"></slot></p>
        <strong>Description:</strong>
        <slot name="content"></slot>
        <div class="card-responsibilities">
          <strong>Responsibilities:</strong>
          <ul>
            <slot name="responsibilities"></slot>
          </ul>
        </div>
        <div class="card-environment">
          <strong>Technologies:</strong>
          <slot name="environment"></slot>
        </div>
      </div>
      <div class="card-actions">
        <slot name="actions"></slot>
      </div>
    `;

    // Card styles including improved button styling
    this.styleEl = document.createElement('style');
    this.styleEl.textContent = `
      .card {
        background: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        padding: 16px;
        margin: 16px 0;
        transition: transform 0.2s, box-shadow 0.2s;
      }
      .card:hover {
        transform: translateY(-4px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.25);
      }
      .card-title { margin: 0; font-size: 1.2rem; color: #2c3e50; }
      .card-subtitle { margin: 0; font-size: 0.9rem; color: #777; }
      
      /* Improved button styles */
      .card-actions ::slotted(button) {
        background: #1abc9c;       /* teal */
        color: #fff;
        border: none;
        padding: 10px 18px;
        border-radius: 25px;       /* rounded pill */
        cursor: pointer;
        font-weight: 600;
        font-size: 0.95rem;
        margin-right: 10px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.15);
        transition: all 0.3s ease;
      }
      .card-actions ::slotted(button:hover) {
        background: #16a085;
        transform: translateY(-2px);
        box-shadow: 0 6px 10px rgba(0,0,0,0.2);
      }
      .card-actions ::slotted(button:active) {
        transform: translateY(0);
        box-shadow: 0 4px 6px rgba(0,0,0,0.15);
      }

      .card-environment{
        margin-bottom: 20px;
      }

      /* Dynamic border style */
      .card.left-border {
        border-left: 4px solid #2c3e50;
      }
    `;

    this.shadow.appendChild(this.styleEl);
    this.shadow.appendChild(this.card);
  }

  // Watch for class attribute changes
  static get observedAttributes() {
    return ['class'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'class') {
      if (newValue.includes('left-border')) {
        this.card.classList.add('left-border');
      } else {
        this.card.classList.remove('left-border');
      }
    }
  }
}

// Define custom element
customElements.define('mat-card', MatCard);
