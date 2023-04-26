import type { Meta, StoryObj } from '@storybook/html';

type ButtonArgs = {
  color: string;
};

const meta: Meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/html/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Atoms/Button',
  component: 'ds-button',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<ButtonArgs>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/html/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => `<ds-button color="primary">Continuar</ds-button>`,
};

export const Secondary: Story = {
  render: () => `<ds-button color="secondary">Cancelar</ds-button>`,
};

export const Tertiary: Story = {
  render: () => `<ds-button color="tertiary">Cancelar</ds-button>`,
};

export const Outline: Story = {
  name: 'Primary outline',
  render: () => `<ds-button color="primary" fill="outline">Continuar</ds-button>`,
};

export const Clear: Story = {
  name: 'Secondary clear',
  render: () => `<ds-button color="secondary" fill="clear">Continuar</ds-button>`,
};
