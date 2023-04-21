import { Component, Prop, Element, h, JSX, Host, Event, EventEmitter } from '@stencil/core';
import { ButtonColorTypes, ButtonTypeTypes, ButtonIconPositionTypes } from './models'; // local models
import { GlobalSizeTypes } from '@shared/model';

@Component({
  tag: 'ds-button',
  styleUrls: ['button.scss'],
  shadow: true,
})
export class AtomsButton {

  @Element() el: HTMLElement;

  /**
   * The variant of the button
   */
  @Prop() color: ButtonColorTypes = 'primary';

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
 * Whether the button is outlined (only border, no background)
 */
@Prop() fill: string = 'solid';

/**
 * Whether the button takes up the full width of the container
 */
@Prop() full: boolean = false;

/**
 * Whether the button is disabled
 */
@Prop() disabled: boolean = false;

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
@Prop() ariaLabel: string;

/**
 * The aria-labelledby attribute for the button
 */
@Prop() ariaLabelledby: string;

/**
 * The aria-describedby attribute for the button
 */
@Prop() ariaDescribedby: string;

/**
 * The aria-controls attribute for the button
 */
@Prop() ariaControls: string;

/**
 * The aria-pressed attribute for the button
 */
@Prop() ariaPressed: string;

/**
 * The aria-haspopup attribute for the button
 */
@Prop() ariaHaspopup: string;

/**
 * The aria-expanded attribute for the button
 */
@Prop() ariaExpanded: string;

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
}

private handleFocus = () => {
  this.dsFocus.emit();
}

private handleBlur = () => {
  this.dsBlur.emit();
}

private getHostClassNames = () => {
  const classes = `ds-button ds-button--${this.color} ds-button--${this.size}` +
    (this.fill ? ` ds-button--${this.fill}` : '') +
    (this.hasIcon ? ` ds-button--icon ds-button--icon-${this.iconPosition}` : '');

  return classes;
}

private getButtonClassNames = () => {
  const classes =
    (this.full ? 'ds-button--full' : '') +
    (this.loading ? 'ds-button--loading' : '') +
    (this.disabled ? 'ds-button--disabled' : '');

  return classes;
}

private getAttributes = () => {
  const props = {};

  if (this.ariaLabel !== undefined) {
    props['aria-label'] = this.ariaLabel;
  }

  if (this.ariaLabelledby !== undefined) {
    props['aria-labelledby'] = this.ariaLabelledby;
  }

  if (this.ariaDescribedby !== undefined) {
    props['aria-labelledby'] = this.ariaLabelledby;
  }

  return props;
}

render(): JSX.Element {
    const hostClass = this.getHostClassNames();
    const buttonClass = this.getButtonClassNames();

    return (
      <Host class={hostClass}>
        {this.type === 'link'
          ? (
            <a {...this.getAttributes()}
              class={buttonClass}
              onClick={this.handleClick}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}>
                {this.hasIcon && this.iconPosition === 'left' && <ds-icon color={this.color} size={this.size} icon={this.icon} ></ds-icon>}
                <slot></slot>
                {this.hasIcon && this.iconPosition === 'right' && <ds-icon color={this.color} size={this.size} icon={this.icon} ></ds-icon>}
          </a>
          )
          : (
            <button {...this.getAttributes()}
              type={this.type}
              class={{
                'ds-clear': true}}
              onClick={this.handleClick}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              disabled={this.disabled}>
                {this.hasIcon && this.iconPosition === 'left' && <i class={`icon-${this.icon}`}></i>}
                <slot></slot>
                {this.hasIcon && this.iconPosition === 'right' && <i class={`icon-${this.icon}`}></i>}
            </button>
          )
        }
      </Host>
    )
  }
}
