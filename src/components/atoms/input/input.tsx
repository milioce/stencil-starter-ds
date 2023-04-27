import { Component, Host, h, Element, Prop, Event, EventEmitter, ComponentInterface } from '@stencil/core';
import { InputTypeTypes } from './models'; // local models
import { GlobalSizeTypes } from '@shared/model';

@Component({
  tag: 'ds-input',
  styleUrls: ['input.scss'],
  shadow: true,
})
export class AttomsInput implements ComponentInterface{

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
   * Represents the caption of the input
   */
  @Prop() labelPosition: string;

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
  @Prop({ reflect: true }) placeholder: string;

  /**
   * Current value of the form control. Submitted with the form as part of a name/value pair.
   */
  @Prop({ mutable: true, reflect: true }) value = '';

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
   * Emitted when the button gains focus
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
      `ds-button ds-button--${this.type} ds-button--${this.size}`;

    return classes;
  };

  render() {
    const hostClass = this.getHostClassNames();
    return (
      <Host class={hostClass}>
        <input type={this.type} placeholder={this.placeholder}/>
        <span>Helper text</span>
      </Host>
    );
  }

}
