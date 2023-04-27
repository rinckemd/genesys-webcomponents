import { r as registerInstance, c as createEvent, w as writeTask, h, g as getElement } from './index-816e34d8.js';
import { e as eventIsFrom } from './event-is-from-90b69768.js';
import { r as randomHTMLId } from './random-html-id-8e3f658c.js';
import { a as afterNextRenderTimeout } from './after-next-render-ed0f7dcd.js';
import { b as buildI18nForComponent } from './index-fbebbbd0.js';
import { t as tabsResources } from './en-46223eb1.js';
import './get-closest-element-1597503c.js';

const guxTabAdvancedCss = ".gux-tab-sorting :focus-within{margin-bottom:4px}gux-tab-advanced:not(:last-child) .gux-tab:not(.gux-dropdown-options) .gux-tab-button{border-right:1px solid #d7dce5}gux-tab-advanced:not(:last-child) .gux-dropdown-options .gux-tab-options-button{border-right:1px solid #d7dce5}gux-tab-advanced .gux-tab{display:flex;align-items:center;width:126px;height:50px;padding-bottom:2px;overflow:hidden;border-radius:4px 4px 0 0;transition:width 0.4s ease-out}gux-tab-advanced .gux-tab .gux-tab-button{display:flex;align-items:center;width:100%;width:125px;height:50px;padding-right:0;padding-left:16px;color:#000000;background-color:#f6f7f9;border:none}gux-tab-advanced .gux-tab .gux-tab-button:focus-visible{height:90%;border:3px solid #aac9ff;border-radius:5px;outline:none}gux-tab-advanced .gux-tab.gux-show{width:160px}gux-tab-advanced .gux-tab.gux-show.gux-disabled .gux-tab-button{color:rgba(0, 0, 0, 0.5)}gux-tab-advanced .gux-tab.gux-show.gux-disabled .gux-tab-options-button{color:rgba(46, 57, 76, 0.5);pointer-events:none;cursor:default}gux-tab-advanced .gux-tab .gux-tab-options-button{z-index:1;align-items:center;justify-content:center;width:35px;height:30px;padding:0;cursor:pointer;background-color:#f6f7f9;border:none}gux-tab-advanced .gux-tab .gux-tab-options-button:focus-visible{outline:none}gux-tab-advanced .gux-tab .gux-tab-options-button:focus-visible gux-icon{padding-right:0;padding-left:0;border:3px solid #aac9ff;border-radius:5px}gux-tab-advanced .gux-tab .gux-tab-options-button gux-icon{width:16px;height:16px;padding-right:16px;padding-left:8px;transition:color 0.25s}gux-tab-advanced .gux-tab:not(.gux-dropdown-options) .gux-tab-button{width:160px;height:30px;padding-right:16px}gux-tab-advanced .gux-tab:not(.gux-dropdown-options) .gux-tab-button:focus-visible{height:90%;border:3px solid #aac9ff;border-radius:5px;outline:none}gux-tab-advanced .gux-tab .tab-icon-container{display:flex;flex:0 0 16px;align-items:center;justify-content:center;height:14px;margin-right:8px}gux-tab-advanced .gux-tab .tab-icon-container gux-icon{width:100%}gux-tab-advanced .gux-tab.gux-selected{padding-bottom:0;background-color:#fdfdfd;border-bottom:2px solid #2a60c8}gux-tab-advanced .gux-tab.gux-selected .gux-tab-button{background-color:#fdfdfd}gux-tab-advanced .gux-tab.gux-selected .gux-tab-options-button{background-color:#fdfdfd}gux-tab-advanced .gux-tab:hover:not(.gux-selected):not(.gux-disabled){padding-bottom:0;border-bottom:2px solid #8a97ad}gux-tab-advanced .gux-tab gux-tooltip-title{font-size:14px;white-space:nowrap}";

