import{r as t,h as s,H as i,g as o}from"./p-9031eb6a.js";import{s as h}from"./p-d176c2ae.js";import{t as r}from"./p-a818a41d.js";const a=class{constructor(s){t(this,s),this.value=void 0,this.layout="default",this.switchItems=[]}onClick(t){t.stopPropagation();const s=t.target.closest("gux-switch-item");s&&this.value!==s.value&&(this.value=s.value,h(this.root,"input"),h(this.root,"change"))}slotChanged(){this.switchItems=Array.from(this.root.children)}componentWillLoad(){r(this.root,{variant:this.layout})}componentWillRender(){this.switchItems.forEach((t=>{t.selected=t.value===this.value}))}render(){return s(i,{role:"group",class:`gux-${this.layout}`},s("slot",{onSlotchange:this.slotChanged.bind(this)}))}get root(){return o(this)}};a.style="gux-switch{display:flex;align-items:flex-end}";export{a as gux_switch}