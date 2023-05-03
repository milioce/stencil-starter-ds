import { Component, Prop, Element, h, JSX, Host, Event, EventEmitter, ComponentInterface } from '@stencil/core';
import { ButtonColorTypes, ButtonTypeTypes, ButtonIconPositionTypes, ButtonFillTypes, ButtonVariantTypes } from './button.model';
import { GlobalSizeTypes } from '@shared/model';

@Component({
  tag: 'ds-button',
  styleUrls: ['button.scss'],
  shadow: true,
})
export class AtomsButton implements ComponentInterface {
  @Element() el: HTMLElement | null;

  /**
   * The color of the button
   */
  @Prop() color: ButtonColorTypes = 'primary';

    /**
   * The variant of the button
   */
  @Prop() variant: ButtonVariantTypes;

  /**
   * The size of the buton
   */
  @Prop() size: GlobalSizeTypes = 'md';

  /**
   * The type of the button
   */
  @Prop() type: ButtonTypeTypes = 'button';

  /**
   * The URL of the button (used with type link)
   */
  @Prop() url: string;

  /**
   * Whether the button has an icon
   */
  @Prop() hasIcon: boolean = false;

  /**
   * The code of the button's icon (used with hasIcon)
   */
  @Prop() icon: string;

  /**
   * The position of the button's icon
   */
  @Prop() iconPosition: ButtonIconPositionTypes = 'left';

  /**
   * Whether the button has an icon
   */
  @Prop() onlyIcon: boolean = false;

  /**
   * The fill of the button (background and border color)
   */
  @Prop() fill: ButtonFillTypes = 'solid';

  /**
   * The button takes up the full width of the container
   */
  @Prop() full: boolean = false;

  /**
   * The button is disabled
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  /**
   * Whether the button shows a loading icon
   */
  @Prop() loading: boolean = false;

  /**
   * Whether the button is focused on page load
   */
  @Prop() autofocus: boolean = false;

  /**
   * The aria-label attribute for the button
   */
  @Prop() dsAriaLabel: string;

  /**
   * The aria-labelledby attribute for the button
   */
  @Prop() dsAriaLabelledby: string;

  /**
   * The aria-describedby attribute for the button
   */
  @Prop() dsAriaDescribedby: string;

  /**
   * The aria-controls attribute for the button
   */
  @Prop() dsAriaControls: string;

  /**
   * The aria-pressed attribute for the button
   */
  @Prop() dsAriaPressed: boolean;

  /**
   * The aria-haspopup attribute for the button
   */
  @Prop() dsAriaHaspopup: boolean;

  /**
   * The aria-expanded attribute for the button
   */
  @Prop() dsAriaExpanded: boolean;

  /**
   * Emitted when the button is clicked
   */
  @Event() dsClick: EventEmitter<void>;

  /**
   * Emitted when the button gains focus
   */
  @Event() dsFocus: EventEmitter<void>;

  /**
   * Emitted when the button loses focus
   */
  @Event() dsBlur: EventEmitter<void>;

  private handleClick = () => {
    this.dsClick.emit();
  };

  private handleFocus = () => {
    this.dsFocus.emit();
  };

  private handleBlur = () => {
    this.dsBlur.emit();
  };

  private getHostClassNames = () => {
    const classes =
      (this.variant ? ` ds-button-${this.variant} ds-button-${this.variant}--${this.color} ` : ` ds-button--${this.color} ` + 'ds-button') +
      ` ds-button--${this.size}` +
      (this.fill ? ` ds-button--${this.fill}` : '') +
      (this.full ? ' ds-button--full' : '') +
      (this.hasIcon ? ` ds-button--icon ds-button--icon-${this.iconPosition}` : '') +
      (this.onlyIcon ? ' ds-button--icon-only' : '');

    return classes;
  };

  private getButtonClassNames = () => {
    const classes = (this.loading ? ' button--loading' : '') + (this.disabled ? ' button--disabled' : '');

    return classes;
  };

  private getAttributes = () => {
    const attributes = {};

    if (this.dsAriaLabel !== undefined) {
      attributes['aria-label'] = this.dsAriaLabel;
    }

    if (this.dsAriaLabelledby !== undefined) {
      attributes['aria-labelledby'] = this.dsAriaLabelledby;
    }

    if (this.dsAriaDescribedby !== undefined) {
      attributes['aria-describedby'] = this.dsAriaDescribedby;
    }

    if (this.dsAriaControls !== undefined) {
      attributes['aria-controls'] = this.dsAriaControls;
    }

    if (this.dsAriaPressed !== undefined) {
      attributes['aria-pressed'] = this.dsAriaPressed ? 'true' : 'false';
    }

    if (this.dsAriaExpanded !== undefined) {
      attributes['aria-expanded'] = this.dsAriaExpanded ? 'true' : 'false';
    }

    if (this.dsAriaHaspopup !== undefined) {
      attributes['aria-haspopup'] = this.dsAriaHaspopup ? 'true' : 'false';
    }

    return attributes;
  };

  render(): JSX.Element {
    const hostClass = this.getHostClassNames();
    const buttonClass = this.getButtonClassNames();

    return (
      <Host class={hostClass}>
        {this.type === 'link' ? (
          <a {...this.getAttributes()} class={buttonClass} onClick={this.handleClick} onFocus={this.handleFocus} onBlur={this.handleBlur}>
            {this.hasIcon && this.iconPosition === 'left' && <ds-icon color={this.color} size={this.size} icon={this.icon}></ds-icon>}
            <slot></slot>
            {this.hasIcon && this.iconPosition === 'right' && <ds-icon color={this.color} size={this.size} icon={this.icon}></ds-icon>}
          </a>
        ) : (
          <button
            {...this.getAttributes()}
            type={this.type}
            class={buttonClass}
            onClick={this.handleClick}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            disabled={this.disabled}
          >
            {this.hasIcon && this.iconPosition === 'left' && <i class={`icon-${this.icon}`}></i>}
            <slot></slot>
            {this.hasIcon && this.iconPosition === 'right' && <i class={`icon-${this.icon}`}></i>}
          </button>
        )}
      </Host>
    );
  }
}
