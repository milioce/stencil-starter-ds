import { SpecPage, newSpecPage } from '@stencil/core/testing';
import { AtomsButton } from './button';

describe('ds-button', () => {
  describe('render', () => {
    it('should display the passed text', async () => {
      const text = 'Button';
      const page = await newSpecPage({
        components: [AtomsButton],
        html: `<ds-button>${text}</ds-button>`,
      });
      expect(page.root).toEqualText(text);
    });

    it('should set default classes and properties', async () => {
      const page = await newSpecPage({
        components: [AtomsButton],
        html: `<ds-button></ds-button>`,
        supportsShadowDom: false,
      });
      const button = page.root.querySelector('button');
      expect(page.root).toMatchClasses(['ds-button', 'ds-button--primary', 'ds-button--md', 'ds-button--solid']);
      expect(button.getAttribute('type')).toBe('button');
    });

    it('should set the primary color class when color is primary', async () => {
      const page = await newSpecPage({
        components: [AtomsButton],
        html: `<ds-button color="primary"></ds-button>`,
        supportsShadowDom: false,
      });
      expect(page.root).toHaveClass('ds-button--primary');
    });

    it('should set the secondary color class when color is secondary', async () => {
      const page = await newSpecPage({
        components: [AtomsButton],
        html: `<ds-button color="secondary"></ds-button>`,
        supportsShadowDom: false,
      });
      expect(page.root).toHaveClass('ds-button--secondary');
    });

    it('should set the success color class when color is success', async () => {
      const page = await newSpecPage({
        components: [AtomsButton],
        html: `<ds-button color="success"></ds-button>`,
        supportsShadowDom: false,
      });
      expect(page.root).toHaveClass('ds-button--success');
    });

    it('should set the warning color class when color is warning', async () => {
      const page = await newSpecPage({
        components: [AtomsButton],
        html: `<ds-button color="warning"></ds-button>`,
        supportsShadowDom: false,
      });
      expect(page.root).toHaveClass('ds-button--warning');
    });

    it('should set the info color class when color is info', async () => {
      const page = await newSpecPage({
        components: [AtomsButton],
        html: `<ds-button color="info"></ds-button>`,
        supportsShadowDom: false,
      });
      expect(page.root).toHaveClass('ds-button--info');
    });

    it('should set the error color class when color is error', async () => {
      const page = await newSpecPage({
        components: [AtomsButton],
        html: `<ds-button color="error"></ds-button>`,
        supportsShadowDom: false,
      });
      expect(page.root).toHaveClass('ds-button--error');
    });

    it('should set the small size class when size is sm', async () => {
      const page = await newSpecPage({
        components: [AtomsButton],
        html: `<ds-button size="sm"></ds-button>`,
        supportsShadowDom: false,
      });
      expect(page.root).toHaveClass('ds-button--sm');
    });

    it('should set the medium size class when size is md', async () => {
      const page = await newSpecPage({
        components: [AtomsButton],
        html: `<ds-button size="md"></ds-button>`,
        supportsShadowDom: false,
      });
      expect(page.root).toHaveClass('ds-button--md');
    });

    it('should set the large size class when size is lg', async () => {
      const page = await newSpecPage({
        components: [AtomsButton],
        html: `<ds-button size="lg"></ds-button>`,
        supportsShadowDom: false,
      });
      expect(page.root).toHaveClass('ds-button--lg');
    });

    it('should set the type button attribute on the button element when type is button', async () => {
      const page = await newSpecPage({
        components: [AtomsButton],
        html: `<ds-button type="button"></ds-button>`,
        supportsShadowDom: false,
      });
      const button = page.root.querySelector('button');
      expect(button.getAttribute('type')).toBe('button');
    });

    it('should set the type submit attribute on the button element when type is submit', async () => {
      const page = await newSpecPage({
        components: [AtomsButton],
        html: `<ds-button type="submit"></ds-button>`,
        supportsShadowDom: false,
      });
      const button = page.root.querySelector('button');
      expect(button.getAttribute('type')).toBe('submit');
    });

    it('should display an anchor element when type is link', async () => {
      const page = await newSpecPage({
        components: [AtomsButton],
        html: `<ds-button type="link"></ds-button>`,
        supportsShadowDom: false,
      });
      const link = page.root.querySelector('a');
      expect(link).toBeTruthy();
    });

    // it('should display button with an icon in the left side', async () => {
    //   const icon = 'ds_icon_add';
    //   const page = await newSpecPage({
    //     components: [AtomsButton],
    //     html: `<ds-button has-icon="true" icon="${icon}" icon-position="left">Button</ds-button>`,
    //     supportsShadowDom: false,
    //   });
    //   const iconPage = page.root.querySelector('i');
    //   expect(page.root).toHaveClasses(['ds-button--icon', 'ds-button--icon-left']);
    //   expect(iconPage).toHaveClass(`icon-${icon}`);
    // });

    // it('should display button with an icon in the right side', async () => {
    //   const icon = 'ds_icon_add';
    //   const page = await newSpecPage({
    //     components: [AtomsButton],
    //     html: `<ds-button has-icon="true" icon="${icon}" icon-position="right">Button</ds-button>`,
    //     supportsShadowDom: false,
    //   });
    //   const iconPage = page.root.querySelector('i');
    //   expect(page.root).toHaveClasses(['ds-button--icon', 'ds-button--icon-right']);
    //   expect(iconPage).toHaveClass(`icon-${icon}`);
    // });

    // it('should display only icon button', async () => {
    //   const icon = 'ds_icon_add';
    //   const page = await newSpecPage({
    //     components: [AtomsButton],
    //     html: `<ds-button has-icon="true" icon="ds_icon_add" only-icon="true"></ds-button>`,
    //     supportsShadowDom: false,
    //   });
    //   const iconPage = page.root.querySelector('i');
    //   expect(page.root).toHaveClasses(['ds-button--icon', 'ds-button--icon-left', 'ds-button--icon-only']);
    //   expect(iconPage).toHaveClass(`icon-${icon}`);
    //   expect(page.root.textContent).toBe('');
    // });

    it('should set the solid fill class when fill is solid', async () => {
      const page = await newSpecPage({
        components: [AtomsButton],
        html: `<ds-button fill="solid"></ds-button>`,
        supportsShadowDom: false,
      });
      expect(page.root).toHaveClass('ds-button--solid');
    });

    it('should set the outline fill class when fill is outline', async () => {
      const page = await newSpecPage({
        components: [AtomsButton],
        html: `<ds-button fill="outline"></ds-button>`,
        supportsShadowDom: false,
      });
      expect(page.root).toHaveClass('ds-button--outline');
    });

    it('should set the clear fill class when fill is clear', async () => {
      const page = await newSpecPage({
        components: [AtomsButton],
        html: `<ds-button fill="clear"></ds-button>`,
        supportsShadowDom: false,
      });
      expect(page.root).toHaveClass('ds-button--clear');
    });

    // TODO: añade la class pero no agranda el botón
    it('should set the full class when full is true', async () => {
      const page = await newSpecPage({
        components: [AtomsButton],
        html: `<ds-button full="true"></ds-button>`,
        supportsShadowDom: false,
      });
      expect(page.root).toHaveClass('ds-button--full');
    });

    it('should set the disabled attribute and the disabled class on the button element when it is disabled', async () => {
      const page = await newSpecPage({
        components: [AtomsButton],
        html: `<ds-button disabled="true"></ds-button>`,
        supportsShadowDom: false,
      });
      const button = page.root.querySelector('button');
      expect(button).toHaveAttribute('disabled');
      expect(button).toHaveClass('button--disabled');
    });

    it('should set the loading class on the button element when it is loading', async () => {
      const page = await newSpecPage({
        components: [AtomsButton],
        html: `<ds-button loading="true"></ds-button>`,
        supportsShadowDom: false,
      });
      const button = page.root.querySelector('button');
      expect(button).toHaveClass('button--loading');
    });

    it('should set the aria-label attribute when dsAriaLabel is defined', async () => {
      const page = await newSpecPage({
        components: [AtomsButton],
        html: `<ds-button ds-aria-label="aria-label-text"></ds-button>`,
        supportsShadowDom: false,
      });
      const button = page.root.querySelector('button');
      expect(button.getAttribute('aria-label')).toBe('aria-label-text');
    });

    it('should set the aria-labelby attribute when dsAriaLabelledby is defined', async () => {
      const page = await newSpecPage({
        components: [AtomsButton],
        html: `<ds-button ds-aria-labelledby="aria-label-text"></ds-button>`,
        supportsShadowDom: false,
      });
      const button = page.root.querySelector('button');
      expect(button.getAttribute('aria-labelledby')).toBe('aria-label-text');
    });

    it('should set the aria-describedby attribute when dsAriaDescribedby is defined', async () => {
      const page = await newSpecPage({
        components: [AtomsButton],
        html: `<ds-button ds-aria-describedby="aria-label-text"></ds-button>`,
        supportsShadowDom: false,
      });
      const button = page.root.querySelector('button');
      expect(button.getAttribute('aria-describedby')).toBe('aria-label-text');
    });

    it('should set the aria-controls attribute when dsAriaControls is defined', async () => {
      const page = await newSpecPage({
        components: [AtomsButton],
        html: `<ds-button ds-aria-controls="aria-label-text"></ds-button>`,
        supportsShadowDom: false,
      });
      const button = page.root.querySelector('button');
      expect(button.getAttribute('aria-controls')).toBe('aria-label-text');
    });

    it('should set the aria-pressed attribute when dsAriaPressed is defined', async () => {
      const page = await newSpecPage({
        components: [AtomsButton],
        html: `<ds-button ds-aria-pressed="true"></ds-button>`,
        supportsShadowDom: false,
      });
      const button = page.root.querySelector('button');
      expect(button.getAttribute('aria-pressed')).toBe('true');
    });

    it('should set the aria-expanded attribute when dsAriaExpanded is defined', async () => {
      const page = await newSpecPage({
        components: [AtomsButton],
        html: `<ds-button ds-aria-expanded="true"></ds-button>`,
        supportsShadowDom: false,
      });
      const button = page.root.querySelector('button');
      expect(button.getAttribute('aria-expanded')).toBe('true');
    });

    it('should set the aria-haspopup attribute when dsAriaHaspopup is defined', async () => {
      const page = await newSpecPage({
        components: [AtomsButton],
        html: `<ds-button ds-aria-haspopup="true"></ds-button>`,
        supportsShadowDom: false,
      });
      const button = page.root.querySelector('button');
      expect(button.getAttribute('aria-haspopup')).toBe('true');
    });
  });

  describe('action', () => {
    let page: SpecPage;
    let button;

    beforeEach(async () => {
      page = await newSpecPage({
        components: [AtomsButton],
        html: `<ds-button>Click me</ds-button>`,
        supportsShadowDom: false,
      });
      button = page.root.querySelector('button');
    });

    it('should emit the dsClick event when clicked', async () => {
      const dsClick = jest.fn();
      page.root.addEventListener('dsClick', dsClick);
      button.click();
      expect(dsClick).toHaveBeenCalled();
    });

    it('should emit the dsFocus event when focused', async () => {
      const dsFocus = jest.fn();
      page.root.addEventListener('dsFocus', dsFocus);
      button.focus();
      expect(dsFocus).toHaveBeenCalled();
    });

    it('should emit the dsBlur event when blurred', async () => {
      const dsBlur = jest.fn();
      page.root.addEventListener('dsBlur', dsBlur);
      button.focus();
      button.blur();
      expect(dsBlur).toHaveBeenCalled();
    });
  });
});
