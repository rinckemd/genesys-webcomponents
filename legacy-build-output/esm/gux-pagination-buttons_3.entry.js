import { r as registerInstance, c as createEvent, h, g as getElement } from './index-816e34d8.js';
import { b as buildI18nForComponent } from './index-fbebbbd0.js';
import './get-closest-element-1597503c.js';

const page = "Page";
const totalPages = " of {totalPages, number}";
const first = "First";
const previous = "Previous";
const next = "Next";
const last = "Last";
const pageInputLabel = "Page {currentPage, number} of {totalPages, number}";
const paginationResources$2 = {
	page: page,
	totalPages: totalPages,
	first: first,
	previous: previous,
	next: next,
	last: last,
	pageInputLabel: pageInputLabel
};

class GuxPaginationButtonsService {
  static getPageList(currentPage, totalPages) {
    if (totalPages <= 10) {
      return [...Array(totalPages).keys()].map(index => {
        const pageNumber = index + 1;
        return {
          pageNumber,
          display: String(pageNumber),
          current: pageNumber === currentPage
        };
      });
    }
    if (currentPage <= 5) {
      const startPageList = [...Array(6).keys()].map(index => {
        const pageNumber = index + 1;
        return {
          pageNumber,
          display: String(pageNumber),
          current: pageNumber === currentPage
        };
      });
      return [
        ...startPageList,
        {
          pageNumber: 7,
          display: '...',
          current: false
        },
        {
          pageNumber: totalPages,
          display: String(totalPages),
          current: false
        }
      ];
    }
    if (currentPage > totalPages - 5) {
      const endPageList = [...Array(6).keys()].map(index => {
        const pageNumber = index + totalPages - 5;
        return {
          pageNumber,
          display: String(pageNumber),
          current: pageNumber === currentPage
        };
      });
      return [
        {
          pageNumber: 1,
          display: '1',
          current: false
        },
        {
          pageNumber: totalPages - 6,
          display: '...',
          current: false
        },
        ...endPageList
      ];
    }
    const middlePageList = [...Array(5).keys()].map(index => {
      const pageNumber = index + currentPage - 2;
      return {
        pageNumber,
        display: String(pageNumber),
        current: pageNumber === currentPage
      };
    });
    return [
      {
        pageNumber: 1,
        display: '1',
        current: false
      },
      {
        pageNumber: currentPage - 3,
        display: '...',
        current: false
      },
      ...middlePageList,
      {
        pageNumber: currentPage + 3,
        display: '...',
        current: false
      },
      {
        pageNumber: totalPages,
        display: String(totalPages),
        current: false
      }
    ];
  }
}

const guxPaginationButtonsCss = "gux-pagination-buttons{color:#2e394c}gux-pagination-buttons .gux-pagination-buttons-container{display:flex;flex-direction:row;flex-wrap:nowrap;align-content:stretch;align-items:center;justify-content:flex-end}gux-pagination-buttons .gux-pagination-buttons-container.gux-expanded{justify-content:center}gux-pagination-buttons .gux-pagination-buttons-container>div{flex:0 1 auto;align-self:auto;order:0}gux-pagination-buttons .gux-pagination-buttons-container .gux-pagination-buttons-group{white-space:nowrap}gux-pagination-buttons .gux-pagination-buttons-container .gux-pagination-buttons-group gux-button-slot-beta:not(:first-of-type){margin-left:4px}gux-pagination-buttons .gux-pagination-buttons-container .gux-pagination-buttons-input-container{display:flex;flex-direction:row;flex-wrap:nowrap;align-content:stretch;align-items:center;justify-content:center;margin:0 16px}gux-pagination-buttons .gux-pagination-buttons-container .gux-pagination-buttons-input-container>div{flex:0 1 auto;align-self:auto;order:0;white-space:nowrap}gux-pagination-buttons .gux-pagination-buttons-container .gux-pagination-buttons-input-container .gux-pagination-buttons-input{width:60px;margin:0 8px}gux-pagination-buttons .gux-pagination-buttons-container .gux-pagination-buttons-input-container .gux-pagination-buttons-input input{width:inherit;text-align:center}gux-pagination-buttons .gux-pagination-buttons-container .gux-pagination-buttons-list-container{display:flex;flex-direction:row;flex-wrap:nowrap;align-content:stretch;align-items:center;justify-content:center;margin:0 16px}gux-pagination-buttons .gux-pagination-buttons-container .gux-pagination-buttons-list-container .gux-pagination-buttons-list-button{height:32px;padding:0 4px;margin:0 4px;background:inherit;border:none;border-radius:2px}gux-pagination-buttons .gux-pagination-buttons-container .gux-pagination-buttons-list-container .gux-pagination-buttons-list-button:focus-visible{outline:3px solid #aac9ff;outline-offset:1px;box-shadow:0 0 0 1px #fdfdfd}gux-pagination-buttons .gux-pagination-buttons-container .gux-pagination-buttons-list-container .gux-pagination-buttons-list-button.gux-current{font-weight:600}gux-pagination-buttons .gux-pagination-buttons-container .gux-pagination-buttons-list-container .gux-pagination-buttons-list-button.gux-target{color:#2a60c8;cursor:pointer}gux-pagination-buttons .gux-pagination-buttons-container .gux-pagination-buttons-spacer{width:12px}";

