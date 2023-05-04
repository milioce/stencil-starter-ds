import { newSpecPage } from '@stencil/core/testing';
import { AtomsInput } from './input';

describe('ds-input', () => {
  it('shloud build', () => {
    expect(new AtomsInput()).toBeTruthy();
  });
  describe('render', () => {
    it('should set default classes and properties', async () => {
      const page = await newSpecPage({
        components: [AtomsInput],
        html: `<ds-input></ds-input>`,
        supportsShadowDom: false,
      });
      const input = page.root.querySelector('input');
      expect(page.root).toMatchClasses(['ds-input', 'ds-input--text', 'ds-input--md']);
      expect(input.getAttribute('type')).toBe('text');
      expect(input.getAttribute('id'));
    });
    it('should set an id when the eid attribute it is defined', async () => {
      const page = await newSpecPage({
        components: [AtomsInput],
        html: `<ds-input eid="1234"></ds-input>`,
        supportsShadowDom: false,
      });
      const input = page.root.querySelector('input');
      expect(input.getAttribute('id')).toBe('1234');
    });
    it('should set an id automatically when the eid attribute it is not defined', async () => {
      const page = await newSpecPage({
        components: [AtomsInput],
        html: `<ds-input></ds-input>`,
        supportsShadowDom: false,
      });
      const input = page.root.querySelector('input');
      expect(input.getAttribute('id')).toBeTruthy();
    });
    it('should set the name property when its defined', async () => {
      const page = await newSpecPage({
        components: [AtomsInput],
        html: `<ds-input name="test"></ds-input>`,
        supportsShadowDom: false,
      });
      const input = page.root.querySelector('input');
      expect(input.getAttribute('name')).toBe('test');
    });
    it('should display label tag when label input it is defined', async () => {
      const page = await newSpecPage({
        components: [AtomsInput],
        html: `<ds-input eid="1234" label="label-text"></ds-input>`,
        supportsShadowDom: false,
      });
      const label = page.root.querySelector('label');
      expect(label).toBeTruthy();
      expect(label).toEqualText('label-text');
      expect(label.getAttribute('htmlFor')).toBe('1234');
    });
    it('should not display label tag when label input it is not defined', async () => {
      const page = await newSpecPage({
        components: [AtomsInput],
        html: `<ds-input></ds-input>`,
        supportsShadowDom: false,
      });
      const label = page.root.querySelector('label');
      expect(label).toBeFalsy();
    });
    it('should set the label position inline class when label is defined and the labelPosition is not', async () => {
      const page = await newSpecPage({
        components: [AtomsInput],
        html: `<ds-input label="label-text"></ds-input>`,
        supportsShadowDom: false,
      });
      expect(page.root).toHaveClass('ds-input__label-inline');
    });
    it('should set the label position stack class when label is defined and the labelPosition is stack', async () => {
      const page = await newSpecPage({
        components: [AtomsInput],
        html: `<ds-input label="label-text" label-position="stack"></ds-input>`,
        supportsShadowDom: false,
      });
      expect(page.root).toHaveClass('ds-input__label-stack');
    });
    it('should set the class and the type text on the input element when type is text', async () => {
      const page = await newSpecPage({
        components: [AtomsInput],
        html: `<ds-input type="text"></ds-input>`,
        supportsShadowDom: false,
      });
      const input = page.root.querySelector('input');
      expect(input.getAttribute('type')).toBe('text');
      expect(page.root).toHaveClass('ds-input--text');
    });
    it('should set the class and the type password on the input element when type is password', async () => {
      const page = await newSpecPage({
        components: [AtomsInput],
        html: `<ds-input type="password"></ds-input>`,
        supportsShadowDom: false,
      });
      const input = page.root.querySelector('input');
      expect(input.getAttribute('type')).toBe('password');
      expect(page.root).toHaveClass('ds-input--password');
    });
    it('should set the class and the type email on the input element when type is email', async () => {
      const page = await newSpecPage({
        components: [AtomsInput],
        html: `<ds-input type="email"></ds-input>`,
        supportsShadowDom: false,
      });
      const input = page.root.querySelector('input');
      expect(input.getAttribute('type')).toBe('email');
      expect(page.root).toHaveClass('ds-input--email');
    });
    it('should set the class and the type search on the input element when type is search', async () => {
      const page = await newSpecPage({
        components: [AtomsInput],
        html: `<ds-input type="search"></ds-input>`,
        supportsShadowDom: false,
      });
      const input = page.root.querySelector('input');
      expect(input.getAttribute('type')).toBe('search');
      expect(page.root).toHaveClass('ds-input--search');
    });
    it('should set the class and the type url on the input element when type is url', async () => {
      const page = await newSpecPage({
        components: [AtomsInput],
        html: `<ds-input type="url"></ds-input>`,
        supportsShadowDom: false,
      });
      const input = page.root.querySelector('input');
      expect(input.getAttribute('type')).toBe('url');
      expect(page.root).toHaveClass('ds-input--url');
    });
    it('should set the class and the type tel on the input element when type is tel', async () => {
      const page = await newSpecPage({
        components: [AtomsInput],
        html: `<ds-input type="tel"></ds-input>`,
        supportsShadowDom: false,
      });
      const input = page.root.querySelector('input');
      expect(input.getAttribute('type')).toBe('tel');
      expect(page.root).toHaveClass('ds-input--tel');
    });
    it('should set the small size class when the size is sm', async () => {
      const page = await newSpecPage({
        components: [AtomsInput],
        html: `<ds-input size="sm"></ds-input>`,
        supportsShadowDom: false,
      });
      expect(page.root).toHaveClass('ds-input--sm');
    });
    it('should set the medium size class when the size is md', async () => {
      const page = await newSpecPage({
        components: [AtomsInput],
        html: `<ds-input size="md"></ds-input>`,
        supportsShadowDom: false,
      });
      expect(page.root).toHaveClass('ds-input--md');
    });
    it('should set the large size class when the size is lg', async () => {
      const page = await newSpecPage({
        components: [AtomsInput],
        html: `<ds-input size="lg"></ds-input>`,
        supportsShadowDom: false,
      });
      expect(page.root).toHaveClass('ds-input--lg');
    });
    it('should set the placeholder when it is defined', async () => {
      const page = await newSpecPage({
        components: [AtomsInput],
        html: `<ds-input placeholder="placeholder-text"></ds-input>`,
        supportsShadowDom: false,
      });
      const input = page.root.querySelector('input');
      expect(input.getAttribute('placeholder')).toBe('placeholder-text');
    });
    it('should set the value and display a clear icon when input have value', async () => {
      const page = await newSpecPage({
        components: [AtomsInput],
        html: `<ds-input value="value-text"></ds-input>`,
        supportsShadowDom: false,
      });
      const input = page.root.querySelector('input');
      const dsButton = page.root.querySelector('ds-button');
      expect(input.getAttribute('value')).toBe('value-text');
      expect(dsButton).toBeTruthy();
    });
    it('should set required and aria-required attributes when required is true', async () => {
      const page = await newSpecPage({
        components: [AtomsInput],
        html: `<ds-input required="true"></ds-input>`,
        supportsShadowDom: false,
      });
      const input = page.root.querySelector('input');
      expect(input).toHaveAttribute('required');
      expect(input).toHaveAttribute('aria-required');
      expect(page.root).toHaveAttribute('required');
    });
    it('should set input--disabled class and disabled on input element attribute when disabled is true', async () => {
      const page = await newSpecPage({
        components: [AtomsInput],
        html: `<ds-input disabled="true"></ds-input>`,
        supportsShadowDom: false,
      });
      const input = page.root.querySelector('input');
      expect(input).toHaveAttribute('disabled');
      expect(input).toHaveClass('input--disabled');
    });
    it('should display a message and set an id when helperMessage is defined', async () => {
      const page = await newSpecPage({
        components: [AtomsInput],
        html: `<ds-input helper-message="helper-message-text"></ds-input>`,
        supportsShadowDom: false,
      });
      const helperMessage = page.root.querySelector('.ds-input__helper-text');
      const input = page.root.querySelector('input');
      expect(helperMessage).toBeTruthy();
      expect(helperMessage.getAttribute('id')).toBe(input.getAttribute('id') + '-hint');
      expect(helperMessage).toEqualText('helper-message-text');
    });
    it('should set input--readonly class and readOnly attribute on input element when readonly is true', async () => {
      const page = await newSpecPage({
        components: [AtomsInput],
        html: `<ds-input readonly="true"></ds-input>`,
        supportsShadowDom: false,
      });
      const input = page.root.querySelector('input');
      expect(input).toHaveAttribute('readonly');
      expect(input).toHaveClass('input--readonly');
      expect(page.root).toHaveAttribute('readonly');
    });
    it('should set ds-input-error class and aria-invalid attribute when hasError is true', async () => {
      const page = await newSpecPage({
        components: [AtomsInput],
        html: `<ds-input has-error="true"></ds-input>`,
        supportsShadowDom: false,
      });
      const input = page.root.querySelector('input');
      expect(page.root).toHaveClass('ds-input--error');
      expect(input).toHaveAttribute('aria-invalid');
    });
  });
  // describe('action', () => {});
});
