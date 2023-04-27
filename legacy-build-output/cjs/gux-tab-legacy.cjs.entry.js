'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d3bc59d7.js');
const eventIsFrom = require('./event-is-from-ad1044f2.js');
const randomHtmlId = require('./random-html-id-b86b61c0.js');

const guxTabLegacyCss = "gux-tab-legacy .gux-tab{display:flex;align-items:center;width:0;height:36px;padding:3px;margin-left:4px;overflow:hidden;border:none;transition:width 0.4s ease-out}gux-tab-legacy .gux-tab:focus-visible{padding:0;border:3px solid #aac9ff;outline:none}gux-tab-legacy .gux-tab.gux-show{width:160px}gux-tab-legacy .gux-tab .tab-title{position:relative;flex:1 1 auto;height:14px;padding-bottom:2px;overflow:hidden;font-size:12px;text-align:left;white-space:nowrap;cursor:default}gux-tab-legacy .gux-tab .tab-title::after{position:absolute;right:0;bottom:0;display:block;width:14px;height:15px;content:''}gux-tab-legacy .gux-tab .gux-tab-options-button{z-index:1;display:flex;flex:0 0 29px;align-items:center;justify-content:center;height:100%;padding:0;cursor:pointer;background:none;border:none}gux-tab-legacy .gux-tab .gux-tab-options-button:focus-visible{outline:none}gux-tab-legacy .gux-tab .gux-tab-options-button:focus-visible gux-icon{border:3px solid #aac9ff}gux-tab-legacy .gux-tab .gux-tab-options-button gux-icon{width:12px;height:12px;transition:color 0.25s}gux-tab-legacy .gux-tab .tab-icon-container{display:flex;flex:0 0 16px;align-items:center;justify-content:center;height:14px;padding-bottom:2px;margin:0 10px 0 7px}gux-tab-legacy .gux-tab .tab-icon-container gux-icon{width:100%}gux-tab-legacy .gux-tab.selected .tab-title{font-weight:bold}.gux-tab-light-theme .gux-tab{background-color:#c8cfda}.gux-tab-light-theme .gux-tab .tab-title{color:#2e394c}.gux-tab-light-theme .gux-tab .tab-title::after{background:linear-gradient(90deg, rgba(200, 207, 218, 0), #c8cfda)}.gux-tab-light-theme .gux-tab .gux-tab-options-button{color:#2e394c}.gux-tab-light-theme .gux-tab .gux-tab-options-button:hover gux-icon,.gux-tab-light-theme .gux-tab .gux-tab-options-button:focus-visible gux-icon{color:#2a60c8}.gux-tab-light-theme .gux-tab .tab-icon-container{color:#2e394c}.gux-tab-light-theme .gux-tab.selected{background-color:#fdfdfd}.gux-tab-light-theme .gux-tab.selected:active{background-color:#fdfdfd}.gux-tab-light-theme .gux-tab.selected .tab-title{color:#2e394c}.gux-tab-light-theme .gux-tab.selected .tab-title::after{background:linear-gradient(90deg, rgba(253, 253, 253, 0), #fdfdfd)}.gux-tab-light-theme .gux-tab.selected .gux-tab-options-button{color:#2e394c}.gux-tab-light-theme .gux-tab.selected .tab-icon-container{color:#2a60c8}.gux-light-theme gux-tab-legacy .gux-tab{background-color:#c8cfda}.gux-light-theme gux-tab-legacy .gux-tab .tab-title{color:#2e394c}.gux-light-theme gux-tab-legacy .gux-tab .tab-title::after{background:linear-gradient(90deg, rgba(200, 207, 218, 0), #c8cfda)}.gux-light-theme gux-tab-legacy .gux-tab .gux-tab-options-button{color:#2e394c}.gux-light-theme gux-tab-legacy .gux-tab .gux-tab-options-button:hover gux-icon,.gux-light-theme gux-tab-legacy .gux-tab .gux-tab-options-button:focus-visible gux-icon{color:#2a60c8}.gux-light-theme gux-tab-legacy .gux-tab .tab-icon-container{color:#2e394c}.gux-light-theme gux-tab-legacy .gux-tab.selected{background-color:#fdfdfd}.gux-light-theme gux-tab-legacy .gux-tab.selected:active{background-color:#fdfdfd}.gux-light-theme gux-tab-legacy .gux-tab.selected .tab-title{color:#2e394c}.gux-light-theme gux-tab-legacy .gux-tab.selected .tab-title::after{background:linear-gradient(90deg, rgba(253, 253, 253, 0), #fdfdfd)}.gux-light-theme gux-tab-legacy .gux-tab.selected .gux-tab-options-button{color:#2e394c}.gux-light-theme gux-tab-legacy .gux-tab.selected .tab-icon-container{color:#2a60c8}gux-tab-legacy.gux-light-theme .gux-tab{background-color:#c8cfda}gux-tab-legacy.gux-light-theme .gux-tab .tab-title{color:#2e394c}gux-tab-legacy.gux-light-theme .gux-tab .tab-title::after{background:linear-gradient(90deg, rgba(200, 207, 218, 0), #c8cfda)}gux-tab-legacy.gux-light-theme .gux-tab .gux-tab-options-button{color:#2e394c}gux-tab-legacy.gux-light-theme .gux-tab .gux-tab-options-button:hover gux-icon,gux-tab-legacy.gux-light-theme .gux-tab .gux-tab-options-button:focus-visible gux-icon{color:#2a60c8}gux-tab-legacy.gux-light-theme .gux-tab .tab-icon-container{color:#2e394c}gux-tab-legacy.gux-light-theme .gux-tab.selected{background-color:#fdfdfd}gux-tab-legacy.gux-light-theme .gux-tab.selected:active{background-color:#fdfdfd}gux-tab-legacy.gux-light-theme .gux-tab.selected .tab-title{color:#2e394c}gux-tab-legacy.gux-light-theme .gux-tab.selected .tab-title::after{background:linear-gradient(90deg, rgba(253, 253, 253, 0), #fdfdfd)}gux-tab-legacy.gux-light-theme .gux-tab.selected .gux-tab-options-button{color:#2e394c}gux-tab-legacy.gux-light-theme .gux-tab.selected .tab-icon-container{color:#2a60c8}gux-tab-legacy .gux-tab{background-color:#c8cfda}gux-tab-legacy .gux-tab .tab-title{color:#2e394c}gux-tab-legacy .gux-tab .tab-title::after{background:linear-gradient(90deg, rgba(200, 207, 218, 0), #c8cfda)}gux-tab-legacy .gux-tab .gux-tab-options-button{color:#2e394c}gux-tab-legacy .gux-tab .gux-tab-options-button:hover gux-icon,gux-tab-legacy .gux-tab .gux-tab-options-button:focus-visible gux-icon{color:#2a60c8}gux-tab-legacy .gux-tab .tab-icon-container{color:#2e394c}gux-tab-legacy .gux-tab.selected{background-color:#fdfdfd}gux-tab-legacy .gux-tab.selected:active{background-color:#fdfdfd}gux-tab-legacy .gux-tab.selected .tab-title{color:#2e394c}gux-tab-legacy .gux-tab.selected .tab-title::after{background:linear-gradient(90deg, rgba(253, 253, 253, 0), #fdfdfd)}gux-tab-legacy .gux-tab.selected .gux-tab-options-button{color:#2e394c}gux-tab-legacy .gux-tab.selected .tab-icon-container{color:#2a60c8}";

