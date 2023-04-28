import { Component, Host, h, Element, Prop, Event, EventEmitter, ComponentInterface } from '@stencil/core';
import { InputTypeTypes, InputLabelPositionTypes } from './input.models'; // local models
import { GlobalSizeTypes } from '@shared/model';

@Component({
  tag: 'ds-input',
  styleUrls: ['input.scss'],
  shadow: true,
})
export class AttomsInput implements ComponentInterface {
  @Element() el: HTMLElement | null;

  /**
   * The name of the input. Submitted with the form as part of a name/value pair
   */
  @Prop() name: string;

  /**
   * Represents the caption of the input
   */
  @Prop() label: string;

  /**
   * Represents the position caption of the input
   */
  @Prop() labelPosition: InputLabelPositionTypes = 'inline';

  /**
   * The type of the input
   */
  @Prop() type: InputTypeTypes = 'text';

  /**
   * The size of the input
   */
  @Prop() size: GlobalSizeTypes = 'lg';

  /**
   * Instructional text that shows before the input has a value.
   */
  @Prop({ reflect: true }) placeholder: string;

  /**
   * Current value of the form control. Submitted with the form as part of a name/value pair.
   */
  @Prop({ mutable: true, reflect: true }) value: string | number;

  /**
   * If true, the user must fill in a value before submitting a form.
   */
  @Prop({ reflect: true }) required: boolean;

  /**
   * If true, the user cannot interact with the input.
   */
  @Prop({ reflect: true }) disabled?: boolean;

  /**
   * Message to help the user fills the input value
   */
  @Prop() helperMessage: string;

  /**
   * If true, the user cannot modify the value.
   */
  @Prop({ reflect: true }) readonly = false;

  /**
   * Determinate when show the error.
   */
  @Prop({ reflect: true }) hasError = false;

  /**
   * Show the error.
   */
  @Prop() errorText: string;

  /**
   * Show the success message
   */
  @Prop() successText: string;

  /**
   * Emitted when the input gains focus
   */
  @Event() dsFocus: EventEmitter<void>;

  /**
   * Emitted when the value has changed.
   * This event doesn't fire until the control loses focus.
   */
  @Event() dsInputChange: EventEmitter<string>;

  /**
   * Emitted when the component is cleared
   */
  @Event() dsInputClear: EventEmitter<string>;

  /**
   * Emitted every time the value is updated by introducing a change
   */
  @Event() dsInputInput: EventEmitter<string>;

  /**
   * Emitted when the component is clicked
   */
  @Event() dsInputClick: EventEmitter<string>;

  private getHostClassNames = () => {
    const classes =
      `ds-input ds-input--${this.type} ds-input--${this.size}` + (this.labelPosition ? ` ds-input__label-${this.labelPosition}` : '') + (this.hasError ? ' ds-input--error' : '');

    return classes;
  };

  private getInputClassNames = () => {
    const classes = (this.disabled ? ' input--disabled' : '') + (this.readonly ? ' input--readonly' : '');

    return classes;
  };

  render() {
    const hostClass = this.getHostClassNames();
    const inputClass = this.getInputClassNames();
    return (
      <Host class={hostClass}>
        <div class="ds-input__container">
          <label htmlFor={this.name}>{this.label}</label>
          <input
            class={inputClass}
            type={this.type}
            id={this.name}
            name={this.name}
            placeholder={this.placeholder}
            value={this.value}
            required={this.required}
            disabled={this.disabled}
            readOnly={this.readonly}
          />
          {this.helperMessage && <span class="ds-input__helper-text">{this.helperMessage}</span>}
          {this.hasError && this.errorText && (
            <div class="ds-input__feedback--error">
              <ds-icon size={this.size} icon={`ds_icon_error-solid`}></ds-icon>
              <span>{this.errorText}</span>
            </div>
          )}
          {this.successText && (
            <div class="ds-input__feedback--success">
              <ds-icon size={this.size} icon={`ds_icon_check-solid`}></ds-icon>
              <span>{this.successText}</span>
            </div>
          )}
        </div>
      </Host>
    );
  }
}
