const template = document.createElement('template')
const styles = new CSSStyleSheet()
const css = String.raw
const html = String.raw

styles.replaceSync(css`
  :host {
    display: block;
  }
`)

template.innerHTML = html` <div>
  <slot>Content</slot>
</div>`

class UIRichText extends HTMLElement {
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

customElements.define('ui-rich-text', UIRichText)
