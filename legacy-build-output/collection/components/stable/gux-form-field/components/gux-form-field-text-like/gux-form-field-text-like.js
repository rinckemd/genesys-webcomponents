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
import { forceUpdate, h } from '@stencil/core';
import { calculateInputDisabledState } from '@utils/dom/calculate-input-disabled-state';
import { onInputDisabledStateChange } from '@utils/dom/on-input-disabled-state-change';
import { OnMutation } from '@utils/decorator/on-mutation';
import { onRequiredChange } from '@utils/dom/on-attribute-change';
import { preventBrowserValidationStyling } from '@utils/dom/prevent-browser-validation-styling';
import { hasSlot } from '@utils/dom/has-slot';
import { GuxFormFieldHelp, GuxFormFieldError, GuxFormFieldLabel, GuxFormFieldContainer } from '../../functional-components/functional-components';
import { clearInput, hasContent, getComputedLabelPosition, validateFormIds, setSlotAriaDescribedby } from '../../gux-form-field.service';
import { trackComponent } from '@utils/tracking/usage';
/**
 * @slot input - Required slot for input tag
 * @slot label - Required slot for label tag
 * @slot prefix - Optional slot for prefix
 * @slot suffix - Optional slot for suffix
 * @slot error - Optional slot for error message
 * @slot help - Optional slot for help message
 */
export class GuxFormFieldTextLike {
  constructor() {
    this.clearable = undefined;
    this.labelPosition = undefined;
    this.hasPrefix = undefined;
    this.hasSuffix = undefined;
    this.computedLabelPosition = 'above';
    this.disabled = undefined;
    this.required = undefined;
    this.hasContent = false;
    this.hasError = false;
    this.hasHelp = false;
  }
  onMutation() {
    this.hasError = hasSlot(this.root, 'error');
    this.hasHelp = hasSlot(this.root, 'help');
  }
  // eslint-disable-next-line @typescript-eslint/require-await
  async guxForceUpdate() {
    this.hasContent = hasContent(this.input);
    this.hasError = hasSlot(this.root, 'error');
    this.hasHelp = hasSlot(this.root, 'help');
    forceUpdate(this.root);
  }
  componentWillLoad() {
    this.setInput();
    this.setLabel();
    this.hasError = hasSlot(this.root, 'error');
    this.hasHelp = hasSlot(this.root, 'help');
    this.hasPrefix = Boolean(this.root.querySelector('[slot="prefix"]'));
    this.hasSuffix = Boolean(this.root.querySelector('[slot="suffix"]'));
    if (this.hasPrefix) {
      setSlotAriaDescribedby(this.root, this.input, 'prefix');
    }
    if (this.hasSuffix) {
      setSlotAriaDescribedby(this.root, this.input, 'suffix');
    }
    trackComponent(this.root, { variant: this.variant });
  }
  disconnectedCallback() {
    if (this.disabledObserver) {
      this.disabledObserver.disconnect();
    }
    if (this.requiredObserver) {
      this.requiredObserver.disconnect();
    }
  }
  render() {
    return (h(GuxFormFieldContainer, { labelPosition: this.computedLabelPosition }, h(GuxFormFieldLabel, { position: this.computedLabelPosition, required: this.required }, h("slot", { name: "label", onSlotchange: () => this.setLabel() })), h("div", { class: "gux-input-and-error-container" }, h("div", { class: {
        'gux-input': true,
        'gux-input-error': this.hasError
      } }, h("div", { class: {
        'gux-input-container': true,
        'gux-disabled': this.disabled,
        'gux-has-prefix': this.hasPrefix,
        'gux-has-suffix': this.hasSuffix
      } }, h("slot", { name: "prefix" }), h("slot", { name: "input" }), h("slot", { name: "suffix" }), this.clearable && this.hasContent && !this.disabled && (h("gux-form-field-input-clear-button", { onClick: () => clearInput(this.input) })))), h(GuxFormFieldError, { show: this.hasError }, h("slot", { name: "error" })), h(GuxFormFieldHelp, { show: !this.hasError && this.hasHelp }, h("slot", { name: "help" })))));
  }
  get variant() {
    const labelPositionVariant = this.labelPosition
      ? this.labelPosition.toLowerCase()
      : 'none';
    const typeVariant = this.input.getAttribute('type');
    const clearableVariant = this.clearable ? 'clearable' : 'unclearable';
    return `${typeVariant}-${clearableVariant}-${labelPositionVariant}`;
  }
  setInput() {
    this.input = this.root.querySelector('input[type="email"][slot="input"], input[type="number"][slot="input"], input[type="password"][slot="input"], input[type="text"][slot="input"]');
    this.hasContent = hasContent(this.input);
    preventBrowserValidationStyling(this.input);
    this.input.addEventListener('input', () => {
      this.hasContent = hasContent(this.input);
    });
    this.disabled = calculateInputDisabledState(this.input);
    this.required = this.input.required;
    this.disabledObserver = onInputDisabledStateChange(this.input, (disabled) => {
      this.disabled = disabled;
    });
    this.requiredObserver = onRequiredChange(this.input, (required) => {
      this.required = required;
    });
    validateFormIds(this.root, this.input);
  }
  setLabel() {
    this.label = this.root.querySelector('label[slot="label"]');
    this.computedLabelPosition = getComputedLabelPosition(this.label, this.labelPosition);
  }
  static get is() { return "gux-form-field-text-like"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["gux-form-field-text-like.less"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["gux-form-field-text-like.css"]
    };
  }
  static get properties() {
    return {
      "clearable": {
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
          "text": ""
        },
        "attribute": "clearable",
        "reflect": false
      },
      "labelPosition": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "GuxFormFieldLabelPosition",
          "resolved": "\"above\" | \"beside\" | \"screenreader\"",
          "references": {
            "GuxFormFieldLabelPosition": {
              "location": "import",
              "path": "../../gux-form-field.types"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "label-position",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "hasPrefix": {},
      "hasSuffix": {},
      "computedLabelPosition": {},
      "disabled": {},
      "required": {},
      "hasContent": {},
      "hasError": {},
      "hasHelp": {}
    };
  }
  static get methods() {
    return {
      "guxForceUpdate": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "root"; }
}
__decorate([
  OnMutation({ childList: true, subtree: true })
], GuxFormFieldTextLike.prototype, "onMutation", null);
