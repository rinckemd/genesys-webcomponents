import{r as e,c as t,h as o,g as i}from"./p-9031eb6a.js";import{r as s}from"./p-cbcbd1bb.js";import{l as r}from"./p-45fec011.js";const n=class{constructor(o){e(this,o),this.internalsectionopened=t(this,"internalsectionopened",7),this.sectionId=s("gux-accordion-section"),this.arrowPosition="default",this.contentLayout="text",this.open=!1,this.disabled=!1,this.reverseHeadings=!1}watchOpen(e){e&&this.internalsectionopened.emit()}toggle(){this.open=!this.open}isArrowPositionBeforeText(){return"before-text"===this.arrowPosition}isArrowPositionedBesideText(){return"beside-text"===this.arrowPosition}handleSlotChange(e){const t=this.root.querySelector(`[slot="${e}"]`);t&&/^H[1-6]$/.test(t.nodeName)||r("gux-accordion-section",`For accessibility reasons the ${e} slot should be filled with a HTML heading tag (h1 - h6).`)}componentWillLoad(){this.hasIconSlot=!!this.root.querySelector('[slot="icon"]')}render(){return o("section",{class:{"gux-disabled":this.disabled}},o("button",{class:{"gux-header":!0,"gux-reverse-headings":this.reverseHeadings},"aria-expanded":this.open.toString(),"aria-controls":this.sectionId,disabled:this.disabled,onClick:this.toggle.bind(this)},this.hasIconSlot&&o("slot",{name:"icon"}),o("div",{class:{"gux-header-text":!0,"gux-arrow-position-beside":this.isArrowPositionedBesideText()}},o("slot",{onSlotchange:()=>this.handleSlotChange("header"),name:"header"}),o("slot",{onSlotchange:()=>this.handleSlotChange("subheader"),name:"subheader"})),o("div",{class:{"gux-header-icon":!0,"gux-expanded":this.open,"gux-arrow-position-before-text":this.isArrowPositionBeforeText()}},o("gux-icon",{decorative:!0,"icon-name":"chevron-small-down"}))),o("div",{id:this.sectionId,class:{"gux-content":!0,"gux-expanded":this.open,"gux-text-content-layout":"text"===this.contentLayout}},o("slot",{name:"content"})))}get root(){return i(this)}static get watchers(){return{open:["watchOpen"]}}};n.style=":host{color:#2e394c;-webkit-user-select:none;user-select:none;background-color:#fdfdfd}:host:first-child .gux-header{border-top:1px solid #e2e6ee}section.gux-disabled{cursor:default;opacity:0.5}section.gux-disabled>*{pointer-events:none}.gux-header{all:unset;box-sizing:border-box;display:flex;flex-direction:row;flex-wrap:nowrap;align-content:center;align-items:center;justify-content:flex-start;width:100%;padding:12px 12px 12px 16px;margin:0;cursor:pointer;border-bottom:1px solid #e2e6ee}.gux-header .gux-header-text{flex:1 1 auto;align-self:auto;padding-right:8px;text-align:left}.gux-header .gux-header-text.gux-arrow-position-beside{flex-grow:0}.gux-header.gux-reverse-headings .gux-header-text{display:flex;flex-direction:column-reverse}.gux-header ::slotted([slot='header']){padding:0;margin:0;font-size:12px !important;font-weight:bold !important;line-height:16px !important}.gux-header ::slotted([slot='subheader']){padding:0;margin:2px 0 0;font-size:11px !important;font-weight:400 !important;color:#4c5667}.gux-reverse-headings.gux-header ::slotted([slot='subheader']){margin:0 0 2px 0}.gux-header ::slotted([slot='icon']){flex:0 0 auto;align-self:flex-start;width:16px;height:16px;margin-right:8px;color:#6b7585}.gux-reverse-headings.gux-header ::slotted([slot='icon']){align-self:flex-end}.gux-header .gux-header-icon{flex:0 1 auto;align-items:center;align-self:auto;margin-left:8px;color:#6b7585;transition:transform 0.5s ease;transform-origin:center}.gux-header .gux-header-icon gux-icon{width:16px;height:16px}.gux-header .gux-header-icon.gux-arrow-position-before-text{order:-1;margin:0 8px 0 0}.gux-header .gux-header-icon.gux-expanded{transform:rotate(-180deg)}.gux-header:focus-visible{outline:3px solid #aac9ff;outline-offset:1px;box-shadow:0 0 0 1px #fdfdfd}.gux-header:focus-visible .gux-header-icon{color:#2e394c}.gux-header:hover .gux-header-icon{color:#2e394c}.gux-content{box-sizing:border-box;display:none;border-bottom:1px solid #e2e6ee}.gux-content.gux-expanded{display:block}.gux-content.gux-text-content-layout{padding:16px}";export{n as gux_accordion_section}