const GuxTabAdvanced = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.internalactivatetabpanel = createEvent(this, "internalactivatetabpanel", 7);
    this.dropdownOptionsButtonId = randomHTMLId();
    this.tabTitle = '';
    this.focusinFromClick = false;
    this.tabId = undefined;
    this.active = false;
    this.guxDisabled = false;
    this.popoverHidden = true;
    this.hasAnimated = false;
  }
  onFocusin(event) {
    if (!this.focusinFromClick &&
      event.target.classList.contains('gux-tab-button')) {
      void this.tooltipTitleElement.setShowTooltip();
    }
  }
  onFocusout(event) {
    if (!this.root.querySelector('.gux-tab').contains(event.relatedTarget)) {
      this.popoverHidden = true;
    }
    if (event.target.classList.contains('gux-tab-button')) {
      void this.tooltipTitleElement.setHideTooltip();
    }
    this.focusinFromClick = false;
  }
  onKeydown(event) {
    switch (event.key) {
      case 'ArrowDown':
      case 'Enter':
        if (eventIsFrom('.gux-tab-options-button', event)) {
          event.preventDefault();
          this.popoverHidden = false;
          this.focusFirstItemInPopupList();
        }
        break;
      case 'Escape':
        if (eventIsFrom('gux-list[slot="dropdown-options"]', event)) {
          event.stopPropagation();
          this.popoverHidden = true;
          afterNextRenderTimeout(() => {
            var _a;
            (_a = this.tabOptionsButtonElement) === null || _a === void 0 ? void 0 : _a.focus();
          });
        }
        break;
    }
  }
  onKeyup(event) {
    switch (event.key) {
      case ' ':
        if (eventIsFrom('.gux-tab-options-button', event)) {
          this.focusFirstItemInPopupList();
        }
    }
  }
  onClick(event) {
    if (eventIsFrom('.gux-tab-options-button', event)) {
      return;
    }
    if (!this.active && !this.guxDisabled) {
      this.internalactivatetabpanel.emit(this.tabId);
    }
  }
  onMouseDown() {
    this.focusinFromClick = true;
  }
  // eslint-disable-next-line @typescript-eslint/require-await
  async guxSetActive(active) {
    this.active = active;
  }
  // eslint-disable-next-line @typescript-eslint/require-await
  async guxGetActive() {
    return this.active;
  }
  // eslint-disable-next-line @typescript-eslint/require-await
  async guxFocus() {
    this.buttonElement.focus();
  }
  get hasDropdownOptions() {
    return Boolean(this.root.querySelector('gux-list[slot="dropdown-options"]'));
  }
  focusFirstItemInPopupList() {
    const listElement = this.root.querySelector('gux-list[slot="dropdown-options"]');
    afterNextRenderTimeout(() => {
      void (listElement === null || listElement === void 0 ? void 0 : listElement.guxFocusFirstItem());
    });
  }
  toggleOptions() {
    this.popoverHidden = !this.popoverHidden;
  }
  onSelectDropdownOption(e) {
    this.popoverHidden = true;
    e.stopPropagation();
    afterNextRenderTimeout(() => {
      this.tabOptionsButtonElement.focus();
    });
  }
  async componentWillLoad() {
    this.i18n = await buildI18nForComponent(this.root, tabsResources, 'gux-tabs-advanced');
  }
  componentDidLoad() {
    this.tabTitle = this.root
      .querySelector('gux-tooltip-title')
      .textContent.trim();
    if (!this.hasAnimated) {
      writeTask(() => {
        this.root.querySelector('.gux-tab').classList.add('gux-show');
        this.hasAnimated = true;
      });
    }
  }
  popoverOnClick(e) {
    e.stopPropagation();
  }
  getDropdownOptions() {
    if (this.hasDropdownOptions) {
      return [
        h("button", { id: this.dropdownOptionsButtonId, "aria-expanded": (!this.popoverHidden).toString(), type: "button", class: "gux-tab-options-button", ref: el => (this.tabOptionsButtonElement = el), onClick: () => this.toggleOptions(), tabIndex: this.active ? 0 : -1, disabled: this.guxDisabled }, h("gux-icon", { "icon-name": "menu-kebab-vertical", "screenreader-text": this.i18n('options', {
            tabTitle: this.tabTitle
          }) })),
        h("gux-popover-list", { position: "top-end", for: this.dropdownOptionsButtonId, displayDismissButton: false, hidden: this.popoverHidden, closeOnClickOutside: true, onGuxdismiss: () => (this.popoverHidden = true), onClick: (e) => this.popoverOnClick(e), onFocusout: e => e.stopImmediatePropagation() }, h("div", { class: "gux-dropdown-option-container", onClick: (e) => this.onSelectDropdownOption(e) }, h("slot", { name: "dropdown-options" })))
      ];
    }
    return null;
  }
  render() {
    return [
      h("div", { class: {
          'gux-tab': true,
          'gux-selected': this.active,
          'gux-dropdown-options': this.hasDropdownOptions,
          'gux-disabled': this.guxDisabled
        } }, h("button", { class: "gux-tab-button", type: "button", role: "tab", "aria-selected": this.active.toString(), "aria-disabled": this.guxDisabled.toString(), "aria-controls": `gux-${this.tabId}-panel`, ref: el => (this.buttonElement = el), tabIndex: this.active ? 0 : -1, id: `gux-${this.tabId}-tab` }, h("gux-tooltip-title", { ref: el => (this.tooltipTitleElement = el) }, h("span", null, h("slot", null)))), this.getDropdownOptions())
    ];
  }
  get root() { return getElement(this); }
};
GuxTabAdvanced.style = guxTabAdvancedCss;

export { GuxTabAdvanced as gux_tab_advanced };