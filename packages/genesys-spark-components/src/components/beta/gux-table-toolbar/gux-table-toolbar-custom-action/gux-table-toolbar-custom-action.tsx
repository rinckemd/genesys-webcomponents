import { Component, Element, JSX, h, Prop, Watch } from '@stencil/core';
import { trackComponent } from '@utils/tracking/usage';
import { GuxTableToolbarActionAccent } from '../gux-table-toolbar-action-accents.types';
import { getSlotTextContent } from '@utils/dom/get-slot-text-content';
/**
 * @slot text - Slot for action text.
 * @slot icon - Slot for icon.
 */

@Component({
  styleUrl: 'gux-table-toolbar-custom-action.less',
  tag: 'gux-table-toolbar-custom-action',
  shadow: { delegatesFocus: true }
})
export class GuxTableToolbarCustomAction {
  @Element()
  root: HTMLElement;

  @Prop()
  iconOnly: boolean = false;

  @Watch('iconOnly')
  iconOnlyChanged(newIconOnly: boolean) {
    // Do not wait for the next render to avoid a flash of text when initially rendering condensed.
    const textWrapperElement =
      this.root.shadowRoot.querySelector('.text-wrapper');
    if (textWrapperElement) {
      if (newIconOnly) {
        textWrapperElement.classList.add('gux-sr-only');
      } else {
        textWrapperElement.classList.remove('gux-sr-only');
      }
    }
  }

  @Prop()
  accent: GuxTableToolbarActionAccent = 'secondary';

  @Prop()
  disabled: boolean = false;

  private renderTooltip(): JSX.Element {
    if (this.iconOnly) {
      return (
        <gux-tooltip>{getSlotTextContent(this.root, 'text')}</gux-tooltip>
      ) as JSX.Element;
    }
  }

  componentWillLoad() {
    trackComponent(this.root);
  }

  render(): JSX.Element {
    return (
      <gux-button-slot-beta accent={this.accent}>
        <button disabled={this.disabled} type="button" class="gux-action-title">
          <slot name="icon" />
          <span class={{ 'text-wrapper': true, 'gux-sr-only': this.iconOnly }}>
            <slot name="text" />
          </span>
        </button>
        {this.renderTooltip()}
      </gux-button-slot-beta>
    ) as JSX.Element;
  }
}
