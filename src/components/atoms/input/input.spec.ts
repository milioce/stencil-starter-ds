import { newSpecPage } from '@stencil/core/testing';
import { AtomsInput } from './input';
// import { v4 as uuidv4 } from 'uuid';

// jest.mock('uuid', () => ({ v4: () => 'qwerty1234' }));
// jest.mock('uuid/v4');
// jest.mock('@utils/utils');
// import { checkIfUndefined } from '@utils/utils';

describe('ds-input', () => {
  describe('render', () => {
    it('should set default classes and properties', async () => {
      const page = await newSpecPage({
        components: [AtomsInput],
        html: `<ds-input></ds-input`,
        supportsShadowDom: false,
      });
      const input = page.root.querySelector('input');
      expect(page.root).toMatchClasses(['ds-input', 'ds-input--text', 'ds-input--md', 'ds-input__label-inline']);
      expect(input.getAttribute('type')).toBe('text');
    });
    // it('should set an id when the eid attribute it is defined', async () => {
    //   const page = await newSpecPage({
    //     components: [AtomsInput],
    //     html: `<ds-input eid="1234"></ds-input`,
    //     supportsShadowDom: false,
    //   });
    //   const input = page.root.querySelector('input');
    //   expect(input.getAttribute('id')).toBe('1234');
    // });
    // it('should set an id automatically when the eid attribute it is not defined', async () => {
    //   const page = await newSpecPage({
    //     components: [AtomsInput],
    //     html: `<ds-input></ds-input`,
    //     supportsShadowDom: false,
    //   });
    //   const input = page.root.querySelector('input');
    //   uuidv4.mockImplementation(() => 'querty1234');
    //   expect(input.getAttribute('id')).toBeTruthy();
    //   expect(input.getAttribute('id')).toBe('qyuerty1234');
    // });
  });
  // describe('action', () => {});
});