const GuxPaginationButtons = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.internalcurrentpagechange = createEvent(this, "internalcurrentpagechange", 3);
    this.currentPage = undefined;
    this.totalPages = undefined;
    this.layout = 'full';
  }
  get onFirstPage() {
    return this.currentPage <= 1;
  }
  get onLastPage() {
    return this.currentPage >= this.totalPages;
  }
  handleClickFirst() {
    this.internalcurrentpagechange.emit(1);
  }
  handleClickPrevious() {
    this.internalcurrentpagechange.emit(this.currentPage - 1);
  }
  handleClickNext() {
    this.internalcurrentpagechange.emit(this.currentPage + 1);
  }
  handleClickLast() {
    this.internalcurrentpagechange.emit(this.totalPages);
  }
  handleClickPage(pageNumber) {
    this.internalcurrentpagechange.emit(pageNumber);
  }
  setPageFromInput(value) {
    const page = parseInt(value, 10);
    if (!page || isNaN(page)) {
      this.textFieldRef.value = String(this.currentPage);
    }
    else {
      this.internalcurrentpagechange.emit(page);
    }
  }
  getPageListEnteries(currentPage, totalPages) {
    return GuxPaginationButtonsService.getPageList(currentPage, totalPages).reduce((acc, cv) => {
      if (cv.current) {
        return acc.concat((h("button", { class: "gux-pagination-buttons-list-button gux-current" }, cv.display)));
      }
      return acc.concat((h("button", { class: "gux-pagination-buttons-list-button gux-target", onClick: () => this.handleClickPage(cv.pageNumber) }, cv.display)));
    }, []);
  }
  getSmallPagePicker() {
    return (h("div", { class: 'gux-pagination-buttons-spacer' }));
  }
  getExpandedPagePicker() {
    return (h("div", { class: "gux-pagination-buttons-list-container" }, this.getPageListEnteries(this.currentPage, this.totalPages)));
  }
  getFullPagePicker() {
    return (h("div", { class: "gux-pagination-buttons-input-container" }, h("div", null, this.i18n('page')), h("div", { class: "gux-pagination-buttons-input" }, h("gux-form-field-text-like", { "label-position": "screenreader" }, h("label", { slot: "label" }, this.i18n('pageInputLabel', {
      currentPage: this.currentPage,
      totalPages: this.totalPages
    })), h("input", { type: "text", slot: "input", value: String(this.currentPage), ref: ref => (this.textFieldRef = ref), onChange: () => this.setPageFromInput(this.textFieldRef.value) }))), h("div", null, this.i18n('totalPages', { totalPages: this.totalPages }))));
  }
  getPagePicker(layout) {
    if (layout === 'small') {
      return this.getSmallPagePicker();
    }
    if (layout === 'expanded') {
      return this.getExpandedPagePicker();
    }
    return this.getFullPagePicker();
  }
  async componentWillLoad() {
    this.i18n = await buildI18nForComponent(this.root, paginationResources$2);
  }
  render() {
    return (h("div", { class: `gux-pagination-buttons-container gux-${this.layout}` }, h("div", { class: "gux-pagination-buttons-group" }, h("gux-button-slot-beta", { accent: "secondary" }, h("button", { title: this.i18n('first'), disabled: this.onFirstPage, onClick: this.handleClickFirst.bind(this) }, h("gux-icon", { decorative: true, "icon-name": "chevron-double-left" }))), h("gux-button-slot-beta", { accent: "secondary" }, h("button", { title: this.i18n('previous'), disabled: this.onFirstPage, onClick: this.handleClickPrevious.bind(this) }, h("gux-icon", { decorative: true, "icon-name": "chevron-small-left" })))), this.getPagePicker(this.layout), h("div", { class: "gux-pagination-buttons-group" }, h("gux-button-slot-beta", { accent: "secondary" }, h("button", { title: this.i18n('next'), disabled: this.onLastPage, onClick: this.handleClickNext.bind(this) }, h("gux-icon", { decorative: true, "icon-name": "chevron-small-right" }))), h("gux-button-slot-beta", { accent: "secondary" }, h("button", { title: this.i18n('last'), disabled: this.onLastPage, onClick: this.handleClickLast.bind(this) }, h("gux-icon", { decorative: true, "icon-name": "chevron-double-right" }))))));
  }
  get root() { return getElement(this); }
};
GuxPaginationButtons.style = guxPaginationButtonsCss;

