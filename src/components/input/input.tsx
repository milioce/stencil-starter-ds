import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ds-input',
  styleUrls: ['input.scss'],
  shadow: true,
})
export class Input {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
