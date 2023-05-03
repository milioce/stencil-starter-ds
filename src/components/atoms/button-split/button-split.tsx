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
        <div class="ds-button-split__button-action">
          <ds-button variant="split">Continuar</ds-button>
          <button class="ds-button-split__button-dropdeable ds-button-split--primary" aria-hidden="true">
            +
          </button>
        </div>
      </Host>
    );
  }

}