const itemCountDisplay = "{firstItem, number} - {lastItem, number}";
const totalItems = " of {totalItems, number}";
const paginationResources$1 = {
	itemCountDisplay: itemCountDisplay,
	totalItems: totalItems
};

const guxPaginationItemCountsCss = "gux-pagination-item-counts{color:#2e394c}gux-pagination-item-counts .gux-pagination-item-counts-container{white-space:nowrap}gux-pagination-item-counts .gux-pagination-item-counts-container .gux-pagination-item-counts-range{font-weight:bold}";

const GuxPaginationItemCounts = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.totalItems = 0;
    this.currentPage = 0;
    this.itemsPerPage = 25;
  }
  get firstItem() {
    if (this.totalItems < 1) {
      return 0;
    }
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }
  get lastItem() {
    if (this.totalItems < 1) {
      return 0;
    }
    return Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
  }
  async componentWillLoad() {
    this.i18n = await buildI18nForComponent(this.root, paginationResources$1);
  }
  render() {
    return (h("div", { class: "gux-pagination-item-counts-container" }, h("span", { class: "gux-pagination-item-counts-range" }, this.i18n('itemCountDisplay', {
      firstItem: this.firstItem,
      lastItem: this.lastItem
    })), h("span", null, this.i18n('totalItems', { totalItems: this.totalItems }))));
  }
  get root() { return getElement(this); }
};
GuxPaginationItemCounts.style = guxPaginationItemCountsCss;

const perPage = "per page";
const itemsPerPage = "Items per page";
const rangeSelected = "Items per page dropdown, {range} selected";
const paginationResources = {
	perPage: perPage,
	itemsPerPage: itemsPerPage,
	rangeSelected: rangeSelected
};

const guxPaginationItemsPerPageCss = "gux-pagination-items-per-page{color:#2e394c}gux-pagination-items-per-page .gux-pagination-items-per-page-container{display:flex;flex-direction:row;flex-wrap:nowrap;align-content:stretch;align-items:center;justify-content:center}gux-pagination-items-per-page .gux-pagination-items-per-page-container>div{flex:0 1 auto;align-self:auto;order:0;white-space:nowrap}gux-pagination-items-per-page .gux-pagination-items-per-page-container .gux-pagination-items-per-page-picker{margin:0 8px 0 16px}";

const GuxPaginationItemsPerPage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.internalitemsperpagechange = createEvent(this, "internalitemsperpagechange", 3);
    this.itemsPerPage = 25;
  }
  handleChange(event) {
    event.stopPropagation();
    const newItemsPerPageValue = parseInt(this.dropdownElement.value, 10);
    this.internalitemsperpagechange.emit(newItemsPerPageValue);
  }
  async componentWillLoad() {
    this.i18n = await buildI18nForComponent(this.root, paginationResources);
  }
  getDropdown() {
    return (h("gux-dropdown", { ref: el => (this.dropdownElement = el), value: `${this.itemsPerPage}`, "aria-label": this.i18n('rangeSelected', {
        range: this.itemsPerPage
      }) }, h("gux-listbox", { "aria-label": this.i18n('itemsPerPage') }, h("gux-option", { value: "25" }, "25"), h("gux-option", { value: "50" }, "50"), h("gux-option", { value: "75" }, "75"), h("gux-option", { value: "100" }, "100"))));
  }
  render() {
    return (h("div", { class: "gux-pagination-items-per-page-container" }, h("div", { class: "gux-pagination-items-per-page-picker" }, this.getDropdown()), h("div", null, this.i18n('perPage'))));
  }
  get root() { return getElement(this); }
};
GuxPaginationItemsPerPage.style = guxPaginationItemsPerPageCss;

export { GuxPaginationButtons as gux_pagination_buttons, GuxPaginationItemCounts as gux_pagination_item_counts, GuxPaginationItemsPerPage as gux_pagination_items_per_page };
