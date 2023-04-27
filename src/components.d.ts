/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ButtonColorTypes, ButtonFillTypes, ButtonIconPositionTypes, ButtonTypeTypes } from "./components/atoms/button/button.model";
import { GlobalSizeTypes } from "@shared/model";
export { ButtonColorTypes, ButtonFillTypes, ButtonIconPositionTypes, ButtonTypeTypes } from "./components/atoms/button/button.model";
export { GlobalSizeTypes } from "@shared/model";
export namespace Components {
    interface DsButton {
        /**
          * Whether the button is focused on page load
         */
        "autofocus": boolean;
        /**
          * The variant of the button
         */
        "color": ButtonColorTypes;
        /**
          * The button is disabled
         */
        "disabled": boolean;
        /**
          * The aria-controls attribute for the button
         */
        "dsAriaControls": string;
        /**
          * The aria-describedby attribute for the button
         */
        "dsAriaDescribedby": string;
        /**
          * The aria-expanded attribute for the button
         */
        "dsAriaExpanded": boolean;
        /**
          * The aria-haspopup attribute for the button
         */
        "dsAriaHaspopup": boolean;
        /**
          * The aria-label attribute for the button
         */
        "dsAriaLabel": string;
        /**
          * The aria-labelledby attribute for the button
         */
        "dsAriaLabelledby": string;
        /**
          * The aria-pressed attribute for the button
         */
        "dsAriaPressed": boolean;
        /**
          * The fill of the button (background and border color)
         */
        "fill": ButtonFillTypes;
        /**
          * The button takes up the full width of the container
         */
        "full": boolean;
        /**
          * Whether the button has an icon
         */
        "hasIcon": boolean;
        /**
          * The code of the button's icon (used with hasIcon)
         */
        "icon": string;
        /**
          * The position of the button's icon
         */
        "iconPosition": ButtonIconPositionTypes;
        /**
          * Whether the button shows a loading icon
         */
        "loading": boolean;
        /**
          * Whether the button has an icon
         */
        "onlyIcon": boolean;
        /**
          * The size of the buton
         */
        "size": GlobalSizeTypes;
        /**
          * The type of the button
         */
        "type": ButtonTypeTypes;
        /**
          * The URL of the button (used with type link)
         */
        "url": string;
    }
    interface DsIcon {
        /**
          * The aria-label attribute of the icon
         */
        "ariaLabel": string;
        /**
          * The icon color
         */
        "color": string;
        /**
          * The icon name
         */
        "icon": string;
        /**
          * The size of the icon
         */
        "size": GlobalSizeTypes;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
export interface DsButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDsButtonElement;
}
declare global {
    interface HTMLDsButtonElement extends Components.DsButton, HTMLStencilElement {
    }
    var HTMLDsButtonElement: {
        prototype: HTMLDsButtonElement;
        new (): HTMLDsButtonElement;
    };
    interface HTMLDsIconElement extends Components.DsIcon, HTMLStencilElement {
    }
    var HTMLDsIconElement: {
        prototype: HTMLDsIconElement;
        new (): HTMLDsIconElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "ds-button": HTMLDsButtonElement;
        "ds-icon": HTMLDsIconElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface DsButton {
        /**
          * Whether the button is focused on page load
         */
        "autofocus"?: boolean;
        /**
          * The variant of the button
         */
        "color"?: ButtonColorTypes;
        /**
          * The button is disabled
         */
        "disabled"?: boolean;
        /**
          * The aria-controls attribute for the button
         */
        "dsAriaControls"?: string;
        /**
          * The aria-describedby attribute for the button
         */
        "dsAriaDescribedby"?: string;
        /**
          * The aria-expanded attribute for the button
         */
        "dsAriaExpanded"?: boolean;
        /**
          * The aria-haspopup attribute for the button
         */
        "dsAriaHaspopup"?: boolean;
        /**
          * The aria-label attribute for the button
         */
        "dsAriaLabel"?: string;
        /**
          * The aria-labelledby attribute for the button
         */
        "dsAriaLabelledby"?: string;
        /**
          * The aria-pressed attribute for the button
         */
        "dsAriaPressed"?: boolean;
        /**
          * The fill of the button (background and border color)
         */
        "fill"?: ButtonFillTypes;
        /**
          * The button takes up the full width of the container
         */
        "full"?: boolean;
        /**
          * Whether the button has an icon
         */
        "hasIcon"?: boolean;
        /**
          * The code of the button's icon (used with hasIcon)
         */
        "icon"?: string;
        /**
          * The position of the button's icon
         */
        "iconPosition"?: ButtonIconPositionTypes;
        /**
          * Whether the button shows a loading icon
         */
        "loading"?: boolean;
        /**
          * Emitted when the button loses focus
         */
        "onDsBlur"?: (event: DsButtonCustomEvent<void>) => void;
        /**
          * Emitted when the button is clicked
         */
        "onDsClick"?: (event: DsButtonCustomEvent<void>) => void;
        /**
          * Emitted when the button gains focus
         */
        "onDsFocus"?: (event: DsButtonCustomEvent<void>) => void;
        /**
          * Whether the button has an icon
         */
        "onlyIcon"?: boolean;
        /**
          * The size of the buton
         */
        "size"?: GlobalSizeTypes;
        /**
          * The type of the button
         */
        "type"?: ButtonTypeTypes;
        /**
          * The URL of the button (used with type link)
         */
        "url"?: string;
    }
    interface DsIcon {
        /**
          * The aria-label attribute of the icon
         */
        "ariaLabel"?: string;
        /**
          * The icon color
         */
        "color"?: string;
        /**
          * The icon name
         */
        "icon"?: string;
        /**
          * The size of the icon
         */
        "size"?: GlobalSizeTypes;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "ds-button": DsButton;
        "ds-icon": DsIcon;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ds-button": LocalJSX.DsButton & JSXBase.HTMLAttributes<HTMLDsButtonElement>;
            "ds-icon": LocalJSX.DsIcon & JSXBase.HTMLAttributes<HTMLDsIconElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
