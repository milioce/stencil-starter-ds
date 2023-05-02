import { Component, Host, h, Element, Prop, Event, EventEmitter, ComponentInterface, State } from '@stencil/core';
import { InputTypeTypes, InputLabelPositionTypes, InputFeedbackTypes } from './input.models';
import { GlobalSizeTypes } from '@shared/model';
import { checkIfUndefined } from '@utils/utils';

@Component({
  tag: 'ds-input',
  styleUrls: ['input.scss'],
  shadow: true,
})
export class AttomsInput implements ComponentInterface {
  @Element() el: HTMLElement | null;

  /**
   * The id of the element
   */
  @Prop() eID: string;

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
  @Prop() placeholder: string;

  /**
   * Current value of the form control. Submitted with the form as part of a name/value pair.
   */
  @Prop({ mutable: true, reflect: true }) value: string;

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
  @Prop() hasError = false;

  /**
   * Show the feedback message.
   */
  @Prop() feedbackText: string;

  /**
   * The type of the feedback
   */
  @Prop() feedbackType: InputFeedbackTypes;

  /**
   * Whether the input has an icon
   */
  @Prop() hasIcon: boolean = false;

  /**
   * The code of the input's icon (used with hasIcon)
   */
  @Prop() icon: string;

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

  @State() showPassword = false;

  connectedCallback() {
    /* TODO si no nos pasan un eID generar uno automaticamente con https://www.npmjs.com/package/uuid */
  }

  private getHostClassNames = () => {
    const classes =
      `ds-input ds-input--${this.type} ds-input--${this.size}` + (this.labelPosition ? ` ds-input__label-${this.labelPosition}` : '') + (this.hasError ? ' ds-input--error' : '');

    return classes;
  };

  private getInputClassNames = () => {
    const classes = (this.disabled ? ' input--disabled' : '') + (this.readonly ? ' input--readonly' : '');

    return classes;
  };

  private handleChange = event => {
    this.value = event.target.value;
    this.dsInputInput.emit(this.value);
    if (this.value === '') {
      this.dsInputClear.emit();
    }
  };

  private handleClear = () => {
    this.value = '';
    this.dsInputClear.emit();
  };

  private handleShowPassword = () => {
    this.showPassword === false ? (this.type = 'text') : (this.type = 'password');
    this.showPassword = !this.showPassword;
  };

  private handleFocus = () => {
    this.dsFocus.emit();
  };

  private getFeedbackClassNames = () => {
    const classes = this.feedbackType ? `ds-input__feedback--${this.feedbackType}` : '';

    return classes;
  };

  private getFeedbackIcon = () => {
    return this.feedbackType === 'error' ? 'ds_icon_error-solid' : 'ds_icon_check-solid';
  };

  private getAttributes = () => {
    // TODO crear un metodo para checkear si nos mandan Prop
    const attributes = {};

    if (!checkIfUndefined(this.name)) {
      attributes['name'] = this.name;
    }

    if (!checkIfUndefined(this.placeholder)) {
      attributes['placeholder'] = this.placeholder;
    }

    if (!checkIfUndefined(this.value)) {
      attributes['value'] = this.value;
    }

    return attributes;
  };

  render() {
    const hostClass = this.getHostClassNames();
    const inputClass = this.getInputClassNames();
    const feedbackClass = this.getFeedbackClassNames();
    return (
      <Host class={hostClass}>
        {this.label && <label htmlFor={this.eID}>{this.label}</label>}
        <div>
          {this.hasIcon && <ds-icon size={this.size} icon={this.icon}></ds-icon>}
          <input
            {...this.getAttributes()}
            class={inputClass}
            type={this.type}
            id={this.eID}
            required={this.required}
            disabled={this.disabled}
            readOnly={this.readonly}
            onInput={e => this.handleChange(e)}
            onFocus={this.handleFocus}
          />
          {/* TODO falta icon eye-hide */}
          {this.value && this.type !== 'password' && (
            <ds-button
              color="primary"
              size={this.size}
              hasIcon={true}
              icon={this.showPassword ? 'ds_icon_eye-hide' : `ds_icon_error-solid`}
              onDsClick={this.showPassword ? this.handleShowPassword : this.handleClear}
            >
              {this.showPassword ? 'ds_icon_eye-hide' : `ds_icon_error-solid`}
            </ds-button>
          )}
          {this.value && this.type === 'password' && (
            <ds-button color="primary" size={this.size} hasIcon={true} icon={`ds_icon_eye`} onDsClick={this.handleShowPassword}>
              ds_icon_eye
            </ds-button>
          )}
        </div>
        {this.helperMessage && <span class="ds-input__helper-text">{this.helperMessage}</span>}
        <div class={feedbackClass}>
          {this.feedbackText &&
            this.feedbackType && [<ds-icon color={this.feedbackType} size={this.size} icon={this.getFeedbackIcon()}></ds-icon>, <span>{this.feedbackText}</span>]}
        </div>
      </Host>
    );
  }
}
