const template = document.createElement('template')
const styles = new CSSStyleSheet()

styles.replaceSync(`
	:host {
		display: block;
		font-family: var(--ui-text-font-family, var(--ui-font-family-primary, sans-serif));
		letter-spacing: var(--ui-text-letter-spacing, var(--ui-letter-spacing-primary, normal));
		font-size: calc(1rem * pow(var(--ui-font-size-ratio, 1.2), var(--ui-text-font-size-exponent, 0)));
		line-height: calc(((16px / 1.6) + 1em) * var(--ui-line-height-factor, 1));
		font-feature-settings: var(--ui-text-font-feature-settings, var(--ui-font-feature-settings-primary, 'liga' 1));
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	:host([family='primary']) {
        --ui-text-font-family: var(--ui-font-family-primary, sans-serif);
        --ui-text-letter-spacing: var(--ui-letter-spacing-primary, normal);
        --ui-text-font-feature-settings: var(--ui-font-feature-settings-primary, normal);
	}

	:host([family='secondary']) {
        --ui-text-font-family: var(--ui-font-family-secondary, serif);
        --ui-text-letter-spacing: var(--ui-letter-spacing-serif, normal);
        --ui-text-font-feature-settings: var(--ui-font-feature-settings-secondary, normal);
	}

	:host([family='tertiary']) {
        --ui-text-font-family: var(--ui-font-family-tertiary, monospace);
        --ui-text-letter-spacing: var(--ui-letter-spacing-tertiary, normal);
        --ui-text-font-feature-settings: var(--ui-font-feature-settings-tertiary, normal);
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
	}`)

template.innerHTML = `
	<div>
		<slot>Content</slot>
	</div>`

class UIText extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: 'open' }).adoptedStyleSheets.push(styles)
	}

	connectedCallback() {
		this.shadowRoot.appendChild(template.content.cloneNode(true))
	}
}

customElements.define('ui-text', UIText)
