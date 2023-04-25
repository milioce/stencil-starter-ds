/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'stencil-ds';


@ProxyCmp({
  inputs: ['ariaControls', 'ariaDescribedby', 'ariaExpanded', 'ariaHaspopup', 'ariaLabel', 'ariaLabelledby', 'ariaPressed', 'autofocus', 'color', 'disabled', 'fill', 'full', 'hasIcon', 'icon', 'iconPosition', 'loading', 'size', 'type', 'url']
})
@Component({
  selector: 'ds-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaControls', 'ariaDescribedby', 'ariaExpanded', 'ariaHaspopup', 'ariaLabel', 'ariaLabelledby', 'ariaPressed', 'autofocus', 'color', 'disabled', 'fill', 'full', 'hasIcon', 'icon', 'iconPosition', 'loading', 'size', 'type', 'url'],
})
export class DsButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsClick', 'dsFocus', 'dsBlur']);
  }
}


export declare interface DsButton extends Components.DsButton {
  /**
   * Emitted when the button is clicked
   */
  dsClick: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the button gains focus
   */
  dsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the button loses focus
   */
  dsBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['ariaLabel', 'color', 'icon', 'size']
})
@Component({
  selector: 'ds-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabel', 'color', 'icon', 'size'],
})
export class DsIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsIcon extends Components.DsIcon {}


@ProxyCmp({
  inputs: ['first', 'last', 'middle']
})
@Component({
  selector: 'my-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['first', 'last', 'middle'],
})
export class MyComponent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MyComponent extends Components.MyComponent {}


