import { newSpecPage } from '@stencil/core/testing';
import { AttomsInput } from '../input/input';

describe('ds-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AttomsInput],
      html: `<ds-input></ds-input>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ds-input>
    `);
  });
});
