import { Component, Prop, Element, h, JSX } from '@stencil/core';
import { GlobalSizeTypes } from '@shared/model';

@Component({
  tag: 'ds-icon',
  styleUrls: ['icon.scss'],
  shadow: true,
})

export class AtomsIcon {

    @Element() el: HTMLElement;

    /* Specifies the color of icon */
    @Prop() color: string;

    /* Icon SVG format */
    @Prop() icon: string;

    /* Size of icon */
    @Prop() size: GlobalSizeTypes = 'sm';

    /* Aria-label of icon */
    @Prop() ariaLabel: string;

    private classNames = () => {
      const classes = `ds-icon ds-icon--${this.color} ds-icon--${this.size} ds-icon--${this.icon}`;

      return classes;
    }


    render(): JSX.Element {
        return (
          <i
              class = {this.classNames()}
              color = {this.color}
              aria-label = {this.ariaLabel}>
          </i>
        )
    }
}
