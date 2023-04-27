import { r as registerInstance, c as createEvent, h, g as getElement } from './index-816e34d8.js';
import { a as autoUpdate, c as computePosition, o as offset, f as flip, s as shift, b as arrow } from './floating-ui.dom.esm-2389d4f3.js';
import { O as OnClickOutside } from './on-click-outside-8fa334c9.js';
import { t as trackComponent } from './usage-55de2afe.js';
import { g as getSlot } from './get-slot-52d073f3.js';
import { f as findElementById } from './find-element-by-id-4d8e4156.js';

const guxPopoverBetaCss = ".gux-popover-wrapper{position:absolute;top:0;left:0;z-index:var(--gux-zindex-popover, 2);display:inline-block;padding:16px;color:#2e394c;background-color:#fdfdfd;border-radius:4px;box-shadow:0 3px 14px rgba(46, 57, 76, 0.22)}.gux-popover-wrapper.gux-hidden{display:none}.gux-popover-wrapper .gux-arrow{position:absolute;width:10px;height:10px;background:inherit}.gux-popover-wrapper[data-placement='bottom'] .gux-arrow,.gux-popover-wrapper[data-placement='bottom-start'] .gux-arrow,.gux-popover-wrapper[data-placement='bottom-end'] .gux-arrow{border-top:1px solid #b4bccb;border-left:1px solid #b4bccb}.gux-popover-wrapper[data-placement='top'] .gux-arrow,.gux-popover-wrapper[data-placement='top-start'] .gux-arrow,.gux-popover-wrapper[data-placement='top-end'] .gux-arrow{border-right:1px solid #b4bccb;border-bottom:1px solid #b4bccb}.gux-popover-wrapper[data-placement='left'] .gux-arrow,.gux-popover-wrapper[data-placement='left-start'] .gux-arrow,.gux-popover-wrapper[data-placement='left-end'] .gux-arrow{border-top:1px solid #b4bccb;border-right:1px solid #b4bccb}.gux-popover-wrapper[data-placement='right'] .gux-arrow,.gux-popover-wrapper[data-placement='right-start'] .gux-arrow,.gux-popover-wrapper[data-placement='right-end'] .gux-arrow{border-bottom:1px solid #b4bccb;border-left:1px solid #b4bccb}.gux-popover-wrapper .gux-popover-header{font-size:12px;line-height:20px;font-family:Roboto, sans-serif;font-weight:400;font-weight:700;display:flex;flex-direction:row;align-content:center;align-items:center;justify-content:space-between;padding-bottom:16px}.gux-popover-wrapper gux-dismiss-button{float:right}";

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
const GuxPopoverBeta = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.guxdismiss = createEvent(this, "guxdismiss", 7);
    this.for = undefined;
    this.position = 'bottom';
    this.displayDismissButton = undefined;
    this.closeOnClickOutside = false;
    this.isOpen = false;
  }
  checkForClickOutside(event) {
    const clickPath = event.composedPath();
    const forElement = findElementById(this.root, this.for);
    const clickedForElement = clickPath.includes(forElement);
    if ((this.closeOnClickOutside || !this.displayDismissButton) &&
      this.isOpen &&
      !clickedForElement) {
      this.dismiss();
    }
  }
  get titleSlot() {
    return getSlot(this.root, 'title');
  }
  runUpdatePosition() {
    this.cleanupUpdatePosition = autoUpdate(findElementById(this.root, this.for), this.popupElement, () => this.updatePosition(), {
      ancestorScroll: true,
      elementResize: true,
      animationFrame: true,
      ancestorResize: true
    });
  }
  updatePosition() {
    const forElement = findElementById(this.root, this.for);
    // This is 13 because this makes the arrow look aligned
    const arrowLen = 13;
    if (this.popupElement) {
      void computePosition(forElement, this.popupElement, {
        placement: this.position,
        middleware: [
          offset(7),
          flip(),
          shift(),
          arrow({
            element: this.arrowElement,
            padding: 16
          })
        ]
      }).then(({ x, y, middlewareData, placement }) => {
        Object.assign(this.popupElement.style, {
          left: `${x}px`,
          top: `${y}px`
        });
        const side = placement.split('-')[0];
        const staticSide = {
          top: 'bottom',
          right: 'left',
          bottom: 'top',
          left: 'right'
        }[side];
        if (middlewareData.arrow) {
          const { x, y } = middlewareData.arrow;
          this.popupElement.setAttribute('data-placement', placement);
          Object.assign(this.arrowElement.style, {
            left: x != null ? `${x}px` : '',
            top: y != null ? `${y}px` : '',
            right: '',
            bottom: '',
            [staticSide]: `${-arrowLen / 2}px`,
            transform: 'rotate(45deg)'
          });
        }
      });
    }
  }
  dismiss() {
    const dismissEvent = this.guxdismiss.emit();
    if (!dismissEvent.defaultPrevented) {
      this.isOpen = false;
    }
  }
  connectedCallback() {
    trackComponent(this.root, { variant: this.position });
  }
  componentDidLoad() {
    if (this.isOpen) {
      this.runUpdatePosition();
    }
  }
  componentDidUpdate() {
    if (this.isOpen) {
      this.runUpdatePosition();
    }
    else if (this.cleanupUpdatePosition) {
      this.cleanupUpdatePosition();
    }
  }
  disconnectedCallback() {
    if (this.cleanupUpdatePosition) {
      this.cleanupUpdatePosition();
    }
  }
  renderDismissButton() {
    if (this.displayDismissButton) {
      return (h("gux-dismiss-button", { onClick: this.dismiss.bind(this), position: "inherit" }));
    }
  }
  render() {
    return (h("div", { ref: (el) => (this.popupElement = el), class: {
        'gux-hidden': !this.isOpen,
        'gux-popover-wrapper': true
      }, "data-placement": true }, h("div", { ref: (el) => (this.arrowElement = el), class: "gux-arrow" }), h("div", { class: { 'gux-popover-header': Boolean(this.titleSlot) } }, h("slot", { name: "title" }), this.renderDismissButton()), h("div", { class: "gux-popover-content" }, h("slot", null))));
  }
  get root() { return getElement(this); }
};
__decorate([
  OnClickOutside({ triggerEvents: 'mousedown' })
], GuxPopoverBeta.prototype, "checkForClickOutside", null);
GuxPopoverBeta.style = guxPopoverBetaCss;

export { GuxPopoverBeta as gux_popover_beta };
