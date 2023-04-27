var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { h } from '@stencil/core';
import { trackComponent } from '@utils/tracking/usage';
import { OnClickOutside } from '../../../utils/decorator/on-click-outside';
import { buildI18nForComponent } from '../../../i18n';
import defaultResources from './i18n/en.json';
export class GuxActionButtonLegacy {
  constructor() {
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
  static get is() { return "gux-action-button-legacy"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["gux-action-button.less"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["gux-action-button.css"]
    };
  }
  static get properties() {
    return {
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "GuxButtonType",
          "resolved": "\"button\" | \"reset\" | \"submit\"",
          "references": {
            "GuxButtonType": {
              "location": "import",
              "path": "./gux-button.types"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The component button type"
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "'button'"
      },
      "text": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The component text."
        },
        "attribute": "text",
        "reflect": false
      },
      "disabled": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Disables the action button."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "accent": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "GuxButtonAccent",
          "resolved": "\"primary\" | \"secondary\" | \"tertiary\"",
          "references": {
            "GuxButtonAccent": {
              "location": "import",
              "path": "./gux-button.types"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "accent",
        "reflect": false,
        "defaultValue": "'secondary'"
      },
      "isOpen": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "It is used to open or not the list."
        },
        "attribute": "is-open",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get events() {
    return [{
        "method": "open",
        "name": "open",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Triggered when the menu is open"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "close",
        "name": "close",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Triggered when the menu is close"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "actionClick",
        "name": "actionClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Triggered when the action button is clicked"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "root"; }
  static get watchers() {
    return [{
        "propName": "disabled",
        "methodName": "watchDisabled"
      }, {
        "propName": "isOpen",
        "methodName": "watchValue"
      }];
  }
  static get listeners() {
    return [{
        "name": "keydown",
        "method": "handleKeydown",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "keyup",
        "method": "handleKeyup",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
__decorate([
  OnClickOutside({ triggerEvents: 'click' })
], GuxActionButtonLegacy.prototype, "onClickOutside", null);