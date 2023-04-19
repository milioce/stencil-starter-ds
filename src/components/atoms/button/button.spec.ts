import { newSpecPage } from '@stencil/core/testing';
import { AtomsButton } from './button';

describe('ds-button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AtomsButton],
      html: '<ds-button></ds-button>',
    });
    expect(root).toEqualHtml(`
      <ds-button>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ds-button>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [AtomsButton],
      html: `<ds-button first="Stencil" last="'Don't call me a framework' JS"></ds-button>`,
    });
    expect(root).toEqualHtml(`
      <ds-button first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ds-button>
    `);
  });
});
