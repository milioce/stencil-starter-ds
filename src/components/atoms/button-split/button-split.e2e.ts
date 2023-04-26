import { newE2EPage } from '@stencil/core/testing';

describe('ds-button-split', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ds-button-split></ds-button-split>');

    const element = await page.find('ds-button-split');
    expect(element).toHaveClass('hydrated');
  });
});
