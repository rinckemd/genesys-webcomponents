'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d3bc59d7.js');

/*
 Stencil Client Patch Esm v2.22.3 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy(JSON.parse("[[\"gux-form-field-legacy.cjs\",[[4,\"gux-form-field-legacy\",{\"clearable\":[4],\"resize\":[1],\"displayUnits\":[1,\"display-units\"],\"valueInTooltip\":[4,\"value-in-tooltip\"],\"labelPosition\":[1,\"label-position\"],\"slottedElementType\":[32],\"computedLabelPosition\":[32],\"required\":[32],\"hasError\":[32]}]]],[\"gux-pagination.cjs\",[[1,\"gux-pagination\",{\"currentPage\":[1026,\"current-page\"],\"totalItems\":[2,\"total-items\"],\"itemsPerPage\":[1026,\"items-per-page\"],\"layout\":[1],\"totalPages\":[32]}]]],[\"gux-pagination-beta.cjs\",[[1,\"gux-pagination-beta\",{\"layout\":[1],\"currentPage\":[1026,\"current-page\"],\"totalItems\":[2,\"total-items\"],\"itemsPerPage\":[1026,\"items-per-page\"],\"totalPages\":[32],\"displayedLayout\":[32]}]]],[\"gux-phone-input-beta.cjs\",[[1,\"gux-phone-input-beta\",{\"value\":[1025],\"defaultRegion\":[1,\"default-region\"],\"labelId\":[1,\"label-id\"],\"hasError\":[4,\"has-error\"],\"disabled\":[4],\"required\":[4],\"region\":[32],\"expanded\":[32]},[[0,\"internallistboxoptionsupdated\",\"onInternallistboxoptionsupdated\"],[0,\"blur\",\"onBlur\"],[0,\"focus\",\"onFocus\"],[0,\"focusout\",\"onFocusout\"],[0,\"focusin\",\"onFocusin\"]]]]],[\"gux-command-palette-legacy.cjs\",[[0,\"gux-command-palette-legacy\",{\"filterValue\":[32],\"visible\":[32],\"open\":[64],\"close\":[64]}]]],[\"gux-month-picker-beta.cjs\",[[1,\"gux-month-picker-beta\",{\"value\":[1025],\"min\":[1],\"max\":[1],\"disabled\":[4],\"expanded\":[32],\"locale\":[32]},[[0,\"keydown\",\"onKeyDown\"]]]]],[\"gux-tab-advanced.cjs\",[[4,\"gux-tab-advanced\",{\"tabId\":[1,\"tab-id\"],\"guxDisabled\":[4,\"gux-disabled\"],\"active\":[32],\"popoverHidden\":[32],\"hasAnimated\":[32],\"guxSetActive\":[64],\"guxGetActive\":[64],\"guxFocus\":[64]},[[0,\"focusin\",\"onFocusin\"],[0,\"focusout\",\"onFocusout\"],[0,\"keydown\",\"onKeydown\"],[0,\"keyup\",\"onKeyup\"],[0,\"click\",\"onClick\"],[1,\"mousedown\",\"onMouseDown\"]]]]],[\"gux-table-toolbar-menu-button.cjs\",[[17,\"gux-table-toolbar-menu-button\",{\"showMenu\":[4,\"show-menu\"],\"expanded\":[32]},[[0,\"keydown\",\"handleKeyDown\"],[0,\"keyup\",\"handleKeyup\"]]]]],[\"gux-table-toolbar-beta.cjs\",[[1,\"gux-table-toolbar-beta\",{\"displayedLayout\":[32],\"hasContextDivider\":[32]}]]],[\"gux-toggle.cjs\",[[17,\"gux-toggle\",{\"checked\":[1028],\"disabled\":[4],\"loading\":[4],\"checkedLabel\":[1,\"checked-label\"],\"uncheckedLabel\":[1,\"unchecked-label\"],\"labelPosition\":[1,\"label-position\"],\"errorMessage\":[1,\"error-message\"],\"displayInline\":[4,\"display-inline\"]},[[0,\"click\",\"onClick\"],[0,\"keydown\",\"onKeydown\"]]]]],[\"gux-action-button.cjs\",[[1,\"gux-action-button\",{\"type\":[1],\"text\":[1],\"disabled\":[4],\"accent\":[1],\"isOpen\":[1028,\"is-open\"]},[[0,\"keydown\",\"handleKeydown\"],[0,\"keyup\",\"handleKeyup\"]]]]],[\"gux-action-button-legacy.cjs\",[[1,\"gux-action-button-legacy\",{\"type\":[1],\"text\":[1],\"disabled\":[4],\"accent\":[1],\"isOpen\":[1028,\"is-open\"]},[[0,\"keydown\",\"handleKeydown\"],[0,\"keyup\",\"handleKeyup\"]]]]],[\"gux-advanced-dropdown.cjs\",[[1,\"gux-advanced-dropdown\",{\"disabled\":[4],\"placeholder\":[1],\"noFilter\":[4,\"no-filter\"],\"filterDebounceTimeout\":[2,\"filter-debounce-timeout\"],\"dropdownHeight\":[1,\"dropdown-height\"],\"srLabelledby\":[32],\"opened\":[32],\"currentlySelectedOption\":[32],\"selectionOptions\":[32],\"getSelectedValues\":[64],\"setLabeledBy\":[64]}]]],[\"gux-button-multi.cjs\",[[1,\"gux-button-multi\",{\"text\":[1],\"disabled\":[4],\"accent\":[1],\"isOpen\":[1028,\"is-open\"]},[[0,\"keydown\",\"handleKeydown\"],[0,\"keyup\",\"handleKeyup\"]]]]],[\"gux-button-multi-legacy.cjs\",[[1,\"gux-button-multi-legacy\",{\"text\":[1],\"disabled\":[4],\"accent\":[1],\"isOpen\":[1028,\"is-open\"]},[[0,\"keydown\",\"handleKeydown\"],[0,\"keyup\",\"handleKeyup\"]]]]],[\"gux-column-manager-beta.cjs\",[[1,\"gux-column-manager-beta\",{\"highlightResults\":[32],\"keyboardOrderChange\":[32]},[[0,\"internal_order_change\",\"handleInternalorderchange\"],[0,\"internal_keyboard_reorder_start\",\"handleInternalkeyboardorderstart\"],[0,\"internal_keyboard_reorder_move\",\"handleInternalkeyboardreordermove\"],[0,\"internal_keyboard_reorder_emit\",\"handleInternalkeyboarddoreorder\"],[0,\"internal_keyboard_reorder_finish\",\"handleInternalkeyboardorderfinish\"]]]]],[\"gux-context-menu-beta.cjs\",[[17,\"gux-context-menu-beta\",{\"screenreaderText\":[1,\"screenreader-text\"],\"isOpen\":[32]},[[0,\"keydown\",\"handleKeyDown\"],[0,\"keyup\",\"handleKeyup\"]]]]],[\"gux-dropdown-multi-beta.cjs\",[[17,\"gux-dropdown-multi-beta\",{\"value\":[1025],\"disabled\":[4],\"required\":[4],\"loading\":[4],\"placeholder\":[1],\"filterable\":[4],\"filterType\":[1,\"filter-type\"],\"hasError\":[4,\"has-error\"],\"hasCreate\":[32],\"expanded\":[32],\"textInput\":[32],\"getSelectedValues\":[64]},[[0,\"internalexpanded\",\"onInternalExpanded\"],[0,\"internalcollapsed\",\"onInternalCollapsed\"],[0,\"keydown\",\"onKeydown\"],[0,\"internallistboxoptionsupdated\",\"onInternallistboxoptionsupdated\"],[0,\"internalclearselected\",\"onClearselected\"],[0,\"internalcreatenewoption\",\"onCreatenewoption\"],[0,\"blur\",\"onBlur\"],[0,\"focus\",\"onFocus\"],[0,\"focusout\",\"onFocusout\"],[0,\"focusin\",\"onFocusin\"]]]]],[\"gux-notification-toast.cjs\",[[1,\"gux-notification-toast\",{\"accent\":[1]}]]],[\"gux-simple-toast.cjs\",[[1,\"gux-simple-toast\",{\"accent\":[1]}]]],[\"gux-time-picker-beta.cjs\",[[1,\"gux-time-picker-beta\",{\"value\":[1025],\"interval\":[2],\"step\":[2],\"disabled\":[4],\"required\":[4],\"hasError\":[4,\"has-error\"],\"clockType\":[1025,\"clock-type\"],\"expanded\":[32]},[[0,\"focus\",\"onFocus\"],[0,\"blur\",\"onBlur\"],[0,\"keydown\",\"handleKeydown\"]]]]],[\"gux-tab-legacy.cjs\",[[4,\"gux-tab-legacy\",{\"tabId\":[1,\"tab-id\"],\"active\":[4],\"tabIconName\":[1,\"tab-icon-name\"],\"popoverHidden\":[32],\"hasAnimated\":[32]}]]],[\"gux-table-toolbar-action.cjs\",[[1,\"gux-table-toolbar-action\",{\"action\":[1],\"accent\":[1],\"iconOnly\":[4,\"icon-only\"],\"disabled\":[4]}]]],[\"gux-tag-beta.cjs\",[[1,\"gux-tag-beta\",{\"color\":[1],\"value\":[1],\"disabled\":[4],\"removable\":[4],\"label\":[32]},[[0,\"keydown\",\"onKeyDown\"]]]]],[\"gux-all-row-select.cjs\",[[0,\"gux-all-row-select\",{\"selected\":[1028],\"setIndeterminate\":[64]},[[0,\"input\",\"onCheck\"]]]]],[\"gux-badge-beta.cjs\",[[1,\"gux-badge-beta\",{\"color\":[1],\"bold\":[4],\"label\":[32]}]]],[\"gux-column-manager-item.cjs\",[[1,\"gux-column-manager-item\",{\"orderId\":[1,\"order-id\"],\"highlightActive\":[32],\"highlight\":[32],\"text\":[32],\"pendingReorder\":[32],\"isDragging\":[32],\"isReordering\":[32],\"guxSetHighlight\":[64],\"guxFocus\":[64]},[[0,\"blur\",\"onBlur\"],[1,\"dragstart\",\"onDragStart\"],[1,\"dragenter\",\"onDragEnter\"],[0,\"dragover\",\"onDragOver\"],[1,\"dragleave\",\"onDragLeave\"],[1,\"dragend\",\"onDragEnd\"],[1,\"drop\",\"onDrop\"]]]]],[\"gux-copy-to-clipboard-beta.cjs\",[[1,\"gux-copy-to-clipboard-beta\",{\"tooltipContent\":[32]},[[1,\"mouseleave\",\"onMouseleave\"],[0,\"focusout\",\"onFocusout\"],[0,\"focus\",\"onFocus\"]]]]],[\"gux-datepicker.cjs\",[[1,\"gux-datepicker\",{\"value\":[1025],\"label\":[1],\"numberOfMonths\":[1026,\"number-of-months\"],\"startDayOfWeek\":[2,\"start-day-of-week\"],\"minDate\":[1,\"min-date\"],\"maxDate\":[1,\"max-date\"],\"mode\":[1],\"format\":[1],\"disabled\":[4],\"formattedValue\":[32],\"minDateDate\":[32],\"maxDateDate\":[32],\"toFormattedValue\":[32],\"active\":[32]},[[0,\"keydown\",\"onKeyDown\"],[1,\"mousedown\",\"onMouseDown\"]]]]],[\"gux-dropdown-legacy.cjs\",[[4,\"gux-dropdown-legacy\",{\"mode\":[1],\"disabled\":[4],\"value\":[1025],\"placeholder\":[1],\"filterable\":[4],\"opened\":[32],\"forcedGhostValue\":[32],\"srLabeledBy\":[32],\"setLabeledBy\":[64],\"setSelected\":[64]}]]],[\"gux-form-field-number.cjs\",[[1,\"gux-form-field-number\",{\"clearable\":[4],\"labelPosition\":[1,\"label-position\"],\"computedLabelPosition\":[32],\"disabled\":[32],\"required\":[32],\"hasContent\":[32],\"hasError\":[32],\"hasHelp\":[32],\"guxForceUpdate\":[64]}]]],[\"gux-form-field-phone.cjs\",[[1,\"gux-form-field-phone\",{\"labelPosition\":[1,\"label-position\"],\"computedLabelPosition\":[32],\"disabled\":[32],\"required\":[32],\"hasError\":[32],\"hasInternalError\":[32],\"hasHelp\":[32]},[[0,\"internalError\",\"listenForInternalError\"]]]]],[\"gux-form-field-time-picker.cjs\",[[1,\"gux-form-field-time-picker\",{\"labelPosition\":[1,\"label-position\"],\"computedLabelPosition\":[32],\"disabled\":[32],\"required\":[32],\"hasError\":[32],\"hasHelp\":[32]}]]],[\"gux-modal.cjs\",[[1,\"gux-modal\",{\"size\":[1],\"trapFocus\":[4,\"trap-focus\"],\"initialFocus\":[1,\"initial-focus\"]},[[0,\"keydown\",\"handleKeyEvent\"]]]]],[\"gux-pagination-cursor.cjs\",[[1,\"gux-pagination-cursor\",{\"hasPrevious\":[4,\"has-previous\"],\"hasNext\":[4,\"has-next\"]}]]],[\"gux-popover.cjs\",[[1,\"gux-popover\",{\"for\":[1],\"position\":[1],\"displayDismissButton\":[4,\"display-dismiss-button\"],\"closeOnClickOutside\":[4,\"close-on-click-outside\"],\"hidden\":[32]}]]],[\"gux-popover-beta.cjs\",[[1,\"gux-popover-beta\",{\"for\":[1],\"position\":[1],\"displayDismissButton\":[4,\"display-dismiss-button\"],\"closeOnClickOutside\":[4,\"close-on-click-outside\"],\"isOpen\":[1028,\"is-open\"]}]]],[\"gux-popover-list-beta.cjs\",[[1,\"gux-popover-list-beta\",{\"for\":[1],\"position\":[1],\"displayDismissButton\":[4,\"display-dismiss-button\"],\"closeOnClickOutside\":[4,\"close-on-click-outside\"],\"isOpen\":[1028,\"is-open\"]}]]],[\"gux-row-select.cjs\",[[0,\"gux-row-select\",{\"selected\":[1028],\"disabled\":[4]},[[0,\"input\",\"onCheck\"]]]]],[\"gux-tab.cjs\",[[4,\"gux-tab\",{\"tabId\":[1,\"tab-id\"],\"guxDisabled\":[4,\"gux-disabled\"],\"active\":[32],\"guxSetActive\":[64],\"guxFocus\":[64],\"guxGetActive\":[64]},[[0,\"click\",\"onClick\"],[0,\"focusin\",\"onFocusin\"],[0,\"focusout\",\"onFocusout\"]]]]],[\"gux-table-beta.cjs\",[[1,\"gux-table-beta\",{\"compact\":[4],\"objectTable\":[4,\"object-table\"],\"emptyMessage\":[1,\"empty-message\"],\"resizableColumns\":[4,\"resizable-columns\"],\"isVerticalScroll\":[32],\"isHorizontalScroll\":[32],\"isScrolledToFirstCell\":[32],\"isScrolledToLastCell\":[32],\"columnResizeHover\":[32],\"getSelected\":[64]},[[3,\"scroll\",\"onScroll\"],[0,\"internalallrowselectchange\",\"onInternalAllRowSelectChange\"],[0,\"internalrowselectchange\",\"onInternalRowSelectChange\"],[3,\"mousemove\",\"onMouseMove\"],[1,\"mousedown\",\"onMouseDown\"],[3,\"mouseup\",\"onMouseUp\"]]]]],[\"gux-table-select-menu.cjs\",[[4,\"gux-table-select-menu\",{\"dropdownDisabled\":[4,\"dropdown-disabled\"],\"popoverHidden\":[32]},[[0,\"keydown\",\"onKeydown\"],[0,\"keyup\",\"onKeyup\"]]]]],[\"gux-accordion-legacy.cjs\",[[4,\"gux-accordion-legacy\",{\"headingLevel\":[2,\"heading-level\"],\"arrowPosition\":[1,\"arrow-position\"],\"sections\":[32],\"open\":[64],\"close\":[64],\"toggle\":[64]}]]],[\"gux-accordion-section.cjs\",[[1,\"gux-accordion-section\",{\"arrowPosition\":[1,\"arrow-position\"],\"contentLayout\":[1,\"content-layout\"],\"open\":[1028],\"disabled\":[4],\"reverseHeadings\":[4,\"reverse-headings\"]}]]],[\"gux-blank-state-beta.cjs\",[[1,\"gux-blank-state-beta\",{\"blankStateSize\":[32]}]]],[\"gux-breadcrumb-item.cjs\",[[1,\"gux-breadcrumb-item\",{\"href\":[1]}]]],[\"gux-chart-column-beta.cjs\",[[1,\"gux-chart-column-beta\",{\"chartData\":[16],\"xTickLabelSlant\":[4,\"x-tick-label-slant\"],\"includeLegend\":[4,\"include-legend\"],\"xFieldName\":[1,\"x-field-name\"],\"yFieldName\":[1,\"y-field-name\"],\"xAxisTitle\":[1,\"x-axis-title\"],\"yAxisTitle\":[1,\"y-axis-title\"],\"legendTitle\":[1,\"legend-title\"],\"legendPosition\":[1,\"legend-position\"],\"chartLayers\":[16],\"embedOptions\":[16]}]]],[\"gux-chart-donut-beta.cjs\",[[1,\"gux-chart-donut-beta\",{\"chartData\":[16],\"includeLegend\":[4,\"include-legend\"],\"legendPosition\":[1,\"legend-position\"],\"legendTitle\":[1,\"legend-title\"],\"colorFieldName\":[1,\"color-field-name\"],\"outerRadius\":[2,\"outer-radius\"],\"innerRadius\":[2,\"inner-radius\"],\"labelRadius\":[2,\"label-radius\"],\"labelField\":[1,\"label-field\"],\"gauge\":[4],\"centerText\":[1,\"center-text\"],\"centerSubText\":[1,\"center-sub-text\"],\"showTooltip\":[4,\"show-tooltip\"],\"tooltipOptions\":[16],\"legendX\":[2,\"legend-x\"],\"legendY\":[2,\"legend-y\"],\"legendFontSize\":[2,\"legend-font-size\"],\"legendSymbolSize\":[2,\"legend-symbol-size\"],\"embedOptions\":[16]}]]],[\"gux-chart-line-beta.cjs\",[[1,\"gux-chart-line-beta\",{\"chartData\":[16],\"xTickLabelSlant\":[4,\"x-tick-label-slant\"],\"includeLegend\":[4,\"include-legend\"],\"legendPosition\":[1,\"legend-position\"],\"includeDataPointMarkers\":[4,\"include-data-point-markers\"],\"xFieldName\":[1,\"x-field-name\"],\"xAxisTitle\":[1,\"x-axis-title\"],\"yFieldName\":[1,\"y-field-name\"],\"yAxisTitle\":[1,\"y-axis-title\"],\"legendTitle\":[1,\"legend-title\"],\"colorFieldName\":[1,\"color-field-name\"],\"strokeDash\":[4,\"stroke-dash\"],\"interpolation\":[1],\"embedOptions\":[16]}]]],[\"gux-chart-pie-beta.cjs\",[[1,\"gux-chart-pie-beta\",{\"chartData\":[16],\"includeLegend\":[4,\"include-legend\"],\"legendPosition\":[1,\"legend-position\"],\"legendTitle\":[1,\"legend-title\"],\"colorFieldName\":[1,\"color-field-name\"],\"outerRadius\":[2,\"outer-radius\"],\"labelRadius\":[2,\"label-radius\"],\"labelField\":[1,\"label-field\"],\"embedOptions\":[16]}]]],[\"gux-chart-scatter-plot-beta.cjs\",[[1,\"gux-chart-scatter-plot-beta\",{\"chartData\":[16],\"xTickLabelSlant\":[4,\"x-tick-label-slant\"],\"includeLegend\":[4,\"include-legend\"],\"legendPosition\":[1,\"legend-position\"],\"xFieldName\":[1,\"x-field-name\"],\"xAxisTitle\":[1,\"x-axis-title\"],\"yFieldName\":[1,\"y-field-name\"],\"yAxisTitle\":[1,\"y-axis-title\"],\"legendTitle\":[1,\"legend-title\"],\"colorFieldName\":[1,\"color-field-name\"],\"useShape\":[1,\"use-shape\"],\"embedOptions\":[16]}]]],[\"gux-create-option.cjs\",[[0,\"gux-create-option\",{\"value\":[1],\"active\":[4],\"hidden\":[4],\"filtered\":[4],\"hovered\":[32],\"guxEmitInternalCreateNewOption\":[64]},[[1,\"mouseenter\",\"onmouseenter\"],[1,\"mouseleave\",\"onMouseleave\"],[0,\"click\",\"handleClick\"]]]]],[\"gux-disclosure-button.cjs\",[[1,\"gux-disclosure-button\",{\"position\":[1],\"label\":[1],\"isOpen\":[1028,\"is-open\"],\"icon\":[32]}]]],[\"gux-form-field-color.cjs\",[[1,\"gux-form-field-color\",{\"labelPosition\":[1,\"label-position\"],\"computedLabelPosition\":[32],\"disabled\":[32],\"required\":[32],\"hasError\":[32],\"hasHelp\":[32]}]]],[\"gux-form-field-dropdown.cjs\",[[1,\"gux-form-field-dropdown\",{\"labelPosition\":[1,\"label-position\"],\"computedLabelPosition\":[32],\"disabled\":[32],\"required\":[32],\"hasError\":[32],\"hasHelp\":[32]}]]],[\"gux-form-field-radio.cjs\",[[1,\"gux-form-field-radio\",{\"disabled\":[32],\"hasError\":[32],\"hasHelp\":[32]}]]],[\"gux-form-field-range.cjs\",[[1,\"gux-form-field-range\",{\"displayUnits\":[1,\"display-units\"],\"valueInTooltip\":[4,\"value-in-tooltip\"],\"labelPosition\":[1,\"label-position\"],\"computedLabelPosition\":[32],\"disabled\":[32],\"required\":[32],\"hasError\":[32],\"hasHelp\":[32],\"value\":[32],\"active\":[32],\"valueWatcherId\":[32]},[[0,\"input\",\"onInput\"],[0,\"focusin\",\"onMousedown\"],[1,\"mousedown\",\"onMousedown\"],[0,\"focusout\",\"onMouseup\"],[1,\"mouseup\",\"onMouseup\"]]]]],[\"gux-form-field-select.cjs\",[[1,\"gux-form-field-select\",{\"labelPosition\":[1,\"label-position\"],\"computedLabelPosition\":[32],\"disabled\":[32],\"required\":[32],\"hasError\":[32],\"hasHelp\":[32]}]]],[\"gux-form-field-textarea.cjs\",[[1,\"gux-form-field-textarea\",{\"resize\":[1],\"labelPosition\":[1,\"label-position\"],\"computedLabelPosition\":[32],\"disabled\":[32],\"required\":[32],\"hasError\":[32],\"hasHelp\":[32]}]]],[\"gux-inline-alert-beta.cjs\",[[1,\"gux-inline-alert-beta\",{\"accent\":[1]}]]],[\"gux-listbox-multi.cjs\",[[1,\"gux-listbox-multi\",{\"value\":[1025],\"loading\":[4],\"filter\":[1],\"textInput\":[1,\"text-input\"],\"filterType\":[1,\"filter-type\"],\"hasExactMatch\":[1028,\"has-exact-match\"],\"listboxOptions\":[32],\"allListboxOptionsFiltered\":[32],\"guxSelectActive\":[64]},[[0,\"focus\",\"onFocus\"],[0,\"blur\",\"onBlur\"],[0,\"internalselectcustomoption\",\"selectNewCustomOption\"],[0,\"keydown\",\"onKeydown\"],[0,\"keyup\",\"onKeyup\"],[1,\"mousemove\",\"onMousemove\"],[0,\"click\",\"onClick\"]]]]],[\"gux-option-icon.cjs\",[[4,\"gux-option-icon\",{\"value\":[1],\"iconName\":[1,\"icon-name\"],\"iconSrText\":[1,\"icon-sr-text\"],\"iconColor\":[1,\"icon-color\"],\"active\":[4],\"selected\":[4],\"disabled\":[4],\"filtered\":[4],\"hovered\":[1028]},[[1,\"mouseenter\",\"onmouseenter\"],[1,\"mouseleave\",\"onMouseleave\"]]]]],[\"gux-page-loading-spinner.cjs\",[[1,\"gux-page-loading-spinner\",{\"screenreaderText\":[1,\"screenreader-text\"]}]]],[\"gux-radial-progress.cjs\",[[1,\"gux-radial-progress\",{\"value\":[2],\"max\":[2],\"scale\":[2],\"screenreaderText\":[1,\"screenreader-text\"]}]]],[\"gux-rating.cjs\",[[1,\"gux-rating\",{\"value\":[1026],\"maxValue\":[2,\"max-value\"],\"disabled\":[4],\"readonly\":[4]},[[0,\"click\",\"onClick\"],[0,\"keydown\",\"onKeyDown\"]]]]],[\"gux-side-panel-button.cjs\",[[0,\"gux-side-panel-button\",{\"icon\":[1],\"altText\":[1,\"alt-text\"],\"isSelected\":[4,\"is-selected\"]}]]],[\"gux-sort-control.cjs\",[[17,\"gux-sort-control\",{\"includeUnsorted\":[4,\"include-unsorted\"],\"headerContent\":[32],\"active\":[32],\"sort\":[32],\"isLeftAlignIcon\":[32]}]]],[\"gux-submenu.cjs\",[[4,\"gux-submenu\",{\"label\":[1],\"isShown\":[32],\"guxFocus\":[64]},[[0,\"keydown\",\"onKeydown\"],[0,\"keyup\",\"onKeyup\"],[1,\"mouseenter\",\"onmouseenter\"],[1,\"mouseleave\",\"onMouseleave\"],[0,\"click\",\"onClick\"],[0,\"focusin\",\"onFocusin\"],[0,\"focusout\",\"onFocusout\"]]]]],[\"gux-tab-advanced-list.cjs\",[[4,\"gux-tab-advanced-list\",{\"showNewTabButton\":[4,\"show-new-tab-button\"],\"tabLimit\":[2,\"tab-limit\"],\"allowSort\":[4,\"allow-sort\"],\"focused\":[32],\"disableAddTabButton\":[32],\"tabTriggers\":[32],\"hasScrollbar\":[32],\"keyboardSort\":[32],\"initialSortIndex\":[32],\"sortTarget\":[32],\"ariaLiveAlert\":[32],\"guxSetActive\":[64]},[[0,\"focusin\",\"onFocusin\"],[0,\"focusout\",\"onFocusout\"],[0,\"keydown\",\"onKeydown\"],[0,\"keyup\",\"onKeyup\"]]]]],[\"gux-tab-dropdown-option-legacy.cjs\",[[4,\"gux-tab-dropdown-option-legacy\",{\"optionId\":[1,\"option-id\"],\"iconName\":[1,\"icon-name\"]}]]],[\"gux-tab-list.cjs\",[[4,\"gux-tab-list\",{\"focused\":[32],\"tabTriggers\":[32],\"hasHorizontalScrollbar\":[32],\"hasVerticalScrollbar\":[32],\"isScrolledToBeginning\":[32],\"isScrolledToEnd\":[32],\"guxSetActive\":[64]},[[0,\"focusout\",\"onFocusout\"],[0,\"hasVerticalScrollbar\",\"onHasVerticalScrollBar\"],[3,\"scroll\",\"onScroll\"],[0,\"keydown\",\"onKeydown\"]]]]],[\"gux-tabs-legacy.cjs\",[[1,\"gux-tabs-legacy\",{\"allowSort\":[4,\"allow-sort\"],\"showNewTabButton\":[4,\"show-new-tab-button\"],\"value\":[1],\"tabLimit\":[2,\"tab-limit\"],\"disableAddTabButton\":[32],\"hasScrollbar\":[32]},[[0,\"internaltabselected\",\"internaltabselectedHandler\"]]]]],[\"gux-accordion.cjs\",[[1,\"gux-accordion\",{\"singleOpenSection\":[4,\"single-open-section\"]},[[0,\"internalsectionopened\",\"handleInternalsectionopened\"]]]]],[\"gux-action-item.cjs\",[[1,\"gux-action-item\",{\"text\":[1],\"value\":[16],\"disabled\":[4]},[[0,\"click\",\"handleClick\"],[0,\"keydown\",\"onKeydown\"],[0,\"keyup\",\"onKeyup\"]]]]],[\"gux-action-list-divider.cjs\",[[1,\"gux-action-list-divider\"]]],[\"gux-action-toast.cjs\",[[1,\"gux-action-toast\"]]],[\"gux-breadcrumbs.cjs\",[[1,\"gux-breadcrumbs\",{\"accent\":[1]}]]],[\"gux-button.cjs\",[[17,\"gux-button\",{\"type\":[1],\"guxTitle\":[1,\"gux-title\"],\"disabled\":[4],\"accent\":[1]}]]],[\"gux-card-beta.cjs\",[[1,\"gux-card-beta\",{\"accent\":[1]}]]],[\"gux-command-action.cjs\",[[0,\"gux-command-action\",{\"text\":[1],\"details\":[1],\"common\":[4],\"recent\":[4],\"shortcut\":[1],\"invokePress\":[64]}]]],[\"gux-date-beta.cjs\",[[1,\"gux-date-beta\",{\"datetime\":[1],\"format\":[1]}]]],[\"gux-date-time-beta.cjs\",[[1,\"gux-date-time-beta\",{\"datetime\":[1],\"format\":[1]}]]],[\"gux-dropdown-option.cjs\",[[0,\"gux-dropdown-option\",{\"value\":[1],\"disabled\":[4],\"filtered\":[1540],\"selected\":[1540],\"text\":[1],\"highlight\":[32],\"getDisplayedValue\":[64],\"shouldFilter\":[64]}]]],[\"gux-flyout-menu-beta.cjs\",[[1,\"gux-flyout-menu-beta\",{\"isShown\":[32]},[[0,\"keydown\",\"onKeydown\"],[0,\"keyup\",\"onKeyup\"],[1,\"mouseenter\",\"onmouseenter\"],[1,\"mouseleave\",\"onMouseleave\"],[0,\"click\",\"onClick\"],[0,\"focusin\",\"onFocusin\"],[0,\"focusout\",\"onFocusout\"]]]]],[\"gux-list-divider.cjs\",[[1,\"gux-list-divider\"]]],[\"gux-list-divider-legacy.cjs\",[[1,\"gux-list-divider-legacy\"]]],[\"gux-loading-message-beta.cjs\",[[1,\"gux-loading-message-beta\",{\"hasAdditionalGuidance\":[32],\"loadingMessageSize\":[32]}]]],[\"gux-menu.cjs\",[[4,\"gux-menu\"]]],[\"gux-menu-option.cjs\",[[4,\"gux-menu-option\",{\"guxFocus\":[64]},[[0,\"keydown\",\"onKeydown\"]]]]],[\"gux-option-legacy.cjs\",[[4,\"gux-option-legacy\",{\"value\":[1],\"disabled\":[4],\"text\":[1025],\"selected\":[516],\"shouldFilter\":[64]}]]],[\"gux-option-multi.cjs\",[[4,\"gux-option-multi\",{\"value\":[1],\"active\":[4],\"selected\":[1028],\"disabled\":[4],\"filtered\":[4],\"hovered\":[1028],\"custom\":[4]},[[1,\"mouseenter\",\"onmouseenter\"],[1,\"mouseleave\",\"onMouseleave\"]]]]],[\"gux-panel-frame-legacy.cjs\",[[1,\"gux-panel-frame-legacy\"]]],[\"gux-side-panel-legacy.cjs\",[[4,\"gux-side-panel-legacy\",{\"isOpen\":[4,\"is-open\"],\"position\":[1]}]]],[\"gux-skip-navigation-item.cjs\",[[17,\"gux-skip-navigation-item\"]]],[\"gux-skip-navigation-list-beta.cjs\",[[17,\"gux-skip-navigation-list-beta\"]]],[\"gux-switch.cjs\",[[1,\"gux-switch\",{\"value\":[1025],\"layout\":[1],\"switchItems\":[32]},[[0,\"click\",\"onClick\"]]]]],[\"gux-switch-item.cjs\",[[4,\"gux-switch-item\",{\"value\":[1],\"selected\":[4],\"disabled\":[4]},[[0,\"click\",\"onClick\"]]]]],[\"gux-tab-advanced-panel.cjs\",[[4,\"gux-tab-advanced-panel\",{\"tabId\":[1,\"tab-id\"],\"active\":[32],\"guxSetActive\":[64]}]]],[\"gux-tab-panel.cjs\",[[4,\"gux-tab-panel\",{\"tabId\":[1,\"tab-id\"],\"active\":[32],\"guxSetActive\":[64]}]]],[\"gux-tab-panel-beta.cjs\",[[1,\"gux-tab-panel-beta\",{\"tabId\":[1,\"tab-id\"],\"active\":[32],\"guxSetActive\":[64]}]]],[\"gux-tabs.cjs\",[[1,\"gux-tabs\",{\"activeTab\":[1025,\"active-tab\"],\"orientation\":[1],\"alignment\":[1],\"tabList\":[32],\"tabPanels\":[32],\"guxActivate\":[64]},[[0,\"internalactivatetabpanel\",\"onInternalActivateTabPanel\"]]]]],[\"gux-tabs-advanced.cjs\",[[1,\"gux-tabs-advanced\",{\"activeTab\":[1025,\"active-tab\"],\"tabList\":[32],\"tabPanels\":[32],\"guxActivate\":[64]},[[0,\"internalactivatetabpanel\",\"onInternalActivateTabPanel\"]]]]],[\"gux-text-label-legacy.cjs\",[[4,\"gux-text-label-legacy\",{\"label\":[1],\"position\":[1]}]]],[\"gux-time-beta.cjs\",[[1,\"gux-time-beta\",{\"datetime\":[1],\"format\":[1]}]]],[\"gux-month-calendar.cjs\",[[17,\"gux-month-calendar\",{\"value\":[1025],\"min\":[1],\"max\":[1],\"year\":[32],\"locale\":[32],\"guxFocus\":[64]}]]],[\"gux-form-field-search.cjs\",[[1,\"gux-form-field-search\",{\"labelPosition\":[1,\"label-position\"],\"computedLabelPosition\":[32],\"clearable\":[32],\"disabled\":[32],\"required\":[32],\"hasContent\":[32],\"hasError\":[32],\"hasHelp\":[32],\"guxForceUpdate\":[64]}]]],[\"gux-calendar.cjs\",[[1,\"gux-calendar\",{\"value\":[1025],\"minDate\":[1,\"min-date\"],\"maxDate\":[1,\"max-date\"],\"mode\":[1],\"numberOfMonths\":[2,\"number-of-months\"],\"startDayOfWeek\":[1026,\"start-day-of-week\"],\"previewValue\":[32],\"selectingDate\":[32],\"setValue\":[64],\"focusPreviewDate\":[64],\"resetCalendarView\":[64]}]]],[\"gux-content-search.cjs\",[[1,\"gux-content-search\",{\"matchCount\":[1026,\"match-count\"],\"currentMatch\":[1026,\"current-match\"],\"disabled\":[32],\"value\":[32],\"clear\":[64]}]]],[\"gux-dropdown-multi-tag.cjs\",[[1,\"gux-dropdown-multi-tag\",{\"disabled\":[4],\"numberSelected\":[2,\"number-selected\"],\"label\":[32]},[[0,\"keydown\",\"onKeyDown\"]]]]],[\"gux-table-toolbar-custom-action.cjs\",[[17,\"gux-table-toolbar-custom-action\",{\"iconOnly\":[4,\"icon-only\"],\"accent\":[1],\"disabled\":[4]}]]],[\"gux-toggle-slider.cjs\",[[0,\"gux-toggle-slider\",{\"checked\":[4],\"disabled\":[4],\"guxAriaLabel\":[1,\"gux-aria-label\"],\"labelId\":[1,\"label-id\"],\"errorId\":[1,\"error-id\"]}]]],[\"gux-list-item.cjs\",[[17,\"gux-list-item\",{\"disabled\":[4]},[[1,\"mouseup\",\"onMouseup\"],[1,\"mouseover\",\"onMouseover\"]]]]],[\"gux-region-icon.cjs\",[[1,\"gux-region-icon\",{\"region\":[1]}]]],[\"gux-table-select-popover.cjs\",[[1,\"gux-table-select-popover\",{\"for\":[1],\"closeOnClickOutside\":[4,\"close-on-click-outside\"],\"hidden\":[32]}]]],[\"gux-icon.cjs\",[[1,\"gux-icon\",{\"iconName\":[1,\"icon-name\"],\"decorative\":[4],\"screenreaderText\":[1,\"screenreader-text\"],\"svgHtml\":[32]}]]],[\"gux-form-field-text-like.cjs\",[[1,\"gux-form-field-text-like\",{\"clearable\":[4],\"labelPosition\":[1,\"label-position\"],\"hasPrefix\":[32],\"hasSuffix\":[32],\"computedLabelPosition\":[32],\"disabled\":[32],\"required\":[32],\"hasContent\":[32],\"hasError\":[32],\"hasHelp\":[32],\"guxForceUpdate\":[64]}]]],[\"gux-popover-list.cjs\",[[1,\"gux-popover-list\",{\"for\":[1],\"position\":[1],\"displayDismissButton\":[4,\"display-dismiss-button\"],\"closeOnClickOutside\":[4,\"close-on-click-outside\"],\"hidden\":[32]}]]],[\"gux-list-item-legacy_2.cjs\",[[1,\"gux-list-item-legacy\",{\"text\":[1],\"value\":[8],\"strategy\":[1]},[[0,\"click\",\"handleClick\"],[0,\"keydown\",\"handleKeyDown\"]]],[1,\"gux-list-legacy\",{\"value\":[1040],\"highlight\":[1],\"selectedIndex\":[32],\"setFocusOnFirstItem\":[64],\"setFocusOnLastItem\":[64],\"isLastItemSelected\":[64],\"isFirstItemSelected\":[64]},[[0,\"selected\",\"itemSelected\"]]]]],[\"gux-error-message-beta.cjs\",[[1,\"gux-error-message-beta\"]]],[\"gux-input-search.cjs\",[[4,\"gux-input-search\",{\"hasContent\":[32],\"disabled\":[32]}]]],[\"gux-input-text-like.cjs\",[[4,\"gux-input-text-like\",{\"clearable\":[4],\"hasContent\":[32],\"disabled\":[32]}]]],[\"gux-truncate-beta.cjs\",[[1,\"gux-truncate-beta\",{\"maxLines\":[2,\"max-lines\"],\"setShowTooltip\":[64],\"setHideTooltip\":[64]}]]],[\"gux-announce-beta.cjs\",[[1,\"gux-announce-beta\",{\"politeness\":[1],\"guxAnnounce\":[64]}]]],[\"gux-screen-reader-beta.cjs\",[[1,\"gux-screen-reader-beta\"]]],[\"gux-dropdown_3.cjs\",[[17,\"gux-dropdown\",{\"value\":[1025],\"disabled\":[4],\"required\":[4],\"loading\":[4],\"placeholder\":[1],\"filterable\":[4],\"filterType\":[1,\"filter-type\"],\"hasError\":[4,\"has-error\"],\"expanded\":[32],\"filter\":[32]},[[0,\"keydown\",\"onKeydown\"],[0,\"internallistboxoptionsupdated\",\"onInternallistboxoptionsupdated\"],[0,\"blur\",\"onBlur\"],[0,\"focus\",\"onFocus\"],[0,\"focusout\",\"onFocusout\"],[0,\"focusin\",\"onFocusin\"],[0,\"internalexpanded\",\"onInternalExpanded\"],[0,\"internalcollapsed\",\"onInternalCollapsed\"]]],[1,\"gux-listbox\",{\"value\":[1025],\"filter\":[1],\"filterType\":[1,\"filter-type\"],\"loading\":[4],\"selectedValues\":[32],\"listboxOptions\":[32],\"allListboxOptionsFiltered\":[32],\"guxSelectActive\":[64]},[[0,\"focus\",\"onFocus\"],[0,\"blur\",\"onBlur\"],[0,\"keydown\",\"onKeydown\"],[0,\"keyup\",\"onKeyup\"],[1,\"mousemove\",\"onMousemove\"],[0,\"click\",\"onClick\"]]],[4,\"gux-option\",{\"value\":[1],\"active\":[4],\"selected\":[4],\"disabled\":[4],\"filtered\":[4],\"hovered\":[1028]},[[1,\"mouseenter\",\"onmouseenter\"],[1,\"mouseleave\",\"onMouseleave\"]]]]],[\"gux-pagination-buttons_3.cjs\",[[0,\"gux-pagination-items-per-page\",{\"itemsPerPage\":[2,\"items-per-page\"]},[[0,\"change\",\"handleChange\"]]],[0,\"gux-pagination-buttons\",{\"currentPage\":[2,\"current-page\"],\"totalPages\":[2,\"total-pages\"],\"layout\":[1]}],[0,\"gux-pagination-item-counts\",{\"totalItems\":[2,\"total-items\"],\"currentPage\":[2,\"current-page\"],\"itemsPerPage\":[2,\"items-per-page\"]}]]],[\"gux-pagination-buttons-beta_3.cjs\",[[0,\"gux-pagination-items-per-page-beta\",{\"itemsPerPage\":[2,\"items-per-page\"]},[[0,\"change\",\"handleChange\"]]],[0,\"gux-pagination-buttons-beta\",{\"currentPage\":[2,\"current-page\"],\"totalPages\":[2,\"total-pages\"],\"layout\":[1]}],[0,\"gux-pagination-item-counts-beta\",{\"totalItems\":[2,\"total-items\"],\"currentPage\":[2,\"current-page\"],\"itemsPerPage\":[2,\"items-per-page\"]}]]],[\"gux-form-field-checkbox.cjs\",[[1,\"gux-form-field-checkbox\",{\"disabled\":[32],\"hasError\":[32],\"hasHelp\":[32]}]]],[\"gux-text-highlight.cjs\",[[0,\"gux-text-highlight\",{\"text\":[1],\"highlight\":[1],\"strategy\":[1]}]]],[\"gux-tooltip-title.cjs\",[[4,\"gux-tooltip-title\",{\"hasTooltip\":[32],\"showTooltip\":[32],\"iconOnly\":[32],\"titleName\":[32],\"setShowTooltip\":[64],\"setHideTooltip\":[64]},[[1,\"mouseenter\",\"onmouseenter\"],[1,\"mouseleave\",\"onmouseleave\"],[1,\"mousedown\",\"onmousedown\"]]]]],[\"gux-action-list-legacy_2.cjs\",[[1,\"gux-action-list-legacy\",{\"selectedIndex\":[32],\"setFocusOnFirstItem\":[64],\"setFocusOnLastItem\":[64],\"isLastItemSelected\":[64],\"isFirstItemSelected\":[64]},[[0,\"keydown\",\"onKeyDown\"]]],[1,\"gux-popup\",{\"expanded\":[4],\"disabled\":[4]}]]],[\"gux-month-list_2.cjs\",[[17,\"gux-month-list\",{\"guxFocusFirstItem\":[64]},[[0,\"keydown\",\"onKeyDown\"]]],[17,\"gux-month-list-item\",{\"value\":[1],\"disabled\":[4],\"selected\":[4]},[[1,\"mouseup\",\"onMouseup\"],[1,\"mouseover\",\"onMouseover\"]]]]],[\"gux-color-select_2.cjs\",[[4,\"gux-color-select\",{\"color\":[32]},[[0,\"colorSelect\",\"onColorSelect\"]]],[0,\"gux-input-color-option\",{\"active\":[4],\"value\":[1]}]]],[\"gux-visualization-beta.cjs\",[[1,\"gux-visualization-beta\",{\"visualizationSpec\":[16],\"embedOptions\":[16]}]]],[\"gux-form-field-input-clear-button.cjs\",[[17,\"gux-form-field-input-clear-button\"]]],[\"gux-list.cjs\",[[17,\"gux-list\",{\"guxFocusFirstItem\":[64],\"guxFocusItemById\":[64],\"guxFocusItemByClosestId\":[64],\"guxFocusLastItem\":[64]},[[0,\"keydown\",\"onKeyDown\"]]]]],[\"gux-input-checkbox_7.cjs\",[[4,\"gux-input-color\",{\"guxLabelDescribedby\":[1,\"gux-label-describedby\"],\"guxErrorDescribedby\":[1,\"gux-error-describedby\"],\"guxRequired\":[4,\"gux-required\"],\"disabled\":[32],\"color\":[32],\"opened\":[32],\"colorOnOpen\":[32]},[[8,\"click\",\"onClick\"],[0,\"input\",\"onInput\"]]],[4,\"gux-input-number\",{\"clearable\":[4],\"hasContent\":[32],\"disabled\":[32]}],[4,\"gux-input-select\",{\"disabled\":[32]}],[4,\"gux-input-checkbox\"],[4,\"gux-input-radio\"],[4,\"gux-input-range\",{\"displayUnits\":[1,\"display-units\"],\"valueInTooltip\":[4,\"value-in-tooltip\"],\"disabled\":[32],\"value\":[32],\"active\":[32],\"valueWatcherId\":[32]},[[0,\"input\",\"onInput\"],[0,\"focusin\",\"onMousedown\"],[1,\"mousedown\",\"onMousedown\"],[0,\"focusout\",\"onMouseup\"],[1,\"mouseup\",\"onMouseup\"]]],[4,\"gux-input-textarea\",{\"resize\":[1]}]]],[\"gux-dismiss-button.cjs\",[[17,\"gux-dismiss-button\",{\"position\":[1]}]]],[\"gux-tooltip.cjs\",[[1,\"gux-tooltip\",{\"for\":[1],\"placement\":[1025],\"isShown\":[32],\"showTooltip\":[64],\"hideTooltip\":[64]},[[9,\"keydown\",\"handleKeyDown\"]]]]],[\"gux-radial-loading.cjs\",[[1,\"gux-radial-loading\",{\"context\":[1],\"screenreaderText\":[1,\"screenreader-text\"]}]]],[\"gux-popup-beta.cjs\",[[1,\"gux-popup-beta\",{\"expanded\":[4],\"disabled\":[4]}]]],[\"gux-button-slot-beta.cjs\",[[1,\"gux-button-slot-beta\",{\"accent\":[1]}]]]]"), options);
  });
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;
