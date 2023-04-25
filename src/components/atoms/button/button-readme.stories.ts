import { getStencilDocJson } from '@pxtrn/storybook-addon-docs-stencil';

console.log('GET', getStencilDocJson());
const getDocs = () => {
  return getStencilDocJson()
    .components.find(f => f.tag === 'ds-button')
    .props.map(prop => {
      return { [prop.attr]: getDefaultValue(prop.default, prop.type) };
    });
};

const getDefaultValue = (value, type) => {
  if (value) {
    console.log('value', value, type);
    if (type === 'boolean') {
      return value === 'true';
    } else {
      return value.replaceAll("'", '');
    }
  }
};

export default {
  title: 'Components/Button-pluggin',
  parameters: {
    docs: {
      description: {
        component: 'Soy la **descripción** del componente Button',
      },
    },
  },
  tags: ['autodocs'],
  component: 'ds-button',
  // args: getDocs(),
  args: {
    text: 'Button',
    // color: 'primary',
    // size: 'md',
    // type: 'button',
    // url: '',
    // hasIcon: false,
    // icon: '',
    // iconPosition: 'left',
    // fill: 'solid',
    // full: false,
    // disabled: false,
    // loading: false,
    // autofocus: false,
    // ariaLabel: '',
    // ariaLabelledby: '',
    // ariaDescribedby: '',
    // ariaControls: '',
    // ariaPressed: '',
    // ariaHaspopup: '',
    // ariaExpanded: '',
  },
};

// Basic
const BasicTemplate = args => `<ds-button>${args.text}</ds-button>`;
export const Basic = BasicTemplate.bind({});

// General
// const Template = args => `
//   <ds-button
//     color="${args.color}"
//     size="${args.size}"
//     type="${args.type}"
//     url="${args.url}"
//     hasIcon="${args.hasIcon}"
//     icon="${args.icon}"
//     iconPosition="${args.iconPosition}"
//     fill="${args.fill}"
//     full="${args.full}"
//     disabled="${args.disabled}"
//     loading="${args.loading}"
//     autofocus="${args.autofocus}"
//     ariaLabel="${args.ariaLabel}"
//     ariaLabelledby="${args.ariaLabelledby}"
//     ariaDescribedby="${args.ariaDescribedby}"
//     ariaControls="${args.ariaControls}"
//     ariaPressed="${args.ariaPressed}"
//     ariaHaspopup="${args.ariaHaspopup}"
//     ariaEspanded="${args.ariaEspanded}"
//   >${args.text}
//   </ds-button>`;
// export const General = Template.bind({});

// Template with arguments
const ColorTemplate = args => `
  <div style="display: flex; justify-content: space-evenly;">
    <div>
      <div>Solid</div>
      <ds-button color="primary" fill="solid">${args.text}</ds-button>
    </div>
    <div>
      <div>Outline</div>
      <ds-button color="${args.color}" fill="outline">${args.text}</ds-button>
    </div>
    <div>
      <div>Clear</div>
      <ds-button color="${args.color}" fill="clear">${args.text}</ds-button>
    </div>
  </div>
`;

export const Primary = ColorTemplate.bind({});
Primary.args = {
  color: 'primary',
};

export const Secondary = ColorTemplate.bind({});
Secondary.args = {
  color: 'secondary',
};

export const Tertiary = ColorTemplate.bind({});
Tertiary.args = {
  color: 'tertiary',
};

// Template size
const SizeTemplate = args => `
<div style="display: flex; justify-content: space-evenly;">
  <div>
    <div>Small</div>
    <ds-button size="sm">${args.text}</ds-button>
  </div>
  <div>
    <div>Medium</div>
    <ds-button size="md">${args.text}</ds-button>
  </div>
  <div>
    <div>Large</div>
    <ds-button size="lg">${args.text}</ds-button>
  </div>
</div>
`;

export const Size = SizeTemplate.bind({});
