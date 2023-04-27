import { r as registerInstance, c as createEvent, h, g as getElement } from './index-816e34d8.js';
import { t as trackComponent } from './usage-55de2afe.js';
import { O as OnClickOutside } from './on-click-outside-8fa334c9.js';
import { b as buildI18nForComponent } from './index-fbebbbd0.js';
import './get-closest-element-1597503c.js';

const actionButtonDropdown = "Dropdown for {buttonTitle}";
const defaultResources = {
	actionButtonDropdown: actionButtonDropdown
};

const guxActionButtonCss = ":host{display:block;font-family:Roboto, sans-serif;font-weight:400;font-size:12px;line-height:20px}.gux-action-button-container{min-width:128px}.gux-action-button-container>*{vertical-align:middle}.gux-action-button-container .gux-action-button{width:calc(100% - 33px);margin-right:1px}.gux-action-button-container .gux-action-button button{width:100%;max-width:none;text-align:center;border-top-right-radius:0;border-bottom-right-radius:0}.gux-action-button-container .gux-dropdown-button button{width:32px;min-width:0;padding:0;border-top-left-radius:0;border-bottom-left-radius:0}.gux-action-button-container .gux-dropdown-button button gux-icon{width:16px;height:16px}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const GuxActionButtonLegacy = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.open = createEvent(this, "open", 7);
    this.close = createEvent(this, "close", 7);
    this.actionClick = createEvent(this, "actionClick", 7);
    this.moveFocusDelay = 100;
    this.type = 'button';
    this.text = undefined;
    this.disabled = false;
    this.accent = 'secondary';
    this.isOpen = false;
  }
  handleKeydown(event) {
    const composedPath = event.composedPath();
    switch (event.key) {
      case 'Escape':
        this.isOpen = false;
        if (composedPath.includes(this.actionListElement)) {
          this.dropdownButton.focus();
        }
        break;
      case 'Tab': {
        this.isOpen = false;
        break;
      }
      case 'ArrowDown':
        event.preventDefault();
        if (composedPath.includes(this.dropdownButton)) {
          this.isOpen = true;
          setTimeout(() => {
            void this.actionListElement.setFocusOnFirstItem();
          }, this.moveFocusDelay);
        }
        break;
      case 'Enter':
        if (composedPath.includes(this.dropdownButton)) {
          this.isOpen = true;
          setTimeout(() => {
            void this.actionListElement.setFocusOnFirstItem();
          }, this.moveFocusDelay);
        }
        break;
    }
  }
  handleKeyup(event) {
    const composedPath = event.composedPath();
    switch (event.key) {
      case ' ':
        if (composedPath.includes(this.dropdownButton)) {
          event.preventDefault();
          this.isOpen = true;
          setTimeout(() => {
            void this.actionListElement.setFocusOnFirstItem();
          }, this.moveFocusDelay);
        }
        break;
    }
  }
  watchDisabled(disabled) {
    if (disabled) {
      this.isOpen = false;
    }
  }
  watchValue(isOpen) {
    if (isOpen) {
      this.open.emit();
    }
    else {
      this.close.emit();
    }
  }
  onClickOutside(event) {
    if (event.relatedTarget === null) {
      this.isOpen = false;
    }
  }
  toggle() {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
    }
  }
  onActionClick() {
    if (!this.disabled) {
      this.isOpen = false;
      this.actionClick.emit();
    }
  }
  async componentWillLoad() {
    trackComponent(this.root, { variant: this.type });
    this.i18n = await buildI18nForComponent(this.root, defaultResources);
  }
  render() {
    return (h("div", { class: "gux-action-button-container" }, h("gux-popup", { expanded: this.isOpen, disabled: this.disabled }, h("div", { slot: "target", class: "gux-action-button-container" }, h("gux-button-slot-beta", { class: "gux-action-button", accent: this.accent }, h("button", { type: this.type, disabled: this.disabled, onClick: () => this.onActionClick() }, this.text)), h("gux-button-slot-beta", { class: "gux-dropdown-button", accent: this.accent }, h("button", { type: "button", disabled: this.disabled, ref: el => (this.dropdownButton = el), onClick: () => this.toggle(), "aria-haspopup": "true", "aria-expanded": this.isOpen.toString(), "aria-label": this.i18n('actionButtonDropdown', {
        buttonTitle: this.text
      }) }, h("gux-icon", { decorative: true, "icon-name": "chevron-small-down" })))), h("gux-action-list-legacy", { slot: "popup", ref: el => (this.actionListElement = el) }, h("slot", null)))));
  }
  get root() { return getElement(this); }
  static get watchers() { return {
    "disabled": ["watchDisabled"],
    "isOpen": ["watchValue"]
  }; }
};
__decorate([
  OnClickOutside({ triggerEvents: 'click' })
], GuxActionButtonLegacy.prototype, "onClickOutside", null);
GuxActionButtonLegacy.style = guxActionButtonCss;

export { GuxActionButtonLegacy as gux_action_button_legacy };
