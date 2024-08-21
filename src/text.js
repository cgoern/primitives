const template = document.createElement('template')
const styles = new CSSStyleSheet()
const css = String.raw
const html = String.raw

styles.replaceSync(css`
  :host {
    font-family: var(
      --ui-text-font-family,
      var(--ui-font-family-primary, sans-serif)
    );

    font-size: round(
      nearest,
      calc(
        1rem *
          pow(
            var(--ui-font-size-ratio, 1.2),
            var(--ui-text-font-size-exponent, 0)
          )
      ),
      1px
    );

    font-weight: var(--ui-text-font-weight, var(--ui-font-weight-400, 400));

    letter-spacing: var(
      --ui-text-letter-spacing,
      var(--ui-letter-spacing-primary, normal)
    );

    line-height: round(
      nearest,
      calc(((16px / 1.6) + 1em) * var(--ui-line-height-factor, 1)),
      2px
    );

    font-feature-settings: var(
      --ui-text-font-feature-settings,
      var(--ui-font-feature-settings-primary, 'liga' 1)
    );

    text-decoration-line: var(
      --ui-text-text-decoration-line,
      var(--ui-text-decoration-line, none)
    );

    text-decoration-color: var(
      --ui-text-text-decoration-color,
      var(--ui-text-decoration-color, currentColor)
    );

    text-decoration-style: var(
      --ui-text-text-decoration-style,
      var(--ui-text-decoration-style, solid)
    );

    text-decoration-thickness: var(
      --ui-text-text-decoration-thickness,
      var(--ui-text-decoration-thickness, auto)
    );

    text-underline-offset: var(
      --ui-text-text-underline-offset,
      var(--ui-text-underline-offset, auto)
    );

    font-optical-sizing: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :host([family='primary']) {
    --ui-text-font-family: var(--ui-font-family-primary, sans-serif);
    --ui-text-letter-spacing: var(--ui-letter-spacing-primary, normal);
    --ui-text-font-feature-settings: var(
      --ui-font-feature-settings-primary,
      normal
    );
  }

  :host([family='secondary']) {
    --ui-text-font-family: var(--ui-font-family-secondary, serif);
    --ui-text-letter-spacing: var(--ui-letter-spacing-serif, normal);
    --ui-text-font-feature-settings: var(
      --ui-font-feature-settings-secondary,
      normal
    );
  }

  :host([family='tertiary']) {
    --ui-text-font-family: var(--ui-font-family-tertiary, monospace);
    --ui-text-letter-spacing: var(--ui-letter-spacing-tertiary, normal);
    --ui-text-font-feature-settings: var(
      --ui-font-feature-settings-tertiary,
      normal
    );
  }

  :host([level='-2']) {
    --ui-text-font-size-exponent: -2;
  }

  :host([level='-1']) {
    --ui-text-font-size-exponent: -1;
  }

  :host([level='0']) {
    --ui-text-font-size-exponent: 0;
  }

  :host([level='+1']) {
    --ui-text-font-size-exponent: 1;
  }

  :host([level='+2']) {
    --ui-text-font-size-exponent: 2;
  }

  :host([level='+3']) {
    --ui-text-font-size-exponent: 3;
  }

  :host([level='+4']) {
    --ui-text-font-size-exponent: 4;
  }

  :host([level='+5']) {
    --ui-text-font-size-exponent: 5;
  }

  :host([level='+6']) {
    --ui-text-font-size-exponent: 6;
  }

  :host([level='+7']) {
    --ui-text-font-size-exponent: 7;
  }

  :host([level='+8']) {
    --ui-text-font-size-exponent: 8;
  }

  :host([weight='100']) {
    --ui-text-font-weight: var(--ui-font-weight-100, 100);
  }

  :host([weight='200']) {
    --ui-text-font-weight: var(--ui-font-weight-200, 200);
  }

  :host([weight='300']) {
    --ui-text-font-weight: var(--ui-font-weight-300, 300);
  }

  :host([weight='400']) {
    --ui-text-font-weight: var(--ui-font-weight-400, 400);
  }

  :host([weight='500']) {
    --ui-text-font-weight: var(--ui-font-weight-500, 500);
  }

  :host([weight='600']) {
    --ui-text-font-weight: var(--ui-font-weight-600, 600);
  }

  :host([weight='700']) {
    --ui-text-font-weight: var(--ui-font-weight-700, 700);
  }

  :host([weight='800']) {
    --ui-text-font-weight: var(--ui-font-weight-800, 800);
  }

  :host([weight='900']) {
    --ui-text-font-weight: var(--ui-font-weight-900, 900);
  }

  :host([underline]) {
    --ui-text-text-decoration-line: var(--ui-text-decoration-line, underline);
  }

  .content {
    padding: 1px 0;
  }

  .content::before,
  .content::after {
    content: '';
    display: block;
    height: 0;
  }

  .content::before {
    margin-top: calc(((1lh - round(nearest, 1cap, 2px)) / -2) - 1px);
  }

  .content::after {
    margin-bottom: calc(((1lh - round(nearest, 1cap, 2px)) / -2) - 1px);
  }
`)

template.innerHTML = html` <div class="content">
  <slot>Content</slot>
</div>`

class UIText extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({
      mode: 'open',
    }).adoptedStyleSheets.push(styles)
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define('ui-text', UIText)
