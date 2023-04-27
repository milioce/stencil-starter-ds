import type { Meta, StoryObj } from '@storybook/html';

type ButtonArgs = {
  color: string;
  fill: string;
  size: string;
  type: string;
  disabled: boolean;
  loading: boolean;
  autofocus: string;
  full: string;
  hasIcon: boolean;
  icon: string;
  iconPosition: string;
  onlyIcon: boolean;
  url: string;
  dsAriaControls: string;
  dsAriaDescribedby: string;
  dsAriaExpanded: string;
  dsAriaLabel: string;
  dsAriaLabelledby: string;
  dsAriaPressed: string;
};

const allArgs = [
  'color',
  'fill',
  'size',
  'type',
  'disabled',
  'loading',
  'autofocus',
  'full',
  'has-icon',
  'icon',
  'icon-position',
  'only-icon',
  'url',
  'ds-aria-controls',
  'ds-aria-describedby',
  'ds-aria-expanded',
  'ds-aria-label',
  'ds-aria-labelledby',
  'ds-aria-pressed',
  'ds-aria-haspopup',
];

const setControls = (activeControls: string[] = []) => {
  const controlsToDisable = allArgs.filter(f => !activeControls.includes(f));
  const disabledControls = {};
  // const at = controlsToDisable.reduce((a, v) => ({ ...a, [v]: { control: { type: null } } }), {});
  controlsToDisable.forEach(item => (disabledControls[item] = { control: { type: null } }));
  return disabledControls;
};

const meta: Meta<ButtonArgs> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/html/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Atoms/Button',
  parameters: {
    docs: {
      description: {
        component: 'Soy la **descripción** del componente Button',
      },
    },
  },
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

export const Default: Story = {
  render: () => `<ds-button>Continuar</ds-button>`,
  argTypes: setControls(),
};

export const Primary: Story = {
  render: ({ type }) => `<ds-button color="primary" type="${type}">Continuar</ds-button>`,
  args: {
    type: 'button',
  },
  argTypes: setControls(['type']),
};

export const Secondary: Story = {
  render: ({ type }) => `<ds-button color="secondary" type="${type}">Continuar</ds-button>`,
  args: {
    type: 'button',
  },
  argTypes: setControls(['type']),
};

export const Success: Story = {
  render: ({ type }) => `<ds-button color="success" type="${type}">Continuar</ds-button>`,
  args: {
    type: 'button',
  },
  argTypes: setControls(['type']),
};

export const Error: Story = {
  render: ({ type }) => `<ds-button color="error" type="${type}">Continuar</ds-button>`,
  args: {
    type: 'button',
  },
  argTypes: setControls(['type']),
};

export const Warning: Story = {
  render: ({ type }) => `<ds-button color="warning" type="${type}">Continuar</ds-button>`,
  args: {
    type: 'button',
  },
  argTypes: setControls(['type']),
};

export const Info: Story = {
  render: ({ type }) => `<ds-button color="info" type="${type}">Continuar</ds-button>`,
  args: {
    type: 'button',
  },
  argTypes: setControls(['type']),
};

// export const Solid: Story = {
//   render: ({ color, type }) => `<ds-button color="${color}" fill="solid" type="${type}">Continuar</ds-button>`,
//   args: {
//     color: 'primary',
//     type: 'button',
//   },
//   argTypes: setControls(['color', 'type']),
// };

// export const Outline: Story = {
//   render: ({ color, type }) => `<ds-button color="${color}" fill="outline" type="${type}">Continuar</ds-button>`,
//   args: {
//     color: 'primary',
//     type: 'button',
//   },
//   argTypes: setControls(['color', 'type']),
// };

// export const Clear: Story = {
//   render: ({ color, type }) => `<ds-button color="${color}" fill="clear" type="${type}">Continuar</ds-button>`,
//   args: {
//     color: 'primary',
//     type: 'button',
//   },
//   argTypes: setControls(['color', 'type']),
// };

export const Fill: Story = {
  name: 'All fill states',
  render: ({ color, type }) => `
  <div style="display: flex; justify-content: space-evenly;">
    <div>
      <div>Solid</div>
      <ds-button color="${color}" fill="solid" type="${type}">Continuar</ds-button>
    </div>
    <div>
      <div>Outline</div>
      <ds-button color="${color}" fill="outline" type="${type}">Continuar</ds-button>
    </div>
    <div>
      <div>Clear</div>
      <ds-button color="${color}" fill="clear" type="${type}">Continuar</ds-button>
    </div>
  </div>`,
  args: {
    color: 'primary',
    type: 'button',
  },
  argTypes: setControls(['color', 'type']),
};

export const Sizes: Story = {
  render: ({ color, type }) => `
  <div style="display: flex; justify-content: space-evenly;">
    <div>
      <div>Small</div>
      <ds-button color="${color}" size="sm" type="${type}">Continuar</ds-button>
    </div>
    <div>
      <div>Medium</div>
      <ds-button color="${color}" size="md" type="${type}">Continuar</ds-button>
    </div>
    <div>
      <div>Large</div>
      <ds-button color="${color}" size="lg" type="${type}">Continuar</ds-button>
    </div>
  </div>
  `,
  args: {
    color: 'primary',
    type: 'button',
  },
  argTypes: setControls(['color', 'type']),
};

export const Disabled: Story = {
  render: ({ color, disabled, type }) => `
  <div style="display: flex; justify-content: space-evenly;">
    <div>
      <div>Solid</div>
      <ds-button color="${color}" fill="solid" disabled="${disabled}" type="${type}">Continuar</ds-button>
    </div>
    <div>
      <div>Outline</div>
      <ds-button color="${color}" fill="outline" disabled="${disabled}" type="${type}">Continuar</ds-button>
    </div>
    <div>
      <div>Clear</div>
      <ds-button color="${color}" fill="clear" disabled="${disabled}" type="${type}">Continuar</ds-button>
    </div>
  </div>
  `,
  args: {
    color: 'primary',
    disabled: true,
    type: 'button',
  },
  argTypes: setControls(['color', 'disabled', 'type']),
};

export const Link: Story = {
  render: ({ color }) => `<ds-button color="${color}" type="link">Continuar</ds-button>`,
  args: {
    color: 'primary',
  },
  argTypes: setControls(['color']),
};

export const Loading: Story = {
  render: ({ color, loading, type }) => `<ds-button color="${color}" loading="${loading}" type="${type}">Continuar</ds-button>`,
  args: {
    color: 'primary',
    loading: true,
    type: 'button',
  },
  argTypes: setControls(['color', 'loading', 'type']),
};
