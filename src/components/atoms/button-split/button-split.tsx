import { Component, h, JSX, Host, Event, EventEmitter, ComponentInterface, State } from '@stencil/core';
import { AtomsButton } from '../button/button';

@Component({
  tag: 'ds-button-split',
  styleUrls: ['button-split.scss'],
  shadow: true,
})


export class AtomsButtonSplit implements ComponentInterface {
  /**
  * This will track state changes (* dropdown component is open or closed)
  */
  @State() toggle: boolean = false;

  /**
  * Track component events (activation of dropdown component)
  */
  @Event() onToggle: EventEmitter;

  render(): JSX.Element {


    return (
      <Host>
        <div>
          <AtomsButton/>
          <span aria-hidden="true" aria-haspopup aria-expanded class="">
            +
          </span>
        </div>
      </Host>
    );
  }

}
