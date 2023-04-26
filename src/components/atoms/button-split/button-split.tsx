import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ds-button-split',
  styleUrls: ['button-split.scss'],
  shadow: true,
})
export class AtomsButtonSplit {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
