import { Component, Prop, Element, h, JSX, ComponentInterface } from '@stencil/core';
import { StateColorTypes} from './models';
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
   * The fill of the icon (background and border color)
   */
  @Prop() fill: StateColorTypes= 'solid';

  /**
   * The size of the icon
   */
  @Prop() size: GlobalSizeTypes = 'sm';

  /**
   * The aria-label attribute of the icon
   */
  @Prop() ariaLabel: string;

  private classNames = () => {
    const classes = `ds-icon ds-icon--${this.size} ${this.icon} ds-icon--${this.fill} icon-ds__icon_academy`;

    return classes;
  };

  render(): JSX.Element {
    return <svg class={this.classNames()} ><use xlinkHref={`assets/images/sprites/sprites.svg#${this.icon}`} fill="red"></use></svg>;
  }
}
