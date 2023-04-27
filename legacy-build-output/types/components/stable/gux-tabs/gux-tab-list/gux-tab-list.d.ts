import { JSX } from '../../../../stencil-public-runtime';
export declare class GuxTabList {
  private i18n;
  private triggerIds;
  root: HTMLElement;
  focused: number;
  tabTriggers: NodeListOf<HTMLGuxTabElement>;
  private hasHorizontalScrollbar;
  private hasVerticalScrollbar;
  private isScrolledToBeginning;
  private isScrolledToEnd;
  onFocusout(event: FocusEvent): void;
  onHasVerticalScrollBar(): void;
  onScroll(): void;
  private resizeObserver?;
  private domObserver?;
  onKeydown(event: KeyboardEvent): void;
  onMutation(): void;
  guxSetActive(activeTab: string): Promise<void>;
  private focusTab;
  private setTabTriggers;
  checkForScrollbarHideOrShow(): void;
  handleKeyboardScroll(direction: 'forward' | 'backward'): void;
  disconnectedCallback(): void;
  componentWillLoad(): Promise<void>;
  componentDidLoad(): void;
  checkDisabledScrollButtons(): void;
  scrollLeft(): void;
  scrollRight(): void;
  scrollUp(): void;
  scrollDown(): void;
  render(): JSX.Element;
  private renderScrollButton;
  private getButtonDisabled;
  private getScrollDirection;
  private getChevronIconName;
}
