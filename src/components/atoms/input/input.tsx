import { Component, Host, h, Element, Prop, Event, EventEmitter, ComponentInterface, State } from '@stencil/core';
import { InputTypeTypes, InputLabelPositionTypes, InputFeedbackTypes } from './input.models';
import { GlobalSizeTypes } from '@shared/model';
import { isDefined } from '@utils/utils';
import { v4 as uuidv4 } from 'uuid';

@Component({
  tag: 'ds-input',
  styleUrls: ['input.scss'],
  shadow: true,
})
export class AtomsInput implements ComponentInterface {
  @Element() el: HTMLElement | null;

  /**
   * The id of the element
   */
  @Prop({ mutable: true }) eid: string;

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
  @Prop() size: GlobalSizeTypes = 'md';

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
  @Prop({ reflect: true }) disabled: boolean;

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
   * The aria-label attribute of the input
   */
  @Prop() dsAriaLabel: string;

  /**
   * Emitted when the input gains focus
   */
  @Event() dsFocus: EventEmitter<void>;

  /**
   * Emitted when the input loses focus
   */
  @Event() dsBlur: EventEmitter<void>;

  /**
   * Emitted when the value has changed.
   * This event doesn't fire until the control loses focus.
   */
  @Event() dsChange: EventEmitter<string>;

  /**
   * Emitted when the component is cleared
   */
  @Event() dsClear: EventEmitter<string>;

  /**
   * Emitted every time the value is updated by introducing a change
   */
  @Event() dsInput: EventEmitter<string>;

  @State() originalType: InputTypeTypes;

  componentWillLoad() {
    if (!this.eid) {
      this.eid = uuidv4();
    }
    this.originalType = this.type;
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
    this.dsInput.emit(this.value);
    if (this.value === '') {
      this.dsClear.emit();
    }
  };

  private handleFocus = () => {
    this.dsFocus.emit();
  };

  private handleBlur = () => {
    this.dsBlur.emit();
  };

  private handleIconClick = () => {
    if (this.originalType === 'password') {
      this.type === 'password' ? (this.type = 'text') : (this.type = 'password');
    } else {
      this.clear();
    }
  };

  private clear = () => {
    this.value = '';
    this.dsClear.emit();
  };

  private getIcon = () => {
    // TODO falta icon eye-hide
    if (this.originalType === 'password') {
      return this.type === 'password' ? 'ds_icon_eye' : 'ds_icon_eye-hide';
    } else {
      return 'ds_icon_error-solid';
    }
  };

  private getFeedbackIcon = () => {
    return this.feedbackType === 'error' ? 'ds_icon_error-solid' : 'ds_icon_check-solid';
  };

  private getFeedbackClassNames = () => {
    const classes = this.feedbackType ? `ds-input__feedback--${this.feedbackType}` : '';

    return classes;
  };

  private getAttributes = () => {
    const attributes = {};

    if (isDefined(this.name)) {
      attributes['name'] = this.name;
    }

    if (isDefined(this.placeholder)) {
      attributes['placeholder'] = this.placeholder;
    }

    if (isDefined(this.value)) {
      attributes['value'] = this.value;
    }

    if (isDefined(this.dsAriaLabel)) {
      attributes['aria-label'] = this.dsAriaLabel;
    }

    if (this.helperMessage) {
      attributes['aria-describedby'] = `${this.eid}-hint ${this.eid}-feedback`;
    } else {
      attributes['aria-describedby'] = `${this.eid}-feedback`;
    }

    if (this.required) {
      attributes['aria-required'] = true;
    }

    if (this.hasError) {
      attributes['aria-invalid'] = true;
    }

    return attributes;
  };

  // TODO quitar una vez el ds-icon funcione
  private getNameProvisional = () => {
    if (this.originalType === 'password') {
      return this.type === 'password' ? 'ds_icon_eye' : 'ds_icon_eye-hide';
    } else {
      return 'ds_icon_error-solid';
    }
  };

  render() {
    const hostClass = this.getHostClassNames();
    const inputClass = this.getInputClassNames();
    const feedbackClass = this.getFeedbackClassNames();
    return (
      <Host class={hostClass}>
        {this.label && <label htmlFor={this.eid}>{this.label}</label>}
        <div>
          {this.hasIcon && <ds-icon size={this.size} icon={this.icon}></ds-icon>}
          <input
            {...this.getAttributes()}
            class={inputClass}
            type={this.type}
            id={this.eid}
            required={this.required}
            disabled={this.disabled}
            readOnly={this.readonly}
            onInput={e => this.handleChange(e)}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
          {/* TODO falta color "gris" para los ds-button => light */}
          {this.value && (
            <ds-button color="primary" size={this.size} hasIcon={true} onlyIcon={true} icon={this.getIcon()} onDsClick={this.handleIconClick}>
              {this.getNameProvisional()}
            </ds-button>
          )}
        </div>
        {this.helperMessage && (
          <span class="ds-input__helper-text" id={`${this.eid}-hint`}>
            {this.helperMessage}
          </span>
        )}
        <div class={feedbackClass} aria-live="polite" id={`${this.eid}-feedback`}>
          {this.feedbackText &&
            this.feedbackType && [<ds-icon color={this.feedbackType} size={this.size} icon={this.getFeedbackIcon()}></ds-icon>, <span>{this.feedbackText}</span>]}
        </div>
      </Host>
    );
  }
}
