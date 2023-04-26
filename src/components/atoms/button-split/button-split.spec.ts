import { newSpecPage } from '@stencil/core/testing';
import { AtomsButtonSplit } from '../button-split/button-split';

describe('ds-button-split', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AtomsButtonSplit],
      html: `<ds-button-split></ds-button-split>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-button-split>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ds-button-split>
    `);
  });
});
