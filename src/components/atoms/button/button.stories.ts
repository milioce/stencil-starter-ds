export default {
  // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
  title: 'Components/Button',
  // this is an example of how to add actions to the story
  parameters: {
    actions: {
      argTypesRegex: '^on.*',
      handles: ['click'], // you can add custom events to this array to trigger actions
    },
    docs: {
      description: {
        component: 'Soy la **descripción** del componente Button',
      },
    },
    // backgrounds: {
    //   values: [
    //     { name: 'red', value: '#f00' },
    //     { name: 'green', value: '#0f0' },
    //     { name: 'blue', value: '#00f' },
    //   ],
    // },
  },
  // Enables auto-generated documentation for the component story
  tags: ['autodocs'],
  args: {
    color: 'primary',
    size: 'md',
    type: 'button',
    url: '',
    hasIcon: false,
    icon: '',
    iconPosition: 'left',
    outlined: false,
    full: false,
    disabled: false,
    loading: false,
    autofocus: false,
    dsClick: null,
    dsFocus: null,
    dsBlur: null,
  },
  argTypes: {
    // Properties
    color: {
      description: 'The variant of the button. Accepted parameters: *primary* | *secondary* | *tertiary*. <br> *`string`*',
      type: { name: 'string' },
      table: { category: 'Properties', defaultValue: { summary: 'primary' } },
    },
    size: {
      description: 'The size of the button. Acepted parameters: *lg* | *md* | *sm*. <br> *`string`*',
      table: { category: 'Properties', defaultValue: { summary: 'md' } },
    },
    type: {
      description: 'The type of the button. Acepted parameters: *button* | *submit* | *link*. <br> *`string`*',
      table: { category: 'Properties', defaultValue: { summary: 'button' } },
    },
    url: {
      description: 'The URL of the button (used with type link). <br> *`string`*',
      table: { category: 'Properties' },
    },
    hasIcon: {
      description: 'Whether the button has an icon. <br> *`boolean`*',
      table: { category: 'Properties', defaultValue: { summary: 'false' } },
    },
    icon: {
      description: "The code of the button's icon (used with hasIcon). <br> *`string`*",
      table: { category: 'Properties' },
    },
    iconPosition: {
      description: "The position of the button's icon. Acepted parameters: *left* | *right*. <br> *`string`*",
      table: { category: 'Properties', defaultValue: { summary: 'left' } },
    },
    outlined: {
      description: 'Whether the button is outlined (only border, no background). <br> *`boolean`*',
      table: { category: 'Properties', defaultValue: { summary: 'false' } },
    },
    full: {
      description: 'Whether the button takes up the full width of the container. <br> *`boolean`*',
      table: { category: 'Properties', defaultValue: { summary: 'false' } },
    },
    disabled: {
      description: 'Whether the button is disabled. <br> *`boolean`*',
      table: { category: 'Properties', defaultValue: { summary: 'false' } },
    },
    loading: {
      description: 'Whether the button shows a loading icon. <br> *`boolean`*',
      table: { category: 'Properties', defaultValue: { summary: 'false' } },
    },
    autofocus: {
      description: 'Whether the button is focused on page load. <br> *`boolean`*',
      table: { category: 'Properties', defaultValue: { summary: 'false' } },
    },
    // Events
    dsClick: {
      description: 'Emitted when the button is clicked. <br> *`CustomEvent`*',
      table: { category: 'Events' },
    },
    dsFocus: {
      description: 'Emitted when the button gains focus. <br> *`CustomEvent`*',
      table: { category: 'Events' },
    },
    dsBlur: {
      description: 'Emitted when the button loses focus. <br> *`CustomEvent`*',
      table: { category: 'Events' },
    },
  },
};

const Template = args => `<ds-button color="${args.color}" size="${args.size}">Click me</ds-button>`;

export const Primary = Template.bind({});
// Example.args = {
// first: 'Winnie',
// middle: 'The',
// last: 'Poo'
// };
//   Example.argTypes = {
//     first: {
//       description: 'hola soy la descripción **string**',
//       type: { required: true },
//       table: { defaultValue: { summary: 'defaultValue'} }
//     }
//   }
//   Example.parameters = {
//     backgrounds: {
//       values: [
//         { name: 'red', value: '#f00' },
//         { name: 'green', value: '#0f0' },
//         { name: 'blue', value: '#00f' },
//       ],
//     },
//   }

//   export const Example2 = Template.bind({});
//   Example2.args = {
//     last: 'Patata'
//   }
//   Example2.parameters = {
//     layout: 'centered'
//   }
