import { r as registerInstance, h, g as getElement } from './index-816e34d8.js';
import { t as trackComponent } from './usage-55de2afe.js';

const guxButtonCss = ":host{display:inline-block;pointer-events:none;-webkit-user-select:none;user-select:none}:host(:focus){outline:none}:host(:focus) button{outline:none}::slotted(gux-icon){width:16px;height:16px}::slotted(*){padding-left:4px;vertical-align:middle}::slotted(*:first-child){padding:0}button{width:100%;min-width:32px;height:32px;padding:0 16px;overflow:hidden;color:#2e394c;text-overflow:ellipsis;white-space:nowrap;pointer-events:auto;cursor:pointer;background-color:#e2e6ee;border:none;border-radius:4px;font-size:12px;line-height:20px;font-family:Roboto, sans-serif;font-weight:400;font-weight:700}button[disabled]{color:rgba(46, 57, 76, 0.5);cursor:default;background-color:rgba(226, 230, 238, 0.5)}button:hover:enabled{background-color:#d7dce5}button:active:enabled{background-color:#c8cfda}button:focus-visible:enabled{outline:3px solid #aac9ff;outline-offset:1px;box-shadow:0 0 0 1px #fdfdfd}button.gux-tertiary{color:#2a60c8;background-color:#fdfdfd;border:1px solid #2a60c8}button.gux-tertiary[disabled]{color:rgba(42, 96, 200, 0.5);background-color:rgba(253, 253, 253, 0.5);border-color:rgba(42, 96, 200, 0.5)}button.gux-tertiary:hover:enabled{color:#fdfdfd;background-color:#2754ac}button.gux-tertiary:active:enabled{color:#fdfdfd;background-color:#23478f}button.gux-ghost{color:#2a60c8;background:none;border:none}button.gux-ghost[disabled]{color:rgba(42, 96, 200, 0.5)}button.gux-ghost:hover:enabled{color:#2754ac;background-color:rgba(222, 234, 255, 0.33)}button.gux-ghost:active:enabled{color:#2754ac;background-color:#deeaff}button.gux-primary{color:#fdfdfd;background-color:#2a60c8}button.gux-primary[disabled]{color:rgba(253, 253, 253, 0.5);background-color:rgba(42, 96, 200, 0.5)}button.gux-primary:hover:enabled{background-color:#2754ac}button.gux-primary:active:enabled{background-color:#23478f}button.gux-danger{color:#fdfdfd;background-color:#ea0b0b}button.gux-danger[disabled]{color:rgba(253, 253, 253, 0.5);background-color:rgba(234, 11, 11, 0.5)}button.gux-danger:hover:enabled{background-color:#cc0a0a}button.gux-danger:active:enabled{background-color:#ad0808}button.gux-inline{min-width:initial;height:initial;padding:0;color:#2a60c8;text-decoration:underline;background:none;border:none;font-family:Roboto, sans-serif;font-weight:400;font-size:12px;line-height:20px}button.gux-inline[disabled]{color:rgba(42, 96, 200, 0.5)}button.gux-inline:hover:enabled{color:#2754ac;background-color:rgba(222, 234, 255, 0.33)}button.gux-inline:active:enabled{color:#2754ac;background-color:#deeaff}";

const GuxButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.type = 'button';
    this.guxTitle = undefined;
    this.disabled = false;
    this.accent = 'secondary';
  }
  componentWillLoad() {
    trackComponent(this.root, { variant: this.accent });
    this.makeSlotContentDisableable();
  }
  render() {
    return (h("button", { type: this.type, title: this.guxTitle, disabled: this.disabled, class: `gux-${this.accent}` }, h("slot", null)));
  }
  makeSlotContentDisableable() {
    this.root.shadowRoot.addEventListener('click', (event) => {
      if (this.disabled) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        event.preventDefault();
      }
    });
    Array.from(this.root.children).forEach(slotElement => {
      slotElement.addEventListener('click', (event) => {
        if (this.disabled) {
          event.stopImmediatePropagation();
          event.stopPropagation();
          event.preventDefault();
        }
      });
    });
  }
  static get delegatesFocus() { return true; }
  get root() { return getElement(this); }
};
GuxButton.style = guxButtonCss;

export { GuxButton as gux_button };
