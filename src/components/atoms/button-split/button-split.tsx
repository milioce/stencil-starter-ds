import { Component, h, JSX, Host } from '@stencil/core';

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
          <ds-button class="ds-button-split ds-button-split--primary ds-button-split--solid">Continuar</ds-button>
          <button aria-hidden="true" class="">
            +
          </button>
        </div>
      </Host>
    );
  }

}
