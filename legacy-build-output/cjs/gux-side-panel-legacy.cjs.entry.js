'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d3bc59d7.js');
const usage = require('./usage-da9572bf.js');

const guxSidePanelCss = "gux-side-panel-legacy aside{position:relative;display:flex;flex-direction:row-reverse;width:49px;height:100%;color:#2e394c;background-color:#fdfdfd}gux-side-panel-legacy aside.gux-left{flex-direction:row}gux-side-panel-legacy aside.gux-left .gux-panel-content{left:49px}gux-side-panel-legacy aside.gux-right .gux-panel-content{right:49px}gux-side-panel-legacy aside .gux-panel-icons{border:1px solid #e2e6ee}gux-side-panel-legacy aside .gux-panel-icons gux-side-panel-button{display:flex;flex-direction:column}gux-side-panel-legacy aside .gux-panel-content{position:absolute;width:280px;height:100%}gux-side-panel-legacy aside .gux-panel-content [slot='side-panel-content']{height:100%}gux-side-panel-legacy aside .gux-panel-content.gux-closed{display:none}.gux-side-panel-dark-theme{color:#fdfdfd}.gux-side-panel-dark-theme aside{background-color:#2e394c}.gux-side-panel-dark-theme aside .gux-panel-icons{border-color:#202937}.gux-dark-theme gux-side-panel-legacy{color:#fdfdfd}.gux-dark-theme gux-side-panel-legacy aside{background-color:#2e394c}.gux-dark-theme gux-side-panel-legacy aside .gux-panel-icons{border-color:#202937}gux-side-panel-legacy.gux-dark-theme{color:#fdfdfd}gux-side-panel-legacy.gux-dark-theme aside{background-color:#2e394c}gux-side-panel-legacy.gux-dark-theme aside .gux-panel-icons{border-color:#202937}.gux-side-panel-light-theme{color:#2e394c}.gux-light-theme gux-side-panel-legacy{color:#2e394c}gux-side-panel-legacy.gux-light-theme{color:#2e394c}gux-side-panel-legacy{color:#2e394c}";

const GuxSidePanel = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.isOpen = false;
    this.position = 'left';
  }
  get containerClass() {
    return `gux-${this.position} gux-${this.isOpen ? 'open' : 'closed'}`;
  }
  get contentClass() {
    return `gux-panel-content gux-${this.isOpen ? 'open' : 'closed'}`;
  }
  componentWillLoad() {
    usage.trackComponent(this.root, { variant: this.position });
  }
  render() {
    return (index.h("aside", { class: this.containerClass }, index.h("div", { class: "gux-panel-icons" }, index.h("slot", { name: "side-panel-icons" })), index.h("div", { class: this.contentClass }, index.h("slot", { name: "side-panel-content" }))));
  }
  get root() { return index.getElement(this); }
};
GuxSidePanel.style = guxSidePanelCss;

exports.gux_side_panel_legacy = GuxSidePanel;