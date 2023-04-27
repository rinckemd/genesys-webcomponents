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
import { h, readTask, writeTask } from '@stencil/core';
import { afterNextRenderTimeout } from '@utils/dom/after-next-render';
import { buildI18nForComponent } from '../../../../i18n';
import { OnMutation } from '../../../../utils/decorator/on-mutation';
import tabsResources from '../i18n/en.json';
export class GuxTabList {
  constructor() {
    this.focused = 0;
    this.tabTriggers = undefined;
    this.hasHorizontalScrollbar = false;
    this.hasVerticalScrollbar = false;
    this.isScrolledToBeginning = false;
    this.isScrolledToEnd = false;
  }
  onFocusout(event) {
    if (!this.root.contains(event.relatedTarget)) {
      this.tabTriggers.forEach((tabTrigger, index) => {
        void tabTrigger.guxGetActive().then(activeElement => {
          if (activeElement) {
            this.focused = index;
          }
          else {
            tabTrigger.querySelector('button').setAttribute('tabindex', '-1');
          }
        });
      });
    }
  }
  onHasVerticalScrollBar() {
    this.checkDisabledScrollButtons();
  }
  onScroll() {
    this.checkDisabledScrollButtons();
  }
  onKeydown(event) {
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault();
        this.handleKeyboardScroll('forward');
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        event.preventDefault();
        this.handleKeyboardScroll('backward');
        break;
      case 'Escape':
        event.preventDefault();
        this.focusTab(this.focused);
        break;
      case 'Home':
        event.preventDefault();
        this.focusTab(0);
        break;
      case 'End':
        event.preventDefault();
        this.focusTab(this.tabTriggers.length - 1);
        break;
    }
  }
  onMutation() {
    this.setTabTriggers();
  }
  // eslint-disable-next-line @typescript-eslint/require-await
  async guxSetActive(activeTab) {
    this.tabTriggers.forEach((tabTrigger, index) => {
      const active = tabTrigger.tabId === activeTab;
      void tabTrigger.guxSetActive(active);
      if (active) {
        this.focused = index;
      }
    });
  }
  focusTab(tabIndex) {
    this.focused = tabIndex;
    this.tabTriggers.forEach((tabTrigger, index) => {
      void tabTrigger.guxGetActive().then(activeElement => {
        if (this.focused !== index && !activeElement) {
          tabTrigger.querySelector('button').setAttribute('tabindex', '-1');
        }
      });
    });
    this.tabTriggers[this.focused]
      .querySelector('button')
      .setAttribute('tabindex', '0');
    void this.tabTriggers[this.focused].guxFocus();
  }
  setTabTriggers() {
    this.tabTriggers = this.root.querySelectorAll('gux-tab');
    if (this.tabTriggers) {
      this.triggerIds = Array.from(this.tabTriggers)
        .map(trigger => `gux-${trigger.getAttribute('tab-id')}-tab`)
        .join(' ');
    }
    else {
      this.triggerIds = '';
    }
  }
  checkForScrollbarHideOrShow() {
    readTask(() => {
      const el = this.root.querySelector('.gux-scrollable-section');
      const hasHorizontalScrollbar = el.clientWidth < el.scrollWidth;
      const hasVerticalScrollbar = el.clientHeight < el.scrollHeight;
      if (hasHorizontalScrollbar !== this.hasHorizontalScrollbar) {
        this.hasHorizontalScrollbar = hasHorizontalScrollbar;
      }
      if (hasVerticalScrollbar !== this.hasVerticalScrollbar) {
        this.hasVerticalScrollbar = hasVerticalScrollbar;
      }
      this.checkDisabledScrollButtons();
    });
  }
  handleKeyboardScroll(direction) {
    const scrollableSection = this.root.querySelector('.gux-scrollable-section');
    const currentTab = this.root.querySelectorAll('gux-tab')[this.focused];
    if (direction === 'forward') {
      if (this.focused < this.tabTriggers.length - 1) {
        writeTask(() => {
          this.hasHorizontalScrollbar
            ? scrollableSection.scrollBy(currentTab.clientWidth, 0)
            : scrollableSection.scrollBy(0, currentTab.clientHeight);
        });
        this.focusTab(this.focused + 1);
      }
      else {
        writeTask(() => {
          this.hasHorizontalScrollbar
            ? scrollableSection.scrollBy(-scrollableSection.scrollWidth, 0)
            : scrollableSection.scrollBy(0, -scrollableSection.scrollHeight);
        });
        this.focusTab(0);
      }
    }
    else if (direction === 'backward') {
      if (this.focused > 0) {
        writeTask(() => {
          this.hasHorizontalScrollbar
            ? scrollableSection.scrollBy(-currentTab.clientWidth, 0)
            : scrollableSection.scrollBy(0, -currentTab.clientHeight);
        });
        this.focusTab(this.focused - 1);
      }
      else {
        writeTask(() => {
          this.hasHorizontalScrollbar
            ? scrollableSection.scrollBy(scrollableSection.scrollWidth, 0)
            : scrollableSection.scrollBy(0, scrollableSection.scrollHeight);
        });
        this.focusTab(this.tabTriggers.length - 1);
      }
    }
  }
  disconnectedCallback() {
    if (this.resizeObserver) {
      this.resizeObserver.unobserve(this.root.querySelector('.gux-tab-container'));
    }
    if (this.domObserver) {
      this.domObserver.disconnect();
    }
  }
  async componentWillLoad() {
    this.setTabTriggers();
    this.i18n = await buildI18nForComponent(this.root, tabsResources, 'gux-tabs');
  }
  componentDidLoad() {
    if (!this.resizeObserver && window.ResizeObserver) {
      this.resizeObserver = new ResizeObserver(() => this.checkForScrollbarHideOrShow());
    }
    if (this.resizeObserver) {
      this.resizeObserver.observe(this.root.querySelector('.gux-scrollable-section'));
    }
    if (!this.domObserver && window.MutationObserver) {
      this.domObserver = new MutationObserver(() => this.checkForScrollbarHideOrShow());
    }
    if (this.domObserver) {
      this.domObserver.observe(this.root, {
        childList: true,
        attributes: false,
        subtree: true
      });
    }
    afterNextRenderTimeout(() => {
      this.checkForScrollbarHideOrShow();
    }, 500);
  }
  checkDisabledScrollButtons() {
    const scrollContainer = this.root.querySelector('.gux-scrollable-section');
    if (this.hasHorizontalScrollbar) {
      const scrollLeft = scrollContainer.scrollLeft;
      const scrollLeftMax = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      this.isScrolledToBeginning = scrollLeft === 0;
      this.isScrolledToEnd = scrollLeftMax - scrollLeft === 0;
    }
    else {
      const scrollTop = scrollContainer.scrollTop;
      const scrollTopMax = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      this.isScrolledToBeginning = scrollTop === 0;
      this.isScrolledToEnd = scrollTopMax - scrollTop === 0;
    }
  }
  scrollLeft() {
    writeTask(() => {
      this.root.querySelector('.gux-scrollable-section').scrollBy(-100, 0);
    });
  }
  scrollRight() {
    writeTask(() => {
      this.root.querySelector('.gux-scrollable-section').scrollBy(100, 0);
    });
  }
  scrollUp() {
    writeTask(() => {
      this.root.querySelector('.gux-scrollable-section').scrollBy(0, -100);
    });
  }
  scrollDown() {
    writeTask(() => {
      this.root.querySelector('.gux-scrollable-section').scrollBy(0, 100);
    });
  }
  render() {
    return (h("div", { class: "gux-tab-container" }, this.hasHorizontalScrollbar
      ? this.renderScrollButton('scrollLeft')
      : this.renderScrollButton('scrollUp'), h("div", { role: "tablist", class: "gux-scrollable-section", "aria-owns": this.triggerIds }, h("slot", null)), this.hasHorizontalScrollbar
      ? this.renderScrollButton('scrollRight')
      : this.renderScrollButton('scrollDown')));
  }
  renderScrollButton(direction) {
    return (h("div", { class: "gux-scroll-button-container" }, this.hasHorizontalScrollbar || this.hasVerticalScrollbar ? (h("button", { disabled: this.getButtonDisabled(direction), tabindex: "-1", title: this.i18n(direction), "aria-label": this.i18n(direction), class: "gux-scroll-button", onClick: () => this.getScrollDirection(direction) }, h("gux-icon", { "icon-name": this.getChevronIconName(direction), decorative: true }))) : null));
  }
  getButtonDisabled(direction) {
    switch (direction) {
      case 'scrollLeft':
      case 'scrollUp':
        return this.isScrolledToBeginning;
      case 'scrollRight':
      case 'scrollDown':
        return this.isScrolledToEnd;
    }
  }
  getScrollDirection(direction) {
    switch (direction) {
      case 'scrollLeft':
        this.scrollLeft();
        break;
      case 'scrollRight':
        this.scrollRight();
        break;
      case 'scrollUp':
        this.scrollUp();
        break;
      case 'scrollDown':
        this.scrollDown();
    }
  }
  getChevronIconName(direction) {
    switch (direction) {
      case 'scrollLeft':
        return 'chevron-small-left';
      case 'scrollRight':
        return 'chevron-small-right';
      case 'scrollUp':
        return 'chevron-small-up';
      case 'scrollDown':
        return 'chevron-small-down';
    }
  }
  static get is() { return "gux-tab-list"; }
  static get originalStyleUrls() {
    return {
      "$": ["gux-tab-list.less"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["gux-tab-list.css"]
    };
  }
  static get states() {
    return {
      "focused": {},
      "tabTriggers": {},
      "hasHorizontalScrollbar": {},
      "hasVerticalScrollbar": {},
      "isScrolledToBeginning": {},
      "isScrolledToEnd": {}
    };
  }
  static get methods() {
    return {
      "guxSetActive": {
        "complexType": {
          "signature": "(activeTab: string) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
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
  static get listeners() {
    return [{
        "name": "focusout",
        "method": "onFocusout",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "hasVerticalScrollbar",
        "method": "onHasVerticalScrollBar",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "scroll",
        "method": "onScroll",
        "target": undefined,
        "capture": true,
        "passive": true
      }, {
        "name": "keydown",
        "method": "onKeydown",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
__decorate([
  OnMutation({ childList: true, subtree: true })
], GuxTabList.prototype, "onMutation", null);
