import { Component, h, JSX, Host } from '@stencil/core';
// import { AtomsButton } from '../button/button';

@Component({
  tag: 'ds-button-split',
  styleUrls: ['button-split.scss'],
  shadow: true,
})


export class AtomsButtonSplit {
  /**
  * This will track state changes (* dropdown component is open or closed)
  */
  // @State() toggle: boolean = false;
// 
  /**
  * Track component events (activation of dropdown component)
  */
  // @Event() onToggle: EventEmitter;

  render(): JSX.Element {
    return (
      <Host>
        <div>
          {/* <AtomsButton/> */}
          <span aria-hidden="true" class="">
            +
          </span>
        </div>
      </Host>
    );
  }

}
