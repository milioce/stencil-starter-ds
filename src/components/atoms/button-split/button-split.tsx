import { Component, Prop, h, JSX, Host } from '@stencil/core';
import { ButtonColorTypes, ButtonFillTypes } from './button-split.model';

@Component({
  tag: 'ds-button-split',
  styleUrls: ['button-split.scss'],
  shadow: true,
})


export class AtomsButtonSplit {

/**
* The color of the button
*/
@Prop() color: ButtonColorTypes = 'primary';

/**
* The fill of the button (background and border color)
*/
@Prop() fill: ButtonFillTypes = 'solid';

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
  * This will track state changes (* dropdown component is open or closed)
  */
  // @State() toggle: boolean = false;

  /**
  * Track component events (activation of dropdown component)
  */
  // @Event() onToggle: EventEmitter;


  render(): JSX.Element {
    return (
      <Host>
        <div class="ds-button-split__action">
          <ds-button variant="split">Continuar</ds-button>
          <button class="ds-button-split__dropdeable ds-button-split--primary" aria-hidden="true">
            +
          </button>
        </div>
      </Host>
    );
  }

}
