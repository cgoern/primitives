const template = document.createElement('template')
const styles = new CSSStyleSheet()

styles.replaceSync(`
	:host {
		display: block;
	}`)

template.innerHTML = `
	<div>
		<slot>Content</slot>
	</div>`

class RichText extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: 'open' }).adoptedStyleSheets.push(styles)
	}

	connectedCallback() {
		this.shadowRoot.appendChild(template.content.cloneNode(true))
	}
}

customElements.define('c-rich-text', RichText)
