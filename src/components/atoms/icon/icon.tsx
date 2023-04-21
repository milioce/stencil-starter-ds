import { Component, Prop, Element, h, JSX, ComponentInterface } from '@stencil/core';
import { GlobalSizeTypes } from '@shared/model';

@Component({
  tag: 'ds-icon',
  styleUrls: ['icon.scss'],
  shadow: true,
})
export class AtomsIcon implements ComponentInterface {
  @Element() el: HTMLElement | null;

  /**
   * The icon color
   */
  @Prop() color: string;

  /**
   * The icon name
   */
  @Prop() icon: string;

  /**
   * The size of the icon
   */
  @Prop() size: GlobalSizeTypes = 'sm';

  /**
   * The aria-label attribute of the icon
   */
  @Prop() ariaLabel: string;

  private classNames = () => {
    const classes = `ds-icon ds-icon--${this.color} ds-icon--${this.size} ds-icon--${this.icon}`;

    return classes;
  };

  render(): JSX.Element {
    return <i class={this.classNames()} color={this.color} aria-label={this.ariaLabel}></i>;
  }
}
