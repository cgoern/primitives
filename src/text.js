const template = document.createElement('template')
const styles = new CSSStyleSheet()
const css = String.raw
const html = String.raw

styles.replaceSync(css`
  :host {
    font-family: var(
      --UIText-FontFamily,
      var(--UI-FontFamily-Primary, sans-serif)
    );

    font-size: round(
      nearest,
      calc(
        1rem *
          pow(var(--UI-FontSizeRatio, 1.2), var(--UIText-FontSizeExponent, 0))
      ),
      1px
    );

    letter-spacing: var(
      --UIText-LetterSpacing,
      var(--UI-LetterSpacing-Primary, normal)
    );

    line-height: round(
      nearest,
      calc(((16px / 1.6) + 1em) * var(--UI-LineHeightFactor, 1)),
      2px
    );

    font-feature-settings: var(
      --UIText-FontFeatureSettings,
      var(--UI-FontFeatureSettings-Primary, 'liga' 1)
    );

    font-weight: var(--UIText-FontWeight, var(--UI-FontWeight-400, 400));
    font-optical-sizing: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :host([family='primary']) {
    --UIText-FontFamily: var(--UI-FontFamily-Primary, sans-serif);
    --UIText-LetterSpacing: var(--UI-LetterSpacing-Primary, normal);
    --UIText-FontFeatureSettings: var(--UI-FontFeatureSettings-Primary, normal);
  }

  :host([family='secondary']) {
    --UIText-FontFamily: var(--UI-FontFamily-Secondary, serif);
    --UIText-LetterSpacing: var(--UI-LetterSpacing-Secondary, normal);
    --UIText-FontFeatureSettings: var(
      --UI-FontFeatureSettings-Secondary,
      normal
    );
  }

  :host([family='tertiary']) {
    --UIText-FontFamily: var(--UI-FontFamily-Tertiary, monospace);
    --UIText-LetterSpacing: var(--UI-LetterSpacing-Tertiary, normal);
    --UIText-FontFeatureSettings: var(
      --UI-FontFeatureSettings-Tertiary,
      normal
    );
  }

  :host([level='-2']) {
    --UIText-FontSizeExponent: -2;
  }

  :host([level='-1']) {
    --UIText-FontSizeExponent: -1;
  }

  :host([level='0']) {
    --UIText-FontSizeExponent: 0;
  }

  :host([level='+1']) {
    --UIText-FontSizeExponent: 1;
  }

  :host([level='+2']) {
    --UIText-FontSizeExponent: 2;
  }

  :host([level='+3']) {
    --UIText-FontSizeExponent: 3;
  }

  :host([level='+4']) {
    --UIText-FontSizeExponent: 4;
  }

  :host([level='+5']) {
    --UIText-FontSizeExponent: 5;
  }

  :host([level='+6']) {
    --UIText-FontSizeExponent: 6;
  }

  :host([level='+7']) {
    --UIText-FontSizeExponent: 7;
  }

  :host([level='+8']) {
    --UIText-FontSizeExponent: 8;
  }

  :host([weight='100']) {
    --UIText-FontWeight: var(--UI-FontWeight-100, 100);
  }

  :host([weight='200']) {
    --UIText-FontWeight: var(--UI-FontWeight-200, 200);
  }

  :host([weight='300']) {
    --UIText-FontWeight: var(--UI-FontWeight-300, 300);
  }

  :host([weight='400']) {
    --UIText-FontWeight: var(--UI-FontWeight-400, 400);
  }

  :host([weight='500']) {
    --UIText-FontWeight: var(--UI-FontWeight-500, 500);
  }

  :host([weight='600']) {
    --UIText-FontWeight: var(--UI-FontWeight-600, 600);
  }

  :host([weight='700']) {
    --UIText-FontWeight: var(--UI-FontWeight-700, 700);
  }

  :host([weight='800']) {
    --UIText-FontWeight: var(--UI-FontWeight-800, 800);
  }

  :host([weight='900']) {
    --UIText-FontWeight: var(--UI-FontWeight-900, 900);
  }

  :host([underline]) {
    --UIText-Inner-TextDecorationLine: underline;
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

  .inner {
    text-decoration-color: var(
      --UIText-Inner-TextDecorationColor,
      var(--UI-TextDecorationColor, currentColor)
    );

    text-decoration-style: var(
      --UIText-Inner-TextDecorationStyle,
      var(--UI-TextDecorationStyle, solid)
    );

    text-decoration-thickness: var(
      --UIText-Inner-TextDecorationThickness,
      var(--UI-TextDecorationThickness, auto)
    );

    text-underline-offset: var(
      --UIText-Inner-TextUnderlineOffset,
      var(--UI-TextUnderlineOffset, auto)
    );

    text-decoration-line: var(--UIText-Inner-TextDecorationLine, none);
  }
`)

template.innerHTML = html`<div class="content">
  <div class="inner">
    <slot>Text</slot>
  </div>
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
