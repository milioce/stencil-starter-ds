import type { Meta, StoryObj } from '@storybook/html';

type ButtonArgs = {
  color: string;
  fill: string;
  size: string;
};

const meta: Meta<ButtonArgs> = {
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
  render: ({ color }) => `<ds-button color="${color}">Continuar</ds-button>`,
  args: {
    color: 'primary',
  },
};

export const Secondary: Story = {
  render: ({ color }) => `<ds-button color="${color}">Cancelar</ds-button>`,
  args: {
    color: 'secondary',
  },
};

export const Success: Story = {
  render: ({ color }) => `<ds-button color="${color}">Cancelar</ds-button>`,
  args: {
    color: 'success',
  },
};

export const Solid: Story = {
  render: ({ color, fill }) => `<ds-button color="${color}" fill="${fill}">Continuar</ds-button>`,
  args: {
    color: 'primary',
    fill: 'solid',
  },
};

export const Outline: Story = {
  render: ({ color, fill }) => `<ds-button color="${color}" fill="${fill}">Continuar</ds-button>`,
  args: {
    color: 'primary',
    fill: 'outline',
  },
};

export const Clear: Story = {
  render: ({ color, fill }) => `<ds-button color="${color}" fill="${fill}">Continuar</ds-button>`,
  args: {
    color: 'primary',
    fill: 'clear',
  },
};

export const Fill: Story = {
  name: 'All fill states',
  render: args => `
  <div style="display: flex; justify-content: space-evenly;">
    <div>
      <div>Solid</div>
      <ds-button color="${args.color}" fill="solid">Continuar</ds-button>
    </div>
    <div>
      <div>Outline</div>
      <ds-button color="${args.color}" fill="outline">Continuar</ds-button>
    </div>
    <div>
      <div>Clear</div>
      <ds-button color="${args.color}" fill="clear">Continuar</ds-button>
    </div>
  </div>`,
  args: {
    color: 'primary',
  },
};