const GuxTabLegacy = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.internaltabselected = index.createEvent(this, "internaltabselected", 7);
    this.dropdownOptionsButtonId = randomHtmlId.randomHTMLId();
    this.tabId = undefined;
    this.active = false;
    this.tabIconName = undefined;
    this.popoverHidden = true;
    this.hasAnimated = false;
  }
  get hasDropdownOptions() {
    return Boolean(this.root.querySelector('[slot="dropdown-options"]'));
  }
  toggleOptions() {
    this.popoverHidden = !this.popoverHidden;
  }
  onSelectDropdownOption(e) {
    this.popoverHidden = true;
    e.stopPropagation();
  }
  selectTab(e) {
    if (eventIsFrom.eventIsFrom('.gux-tab-options-button', e)) {
      return;
    }
    this.popoverHidden = true;
    this.internaltabselected.emit();
  }
  popoverOnClick(e) {
    e.stopPropagation();
  }
  getDropdownOptions() {
    if (this.hasDropdownOptions) {
      return [
        index.h("button", { id: this.dropdownOptionsButtonId, type: "button", class: "gux-tab-options-button", onClick: () => this.toggleOptions() }, index.h("gux-icon", { "icon-name": "menu-kebab-vertical", decorative: true })),
        index.h("gux-popover-list", { position: "top-end", for: this.dropdownOptionsButtonId, displayDismissButton: false, hidden: this.popoverHidden, closeOnClickOutside: true, onGuxdismiss: () => (this.popoverHidden = true), onClick: (e) => this.popoverOnClick(e) }, index.h("div", { onClick: (e) => this.onSelectDropdownOption(e) }, index.h("slot", { name: "dropdown-options" })))
      ];
    }
    return null;
  }
  componentDidLoad() {
    if (!this.hasAnimated) {
      index.writeTask(() => {
        this.root.querySelector('.gux-tab').classList.add('gux-show');
        this.hasAnimated = true;
      });
    }
  }
  render() {
    return (index.h("button", { type: "button", class: `gux-tab ${this.active ? 'selected' : ''}`, onClick: e => this.selectTab(e), role: "button" }, this.tabIconName ? (index.h("div", { class: "tab-icon-container" }, index.h("gux-icon", { "icon-name": this.tabIconName, decorative: true }))) : null, index.h("span", { class: "tab-title" }, index.h("slot", { name: "title" })), this.getDropdownOptions()));
  }
  get root() { return index.getElement(this); }
};
GuxTabLegacy.style = guxTabLegacyCss;

exports.gux_tab_legacy = GuxTabLegacy;